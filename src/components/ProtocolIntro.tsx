import { motion } from 'motion/react';
import { ShieldCheck, Zap, Lock, Eye } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" } as any
};

export default function ProtocolIntro() {
  return (
    <section className="relative bg-mankhe-charcoal py-24 md:py-32 px-6 lg:px-12 border-b border-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* PART 1: THE PHILOSOPHY OF BIOCHAR */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-4">
              <span className="text-mankhe-gold font-sans text-[10px] uppercase tracking-[0.5em] font-bold">The Core Idea</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black leading-[0.9] text-white">
                Interrupting the <br />
                <span className="italic text-mankhe-gold text-4xl md:text-6xl">Carbon Cycle.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-stone-400 font-sans font-light text-lg md:text-xl leading-relaxed max-w-2xl">
              <p>
                The natural carbon cycle is a loop of growth and decay. In the fields of Chhattisgarh, this loop is broken. 
                Agricultural waste—rice husk and straw—is left to rot or, more often, set ablaze. This release of CO₂ and 
                methane is a violent acceleration of warming.
              </p>
              <p className="text-white font-serif italic border-l-2 border-mankhe-gold pl-6 py-2">
                "We do not wait for the cycle to complete. We actively interrupt it."
              </p>
              <p>
                By intercepting this biomass before it reaches the fire, we subject it to controlled thermochemical 
                conversion. We arrest the carbon in its volatile state, stabilizing it into a crystalline lattice that 
                resists decay for centuries. We are not just managing waste; we are engineering a permanent subterranean sink.
              </p>
            </div>
          </motion.div>

          {/* PART 2: THE RULE BOOK */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 md:p-12 bg-stone-900/50 border-2 border-stone-800 rounded-sm overflow-hidden group">
              {/* Decorative background element */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-mankhe-gold/5 rounded-full blur-3xl group-hover:bg-mankhe-gold/10 transition-colors duration-700" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-mankhe-gold/10 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-mankhe-gold" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold italic text-white">The Rule Book</h3>
                </div>

                <p className="text-stone-400 font-sans text-sm leading-relaxed">
                  Our entire process is dictated by the highest global carbon dioxide removal (CDR) standards. 
                  We follow a non-negotiable protocol to ensure every credit generated is of the highest integrity.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Zap className="w-5 h-5 text-mankhe-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-sans font-bold uppercase tracking-widest text-white mb-1">Additionality</h4>
                      <p className="text-xs text-stone-500 leading-relaxed">
                        Halting the baseline scenario of crop burning. Our intervention is the catalyst for removal that would not otherwise occur.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Lock className="w-5 h-5 text-mankhe-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-sans font-bold uppercase tracking-widest text-white mb-1">Permanence</h4>
                      <p className="text-xs text-stone-500 leading-relaxed">
                        Ensuring the carbon is locked away for centuries. Biochar is a durable, physical asset that resists the reversal risks of forests.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Eye className="w-5 h-5 text-mankhe-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-sans font-bold uppercase tracking-widest text-white mb-1">Verifiability</h4>
                      <p className="text-xs text-stone-500 leading-relaxed">
                        Deterministic, immutable MRV for every single batch. Every gram is tracked from the farm gate to the soil sink.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-800">
                  <span className="text-[10px] font-mono text-stone-600 uppercase tracking-widest">Protocol Alignment: Puro.earth // ICR</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
