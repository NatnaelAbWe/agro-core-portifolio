import React from "react";
import { motion } from "motion/react";
import { Calendar, ChevronRight } from "lucide-react";

export const Appointment = () => {
  return (
    <section id="appointment" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container-lowest rounded-[3rem] overflow-hidden border border-surface-container-highest shadow-2xl grid lg:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-12 md:p-16 space-y-8 bg-primary text-on-primary relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 space-y-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Calendar size={32} />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Book a Strategic Consultation
              </h2>
              <p className="text-primary-container text-lg leading-relaxed">
                Schedule a private session with our senior consultants to
                discuss your market entry strategy, regulatory requirements, or
                expansion plans in Ethiopia.
              </p>
              <ul className="space-y-4">
                {[
                  "30-Minute Virtual Discovery Call",
                  "Customized Regulatory Roadmap",
                  "Direct Access to Senior Specialists",
                  "Confidential Business Review",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={14} />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-12 md:p-16 space-y-8 flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl font-bold text-on-surface">
              Select Appointment Details
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-surface border border-surface-container-highest rounded-xl focus:ring-2 focus:ring-primary/20 outline-none text-on-surface"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-surface border border-surface-container-highest rounded-xl focus:ring-2 focus:ring-primary/20 outline-none text-on-surface appearance-none cursor-pointer">
                      <option>Morning (09:00 - 12:00)</option>
                      <option>Afternoon (14:00 - 17:00)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Meeting Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="p-4 border-2 border-primary bg-primary/5 rounded-xl text-primary font-bold text-sm transition-all hover:bg-primary/10"
                  >
                    Virtual Meeting
                  </button>
                  <button
                    type="button"
                    className="p-4 border-2 border-surface-container-highest hover:border-primary/50 transition-all rounded-xl text-on-surface-variant font-bold text-sm"
                  >
                    In-Person
                  </button>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl shadow-xl shadow-primary/20 transition-all"
              >
                Confirm Appointment Request
              </motion.button>
              <p className="text-center text-xs text-on-surface-variant italic">
                We will confirm your selection via email within 24 hours.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
