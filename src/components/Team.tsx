import React from "react";
import { motion } from "motion/react";

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
    className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-container-highest shadow-sm text-center hover:shadow-md transition-shadow"
  >
    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-surface-container-low shadow-sm">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <h3 className="font-display font-bold text-xl text-on-surface mb-1">
      {name}
    </h3>
    <p className="text-primary font-medium text-sm mb-4">{role}</p>
    <p className="text-on-surface-variant text-sm leading-relaxed">{bio}</p>
  </motion.div>
);

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface">
            Guided by Experience
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
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
