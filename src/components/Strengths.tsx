import React from "react";
import { motion } from "motion/react";
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
    whileHover={{ y: -5 }}
    className="p-8 bg-surface-container-lowest rounded-2xl border border-surface-container-highest shadow-sm flex flex-col gap-4 hover:shadow-lg transition-all"
  >
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-2">
      <Icon size={24} />
    </div>
    <h3 className="font-display font-bold text-lg text-on-surface">{title}</h3>
    <p className="text-sm text-on-surface-variant leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const Strengths = () => {
  return (
    <section id="strengths" className="py-24 bg-surface-container-low/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block p-3 bg-primary/10 rounded-2xl text-primary">
              <Award size={28} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface">
              Our Strengths
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We define our competitive edge through deep-rooted local
              intelligence combined with global professional standards.
            </p>
          </motion.div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-primary text-on-primary rounded-3xl space-y-2 shadow-2xl shadow-primary/20"
            >
              <div className="text-4xl font-display font-bold">15+</div>
              <div className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">
                Years in the Market
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 bg-surface-container-highest rounded-3xl space-y-2 border border-surface-container-highest"
            >
              <div className="text-4xl font-display font-bold text-primary">
                100%
              </div>
              <div className="text-xs uppercase font-bold tracking-[0.2em] text-on-surface-variant">
                Regulatory Compliance
              </div>
            </motion.div>
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
