import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Linkedin, Mail } from "lucide-react";

const TeamMember = ({
  name,
  role,
  bio,
  image,
  index,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="h-full"
  >
    <Tilt
      perspective={1000}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.03}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#ffffff"
      glareBorderRadius="1rem"
      className="h-full"
    >
      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center h-full flex flex-col items-center hover:shadow-xl transition-all group">
        {/* Avatar with Glow Effect */}
        <div className="relative w-32 h-32 mb-6">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/40 transition-colors" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-slate-100">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <h3 className="font-bold text-xl text-slate-900 mb-1">{name}</h3>
        <p className="text-emerald-600 font-semibold text-sm mb-4 uppercase tracking-wider">
          {role}
        </p>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">{bio}</p>

        {/* Social Actions */}
        <div className="mt-auto flex gap-3">
          <button className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
            <Linkedin size={18} />
          </button>
          <button className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
            <Mail size={18} />
          </button>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">
            Our Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Guided by Experience
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Meet the experts leading our mission to facilitate business success
            in Ethiopia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <TeamMember
            index={0}
            name="Hailu Meka"
            role="General Manager"
            bio="Over 15 years of experience in Ethiopian corporate law and regulatory compliance. Dedicated to fostering international business relations."
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
          />
          <TeamMember
            index={1}
            name="Alemayehu Tadesse"
            role="Senior Consultant"
            bio="Expert in market entry strategy and local business establishment. Specializes in guiding tech and manufacturing sectors."
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
          />
          <TeamMember
            index={2}
            name="Senait Bekele"
            role="Regulatory Specialist"
            bio="Deep knowledge of Ethiopian import/export regulations and product registration protocols across various industries."
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
          />
        </div>
      </div>
    </section>
  );
};
