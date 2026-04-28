import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Award, Search, Zap, Target, HeartHandshake } from "lucide-react";

const StrengthCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-full"
  >
    <Tilt
      perspective={1000}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.05}
      transitionSpeed={1500}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#ffffff"
      glareBorderRadius="1rem"
      className="h-full"
    >
      <div className="h-full p-8 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4 hover:shadow-xl transition-all">
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-2">
          <Icon size={24} />
        </div>
        <h3 className="font-bold text-lg text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </Tilt>
  </motion.div>
);

export const Strengths = () => {
  return (
    <section id="strengths" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block p-3 bg-emerald-100 rounded-2xl text-emerald-700">
              <Award size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our Strengths
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              We define our competitive edge through deep-rooted local
              intelligence combined with global professional standards.
            </p>
          </motion.div>

          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            {/* 15+ Years Box */}
            <Tilt
              perspective={1000}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.02}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 bg-emerald-700 text-white rounded-3xl space-y-2 shadow-2xl shadow-emerald-900/20 h-full"
              >
                <div className="text-4xl font-bold">15+</div>
                <div className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">
                  Years in the Market
                </div>
              </motion.div>
            </Tilt>

            {/* 100% Box */}
            <Tilt
              perspective={1000}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.02}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-8 bg-white rounded-3xl space-y-2 border border-slate-200 shadow-sm h-full"
              >
                <div className="text-4xl font-bold text-emerald-600">100%</div>
                <div className="text-xs uppercase font-bold tracking-[0.2em] text-slate-500">
                  Regulatory Compliance
                </div>
              </motion.div>
            </Tilt>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StrengthCard
            index={0}
            icon={Search}
            title="Local Intelligence"
            description="Unparalleled understanding of the changing Ethiopian regulatory landscape and institutional nuances."
          />
          <StrengthCard
            index={1}
            icon={Zap}
            title="Operational Speed"
            description="Accelerating bureaucratic hurdles through established pathways and efficient documentation workflows."
          />
          <StrengthCard
            index={2}
            icon={Target}
            title="Strategic Precision"
            description="We don't just process papers; we align your entry strategy with local economic priorities for better success."
          />
          <StrengthCard
            index={3}
            icon={HeartHandshake}
            title="Ethical Standards"
            description="Maintaining the highest levels of professional integrity and confidentiality in all corporate engagements."
          />
        </div>
      </div>
    </section>
  );
};
