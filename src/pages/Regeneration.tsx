import { motion } from 'motion/react';
import { Leaf, Users, Map, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: "easeOut" } as any
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Regeneration() {
  return (
    <div className="bg-[#0a0c08] text-stone-200 min-h-screen selection:bg-mankhe-gold selection:text-black font-sans">
      <SEO 
        title="Impact | Chhattisgarh Regeneration Project"
        description="Phase 1: Dhamtari. Restoring soil organic carbon and creating climate-resilient livelihoods for indigenous communities through biochar CDR."
        canonical="https://mankhe.com/chhattisgarh-regeneration"
      />
      
      {/* SECTION 1: THE HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Chhattisgarh Landscape" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0c08]/60 to-[#0a0c08]" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 md:pt-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-[8rem] font-serif font-black leading-[0.8] tracking-tighter mb-12">
              Reclaiming the <br />
              <span className="italic text-mankhe-gold">Soul</span> of the <br />
              Rice Bowl.
            </h1>
            <p className="text-xl md:text-3xl font-serif italic text-stone-400 max-w-3xl mx-auto leading-tight">
              We are not just removing carbon from the atmosphere. We are restoring the genetic legacy of Chhattisgarh, one handful of soil at a time.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-stone-600 font-bold">Scroll to Begin</span>
          <div className="w-px h-12 bg-gradient-to-b from-mankhe-gold to-transparent" />
        </motion.div>
      </section>

      {/* SECTION 2: ACT I - THE FORGOTTEN PARADISE */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <div className="aspect-[3/4] bg-stone-900 border-4 border-stone-800 relative overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/1suIvd8cjNOnVIML7R9d0grYAOWhd4sXr" 
                alt="Genetic Paradise" 
                className="w-full h-full object-cover opacity-80 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8 z-20">
                <span className="bg-mankhe-gold text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">Act I</span>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="order-1 lg:order-2 space-y-8">
            <span className="text-mankhe-gold font-sans text-xs uppercase tracking-[0.6em] block">The Forgotten Paradise</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black leading-none">
              The 20,000 <br />
              <span className="italic text-mankhe-gold">Flavors</span> of the Earth.
            </h2>
            <div className="h-px w-32 bg-mankhe-gold" />
            <p className="text-xl font-sans font-light text-stone-400 leading-relaxed">
              There was a time when Chhattisgarh was the undisputed Rice Bowl of India. It was a genetic paradise. Under the visionary research of Dr. R.H. Richharia, over 20,000 indigenous rice varieties were recorded here. This biodiversity was our true wealth. Every grain carried a unique aroma, a distinct flavor, and a dense capsule of natural nutrition. The soil was alive, intelligent, and rich with carbon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: ACT II - THE SACRIFICE FOR SECURITY */}
      <section className="py-32 px-6 lg:px-12 bg-stone-950/50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div {...fadeInUp}>
            <span className="text-stone-600 font-sans text-xs uppercase tracking-[0.6em] block mb-8">Act II</span>
            <h2 className="text-5xl md:text-8xl font-serif font-black mb-12">
              The Necessary Shift, <br />
              <span className="italic text-mankhe-gold">and the Silent Crisis.</span>
            </h2>
            <div className="h-px w-32 bg-stone-800 mx-auto mb-12" />
            <p className="text-xl md:text-2xl font-sans font-light text-stone-400 leading-relaxed">
              When the nation faced hunger, agriculture had to evolve. The era of chemical-intensive farming secured our food supply, prioritizing maximum yield to feed a growing population. It was a necessary step for our survival. But this quantity came at a quiet cost. The heavy reliance on Urea and DAP over decades stripped the earth of its natural biology. The 20,000 varieties shrank to a handful of monocultures. Today, our Soil Organic Carbon (SOC) has plummeted to a critical 0.5%. The soil is gasping for breath, and the rice it produces has become empty calories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: ACT III - THE PLATE OF THE PEOPLE */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-20">
          <span className="text-mankhe-gold font-sans text-xs uppercase tracking-[0.6em] block mb-4">Act III</span>
          <h2 className="text-5xl md:text-8xl font-serif font-black">The <span className="italic text-mankhe-gold">Plate</span> of the People.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* PANEL 1 */}
          <motion.div {...fadeInUp} className="group relative flex flex-col border-4 border-stone-800 bg-stone-900/30 overflow-hidden">
            <div className="aspect-video bg-stone-800 relative overflow-hidden border-b-4 border-stone-800">
              <img 
                src="https://lh3.googleusercontent.com/d/11WryI21ToYDQ1WfBYDzl2xH3jbnEDCj6" 
                alt="The Vulnerable Plate" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-10 space-y-6">
              <h3 className="text-3xl font-serif font-bold italic">The Vulnerable Plate.</h3>
              <p className="text-stone-400 font-sans font-light leading-relaxed">
                The reality of this exhausted soil hits our most vulnerable the hardest. Today, millions of low-income families and children rely on the Public Distribution System (PDS) and school Mid-day meals. But the chemical-heavy rice they receive fills the stomach without fueling the mind.
              </p>
            </div>
          </motion.div>

          {/* PANEL 2 */}
          <motion.div {...fadeInUp} className="group relative flex flex-col border-4 border-stone-800 bg-stone-900/30 overflow-hidden">
            <div className="aspect-video bg-stone-800 relative overflow-hidden border-b-4 border-stone-800">
              <img 
                src="https://lh3.googleusercontent.com/d/1FYip7g9DbNLb8kh_0olLyBRnyfVxGUbz" 
                alt="Beyond Artificial Additives" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-10 space-y-6">
              <h3 className="text-3xl font-serif font-bold italic">Beyond Artificial Additives.</h3>
              <p className="text-stone-400 font-sans font-light leading-relaxed">
                The government’s initiative to mix artificially 'Fortified Rice' is a critical band-aid. But MANKHE is building the cure. We believe true health cannot be manufactured in a lab and sprinkled on top; it must be grown from the ground up.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: ACT IV - NATURAL FORTIFICATION */}
      <section className="py-32 px-6 lg:px-12 bg-[#0d1509]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div {...fadeInUp} className="lg:col-span-7 space-y-8">
            <span className="text-mankhe-leaf font-sans text-xs uppercase tracking-[0.6em] block">Act IV</span>
            <h2 className="text-5xl md:text-8xl font-serif font-black text-white leading-none">
              The MANKHE Blueprint: <br />
              <span className="italic text-mankhe-gold">Natural Fortification.</span>
            </h2>
            <div className="h-px w-32 bg-mankhe-leaf" />
            <p className="text-xl md:text-2xl font-sans font-light text-stone-300 leading-relaxed">
              We are engineering a return to true nutrition. By decentralizing farm waste and converting it into stable biochar, we give the soil its 'carbon skeleton' back. As we raise the Soil Organic Carbon from 0.5% to 1.5%, a biological miracle happens. The soil microbiome wakes up. Nitrogen and native minerals are naturally delivered to the plant's roots. The result? Rice that is inherently, naturally fortified. We don't just lock away carbon; we unlock human health.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="lg:col-span-5">
            <div className="aspect-square bg-stone-900 border-4 border-mankhe-leaf/30 relative overflow-hidden rounded-full">
              <img 
                src="https://lh3.googleusercontent.com/d/1L4lXcoYjuj8ox7VvLF2ovQX1UwDsKBY4" 
                alt="Natural Fortification" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-mankhe-leaf/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: THE SCALE OF IMPACT */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-4 uppercase tracking-tighter">The Scale of Impact</h2>
          <div className="h-px w-24 bg-mankhe-gold mx-auto" />
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-800 border border-stone-800"
        >
          <motion.div variants={fadeInUp} className="bg-[#0a0c08] p-12 text-center space-y-4">
            <span className="text-6xl md:text-7xl font-serif font-black text-mankhe-gold block">370+</span>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-stone-500 block">Gram Panchayats Activated.</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-[#0a0c08] p-12 text-center space-y-4">
            <span className="text-6xl md:text-7xl font-serif font-black text-white block">100,000+</span>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-stone-500 block">Farmers in the MANKHE Network.</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-[#0a0c08] p-12 text-center space-y-4">
            <span className="text-6xl md:text-7xl font-serif font-black text-mankhe-gold block">14.1M</span>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-stone-500 block">Hectares of Landscape Impact.</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-[#0a0c08] p-12 text-center space-y-4">
            <span className="text-6xl md:text-7xl font-serif font-black text-white block">Millions</span>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-stone-500 block">Verified Carbon Removed.</span>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 7: FOOTER / CALL TO ACTION */}
      <section className="py-48 px-6 lg:px-12 text-center border-t border-stone-900">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-serif font-black leading-tight">
            The ultimate goal <br />
            <span className="italic text-mankhe-gold text-4xl md:text-7xl">is simple.</span>
          </h2>
          <p className="text-xl md:text-3xl font-serif italic text-stone-400 leading-relaxed">
            To ensure the rice served in a child's Mid-day meal is the most nutritious, organic food on the planet. This is the Chhattisgarh Regeneration Project.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
