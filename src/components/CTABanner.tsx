import React from "react";
import { motion } from "motion/react";

export const CTABanner = () => {
  return (
    <section className="py-24 bg-on-surface text-surface text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-6 space-y-8 relative z-10"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Ready to Start Your Project?
        </h2>
        <p className="text-surface-dim text-lg leading-relaxed max-w-2xl mx-auto">
          Explore partnership opportunities or request a full proposal tailored
          to your business needs in the Ethiopian market.
        </p>
        <div className="flex justify-center">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-primary text-on-primary font-bold rounded-xl shadow-2xl transition-all"
          >
            Download Proposal Guide
          </motion.button>
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
    </section>
  );
};
