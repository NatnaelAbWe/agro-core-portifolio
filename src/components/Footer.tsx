import React from "react";
import {
  Leaf,
  Facebook,
  MessageCircle,
  Send,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-surface-container-highest py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-2xl tracking-tight text-primary">
                Agrocore
              </span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Empowering business growth and ensuring regulatory compliance for
              local and international enterprises in Ethiopia.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: MessageCircle, label: "WhatsApp" },
                { icon: Send, label: "Telegram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social, i) => (
                <button
                  key={i}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                >
                  <social.icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#strengths"
                  className="hover:text-primary transition-colors"
                >
                  Strengths
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-primary transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">
              Legal
            </h4>
            <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Governance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">
              Market Insights
            </h4>
            <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ethiopian Market Report 2026
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Regulatory Landscape Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sector Opportunities
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-container-highest flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/50">
          <p>© 2026 Agrocore Solutions PLC. Registered in Addis Ababa.</p>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1">
              <LinkIcon size={10} /> info@agrocore.et
            </span>
            <span className="w-1 h-1 bg-primary rounded-full" />
            <span>Built for scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
