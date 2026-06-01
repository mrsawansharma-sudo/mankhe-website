import { motion } from 'motion/react';
import SEO from '../components/SEO';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="bg-mankhe-charcoal text-stone-200 min-h-screen selection:bg-mankhe-gold selection:text-black">
      <SEO 
        title="Contact | The MANKHE Team"
        description="Meet the founders and architects of the Chhattisgarh Regeneration Project. Sawan Sharma, Trilok Sahu, and Rahul Singh Thakur."
        canonical="https://mankhe.com/about"
      />
      
      {/* SECTION 1: THE HERO - DEFINITION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden canvas-texture">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-12 pt-24"
          >
            <h1 className="text-7xl md:text-[14rem] font-serif font-black leading-[0.8] tracking-tighter">
              MANKHE <br />
              <span className="text-mankhe-gold italic text-4xl md:text-8xl">(n): The People.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-3xl font-serif font-light leading-relaxed italic text-stone-400">
              "In the dialect of Chhattisgarh, we are named for the people who belong to this soil. 
              We are not a company of algorithms; we are a collective of humans restoring dignity to the rural heartland."
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-mankhe-gold to-transparent" />
        </div>
      </section>

      {/* SECTION 2: THE HEART - OUR CHHATTISGARH */}
      <section className="relative min-h-screen overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1ErRHaCe7fJSaZvHZWXPaJZVMBzWZND_U?v=3" 
            alt="Background"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-950/40" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="flex items-center justify-center p-8 md:p-24">
            <motion.div {...fadeInUp} className="max-w-xl space-y-12">
              <div className="space-y-4">
                <span className="text-mankhe-gold font-mono text-sm tracking-[0.3em] uppercase">The Heart</span>
                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                  A Map of <br />
                  <span className="italic">Resilience</span> <br />
                  and Loss.
                </h2>
              </div>
              
              <div className="space-y-8 text-lg md:text-xl font-sans font-light text-stone-400 leading-relaxed">
                <p>
                  In the deep interiors of Bastar, survival is a 20-kilometer walk. 
                  Families trek through forests just to collect 35kg of PDS rice, 
                  fueled only by boiled rice and raw onions.
                </p>
                <p className="border-l-2 border-mankhe-gold pl-8 italic">
                  In Dhamtari, the Kamar tribe—the children of the forest—face a silent extinction. 
                  As Soil Organic Carbon (SOC) drops to 0.5%, their foundation erodes.
                </p>
                <p>
                  Regeneration here isn't just about the climate; it’s about making sure 
                  these stories don't end in the history books.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="relative h-[60vh] lg:h-auto flex items-center justify-center">
            <motion.img 
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              src="/mankhe.png" 
              alt="India Map - Mankhe"
              className="w-full h-full object-contain p-8 md:p-12"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MISSION - CDR FOR JUSTICE */}
      <section className="py-32 md:py-64 px-6 bg-stone-900 canvas-texture relative">
        <div className="absolute inset-0 bg-stone-900/90 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-32">
            <span className="text-mankhe-gold font-mono text-sm tracking-[0.3em] uppercase mb-6 block">The Mission</span>
            <h2 className="text-5xl md:text-8xl font-serif font-bold mb-8">Carbon Removal as <br /><span className="italic">Social Justice.</span></h2>
            <p className="max-w-2xl mx-auto text-stone-400 text-lg md:text-xl font-sans font-light">
              We chose Carbon Dioxide Removal (CDR) through Biochar because climate finance should be a tool for wealth redistribution.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                title: "Direct Impact",
                desc: "Every ton of carbon locked in the soil creates a verified credit.",
                stat: "1 Ton = 1 Credit"
              },
              {
                title: "The Loop",
                desc: "That value flows back to 100,000+ farmers and local Self-Help Groups (SHGs) across 370+ Gram Panchayats.",
                stat: "370+ Panchayats"
              },
              {
                title: "The Goal",
                desc: "We heal the soil of those who need it most, creating a legacy of fertility.",
                stat: "Soil Restoration"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="p-12 border border-stone-800 bg-black/40 backdrop-blur-sm rounded-sm space-y-8 group hover:border-mankhe-gold transition-colors duration-500"
              >
                <span className="text-mankhe-gold font-mono text-xs tracking-widest">{item.stat}</span>
                <h3 className="text-3xl font-serif font-bold">{item.title}</h3>
                <p className="text-stone-500 font-sans font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: THE ARCHITECTS - THREE JOURNEYS */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <span className="text-mankhe-gold font-mono text-sm tracking-[0.3em] uppercase mb-4 block">The Architects</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold italic">Core Team.</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sawan Sharma",
                role: "Founder & Environmental Architect",
                quote: "Technology is a tool; life is the mission. From documenting dying rivers to building carbon platforms, the goal has always been the same: restoration.",
                journey: "Sawan’s path was shaped by the grit of the ground. While working on the \"Bolti Nadi\" (Speaking River) initiative, he documented the firsthand reality of the Sakri River alongside Amir Hashmi. However, it was the documentary \"Racing Extinction\" that became the catalyst. It pushed him to find a scalable way to protect the planet while serving the farmers who feed it. This led him to the realization that soil health is the ultimate frontline of climate change. Sawan’s foundation in social work started at Hema Samajik Vikas Sansthan (his mother’s NGO, started 2007) where he volunteered for various projects, learning that true impact starts at home.",
                vitals: [
                  { label: "Education", value: "B.E. Civil (CSVTU); Specialization in Environmental Engineering" },
                  { label: "Core Skills", value: "Global Carbon Platforms & Environmental Laws" },
                  { label: "Technical Power", value: "dMRV & Google Earth Engine (GEE) mapping" }
                ],
                img: "/sawan.jpg?v=1"
              },
              {
                name: "Trilok Sahu",
                role: "Head of Operations",
                quote: "Impact isn't measured in credits; it’s measured in the health of a child and the wag of a tail. Empathy must be the baseline of every operation.",
                journey: "Trilok is the \"boots on the ground\" for MANKHE. He served as the Head of Operations at Hema Samajik Vikas Sansthan, where he managed 6 night schools for underprivileged children, ensuring education reached the darkest corners of the village. But his compassion extends beyond humans; Trilok is a dedicated animal welfare advocate. Through his work with \"Oh My Dog,\" he has spent years feeding local street dogs and continues to provide medical support to the pets of low-income owners. He ensures that MANKHE never loses its soul.",
                vitals: [
                  { label: "Social Leadership", value: "Managed 6 night schools; rural education lead" },
                  { label: "Animal Welfare", value: "Founder at 'Oh My Dog'; community vet support" },
                  { label: "Mobilization", value: "Grassroots movement lead across 370+ Panchayats" }
                ],
                img: "/trilok.jpeg?v=1"
              },
              {
                name: "Rahul Singh Thakur",
                role: "Head of Design and Production",
                quote: "A house is a shelter, but fertile soil is a future. My work is to build the structures that allow nature to rebuild itself.",
                journey: "Rahul brings the discipline of large-scale infrastructure to MANKHE. With extensive experience working on the Pradhan Mantri Awas Yojana (PMAY) across various Municipal Corporations and Panchayats in Dhamtari, he understands the intricacies of government-scale execution. He has spent his career designing and overseeing housing for the masses, and he now applies that same structural rigor to the Chhattisgarh Regeneration Project, ensuring that our decentralized units are as solid as the homes he has built for thousands.",
                vitals: [
                  { label: "Education", value: "Bachelor of Architecture (B.Arch)" },
                  { label: "Experience", value: "Specialist in PMAY project execution & urban planning" },
                  { label: "Expertise", value: "Decentralized infrastructure & material sustainability" }
                ],
                img: "/rahul.jpeg?v=1"
              }
            ].map((founder, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full p-6 md:p-8 border border-stone-900 bg-stone-950/30 rounded-sm hover:border-stone-700 transition-colors"
              >
                <div className="w-24 md:w-32 aspect-[3/4] overflow-hidden rounded-sm mb-6 relative border border-stone-800 shadow-2xl group-hover:scale-105 transition-all duration-700">
                  <img 
                    src={founder.img} 
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 canvas-texture opacity-40 mix-blend-overlay pointer-events-none" />
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif font-bold">{founder.name}</h3>
                    <p className="text-mankhe-gold font-mono text-[8px] uppercase tracking-[0.3em]">{founder.role}</p>
                  </div>

                  <p className="text-stone-400 font-serif italic text-sm leading-relaxed border-l border-mankhe-gold/30 pl-4">
                    "{founder.quote}"
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-[8px] font-mono text-stone-600 uppercase tracking-widest">The Journey</h4>
                    <p className="text-stone-500 font-sans font-light leading-relaxed text-[11px]">
                      {founder.journey}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-900 space-y-4">
                    <h4 className="text-[8px] font-mono text-stone-600 uppercase tracking-widest">Expertise</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {founder.vitals.map((vital, j) => (
                        <div key={j} className="space-y-0.5">
                          <p className="text-[7px] text-stone-700 uppercase tracking-widest">{vital.label}</p>
                          <p className="text-[10px] text-stone-400 font-medium">{vital.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: THE INVITATION - YOU ARE A MANKHE */}
      <section className="min-h-screen flex items-center justify-center bg-black relative px-6 overflow-hidden">
        <div className="absolute inset-0 canvas-texture opacity-20" />
        
        <div className="relative z-10 text-center max-w-4xl space-y-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-mankhe-gold shadow-[0_0_50px_20px_rgba(212,175,55,0.3)] animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-light italic leading-relaxed text-stone-300">
              "If you have read this far, you are no longer a visitor. <br />
              You have walked the trails of Bastar with us. You have felt the exhaustion of the soil and the resilience of the people."
            </h2>
            
            <div className="space-y-4">
              <p className="text-6xl md:text-9xl font-serif font-black tracking-tighter text-white">
                You are now a <span className="text-mankhe-gold">Mankhe.</span>
              </p>
              <p className="text-stone-500 font-mono text-sm tracking-[0.4em] uppercase">
                Welcome to the movement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
