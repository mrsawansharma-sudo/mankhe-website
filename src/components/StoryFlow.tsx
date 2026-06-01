import { motion } from 'motion/react';
import StorySection from './StorySection';
import { ArrowDown, Leaf, Droplets, Microscope, Globe } from 'lucide-react';
import SEO from './SEO';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: "easeOut" } as any
};

export default function StoryFlow() {
  return (
    <div className="relative">
      <SEO 
        title="MANKHE | The Chhattisgarh Regeneration Project"
        description="Rewiring the carbon cycle from the soil up. A Biochar revolution from Chhattisgarh for the world. Carbon removal through soil restoration."
      />
      {/* SECTION 1 — HERO */}
      <StorySection bgImage="https://drive.google.com/thumbnail?id=1b9Mofrm6oDvHAlTZ2AjQiLgnH6ltxE-o&sz=w1920" overlayOpacity={0.6}>
        <motion.div {...fadeInUp} className="text-center pt-24 md:pt-32">
          <h1 className="text-6xl md:text-8xl font-serif font-black mb-8 leading-[0.9] text-white drop-shadow-2xl">
            A Biochar Revolution.<br />
            <span className="text-mankhe-gold italic">From Chhattisgarh.</span><br />
            For the World.
          </h1>
          <p className="text-xl md:text-3xl font-sans font-light text-stone-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            We remove carbon from the air —<br />
            by bringing life back to the soil.
          </p>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20 flex justify-center"
          >
            <ArrowDown className="w-8 h-8 text-mankhe-gold opacity-50" />
          </motion.div>
        </motion.div>
      </StorySection>

      {/* SECTION 2 — THE LAND */}
      <StorySection 
        bgImage="https://lh3.googleusercontent.com/d/1ErRHaCe7fJSaZvHZWXPaJZVMBzWZND_U" 
        overlayOpacity={0.6}
        bgImageClassName="object-cover"
      >
        <motion.div {...fadeInUp} className="text-center space-y-8">
          <span className="text-mankhe-gold font-sans text-xs uppercase tracking-[0.4em] block mb-4 drop-shadow-md">
            Chhattisgarh Regeneration Project Phase 1
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white drop-shadow-2xl">
            Dhamtari.<br />
            <span className="italic text-mankhe-clay">Chhattisgarh, India.</span>
          </h2>
          <p className="text-2xl md:text-4xl font-sans font-light text-stone-100 drop-shadow-lg">
            A land built on rice.<br />
            A land that feeds millions.
          </p>
        </motion.div>
      </StorySection>

      {/* SECTION 3 — THE DECLINE */}
      <StorySection bgImage="https://lh3.googleusercontent.com/d/1Cp5ABYcTjr0gZk38PF-OF79uST_Mr2jf" overlayOpacity={0.7}>
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-left space-y-10">
          <div className="space-y-4">
            <span className="text-mankhe-clay font-sans text-xs uppercase tracking-widest drop-shadow-md">The Crisis</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight drop-shadow-2xl">
              Soil Organic Carbon<br />
              has fallen to <span className="text-mankhe-clay">0.5%.</span>
            </h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl font-sans font-light text-stone-200 leading-relaxed drop-shadow-lg">
            <p>At this level, soil stops functioning as a living system.</p>
            <p>It cannot hold water. It cannot sustain life.</p>
          </div>
        </motion.div>
      </StorySection>

      {/* SECTION 4 — WHAT WE SAW */}
      <StorySection bgImage="https://lh3.googleusercontent.com/d/15KgVe4zjrQlZSNGLAm1_dK80SxY5fueL" overlayOpacity={0.5}>
        <motion.div {...fadeInUp} className="text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight">
            Across the land —<br />
            there is biomass everywhere.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-300 text-lg md:text-xl font-sans font-light">
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl">
              Crop residue in the fields.
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl">
              Rice husk from mills.
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-stone-400 font-serif italic">
            Most of it is burned. Or left unused.<br />
            <span className="text-white not-italic font-sans font-bold mt-4 block">A problem hiding in plain sight.</span>
          </p>
        </motion.div>
      </StorySection>

      {/* SECTION 5 — OUR APPROACH */}
      <StorySection bgImage="https://lh3.googleusercontent.com/d/1G1bazQDG1rSIw0e7P56PlI-Dl3Ue7yBB" overlayOpacity={0.5}>
        <motion.div {...fadeInUp} className="text-center space-y-8">
          <h2 className="text-5xl md:text-8xl font-serif font-black text-white leading-none">
            We did not change farming.
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl md:text-5xl font-sans font-light text-mankhe-gold"
          >
            We changed the system around it.
          </motion.p>
        </motion.div>
      </StorySection>

      {/* SECTION 6 — THE SOLUTION */}
      <StorySection bgImage="https://lh3.googleusercontent.com/d/1jO_zJCIUdmv7g8qqcjVOEgwlB9g2BspJ" overlayOpacity={0.6}>
        <motion.div {...fadeInUp} className="text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif font-light text-stone-300">
            We transform waste into something permanent.
          </h2>
          <motion.h3 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2, type: "spring" }}
            className="text-7xl md:text-9xl font-serif font-black text-white tracking-tighter"
          >
            BIOCHAR.
          </motion.h3>
          <p className="text-xl md:text-2xl font-sans font-light text-stone-400 max-w-2xl mx-auto">
            A stable form of carbon that returns to the soil — not the atmosphere.
          </p>
        </motion.div>
      </StorySection>

      {/* SECTION 7 — HOW WE WORK */}
      <StorySection bgImage="https://lh3.googleusercontent.com/d/1jGTv4vWDkbQeMFLCCtycRq-zCjB2gL5J" overlayOpacity={0.6}>
        <div className="max-w-6xl mx-auto py-24">
          <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6 group">
              <div className="aspect-video overflow-hidden rounded-2xl mb-6">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src="https://lh3.googleusercontent.com/d/171K0q-f2RSiZBkBNP3Q9air7beY5NmlW" 
                  alt="Biomass Collection" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-12 h-12 bg-mankhe-gold/20 rounded-full flex items-center justify-center">
                <Leaf className="text-mankhe-gold w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">1. Biomass Collection</h3>
              <p className="text-stone-400 text-lg font-sans leading-relaxed">
                We collect agricultural waste from farms and rice mills.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="aspect-video overflow-hidden rounded-2xl mb-6">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src="https://lh3.googleusercontent.com/d/1pTNTAstWoZARFYMyR7qvXIrmQQH22bkF" 
                  alt="Conversion" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-12 h-12 bg-mankhe-clay/20 rounded-full flex items-center justify-center">
                <Microscope className="text-mankhe-clay w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">2. Conversion</h3>
              <p className="text-stone-400 text-lg font-sans leading-relaxed">
                Through controlled pyrolysis, we convert biomass into biochar.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="aspect-video overflow-hidden rounded-2xl mb-6">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src="https://lh3.googleusercontent.com/d/1LQ4o9cw-_vkovB2QUmpE1LJmQtWqoExA" 
                  alt="Soil Application" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-12 h-12 bg-mankhe-leaf/20 rounded-full flex items-center justify-center">
                <Droplets className="text-mankhe-leaf w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">3. Soil Application</h3>
              <p className="text-stone-400 text-lg font-sans leading-relaxed">
                We return it to the land — restoring soil structure, moisture, and life.
              </p>
            </div>
          </motion.div>
        </div>
      </StorySection>

      {/* SECTION 8 — IMPACT ON SOIL */}
      <StorySection bgImage="https://lh3.googleusercontent.com/d/1eXfFdajBL7lgj2BwTkdG6OplXquysts9" overlayOpacity={0.5}>
        <motion.div {...fadeInUp} className="text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white">
            Biochar acts like a sponge.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Holds water", "Supports microbial life", "Rebuilds soil"].map((text, i) => (
              <motion.div 
                key={text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-sans font-medium"
              >
                {text}
              </motion.div>
            ))}
          </div>
          <p className="text-2xl md:text-3xl text-mankhe-gold font-serif font-light italic">
            And locks carbon for hundreds to thousands of years.
          </p>
        </motion.div>
      </StorySection>

      {/* SECTION 9 — TARGET */}
      <StorySection bgImage="https://lh3.googleusercontent.com/d/1PqibzJwGlYWBDd8Biw59-uQjt0Cc8bId" overlayOpacity={0.5}>
        <motion.div {...fadeInUp} className="text-center space-y-8">
          <h2 className="text-5xl md:text-8xl font-serif font-black leading-none text-white">
            From <span className="text-mankhe-clay">0.5%</span> to <span className="text-mankhe-leaf">2%</span><br />
            Soil Organic Carbon.
          </h2>
          <p className="text-2xl md:text-4xl font-sans font-light text-stone-200 max-w-3xl mx-auto">
            Because beyond this point —<br />
            soil begins to function again.
          </p>
        </motion.div>
      </StorySection>

      {/* SECTION 10 — PHASE 1 */}
      <StorySection bgImage="https://lh3.googleusercontent.com/d/10HD9JRTQxwx3Tiuf8wThi7iHDpfk7JWL" overlayOpacity={0.6}>
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <span className="text-mankhe-gold font-sans text-xs uppercase tracking-[0.5em] block">The Beginning</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-[0.9]">
                The <br />
                Chhattisgarh <br />
                Regeneration <br />
                Project
              </h2>
            </div>
            <div className="space-y-8 border-l border-mankhe-gold/30 pl-8 md:pl-12">
              <div className="space-y-4">
                <h3 className="text-mankhe-gold text-2xl font-serif font-bold">Phase 1: Dhamtari</h3>
                <div className="text-stone-300 text-xl font-sans font-light leading-relaxed space-y-1">
                  <p>370 Gram Panchayats</p>
                  <p>1.47 Lakh Hectares</p>
                  <p>400+ Self Help Groups</p>
                  <p>1.2 Lakh Farmers</p>
                </div>
                <p className="text-stone-400 text-lg font-sans italic pt-4">
                  Working together <br />
                  to restore the cycle.
                </p>
              </div>
              <div className="pt-4">
                <div className="w-12 h-1 bg-mankhe-gold/50" />
              </div>
            </div>
          </div>
        </motion.div>
      </StorySection>

      {/* SECTION 11 — GLOBAL CONNECTION */}
      <StorySection bgImage="https://lh3.googleusercontent.com/d/1mE-K7sSslP-nigqi1dCmYU-tzBPQmPwm" overlayOpacity={0.6}>
        <motion.div {...fadeInUp} className="text-center relative">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
            <Globe className="w-64 h-64 text-white" />
          </div>
          
          <div className="space-y-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-stone-400 leading-tight max-w-3xl mx-auto">
              The world is trying to <span className="text-white italic">remove</span> carbon.
            </h2>
            
            <div className="space-y-4">
              <p className="text-4xl md:text-6xl font-serif font-black text-white">
                We are placing it back<br />
                where it belongs.
              </p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="inline-block"
              >
                <span className="text-7xl md:text-[10rem] font-serif font-black text-mankhe-gold italic tracking-tighter leading-none block">
                  In the soil.
                </span>
                <div className="h-2 w-full bg-mankhe-gold mt-2 scale-x-110 origin-left" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </StorySection>

      {/* SECTION 12 — IMPACT NUMBERS */}
      <section className="bg-mankhe-charcoal py-32 px-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.img 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            src="https://lh3.googleusercontent.com/d/1tMUaoEp1kpOOR9iuitJhPn4Boif52MqT" 
            alt="Impact Scale" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="mb-20 text-center md:text-left">
            <span className="text-mankhe-gold font-sans text-xs uppercase tracking-[0.5em] block mb-4">The Goal</span>
            <h2 className="text-5xl md:text-8xl font-serif font-black text-white leading-none">
              Our Mission <br className="hidden md:block" />
              <span className="italic text-mankhe-gold">2030.</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { label: "Acres Restored", value: "5 Million" },
              { label: "Farmers Engaged", value: "1 Million" },
              { label: "Biomass Processed", value: "5 Million ton" },
              { label: "CO₂ Removed", value: "5 Million ton" }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-5xl md:text-6xl font-serif font-black text-white tracking-tighter">{stat.value}</div>
                <div className="text-mankhe-gold font-sans text-xs uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — FINAL */}
      <StorySection bgImage="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=1920" overlayOpacity={0.7}>
        <motion.div {...fadeInUp} className="text-center space-y-16">
          <div className="space-y-4">
            <p className="text-2xl md:text-4xl font-sans font-light text-stone-200 drop-shadow-lg">This is not just a project.</p>
            <h2 className="text-6xl md:text-9xl font-serif font-black text-white italic drop-shadow-2xl">This is regeneration.</h2>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-5xl md:text-7xl font-serif font-black text-mankhe-gold tracking-tighter">MANKHE.</h3>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 text-stone-300 text-xl font-sans font-light">
              <span>Restoring soil.</span>
              <span className="hidden md:block text-stone-700">•</span>
              <span>Removing carbon.</span>
              <span className="hidden md:block text-stone-700">•</span>
              <span>Rebuilding life.</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-12 py-4 bg-mankhe-gold text-mankhe-charcoal font-sans font-bold rounded-full uppercase tracking-widest hover:bg-white transition-colors"
          >
            Join the Revival
          </motion.button>
        </motion.div>
      </StorySection>

      {/* SECTION 14 — VIDEO FEATURE */}
      <section className="bg-mankhe-charcoal py-32 px-6 relative overflow-hidden flex items-center justify-center min-h-screen snap-start">
        <div className="max-w-6xl w-full mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4 mb-8">
              <span className="text-mankhe-gold font-mono text-sm tracking-[0.5em] uppercase block">Watch the Journey</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">The Mankhe Story in <span className="italic">Motion.</span></h2>
            </div>
            
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-black/50 group">
              <div className="absolute inset-0 bg-stone-900 animate-pulse group-[.loaded]:hidden" />
              <iframe
                className="w-full h-full relative z-10"
                src="https://www.youtube.com/embed/5qg7kNzaQCo" 
                title="MANKHE Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="text-center pt-8">
              <p className="text-stone-400 font-sans font-light max-w-2xl mx-auto italic">
                "We are not just building a platform; we are documenting a transformation. Witness the scales of impact across the heart of Chhattisgarh."
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Atmospheric accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-mankhe-gold/5 blur-[120px] rounded-full" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-mankhe-clay/5 blur-[120px] rounded-full" />
        </div>
      </section>
    </div>
  );
}
