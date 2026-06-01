import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" } as any
};

export default function TermsOfService() {
  return (
    <div className="bg-mankhe-charcoal text-stone-300 min-h-screen pt-32 pb-48 selection:bg-mankhe-gold selection:text-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.header {...fadeInUp} className="mb-20 border-b border-stone-800 pb-12">
          <h1 className="text-5xl md:text-7xl font-serif font-black leading-tight tracking-tighter mb-6">
            Terms of <br />
            <span className="italic text-mankhe-gold">Service.</span>
          </h1>
          <p className="text-lg font-sans font-light text-stone-500 tracking-wide uppercase">
            Effective Date: April 11, 2026
          </p>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="prose prose-invert prose-stone max-w-none font-sans font-light leading-relaxed space-y-12"
        >
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the MANKHE website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on MANKHE's website for personal, non-commercial transitory viewing only.
            </p>
            <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2 text-stone-400">
              <li>Modify or copy the materials.</li>
              <li>Use the materials for any commercial purpose, or for any public display.</li>
              <li>Attempt to decompile or reverse engineer any software contained on MANKHE's website.</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">3. Disclaimer</h2>
            <p>
              The materials on MANKHE's website are provided on an 'as is' basis. MANKHE makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">4. Limitations</h2>
            <p>
              In no event shall MANKHE or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MANKHE's website.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on MANKHE's website could include technical, typographical, or photographic errors. MANKHE does not warrant that any of the materials on its website are accurate, complete or current.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Chhattisgarh.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
