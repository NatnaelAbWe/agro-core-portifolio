import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "David O.",
              role: "Director, Global Logistics Inc.",
              text: "Agrocore made our entry into Ethiopia incredibly smooth. Their understanding of the local regulatory environment is unmatched. Highly recommended.",
            },
            {
              name: "Sarah K.",
              role: "CEO, AgriTech Solutions",
              text: "We struggled with product registration until we partnered with Agrocore. They handled everything efficiently, saving us months of potential delays.",
            },
            {
              name: "Michael T.",
              role: "Founder, East African Ventures",
              text: "A fantastic partner. They didn't just set up our company; they provided strategic marketing insights that were crucial for our launch.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-container-lowest p-10 rounded-[2rem] border border-surface-container-highest flex flex-col h-full hover:shadow-xl transition-all"
            >
              <div className="flex text-yellow-500 mb-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-8 flex-grow leading-relaxed text-lg">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-display font-bold text-on-surface">
                  {t.name}
                </h4>
                <p className="text-sm text-primary font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
