-- PostgreSQL Schema for MANKHE MRV + ERP System

-- 1. MASTER TABLES
CREATE TABLE plants (
    plant_id VARCHAR(50) PRIMARY KEY,
    plant_name VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    district VARCHAR(50) NOT NULL,
    village VARCHAR(50) NOT NULL,
    gps_location VARCHAR(100),
    plant_type VARCHAR(20) CHECK (plant_type IN ('stationary', 'mobile')),
    capacity_tons_per_day DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE biomass_sources (
    source_id VARCHAR(50) PRIMARY KEY,
    source_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL, -- e.g., rice husk, straw
    origin VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE farmers (
    farmer_id VARCHAR(50) PRIMARY KEY,
    farmer_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    village VARCHAR(50),
    land_area_hectares DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE machines (
    machine_id VARCHAR(50) PRIMARY KEY,
    plant_id VARCHAR(50) REFERENCES plants(plant_id),
    machine_name VARCHAR(100) NOT NULL,
    type VARCHAR(50),
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. MODULE 1: BIOMASS INTAKE (WEIGHBRIDGE)
CREATE TABLE biomass_batches (
    bb_id VARCHAR(50) PRIMARY KEY, -- Auto-generated BB-XXX
    plant_id VARCHAR(50) REFERENCES plants(plant_id),
    source_id VARCHAR(50) REFERENCES biomass_sources(source_id),
    truck_number VARCHAR(20) NOT NULL,
    gross_weight DECIMAL(10,2) NOT NULL,
    tare_weight DECIMAL(10,2) NOT NULL,
    net_weight DECIMAL(10,2) GENERATED ALWAYS AS (gross_weight - tare_weight) STORED,
    impurity_plastic_percent DECIMAL(5,2) DEFAULT 0,
    impurity_metal_percent DECIMAL(5,2) DEFAULT 0,
    impurity_other_percent DECIMAL(5,2) DEFAULT 0,
    is_eligible BOOLEAN DEFAULT TRUE, -- Compliance flag
    photo_url TEXT,
    status VARCHAR(20) DEFAULT 'Available', -- 'Available', 'Consumed'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. MODULE 2: PRODUCTION (DAY-WISE BATCH)
CREATE TABLE production_batches (
    bc_id VARCHAR(50) PRIMARY KEY, -- Auto-generated BC-XXX
    plant_id VARCHAR(50) REFERENCES plants(plant_id),
    machine_id VARCHAR(50) REFERENCES machines(machine_id),
    production_date DATE NOT NULL,
    feedstock_type VARCHAR(50),
    temperature_range VARCHAR(50),
    total_input DECIMAL(10,2) DEFAULT 0,
    total_output DECIMAL(10,2) DEFAULT 0,
    total_dispatched DECIMAL(10,2) DEFAULT 0,
    remaining_stock DECIMAL(10,2) DEFAULT 0,
    status VARCHAR(20) DEFAULT 'Open', -- 'Open', 'Closed'
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(plant_id, production_date, machine_id) -- 1 batch per machine per day
);

-- Link Biomass Batches to Production Batches
CREATE TABLE production_batch_inputs (
    id VARCHAR(100) PRIMARY KEY,
    bc_id VARCHAR(50) REFERENCES production_batches(bc_id),
    bb_id VARCHAR(50) REFERENCES biomass_batches(bb_id),
    quantity_used DECIMAL(10,2) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3.5 MODULE: LOT-BASED BAGGING SYSTEM
CREATE TABLE biochar_lots (
    lot_id VARCHAR(50) PRIMARY KEY, -- Auto-generated LOT-XXX
    bc_id VARCHAR(50) REFERENCES production_batches(bc_id),
    plant_id VARCHAR(50) REFERENCES plants(plant_id),
    number_of_bags INT NOT NULL,
    total_weight DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'Available', -- 'Available', 'Dispatched', 'Applied'
    dispatch_id VARCHAR(50), -- Nullable, linked when dispatched
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. MODULE 3 & 4: STORAGE & DISPATCH
CREATE TABLE dispatches (
    dispatch_id VARCHAR(50) PRIMARY KEY,
    plant_id VARCHAR(50) REFERENCES plants(plant_id),
    total_quantity DECIMAL(10,2) NOT NULL,
    destination_type VARCHAR(20) CHECK (destination_type IN ('farmer', 'dealer', 'storage')),
    destination_id VARCHAR(50), -- Could be farmer_id or dealer_id
    truck_number VARCHAR(50),
    distance_km DECIMAL(10,2),
    emission_kg DECIMAL(10,2),
    dispatch_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dispatch_lot_inputs (
    id VARCHAR(100) PRIMARY KEY,
    dispatch_id VARCHAR(50) REFERENCES dispatches(dispatch_id),
    lot_id VARCHAR(50) REFERENCES biochar_lots(lot_id),
    quantity DECIMAL(10,2)
);

-- 4.5 MODULE: POLYGON (LAND PARCEL SYSTEM)
CREATE TABLE land_polygons (
    polygon_id VARCHAR(50) PRIMARY KEY,
    farmer_id VARCHAR(50) REFERENCES farmers(farmer_id),
    geojson TEXT NOT NULL, -- Polygon coordinates
    area_hectares DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. MODULE 5: FIELD APPLICATION (MRV)
CREATE TABLE application_records (
    application_id VARCHAR(50) PRIMARY KEY,
    lot_id VARCHAR(50) REFERENCES biochar_lots(lot_id),
    farmer_id VARCHAR(50) REFERENCES farmers(farmer_id),
    plant_id VARCHAR(50) REFERENCES plants(plant_id),
    geo_location VARCHAR(100) NOT NULL, -- lat/lng
    polygon_id VARCHAR(50) REFERENCES land_polygons(polygon_id),
    quantity_applied DECIMAL(10,2) NOT NULL,
    photo_url TEXT,
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'verified', 'finalized'
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. MODULE 6: TRANSPORT & EMISSIONS
CREATE TABLE transport_logs (
    tr_id VARCHAR(50) PRIMARY KEY, -- Auto-generated TR-XXX
    plant_id VARCHAR(50) REFERENCES plants(plant_id),
    reference_id VARCHAR(50), -- Can link to bb_id (intake) or dispatch_id (outbound)
    truck_number VARCHAR(20) NOT NULL,
    source_location VARCHAR(100) NOT NULL,
    destination_location VARCHAR(100) NOT NULL,
    distance_km DECIMAL(10,2) NOT NULL,
    quantity_tons DECIMAL(10,2) NOT NULL,
    emission_kg DECIMAL(10,2) GENERATED ALWAYS AS (distance_km * quantity_tons * 0.12) STORED,
    transport_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
