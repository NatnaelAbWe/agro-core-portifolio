import React from "react";
import { motion } from "motion/react";
import {
  ChevronRight,
  Building,
  Leaf,
  Building2,
  ShieldCheck,
  TrendingUp,
  Gavel,
} from "lucide-react";

export const Partners = () => {
  return (
    <section
      id="partners"
      className="py-24 bg-surface relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-4"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface">
              Our Strategic Partners
            </h2>
            <p className="text-on-surface-variant text-lg">
              Collaborating with global leading institutions and local
              regulatory bodies to deliver excellence.
            </p>
          </motion.div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-all">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <button className="w-12 h-12 rounded-full border border-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { name: "Global Finance Corp", icon: Building },
            { name: "EcoTrade Alliance", icon: Leaf },
            { name: "Addis Commerce Hub", icon: Building2 },
            { name: "Regulatory Watch Int.", icon: ShieldCheck },
            { name: "East Africa Ventures", icon: TrendingUp },
            { name: "Continental Legal", icon: Gavel },
          ].map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center justify-center p-8 bg-surface-container-lowest rounded-2xl border border-surface-container-highest shadow-sm transition-all hover:shadow-lg hover:border-primary/20"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/5 rounded-xl text-on-surface-variant group-hover:text-primary transition-colors">
                <partner.icon size={32} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold text-on-surface-variant text-center uppercase tracking-tighter group-hover:text-on-surface transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-surface-container-low rounded-3xl border border-surface-container-highest flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="w-12 h-12 rounded-full border-4 border-surface-container-low overflow-hidden"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${n + 10}`}
                  alt="Partner"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-on-surface-variant font-medium text-center md:text-left">
            Join our network of{" "}
            <span className="text-primary font-bold">
              40+ International Organizations
            </span>{" "}
            already thriving in Ethiopia.
          </p>
          <button className="px-6 py-3 bg-primary text-on-primary font-bold rounded-xl text-sm whitespace-nowrap hover:bg-primary-container transition-all">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
};
