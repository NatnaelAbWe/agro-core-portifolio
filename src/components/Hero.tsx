import React from "react";
import { motion } from "motion/react";
import { TrendingUp, ShieldCheck } from "lucide-react";
import heroImage from "../assets/images/ethiopian_agriculture_hero_1777359892972.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low/50 -skew-x-12 translate-x-1/4 -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-container/10 text-primary text-sm font-semibold rounded-full border border-primary/20"
          >
            <TrendingUp size={16} />
            <span>Addis Ababa, Ethiopia</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface leading-[1.1] tracking-tight"
          >
            Business & Regulatory{" "}
            <span className="text-primary">Support in Ethiopia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl"
          >
            Navigating the Ethiopian business landscape with precision. We
            provide expert guidance in company establishment, regulatory
            compliance, and market entry strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-primary text-on-primary font-bold rounded-full shadow-xl shadow-primary/20 hover:bg-primary-container transition-all hover:scale-105 active:scale-95">
              Consult With Us
            </button>
            <button className="px-8 py-4 bg-surface-container-highest text-on-surface font-bold rounded-full hover:bg-surface-container-high transition-all">
              Explore Services
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
          className="relative lg:block hidden"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-surface-container-lowest">
            <img
              src={heroImage}
              alt="Ethiopian Agriculture"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
          </div>
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-10 -left-10 p-6 bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-highest max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <ShieldCheck size={20} />
              </div>
              <span className="font-bold text-sm text-on-surface">
                Reliable Support
              </span>
            </div>
            <p className="text-xs text-on-surface-variant">
              Authoritative support for international enterprises establishing
              in Ethiopia.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
