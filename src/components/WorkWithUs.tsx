import React from "react";
import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export const WorkWithUs = () => {
  return (
    <section id="work-with-us" className="py-24 bg-surface-container-low/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="inline-flex p-3 bg-primary/10 rounded-2xl text-primary">
              <Briefcase size={28} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface leading-tight">
              Work With Us
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Interested in representing Agrocore, becoming a partner, or
              joining our consulting network? We are always looking for
              high-caliber professionals and organizations to expand our reach.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-bold text-on-surface">
                    Strategic Partners
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Joint ventures and international firm representation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-bold text-on-surface">
                    Compliance Agents
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Regional regulatory specialists and liaisons.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-surface-container-lowest p-10 rounded-[2rem] border border-surface-container-highest shadow-xl"
          >
            <form className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-surface border border-surface-container-highest rounded-xl focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-surface border border-surface-container-highest rounded-xl focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="Organization"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Professional Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-surface border border-surface-container-highest rounded-xl focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="email@company.com"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Collaboration Type
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-surface border border-surface-container-highest rounded-xl focus:ring-2 focus:ring-primary/20 outline-none appearance-none cursor-pointer">
                    <option>Firm Partnership</option>
                    <option>Individual Contractor</option>
                    <option>Service Provider</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Collaboration Proposal
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-surface border border-surface-container-highest rounded-xl focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                  placeholder="Tell us how you'd like to collaborate..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="button"
                className="sm:col-span-2 py-4 bg-on-surface text-surface font-bold rounded-xl hover:bg-on-surface-variant transition-all"
              >
                Submit Collaboration Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
