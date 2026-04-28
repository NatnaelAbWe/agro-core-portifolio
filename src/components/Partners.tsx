import React from "react";
import { motion } from "motion/react";
import Tilt from "react-parallax-tilt";
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
    <section id="partners" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-4"
          >
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">
              Our Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Our Strategic Partners
            </h2>
            <p className="text-slate-500 text-lg">
              Collaborating with global leading institutions and local
              regulatory bodies to deliver excellence.
            </p>
          </motion.div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 transition-all">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
              className="h-full"
            >
              <Tilt
                perspective={800}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                scale={1.05}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                className="h-full"
              >
                <div className="group flex flex-col items-center justify-center h-full p-8 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-emerald-100">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-emerald-50 rounded-xl text-slate-400 group-hover:text-emerald-600 transition-colors">
                    <partner.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-wider group-hover:text-slate-900 transition-colors">
                    {partner.name}
                  </span>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA Banner with Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Tilt
            perspective={2000}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            scale={1.01}
          >
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="w-12 h-12 rounded-full border-4 border-slate-900 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${n + 20}`}
                      alt="Partner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-slate-900 bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                  +40
                </div>
              </div>
              <p className="text-slate-300 font-medium text-center md:text-left flex-grow md:ml-6">
                Join our network of{" "}
                <span className="text-emerald-400 font-bold">
                  40+ International Organizations
                </span>{" "}
                already thriving in Ethiopia.
              </p>
              <button className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl text-sm whitespace-nowrap hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20">
                Become a Partner
              </button>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};
