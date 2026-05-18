"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 w-full bg-white/95 border-b-4 border-brand z-50 backdrop-blur-sm shadow-sm"
      >
        <div className="max-w-[1400px] mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img src="/logoeldeco.png" alt="Eldeco Logo" className="h-7 md:h-10 w-auto object-contain" />
            </Link>
          </div>
          <nav className="hidden lg:flex items-center gap-10 text-[13px] font-semibold tracking-[0.15em] text-ink uppercase">
            {[
              { label: "HOME", href: "/#home" },
              { label: "OVERVIEW", href: "/#overview" },
              { label: "CONFIGURATION", href: "/#configuration" },
              { label: "GALLERY", href: "/#gallery" },
              { label: "LOCATION", href: "/#location" },
              { label: "CONTACT US", href: "/#contact" }
            ].map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="relative py-2 group hover:text-brand transition-colors duration-300"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <a href="tel:+919821255300" className="hidden md:flex items-center gap-4 group hover:opacity-90 transition-opacity">
            <div className="w-12 h-12 bg-brand-soft rounded-full flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
              <Phone size={18} fill="currentColor" />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-brand-strong tracking-widest uppercase mb-1">Call Us Now</span>
              <span className="text-[14px] font-bold bg-brand text-white px-4 py-1.5 rounded-full shadow-sm">+91 9821255300</span>
            </div>
          </a>
          
          <button 
            suppressHydrationWarning
            className="lg:hidden p-2 text-ink"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>

      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-[110] p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <img src="/logoeldeco.png" alt="Eldeco Logo" className="h-8 w-auto object-contain" />
                <button suppressHydrationWarning onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-ink">
                  <X size={28} />
                </button>
              </div>
              <nav className="flex flex-col gap-6 text-[15px] font-semibold tracking-widest text-ink uppercase">
                <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">HOME</Link>
                <Link href="/#overview" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">OVERVIEW</Link>
                <Link href="/#configuration" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">CONFIGURATION</Link>
                <Link href="/#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">GALLERY</Link>
                <Link href="/#location" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">LOCATION</Link>
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">CONTACT US</Link>
              </nav>
              <div className="mt-auto pt-8 border-t border-gray-100">
                <a href="tel:+919821255300" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-brand-soft rounded-full flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <Phone size={16} fill="currentColor" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-brand-strong tracking-widest uppercase">Call Us Now</span>
                    <span className="text-[14px] font-medium text-ink group-hover:text-brand transition-colors">+91 9821255300</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Spacer to push content down because header is fixed */}
      <div className="h-20 md:h-24"></div>
    </>
  );
}
