import React from "react";
import { Leaf, Menu, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NavItem = ({
  href,
  children,
  active = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`font-medium transition-colors hover:text-primary ${active ? "text-primary" : "text-on-surface-variant"}`}
  >
    {children}
  </a>
);

export const Navbar = ({
  scrolled,
  theme,
  toggleTheme,
  isMenuOpen,
  setIsMenuOpen,
}: {
  scrolled: boolean;
  theme: "light" | "dark";
  toggleTheme: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}) => {
  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? "bg-surface-container-lowest/90 backdrop-blur-md border-surface-container-highest shadow-sm py-4" : "bg-transparent border-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-primary-container/10 rounded-xl transition-colors group-hover:bg-primary-container/20">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-primary">
              Agrocore Solutions PLC
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavItem href="#home" active>
              Home
            </NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#strengths">Strengths</NavItem>
            <NavItem href="#partners">Partners</NavItem>
            <NavItem href="#team">Team</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-on-primary font-medium text-sm rounded-full shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95">
              Get Started
            </button>
            <button
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-surface-container-lowest shadow-2xl border-b border-surface-container-highest p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {[
                "Home",
                "Services",
                "Strengths",
                "Partners",
                "Team",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`p-3 rounded-xl font-medium ${item === "Home" ? "bg-primary-container/10 text-primary" : "text-on-surface-variant"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
