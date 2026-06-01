import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Database, 
  Activity, 
  ArrowDown, 
  Leaf, 
  Flame, 
  Droplets, 
  Microscope, 
  CheckCircle2, 
  AlertCircle,
  Satellite,
  MapPin,
  QrCode,
  Scale,
  Table as TableIcon,
  BarChart3
} from 'lucide-react';
import ProtocolIntro from '../components/ProtocolIntro';
import SEO from '../components/SEO';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: "easeOut" } as any
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Protocol() {
  return (
    <div className="bg-mankhe-charcoal text-stone-200 min-h-screen selection:bg-mankhe-gold selection:text-black">
      <SEO 
        title="Methodology | The MANKHE Protocol"
        description="Our scientific approach to carbon removal. Using high-tech biochar production and decentralized MRV to restore soil health and sequester carbon."
        canonical="https://mankhe.com/the-protocol"
      />
      
      {/* HERO IMAGE AT THE TOP OF THE PAGE */}
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-sm overflow-hidden border-4 border-stone-800 shadow-2xl aspect-[21/9]"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1Cp5ABYcTjr0gZk38PF-OF79uST_Mr2jf" 
            alt="MANKHE Protocol Hero" 
            className="w-full h-full object-cover transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* CHAPTER I: THE INTELLIGENCE LAYER (HERO & DATA GRID) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Satellite Data" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mankhe-charcoal/60 via-transparent to-mankhe-charcoal" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-20">
          <motion.div {...fadeInUp}>
            <span className="text-mankhe-gold font-sans text-xs uppercase tracking-[0.6em] block mb-8">Chapter I</span>
            <h1 className="text-6xl md:text-[8rem] font-serif font-black leading-[0.8] tracking-tighter mb-12">
              The <br />
              <span className="italic text-mankhe-gold">Intelligence</span> <br />
              Layer.
            </h1>
            <p className="text-xl md:text-3xl font-serif italic text-white max-w-3xl mx-auto leading-tight">
              We don't guess where to work. We analyze.
            </p>
          </motion.div>
        </div>

        {/* DATA PANEL */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <motion.div 
            {...fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-stone-800 border border-stone-800 shadow-2xl"
          >
            <div className="lg:col-span-7 bg-stone-900 p-10 md:p-16 space-y-8">
              <div className="flex items-center gap-4 text-mankhe-gold">
                <Satellite className="w-6 h-6" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Priority Village Database</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Targeting the <br />
                <span className="italic text-mankhe-gold">Lowest SOC.</span>
              </h2>
              <p className="text-stone-400 font-sans font-light leading-relaxed text-lg">
                MANKHE collaborates with farmers and the state government to analyze soil data at scale. 
                We cross-check ground samples with high-resolution satellite data and SoilGrid global models. 
                This allows us to build a "Priority Village Database"—targeting areas where Soil Organic Carbon (SOC) 
                is at its most critical levels. We calculate the exact biochar tonnage required per farm 
                before operations even begin.
              </p>
            </div>
            <div className="lg:col-span-5 bg-stone-950 p-10 md:p-16 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Data Source</span>
                  <span className="text-xs font-mono text-white">SoilGrid / Sentinel-2</span>
                </div>
                <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Target SOC</span>
                  <span className="text-xs font-mono text-mankhe-gold">0.4% → 2.0%</span>
                </div>
                <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Resolution</span>
                  <span className="text-xs font-mono text-white">10m Ground Sample</span>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-stone-800">
                <div className="flex items-center gap-4">
                  <BarChart3 className="text-mankhe-gold w-8 h-8" />
                  <span className="text-sm font-sans font-light text-stone-400 italic">
                    "Predictive modeling ensures maximum sequestration efficiency."
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHAPTER II: THE CLOSED-LOOP PROTOCOL (STORYBOARD) */}
      <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <motion.div {...fadeInUp} className="mb-24">
          <span className="text-mankhe-gold font-sans text-xs uppercase tracking-[0.6em] block mb-4">Chapter II</span>
          <h2 className="text-5xl md:text-8xl font-serif font-black mb-8">The <span className="italic text-mankhe-gold">Closed-Loop</span> Protocol.</h2>
          <div className="h-px w-32 bg-mankhe-gold" />
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {/* PANEL 1: FEEDSTOCK SOURCING */}
          <motion.div variants={fadeInUp} className="group relative flex flex-col border-4 border-stone-800 bg-stone-900/50 overflow-hidden">
            <div className="aspect-[4/5] bg-stone-800 relative overflow-hidden border-b-4 border-stone-800">
              <img 
                src="https://lh3.googleusercontent.com/d/1KtQ_yYD6TGYr57b5wGHt1o2bxXOmMQ44" 
                alt="Feedstock Sourcing" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-mankhe-gold text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">Panel 01</span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-serif font-bold italic">Precision Sourcing</h3>
              <p className="text-stone-400 font-sans font-light text-sm leading-relaxed">
                Collecting agricultural waste (rice husk, rice straw) directly from partner farmers. 
                We intercept the waste at the source, preventing open-field burning.
              </p>
              <div className="pt-4 flex items-center gap-2 text-[10px] font-mono text-stone-600 uppercase">
                <MapPin size={12} className="text-mankhe-gold" />
                <span>Source: Partner Farms</span>
              </div>
            </div>
          </motion.div>

          {/* PANEL 2: PLANT INTAKE */}
          <motion.div variants={fadeInUp} className="group relative flex flex-col border-4 border-stone-800 bg-stone-900/50 overflow-hidden">
            <div className="aspect-[4/5] bg-stone-800 relative overflow-hidden border-b-4 border-stone-800">
              <img 
                src="https://lh3.googleusercontent.com/d/1aCM8arSak9zPMF6ZKOqY_XtB3qNVYu2G" 
                alt="Plant Intake" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-mankhe-clay text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">Panel 02</span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-serif font-bold italic">Intake & Analytics</h3>
              <p className="text-stone-400 font-sans font-light text-sm leading-relaxed">
                Biomass arrives at the MANKHE plant. We log strict MRV metrics: source location, 
                feedstock type, moisture content, and exact weight via industrial scales.
              </p>
              <div className="pt-4 flex items-center gap-2 text-[10px] font-mono text-stone-600 uppercase">
                <Scale size={12} className="text-mankhe-clay" />
                <span>MRV: Weight / Moisture</span>
              </div>
            </div>
          </motion.div>

          {/* PANEL 3: PYROLYSIS */}
          <motion.div variants={fadeInUp} className="group relative flex flex-col border-4 border-stone-800 bg-stone-900/50 overflow-hidden">
            <div className="aspect-[4/5] bg-stone-800 relative overflow-hidden border-b-4 border-stone-800">
              <img 
                src="https://lh3.googleusercontent.com/d/1jPG6a6r19dXTjGQZn31k8wln_DML_INQ" 
                alt="Pyrolysis" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-white text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">Panel 03</span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-serif font-bold italic">Digital Tagging</h3>
              <p className="text-stone-400 font-sans font-light text-sm leading-relaxed">
                High-quality conversion into biochar. Every single batch generated receives a 
                Unique Batch ID and a QR Code for absolute traceability throughout its lifecycle.
              </p>
              <div className="pt-4 flex items-center gap-2 text-[10px] font-mono text-stone-600 uppercase">
                <QrCode size={12} className="text-white" />
                <span>ID: Unique_Batch_Hash</span>
              </div>
            </div>
          </motion.div>

          {/* PANEL 4: GEOTAGGED APPLICATION */}
          <motion.div variants={fadeInUp} className="group relative flex flex-col border-4 border-stone-800 bg-stone-900/50 overflow-hidden">
            <div className="aspect-[4/5] bg-stone-800 relative overflow-hidden border-b-4 border-stone-800">
              <img 
                src="https://lh3.googleusercontent.com/d/1v8uOBOzA5oJobVRDWgMX3FoKa9T8NJeW" 
                alt="Geotagged Application" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-mankhe-leaf text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">Panel 04</span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-serif font-bold italic">Geotagged Loop</h3>
              <p className="text-stone-400 font-sans font-light text-sm leading-relaxed">
                Biochar is returned to the specific farmers. Application happens on geotagged farms, 
                verifying the exact location of the carbon sink and closing the loop.
              </p>
              <div className="pt-4 flex items-center gap-2 text-[10px] font-mono text-stone-600 uppercase">
                <CheckCircle2 size={12} className="text-mankhe-leaf" />
                <span>Status: Loop_Closed</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CHAPTER III: TRANSPARENT MRV (THE IMMUTABILITY LEDGER) */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <span className="text-stone-500 font-sans text-xs uppercase tracking-[0.6em] block mb-4">Chapter III</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black mb-8">Transparent <span className="italic text-mankhe-gold">MRV.</span></h2>
            <p className="text-stone-400 font-sans font-light max-w-2xl leading-relaxed text-lg">
              Our rigorous, rule-based tracking is how we align with top global biochar standards 
              for Additionality, Permanence, and Traceability. No guesswork. Only data.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-stone-900 border-4 border-stone-800 rounded-sm overflow-hidden shadow-2xl">
            {/* LEDGER HEADER */}
            <div className="bg-stone-800 p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-b-4 border-stone-800">
              <div className="flex items-center gap-4">
                <TableIcon className="text-mankhe-gold w-5 h-5" />
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-[0.3em]">Operational_Ledger // Real_Time_Sync</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-stone-500" />
                  <span className="text-[10px] font-mono text-stone-500 uppercase">Registry: ICR_v2.0</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-mankhe-gold" />
                  <span className="text-[10px] font-mono text-stone-500 uppercase">Audit: Deterministic</span>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-800 bg-stone-950/30">
                    <th className="p-6 text-[10px] font-mono text-stone-500 uppercase tracking-widest">Geotagged Farm ID</th>
                    <th className="p-6 text-[10px] font-mono text-stone-500 uppercase tracking-widest">Pre-op SOC %</th>
                    <th className="p-6 text-[10px] font-mono text-stone-500 uppercase tracking-widest">Biomass (MT/%)</th>
                    <th className="p-6 text-[10px] font-mono text-stone-500 uppercase tracking-widest">Biochar Batch ID</th>
                    <th className="p-6 text-[10px] font-mono text-stone-500 uppercase tracking-widest">Carbon Locked</th>
                  </tr>
                </thead>
                <tbody className="text-stone-300 font-mono text-xs">
                  <tr className="border-b border-stone-800 hover:bg-stone-800/30 transition-colors">
                    <td className="p-6">DHM-VIL-042-F01</td>
                    <td className="p-6 text-mankhe-clay">0.42%</td>
                    <td className="p-6">12.4 MT / 18%</td>
                    <td className="p-6 text-mankhe-gold">#MK-RH-042-A</td>
                    <td className="p-6 text-white font-bold">3.1 tCO2e</td>
                  </tr>
                  <tr className="border-b border-stone-800 hover:bg-stone-800/30 transition-colors">
                    <td className="p-6">DHM-VIL-042-F02</td>
                    <td className="p-6 text-mankhe-clay">0.38%</td>
                    <td className="p-6">8.2 MT / 16%</td>
                    <td className="p-6 text-mankhe-gold">#MK-RH-042-B</td>
                    <td className="p-6 text-white font-bold">2.0 tCO2e</td>
                  </tr>
                  <tr className="border-b border-stone-800 hover:bg-stone-800/30 transition-colors">
                    <td className="p-6">DHM-VIL-015-F12</td>
                    <td className="p-6 text-mankhe-clay">0.45%</td>
                    <td className="p-6">15.1 MT / 19%</td>
                    <td className="p-6 text-mankhe-gold">#MK-RS-015-C</td>
                    <td className="p-6 text-white font-bold">3.8 tCO2e</td>
                  </tr>
                  <tr className="hover:bg-stone-800/30 transition-colors">
                    <td className="p-6">DHM-VIL-089-F05</td>
                    <td className="p-6 text-mankhe-clay">0.41%</td>
                    <td className="p-6">10.8 MT / 17%</td>
                    <td className="p-6 text-mankhe-gold">#MK-RH-089-A</td>
                    <td className="p-6 text-white font-bold">2.7 tCO2e</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-stone-950 p-6 border-t-4 border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <AlertCircle className="w-4 h-4 text-stone-600" />
                <span className="text-[10px] font-mono text-stone-600 uppercase tracking-widest">
                  Hash_Verification: 0x7f3e...a9b2 // Rule_Based_Logging_Active
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-stone-500 uppercase">Total Sequestration:</span>
                <span className="text-xl font-serif font-bold text-white">1,240.5 MT CO₂e</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ProtocolIntro />

      {/* FINAL CALL TO ACTION */}
      <motion.section {...fadeInUp} className="py-48 text-center px-6 border-t border-stone-800">
        <h2 className="text-4xl md:text-7xl font-serif font-black mb-12">
          The Future is <span className="text-mankhe-gold italic">Data-Driven.</span>
        </h2>
        <button className="px-12 py-5 bg-mankhe-gold text-black font-sans font-bold uppercase tracking-[0.3em] hover:bg-white transition-colors duration-500">
          Download Protocol v1.0
        </button>
      </motion.section>

    </div>
  );
}
