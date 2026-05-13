"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] pt-24 pb-12 flex flex-col items-center justify-center relative">
      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col">
        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center mb-24">
          
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <h4 className="text-white text-sm tracking-wide font-light">Catch us here</h4>
            <div className="flex flex-col gap-4 text-white text-base font-light">
              <p>Eldeco City, IIM Road, Lucknow</p>
              <a href="mailto:info@eldeco.in" className="hover:text-[#CDBA93] transition-colors">info@eldeco.in</a>
              <p>+91 9821255300</p>
            </div>
          </div>

          {/* Middle Column - Google Map Embed & Socials */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-2xl relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.623123456789!2d80.9170797!3d26.9422852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399956905081d961:0xb0ad8c9b855de525!2sEldeco%20city!5e0!3m2!1sen!2sin!4v1714578120000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
            
            <div className="flex items-center justify-center gap-6">
              <a href="#" className="text-white hover:text-[#CDBA93] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-[#CDBA93] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-[#CDBA93] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="text-white hover:text-[#CDBA93] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-6">
            <h4 className="text-white text-sm tracking-wide font-light">Opening hours</h4>
            <div className="flex flex-col gap-4 text-white text-base font-light">
              <p>Mon: <span className="text-white">10:00am — 09:00pm</span></p>
              <p>Thu — Sat: <span className="text-white">10:00am — 09:00pm</span></p>
              <p>Sunday: <span className="text-white">close</span></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white text-sm font-light text-center md:text-left">
            © All rights reserved <br className="md:hidden"/> by <span className="text-white">Eldeco Latitude 27</span>
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-white hover:text-brand transition-colors text-[11px] font-medium uppercase tracking-[0.2em]">
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-last md:order-none">
            <p className="text-white/60 text-[11px] md:text-sm font-light text-center">
              Designed & developed by <span className="text-[#CDBA93] font-medium tracking-wide">Zlaark</span>
            </p>
            <button suppressHydrationWarning onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-white hover:border-white transition-all group">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
