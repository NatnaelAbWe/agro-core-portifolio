import React from "react";
import { motion } from "motion/react";
import Tilt from "react-parallax-tilt"; // Import the tilt component
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/images/ethiopian_agriculture_hero_1777359892972.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white"
    >
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/20 -z-10" />

      {/* Background Swoosh */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] bg-emerald-600 rounded-l-[100%] translate-x-1/4 -z-10 opacity-5" />

      <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="z-10 py-12">
          {/* ... (Keep your existing text content and motion.h1 here) ... */}
          <motion.h1 className="text-5xl lg:text-7xl font-bold text-emerald-900 leading-[1.1] mb-8 tracking-tight">
            Your Partner in <br />
            <span className="text-emerald-800">Business Growth</span> <br />
            in Ethiopia
          </motion.h1>
          <motion.p className="text-xl text-slate-600 mb-10 max-w-lg">
            We provide professional support for company registration,
            compliance, and business development.
          </motion.p>
          <button
            className="px-10 py-4 bg-emerald-700 text-white text-lg font-semibold rounded-full hover:bg-emerald-800 transition-all flex items-center gap-4 group shadow-xl"
            onClick={() =>
              document
                .getElementById("work-with-us")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Side: Enhanced Tilt Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Tilt
            perspective={1500}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="15rem 4rem 4rem 15rem" // Matches image corners
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            scale={1.02} // Subtle lift on hover
            className="parallax-effect"
          >
            {/* The Improved Image Container */}
            <div
              className="relative w-full h-[500px] lg:h-[750px] rounded-[3rem] lg:rounded-l-[15rem] lg:rounded-r-[4rem] overflow-hidden 
              border-[1px] border-white/30 ring-1 ring-emerald-900/10
              shadow-[0_40px_80px_-15px_rgba(6,78,59,0.15),0_15px_25px_rgba(0,0,0,0.05)]
              before:absolute before:inset-0 before:rounded-inherit before:border-l-[12px] before:border-emerald-600 before:z-20 before:opacity-90 before:pointer-events-none"
            >
              <img
                src={heroImage}
                alt="Ethiopia Business"
                className="w-full h-full object-cover"
              />

              {/* Bottom depth overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </Tilt>

          {/* Floating Decorative Element (Moves with a different motion speed) */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-100/50 rounded-full blur-3xl -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};
