import React from "react";
import { motion } from "motion/react";
import { Gavel, ClipboardList, Building2, TrendingUp } from "lucide-react";
import agentRepImg from "../assets/images/agent_rep_service_1777359911051.png";
import regMgmtImg from "../assets/images/reg_mgmt_service_1777359929502.png";
import stratConsultImg from "../assets/images/strat_consult_service_1777359945405.png";
import marketResearchImg from "../assets/images/market_research_service_1777359962091.png";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  image,
  size = "small",
  index = 0,
}: {
  icon: any;
  title: string;
  description: string;
  image?: string;
  size?: "small" | "large";
  index?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`group overflow-hidden bg-surface-container-lowest rounded-2xl border border-surface-container-highest shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col ${size === "large" ? "md:col-span-2 md:row-span-2" : ""}`}
  >
    <div
      className={`relative overflow-hidden ${size === "large" ? "h-64 md:h-full md:max-h-[60%]" : "h-48"}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
      <div
        className={`absolute bottom-4 left-6 flex items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20 text-on-primary ${size === "large" ? "w-14 h-14" : "w-12 h-12"}`}
      >
        <Icon size={size === "large" ? 28 : 24} />
      </div>
    </div>
    <div className="p-8 flex-grow flex flex-col justify-center">
      <h3
        className={`font-display font-bold text-on-surface mb-3 ${size === "large" ? "text-2xl" : "text-xl"}`}
      >
        {title}
      </h3>
      <p className="text-on-surface-variant leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </motion.div>
);

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-surface-container-low/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, s: 0.95 }}
          whileInView={{ opacity: 1, s: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface">
            Core Services
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Comprehensive solutions to establish and grow your enterprise in the
            Ethiopian market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
          <ServiceCard
            index={0}
            size="large"
            icon={Gavel}
            image={stratConsultImg}
            title="Regulatory Representation"
            description="Acting as your legal representative before Ethiopian government authorities, ensuring full compliance with national regulations and standards. We handle the complexities so you can focus on growth."
          />
          <ServiceCard
            index={1}
            icon={ClipboardList}
            image={regMgmtImg}
            title="Registration Management"
            description="End-to-end handling of product registrations, import permits, and licensing requirements with government agencies."
          />
          <ServiceCard
            index={2}
            icon={Building2}
            image={agentRepImg}
            title="Company Establishment"
            description="Streamlined processes for incorporating your business, obtaining TINs, and setting up physical or virtual operations."
          />
          <ServiceCard
            index={3}
            icon={TrendingUp}
            image={marketResearchImg}
            title="Marketing Support"
            description="Strategic market entry research, localization of marketing materials, and brand positioning for the local sector."
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-primary/5 rounded-2xl border border-primary/20 p-8 flex flex-col justify-center items-center text-center space-y-4"
          >
            <h3 className="font-display font-bold text-primary text-xl">
              Need a Custom Solution?
            </h3>
            <p className="text-on-surface-variant text-sm">
              We tailor our regulatory and business support packages to your
              specific industry needs.
            </p>
            <button className="px-6 py-2 bg-primary text-on-primary font-bold rounded-lg text-sm hover:scale-105 transition-all">
              Request Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
