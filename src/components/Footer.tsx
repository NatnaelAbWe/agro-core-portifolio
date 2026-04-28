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
    <footer className="bg-white border-t border-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-emerald-600" />
              <span className="font-bold text-2xl tracking-tight text-slate-900">
                Agrocore Solutions
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
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
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 transition-all"
                >
                  <social.icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links Only */}
          <div className="lg:justify-self-end">
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#strengths"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Strengths
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-400">
          <p>© 2026 Agrocore Solutions PLC. Registered in Addis Ababa.</p>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1">
              <LinkIcon size={10} /> info@agrocore.et
            </span>
            <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
            <span>Built for scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
