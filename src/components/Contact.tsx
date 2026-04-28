import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-surface-container-low/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        {/* Info & Map Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-10 flex flex-col"
        >
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface">
              Get in Touch
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Agrocore Solutions PLC bridges the gap between international
              business standards and Ethiopian regulatory frameworks. Based in
              Addis Ababa, our team of experts provides the insight and
              operational support necessary to thrive.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Headquarters</h4>
                <p className="text-sm text-on-surface-variant">
                  Bole Sub-city, Woreda 03
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Contact</h4>
                <p className="text-sm text-on-surface-variant">
                  +251 116 678 900
                  <br />
                  info@agrocore.et
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-grow min-h-[300px] rounded-[2rem] overflow-hidden border border-surface-container-highest shadow-inner relative bg-surface-container-low group"
          >
            <div className="absolute inset-0 bg-[#e5e3df] dark:bg-[#1a1b1e]">
              <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                  <MapPin size={48} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-on-surface text-xl">
                    Bole Sub-city, Addis Ababa
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Strategic Office Hub
                  </p>
                </div>
                <button className="px-6 py-2 bg-on-surface text-surface text-xs font-bold rounded-full hover:bg-primary transition-colors">
                  Open in Google Maps
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-2xl border border-surface-container-highest relative flex flex-col justify-center"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h3 className="font-display text-3xl font-bold text-on-surface">
                Send a Message
              </h3>
              <p className="text-on-surface-variant text-sm">
                Fill out the form below and our team will respond within 24
                hours.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-surface-container-highest focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-surface-container-highest focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-surface-container-highest focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                  Inquiry Type
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-surface rounded-xl border border-surface-container-highest focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                    <option>Company Registration</option>
                    <option>Regulatory Support</option>
                    <option>Market Insights</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="How can we help your business thrive in Ethiopia?"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-surface-container-highest focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none placeholder:text-on-surface-variant/30"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="button"
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
