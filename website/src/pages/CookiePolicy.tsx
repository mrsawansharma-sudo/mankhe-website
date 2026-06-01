import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" } as any
};

export default function CookiePolicy() {
  return (
    <div className="bg-mankhe-charcoal text-stone-300 min-h-screen pt-32 pb-48 selection:bg-mankhe-gold selection:text-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.header {...fadeInUp} className="mb-20 border-b border-stone-800 pb-12">
          <h1 className="text-5xl md:text-7xl font-serif font-black leading-tight tracking-tighter mb-6">
            Cookie <br />
            <span className="italic text-mankhe-gold">Policy.</span>
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
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">1. What are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">2. How We Use Cookies</h2>
            <p>
              We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-4 text-stone-400">
              <li>
                <strong className="text-white">Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
              </li>
              <li>
                <strong className="text-white">Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use.
              </li>
              <li>
                <strong className="text-white">Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">4. How Can I Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">5. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
