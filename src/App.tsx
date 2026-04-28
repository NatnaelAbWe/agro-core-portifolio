import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import "./App.css";
// Components
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Partners } from "./components/Partners";
import { Appointment } from "./components/Appointment";
import { Services } from "./components/Services";
import { Strengths } from "./components/Strengths";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { WorkWithUs } from "./components/WorkWithUs";
import { Testimonials } from "./components/Testimonials";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface selection:bg-primary/20">
      <Navbar
        scrolled={scrolled}
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Strengths />
        <Partners />
        <Appointment />
        <Team />
        <WorkWithUs />
        <Contact />
        <Testimonials />
        <CTABanner />
      </main>

      <Footer />

      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-50 transition-transform active:scale-90"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} />
      </motion.button>
    </div>
  );
}
