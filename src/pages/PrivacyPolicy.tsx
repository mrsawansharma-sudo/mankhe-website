import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" } as any
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-mankhe-charcoal text-stone-300 min-h-screen pt-32 pb-48 selection:bg-mankhe-gold selection:text-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.header {...fadeInUp} className="mb-20 border-b border-stone-800 pb-12">
          <h1 className="text-5xl md:text-7xl font-serif font-black leading-tight tracking-tighter mb-6">
            Privacy <br />
            <span className="italic text-mankhe-gold">Policy.</span>
          </h1>
          <p className="text-lg font-sans font-light text-stone-500 tracking-wide uppercase">
            Last Updated: April 11, 2026
          </p>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="prose prose-invert prose-stone max-w-none font-sans font-light leading-relaxed space-y-12"
        >
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">1. Introduction</h2>
            <p>
              At MANKHE, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services related to carbon credits and environmental regeneration.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">2. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-stone-400">
              <li>Name and Contact Data (Email address, phone number, etc.)</li>
              <li>Credentials (Passwords and similar security information)</li>
              <li>Payment Data (Information necessary to process your payment if you make purchases)</li>
              <li>Social Media Login Data (If you choose to register with us using social media account details)</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-stone-400">
              <li>To facilitate account creation and logon process.</li>
              <li>To send administrative information to you.</li>
              <li>To fulfill and manage your orders.</li>
              <li>To post testimonials with your consent.</li>
              <li>To deliver targeted advertising to you.</li>
              <li>To protect our services and for other business purposes.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">4. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">5. Your Privacy Rights</h2>
            <p>
              In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-l-2 border-mankhe-gold pl-6">6. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at <span className="text-mankhe-gold">SawanSharma97@gmail.com</span> or by post to our headquarters in Chhattisgarh, India.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
