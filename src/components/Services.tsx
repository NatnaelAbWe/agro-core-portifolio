import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt"; // Make sure to install this: npm install react-parallax-tilt
import {
  Gavel,
  ClipboardList,
  Building2,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

import agentRepImg from "../assets/images/agent_rep_service_1777359911051.png";
import regMgmtImg from "../assets/images/reg_mgmt_service_1777359929502.png";
import stratConsultImg from "../assets/images/strat_consult_service_1777359945405.png";
import marketResearchImg from "../assets/images/market_research_service_1777359962091.png";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  size?: "small" | "large";
  index?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  image,
  size = "small",
  index = 0,
}: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`${size === "large" ? "md:col-span-2 md:row-span-2" : ""}`}
  >
    <Tilt
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="1rem"
      tiltMaxAngleX={size === "large" ? 3 : 7} // Less tilt for the large card to keep it grounded
      tiltMaxAngleY={size === "large" ? 3 : 7}
      transitionSpeed={1500}
      scale={1.02}
      className="h-full"
    >
      <div className="group h-full overflow-hidden bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-2xl flex flex-col">
        <div
          className={`relative overflow-hidden ${
            size === "large" ? "h-64 md:h-[400px]" : "h-48"
          }`}
        >
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          )}
          {/* Refined gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />

          {/* Icon Badge */}
          <div
            className={`absolute bottom-4 left-6 flex items-center justify-center rounded-2xl bg-emerald-600 shadow-lg shadow-emerald-900/20 text-white ${
              size === "large" ? "w-16 h-16" : "w-12 h-12"
            }`}
          >
            <Icon size={size === "large" ? 32 : 24} />
          </div>
        </div>

        <div className="p-8 flex-grow flex flex-col justify-center">
          <h3
            className={`font-bold text-slate-900 mb-3 ${
              size === "large" ? "text-3xl" : "text-xl"
            }`}
          >
            {title}
          </h3>
          <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
            {description}
          </p>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Core Services
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Comprehensive solutions to establish and grow your enterprise in the
            Ethiopian market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            index={0}
            size="large"
            icon={Gavel}
            image={stratConsultImg}
            title="Regulatory Representation"
            description="Acting as your legal representative before Ethiopian government authorities, ensuring full compliance with national regulations and standards. We bridge the gap between your business goals and the legal landscape."
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
            description="Streamlined processes for incorporating your business, obtaining TINs, and setting up operations in Addis Ababa."
          />
          <ServiceCard
            index={3}
            icon={TrendingUp}
            image={marketResearchImg}
            title="Marketing Support"
            description="Strategic market entry research, localization of marketing materials, and brand positioning for the local audience."
          />

          {/* Custom Quote Card with Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              className="h-full"
            >
              <div className="h-full bg-emerald-900 rounded-2xl border border-emerald-800 p-8 flex flex-col justify-center items-center text-center space-y-6 shadow-xl">
                <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center text-emerald-400">
                  <TrendingUp size={32} />
                </div>
                <h3 className="font-bold text-white text-xl">
                  Need a Custom Solution?
                </h3>
                <p className="text-emerald-100/80 text-sm">
                  We tailor our regulatory and business support packages to your
                  specific industry needs.
                </p>
                <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20">
                  Get In Touch
                </button>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
