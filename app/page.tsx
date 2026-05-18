"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronDown, Phone, ArrowRight, Play, ChevronLeft, ChevronRight, Waves, Dumbbell, Users, TreePine, Smile, Activity, ArrowUp, Menu, X, Droplets, Trees, ArrowUpFromLine, Layout, Wind, Club, MapPin, Plane, ShieldCheck, Mail, Clock, CheckCheck } from "lucide-react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";


function AnimatedCounter({ from = 0, to, duration = 2, decimals = 0 }: { from?: number, to: number, duration?: number, decimals?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(progress * (to - from) + from);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span ref={ref} className="relative" suppressHydrationWarning>{count.toFixed(decimals)}</span>;
}

async function submitToSellDo(name: string, email: string, phone: string, formType: string) {
  const apiKey = "5d637388eb7a76c47ce5a7b8910fc68a";
  const srd = "69fdc698735daf713aaaac0d";
  
  const url = new URL("https://app.sell.do/api/leads/create");
  url.searchParams.append("api_key", apiKey);
  url.searchParams.append("sell_do[form][lead][name]", name);
  url.searchParams.append("sell_do[form][lead][email]", email);
  url.searchParams.append("sell_do[form][lead][phone]", phone);
  url.searchParams.append("sell_do[campaign][srd]", srd);
  url.searchParams.append("sell_do[form][note][content]", `Eldeco Latitude 27 - ${formType}`);

  try {
    await fetch(url.toString(), {
      method: "GET",
      mode: "no-cors",
    });
    console.log(`Lead submitted successfully to Sell.do for ${name} (${formType})`);
  } catch (error) {
    console.error("Error submitting lead to Sell.do:", error);
  }
}

async function submitToSMTP(name: string, email: string, phone: string, formType: string) {
  const apiKey = "your-secret-api-key-here"; 
  
  try {
    const response = await fetch("/php-smtp-api/index.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey
      },
      body: JSON.stringify({
        to: "your-email@example.com", 
        subject: `New Lead Alert: Eldeco Latitude 27 - ${formType}`,
        body: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
            <h2 style="color: #10835a; border-bottom: 2px solid #eeeff2; padding-bottom: 10px;">New Lead Received</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px;">Source Form:</td>
                <td style="padding: 8px 0;">${formType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Full Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Mobile:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Date & Time:</td>
                <td style="padding: 8px 0;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            <div style="margin-top: 25px; font-size: 11px; color: #888; border-top: 1px solid #eeeff2; padding-top: 10px;">
              This notification was generated automatically by the Eldeco Latitude 27 SMTP API.
            </div>
          </div>
        `,
        html: true
      })
    });
    const result = await response.json();
    console.log("SMTP Email Response:", result);
  } catch (error) {
    console.error("Error sending lead email via SMTP:", error);
  }
}

export default function Home() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [enquireFormErrors, setEnquireFormErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  useEffect(() => {
    // Open enquire popup after 2 seconds of page load
    const timer = setTimeout(() => {
      setIsEnquireOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const validateName = (value: string) => value.trim().length > 0;
  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value.trim());
  const validatePhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-background text-ink" suppressHydrationWarning>
      <Header />

      <section id="home" className="relative w-full h-auto md:h-[110vh] md:min-h-[900px] overflow-hidden bg-white md:bg-linear-to-b md:from-[#f6faf7] md:via-[#edf4f0] md:to-[#dbe7e0] flex flex-col md:block">
        {/* Mobile Banner - Natural Aspect Ratio */}
        <div className="block md:hidden w-full order-1 relative z-10">
          <img src="/mobile-banner.jpeg" alt="Luxury Apartments" className="w-full h-auto" />
        </div>

        {/* Desktop Building Image Container */}
        <motion.div 
          initial={{ y: "100%" }} 
          animate={{ y: 0 }} 
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} 
          className="hidden md:flex absolute inset-0 justify-center pointer-events-none z-10"
        >
          <img src="/hero-image.png" alt="Luxury Apartments" className="w-full h-full object-cover object-bottom" />
        </motion.div>

        <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(20,131,90,0.18),transparent_40%),radial-gradient(circle_at_84%_22%,rgba(45,91,97,0.14),transparent_42%)] pointer-events-none" />
        
        {/* Background Logo - Hidden on mobile */}
        <motion.div initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 0.8 }} transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }} className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none pb-[700px] md:pb-[850px] select-none">
          <img src="/logo-header.png" alt="Eldeco Logo Background" className="w-[95%] max-w-[1400px] object-contain" />
        </motion.div>

        {/* Reduced gradient overlay for better image clarity */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-linear-to-t from-[#0a1512]/60 to-transparent z-10 pointer-events-none" />

        {/* Hero Text Container */}
        <div className="relative md:absolute md:inset-0 z-20 w-full flex flex-col justify-end order-2 pt-8 md:pt-0">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="w-full max-w-[1400px] mx-auto px-6 pb-16 md:pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="max-w-2xl">
              <h2 className="text-[42px] md:text-[64px] font-serif leading-[1.05] text-ink md:text-white tracking-wide mb-4 md:text-shadow-premium">
                Live Limitless.<br /><span className="text-brand md:text-[#a8dcc7]">Live Elevated.</span>
              </h2>
              <h3 className="text-[18px] md:text-[22px] font-medium text-ink md:text-white mb-3 tracking-wider md:text-shadow-premium">
                Premium 2, 3 & 4 BHK Residences at Eldeco City, IIM Road, Lucknow
              </h3>
              <p className="text-[16px] md:text-[18px] text-ink md:text-white/90 max-w-xl leading-relaxed md:text-shadow-premium font-medium">
                Where luxury meets nature, space meets comfort, and life meets its finest expression.
              </p>
              <div className="w-16 h-[3px] bg-brand md:bg-[#9fd7c1] mt-8 mb-8"></div>
              <div className="flex flex-wrap gap-4">
                <button 
                  suppressHydrationWarning 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="group flex items-center justify-between bg-brand text-white rounded-full pl-6 pr-2 py-2 gap-6 hover:bg-brand-strong transition-all duration-300 shadow-xl">
                  <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Book a Site Visit</span>
                  <div className="bg-white text-brand w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                    <ArrowRight size={14} />
                  </div>
                </button>
                <button 
                  suppressHydrationWarning 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Latitude-Brochure-Final.pdf';
                    link.download = 'Latitude-Brochure-Final.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="group flex items-center justify-between bg-white text-ink rounded-full pl-6 pr-2 py-2 gap-6 hover:bg-brand-soft transition-all duration-300 shadow-xl border border-brand-soft">
                  <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Download Brochure</span>
                  <div className="bg-teal-deep text-white w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-y-1">
                    <ArrowRight size={14} className="rotate-90" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="overview" className="w-full bg-white text-black py-12 md:py-20 relative overflow-hidden">
        {/* Subtle background texture/elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#f7faf8] to-transparent pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: Label + Main Image */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8 md:mb-12"
              >
                <h4 className="text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-brand mb-3">Project Overview</h4>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-[2px] bg-brand" 
                />
              </motion.div>

              <div className="relative w-full h-[350px] md:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1.1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src="/2.jpeg" 
                    alt="Eldeco Latitude Overview" 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-60" />
                
                {/* Floating Detail Overlay */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-10 right-[-20px] bg-white p-6 md:p-8 rounded-2xl shadow-2xl hidden md:block"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand mb-2">Signature Series</p>
                  <p className="text-ink font-serif text-xl">Architectural Excellence</p>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Title + Description Stack */}
            <div className="lg:col-span-6 pt-0 lg:pt-[120px]">
              <div className="overflow-visible mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[36px] md:text-[68px] font-serif leading-[1.2] tracking-tight text-ink py-2"
                >
                  Experience <span className="text-brand">Limitless</span> <br className="hidden md:block" /> Living
                </motion.h2>
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 0.4 }
                  }
                }}
              >
                <motion.p 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  className="text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-8 font-light"
                >
                  Step into a world where every detail is crafted to perfection. At Eldeco Latitude 27, life goes beyond boundaries—offering serene views, abundant greenery, and thoughtfully designed spaces that redefine urban living.
                </motion.p>
                <motion.p 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  className="text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-12 font-light"
                >
                  Located within the well-established township of Eldeco City, this premium residential development offers spacious homes filled with natural light, fresh air, and unmatched comfort. Every corner is designed to provide a sense of openness and tranquility.
                </motion.p>
                
                <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    suppressHydrationWarning 
                    onClick={() => {
                      const distinctionSection = document.getElementById('distinction');
                      if (distinctionSection) {
                        distinctionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="bg-brand text-white px-10 py-4 rounded-full text-[11px] font-bold tracking-[0.25em] uppercase transition-all shadow-xl hover:bg-brand-strong"
                  >
                    Explore Details
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Highlights Section - Branded Green Design */}
      <section id="distinction" className="w-full bg-brand py-20 md:py-32 relative overflow-hidden">
        {/* Animated background glows for premium feel */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] pointer-events-none" 
        />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-start text-left mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-emerald-300 mb-3">The Distinction</h4>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-white" 
              />
            </motion.div>
            <div className="overflow-hidden mt-6">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[32px] md:text-[56px] font-serif text-white leading-tight"
              >
                Eldeco Latitude 27 - Highlights
              </motion.h2>
            </div>
          </div>

          <div className="max-w-4xl">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                }
              }}
              className="grid grid-cols-1 gap-6 md:gap-8"
            >
              {[
                "Half-Olympic-size swimming pool",
                "Overlooking 3-acre central greens",
                "5 lifts per tower for better convenience and circulation",
                "Spacious 3 BHK residences in 1550 sq.ft. and 1850 sq.ft.",
                "3-side-open corner apartments for better light and airflow",
                "State-of-the-art clubhouse with lifestyle and leisure amenities.",
                "New launch luxury development at Sector 22D, Yamuna Expressway",
                "Premium address with strong access to Jewar / Noida International Airport",
                "Podium-based project for enhanced planning and separation of vehicular movement"
              ].map((highlight, idx) => (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
                    show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-5 group cursor-default"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 shadow-xs group-hover:bg-white group-hover:text-brand transition-all duration-300"
                  >
                    <CheckCheck size={16} className="text-emerald-300 group-hover:text-brand transition-colors" />
                  </motion.div>
                  <div className="flex flex-col">
                    <p className="text-[16px] md:text-[20px] font-medium text-white/90 leading-snug group-hover:text-white transition-colors duration-300">
                      {highlight}
                    </p>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="h-px bg-white/20 mt-1.5 origin-left"
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-16 md:mt-20"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                suppressHydrationWarning 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-white text-brand px-10 py-4 rounded-full text-[11px] font-bold tracking-[0.25em] uppercase transition-all shadow-xl hover:bg-emerald-100"
              >
                Get More Info
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <FlatLayoutsSection />
      <AmenitiesSection />
      <CarouselSection />
      <LocationSection />
      <WhyChooseSection />
      <VideoSection />
      <TestimonialSection />
      <MarqueeSection />
      <ContactSection />
      <Footer />

      {/* Enquire Now Popup */}
      <AnimatePresence>
        {isEnquireOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEnquireOpen(false)}
              className="absolute inset-0 bg-[#0d1716]/60 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="relative z-10 w-full max-w-lg bg-brand rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden border border-white/10"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400 rounded-full mix-blend-screen filter blur-[90px] opacity-18 pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-[110px] opacity-6 pointer-events-none"></div>
              
              <button 
                onClick={() => setIsEnquireOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl md:text-4xl font-medium text-white mb-2 tracking-tight">Enquire <span className="bg-linear-to-r from-emerald-300 via-white to-emerald-400 bg-clip-text text-transparent">Now.</span></h3>
              <p className="text-white/80 text-base font-light leading-relaxed mb-8">
                Get exclusive access to premium details, pricing, and floor plans. Our team will connect with you shortly.
              </p>
              
              <form 
                className="flex flex-col gap-6 w-full" 
                onSubmit={(event) => {
                  event.preventDefault();
                  const form = event.currentTarget;
                  const nameValue = String(new FormData(form).get("enq_name") ?? "");
                  const emailValue = String(new FormData(form).get("enq_email") ?? "");
                  const phoneValue = String(new FormData(form).get("enq_phone") ?? "");

                  const nextErrors: { name?: string; email?: string; phone?: string } = {};

                  if (!validateName(nameValue)) {
                    nextErrors.name = "Enter your full name.";
                  }

                  if (!validateEmail(emailValue)) {
                    nextErrors.email = "Enter a valid email address.";
                  }

                  if (!validatePhone(phoneValue)) {
                    nextErrors.phone = "Enter a valid mobile number.";
                  }

                  setEnquireFormErrors(nextErrors);

                  if (Object.keys(nextErrors).length === 0) {
                    submitToSellDo(nameValue, emailValue, phoneValue, "Enquire Now Popup Form");
                    submitToSMTP(nameValue, emailValue, phoneValue, "Enquire Now Popup Form");
                    setIsEnquireOpen(false);
                    form.reset();
                    setEnquireFormErrors({});
                  }
                }}
              >
                <div className="relative z-0 w-full group">
                  <input 
                    suppressHydrationWarning
                    type="text" 
                    name="enq_name" 
                    id="enq_name" 
                    className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-white/15 appearance-none focus:outline-none focus:ring-0 focus:border-white/35 peer transition-colors" 
                    placeholder=" " 
                    required 
                  />
                  <label htmlFor="enq_name" className="peer-focus:font-medium absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                  {enquireFormErrors.name && <p className="mt-2 text-xs text-rose-400">{enquireFormErrors.name}</p>}
                </div>

                <div className="relative z-0 w-full group">
                  <input 
                    suppressHydrationWarning
                    type="email" 
                    name="enq_email" 
                    id="enq_email" 
                    inputMode="email"
                    onChange={() => setEnquireFormErrors((current) => ({ ...current, email: undefined }))}
                    className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-white/15 appearance-none focus:outline-none focus:ring-0 focus:border-white/35 peer transition-colors" 
                    placeholder=" " 
                    required 
                  />
                  <label htmlFor="enq_email" className="peer-focus:font-medium absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                  {enquireFormErrors.email && <p className="mt-2 text-xs text-rose-400">{enquireFormErrors.email}</p>}
                </div>

                <div className="relative z-0 w-full group">
                  <input 
                    suppressHydrationWarning
                    type="tel" 
                    name="enq_phone" 
                    id="enq_phone" 
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={15}
                    onChange={(event) => {
                      const digitsOnly = event.currentTarget.value.replace(/\D/g, "");
                      event.currentTarget.value = digitsOnly;
                      setEnquireFormErrors((current) => ({ ...current, phone: undefined }));
                    }}
                    className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-white/15 appearance-none focus:outline-none focus:ring-0 focus:border-white/35 peer transition-colors" 
                    placeholder=" " 
                    required 
                  />
                  <label htmlFor="enq_phone" className="peer-focus:font-medium absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>
                  {enquireFormErrors.phone && <p className="mt-2 text-xs text-rose-400">{enquireFormErrors.phone}</p>}
                </div>

                <motion.button 
                  suppressHydrationWarning
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full bg-white text-brand font-semibold text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-emerald-100 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:shadow-[0_0_30px_rgba(14,123,83,0.16)]"
                >
                  Send Enquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const CAROUSEL_DATA = [
  {
    src: "/3.jpeg",
    location: "Live Fitness. Live Active.",
    title: "A lifestyle designed for wellbeing",
    description: "Swimming Pool, Fully equipped Gymnasium, Badminton Court, Open spaces for Yoga & Recreation."
  },
  {
    src: "/4.jpeg",
    location: "Live Green. Live Peaceful.",
    title: "Wake up to lush landscapes",
    description: "Landscaped gardens, Walking pathways, Nature-integrated design making every morning refreshing."
  },
  {
    src: "/5.jpeg",
    location: "Live Social. Live Celebrations.",
    title: "Spaces designed for togetherness",
    description: "Club Latitude, Party Hall, Multipurpose Sports Court. From family celebrations to social gatherings."
  },
  {
    src: "/6.jpeg",
    location: "Comfort & Design",
    title: "Crafted for Spacious Living",
    description: "Only 4 apartments per floor, 3-side open homes ensuring ventilation, large balconies & open views."
  }
];

function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => itemRef.current && setItemWidth(itemRef.current.offsetWidth + 24);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : CAROUSEL_DATA.length - 2));
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % (CAROUSEL_DATA.length - 1));

  return (
    <section id="gallery" className="w-full bg-brand text-white py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-white mb-3">The Atmosphere</h4>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-white" 
              />
            </motion.div>
            <div className="overflow-hidden mt-6">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[32px] md:text-[56px] font-serif leading-[1.1] tracking-wide text-white"
              >
                Lifestyle & Amenities
              </motion.h2>
            </div>
          </div>
          <div className="max-w-md lg:pb-3">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-[15px] text-white/80 leading-relaxed mb-8 font-light"
            >
              Explore a handpicked selection of state-of-the-art amenities, giving you complete fitness routine and serene living within the community itself.
            </motion.p>

          </div>
        </div>
      </div>
      <div className="w-full max-w-[1400px] mx-auto relative px-6 md:px-16 group/carousel">
        <button onClick={handlePrev} className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black z-10 shadow-xl transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hover:scale-110"><ChevronDown size={20} className="rotate-90 ml-[-2px]" /></button>
        <button onClick={handleNext} className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black z-10 shadow-xl transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hover:scale-110"><ChevronDown size={20} className="-rotate-90 mr-[-2px]" /></button>
        <div className="overflow-hidden w-full">
          <motion.div className="flex gap-6 w-max" animate={{ x: itemWidth ? -(currentIndex * itemWidth) : 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            {CAROUSEL_DATA.map((item, idx) => (
              <div key={idx} ref={idx === 0 ? itemRef : null} className="shrink-0 w-[85vw] md:w-[calc((100vw-8rem-3rem)/2)] lg:w-[calc((1400px-8rem-3rem)/2)] h-[240px] md:h-[420px] overflow-hidden rounded-sm group relative cursor-pointer shadow-2xl">
                <img src={item.src} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-linear-to-t from-[#173032] via-[#173032]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
                  <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-300 mb-2 block">{item.location}</span>
                    <h3 className="text-[24px] md:text-[32px] font-serif text-white mb-3 leading-tight">{item.title}</h3>
                    <p className="text-[13px] md:text-[14px] text-gray-300 mb-8 line-clamp-3 leading-relaxed max-w-sm">{item.description}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 mt-16 flex justify-center gap-3">
        {Array.from({ length: CAROUSEL_DATA.length - 1 }).map((_, idx) => (
          <button suppressHydrationWarning key={idx} onClick={() => setCurrentIndex(idx)} className={`transition-all duration-500 rounded-full h-1.5 ${currentIndex === idx ? 'w-10 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'}`} />
        ))}
      </div>
    </section>
  );
}

const FEATURES = [
  { num: "01", title: "Trusted Eldeco Legacy", desc: "Backed by decades of experience in crafting premium residential communities with unmatched quality and execution." },
  { num: "02", title: "Prime Location, Lucknow", desc: "Strategically located at the entrance of Eldeco City, IIM Road. Just 10 mins to Kapurthala market, 25 mins to Railway Station, 35 mins to Airport." },
  { num: "03", title: "Premium Low-Density Living", desc: "Nature + Luxury integration with only 4 apartments per floor, 3-side open homes ensuring maximum ventilation & natural light." },
  { num: "04", title: "Ready Township Ecosystem", desc: "A well-established township with approx. 1.3 acres of lush greens, near top schools like DPS & Central School, hospitals & daily conveniences." }
];

function WhyChooseSection() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-gray-200 bg-gray-50/80 shadow-sm transition-all hover:shadow-md cursor-default">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-black">Why Choose Eldeco Latitude 27?</span>
            </div>
          </div>
          <div className="max-w-[900px]">
            <h2 className="text-[48px] md:text-[64px] font-serif leading-[1.1] text-black">Your Limitless Life Awaits.</h2>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 mb-16"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center">
            {FEATURES.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }} className="flex gap-8 py-8 border-b border-gray-100 last:border-0 first:pt-0 last:pb-0 relative group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-[#E5E0D8] flex items-center justify-center text-[14px] font-bold text-gray-700 transition-transform duration-500 group-hover:scale-110 shadow-sm">{feature.num}</div>
                <div>
                  <h3 className="text-[26px] md:text-[28px] font-serif text-black mb-3">{feature.title}</h3>
                  <p className="text-[16px] text-gray-500 leading-relaxed max-w-[400px]">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-7 h-full flex flex-col justify-center">
            <div className="w-full aspect-video relative rounded-sm overflow-hidden shadow-2xl">
              <video autoPlay muted loop playsInline poster="/hero-image.png" className="w-full h-full object-cover transition-transform duration-1000">
                <source src="/2nd.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-linear-to-t from-[#122528]/35 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className="w-full bg-brand py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24 relative">
          <motion.h4 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[12px] font-semibold text-white tracking-[0.25em] uppercase mb-6 inline-block border-b border-white/20 pb-2">
            Cinematic Tour
          </motion.h4>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[42px] md:text-[64px] font-serif leading-[1.1] text-white max-w-4xl mx-auto">
            Experience the Pinnacle <br className="hidden md:block" /> of Luxury Living
          </motion.h2>
        </div>
        <motion.div ref={containerRef} style={{ scale, opacity }} className="relative w-full aspect-video md:aspect-21/9 rounded-sm overflow-hidden group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <video autoPlay muted loop playsInline poster="/hero-image.png" className="w-full h-full object-cover transition-transform duration-1000">
            <source src="/1.webm" type="video/webm" />
          </video>
          {/* Removed dark overlays to keep video clear */}
        </motion.div>
      </div>
    </section>
  );
}
const FLOOR_PLAN_DATA = [
  {
    id: 1,
    number: "01",
    title: "CENTRE ONE - 2BHK+2T",
    description: "Centre One plan — 2BHK + 2 Toilets. See carpet, balcony and built-up areas on the plan.",
    image: "/2B-2T.jpeg"
  },
  {
    id: 2,
    number: "02",
    title: "SOUTH 1 - 2BHK+2T+STUDY",
    description: "South 1 plan — 2BHK + 2T + Study. Floor plan shows layout, utility and balcony areas.",
    image: "/2B-2T-study.jpeg"
  },
  {
    id: 3,
    number: "03",
    title: "SOUTH 1 - 2BHK+2T",
    description: "South 1 2BHK plan — compact, well-planned units with balcony and service areas.",
    image: "/2B-2T-South.jpeg"
  },
  {
    id: 4,
    number: "04",
    title: "SOUTH 1 - 3BHK+3T",
    description: "South 1 3BHK plan — larger family layouts with multiple balconies and expansive living areas.",
    image: "/3B-3T.jpeg"
  },
  {
    id: 5,
    number: "05",
    title: "CENTRE ONE - 3BHK+3T",
    description: "Centre One 3BHK plan — premium mid-size apartments with well-defined zones.",
    image: "/3B-3T-centreone.jpeg"
  },
  {
    id: 6,
    number: "06",
    title: "CENTRE ONE - 4BHK+3T",
    description: "Centre One 4BHK plan — the largest configuration with generous living and terrace spaces.",
    image: "/4B-3T.jpeg"
  }
];

function FlatLayoutsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [modalErrors, setModalErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const validateName = (value: string) => value.trim().length > 0;
  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value.trim());
  const validatePhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  };

  const handlePrev = () => setActiveStep((prev) => (prev > 0 ? prev - 1 : FLOOR_PLAN_DATA.length - 1));
  const handleNext = () => setActiveStep((prev) => (prev + 1) % FLOOR_PLAN_DATA.length);

  return (
    <section id="configuration" className="w-full bg-white pt-20 pb-16 relative">
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <div className="flex flex-col items-start text-left">
          <motion.h4 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand text-[12px] font-bold uppercase tracking-[0.4em] mb-4"
          >
            Spatial Design
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[32px] md:text-[56px] font-serif text-ink leading-tight"
          >
            Flat Layouts
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-brand mt-4"
          />
        </div>
      </div>
      {/* Mobile Tab Navigation */}
      <div className="flex md:hidden items-center justify-center gap-3 mb-8 overflow-x-auto py-2 no-scrollbar px-6">
        {FLOOR_PLAN_DATA.map((step, index) => (
          <button
            key={step.id}
            suppressHydrationWarning
            onClick={() => setActiveStep(index)}
            className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-lg font-serif transition-all duration-300 ${
              activeStep === index 
                ? 'bg-brand text-white shadow-lg scale-110' 
                : 'bg-white text-[#CDBA93] border border-gray-100'
            }`}
          >
            {step.number}
          </button>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative">
        {/* Mobile Navigation Arrows - High Visibility */}
        <div className="absolute inset-y-0 left-0 right-0 flex md:hidden items-center justify-between z-30 pointer-events-none px-2">
          <button 
            suppressHydrationWarning
            onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
            className="w-12 h-12 rounded-full bg-brand/80 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white pointer-events-auto active:scale-95 shadow-2xl transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            suppressHydrationWarning
            onClick={(e) => { e.stopPropagation(); handleNext(); }} 
            className="w-12 h-12 rounded-full bg-brand/80 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white pointer-events-auto active:scale-95 shadow-2xl transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile View: Smooth Carousel */}
        <div className="md:hidden overflow-hidden rounded-3xl bg-brand">
          <motion.div 
            className="flex"
            animate={{ x: `-${activeStep * 100}%` }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
              if (swipe) {
                if (offset.x > 0) handlePrev();
                else handleNext();
              }
            }}
          >
            {FLOOR_PLAN_DATA.map((step, index) => (
              <div key={step.id} className="w-full shrink-0 flex flex-col p-6 pb-10 min-h-[500px]">
                <div className="flex gap-4 mb-6">
                  <span className="text-[#CDBA93] text-4xl font-medium font-serif leading-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-white text-xl font-medium mb-1">{step.title}</h3>
                    <p className="text-white/80 text-sm font-light leading-relaxed line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Premium unlock mechanism */}
                {(() => {
                  const shouldShowLock = index > 0 && !isUnlocked;
                  return (
                    <div 
                      className="flex-1 rounded-2xl overflow-hidden relative bg-black/20 shadow-inner cursor-pointer"
                      onClick={() => { if (shouldShowLock) setIsModalOpen(true); }}
                    >
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className={`w-full h-full object-cover transition-all duration-500 ${shouldShowLock ? 'opacity-60 blur-[3px] grayscale-[30%]' : ''}`} 
                      />
                      {shouldShowLock && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                          <div className="bg-brand/90 px-6 py-3 rounded-full text-white text-[10px] tracking-widest uppercase font-bold flex items-center gap-2 shadow-2xl backdrop-blur-md">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            Unlock Image
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop View: Expandable Bento Grid */}
        <div className="hidden md:flex flex-row gap-4 h-[600px]">
          {FLOOR_PLAN_DATA.map((step, index) => {
            const isActive = index === activeStep;
            
            return (
              <motion.div
                key={step.id}
                layout
                onClick={() => setActiveStep(index)}
                className={`relative rounded-3xl cursor-pointer transition-all duration-500 ease-in-out ${isActive ? 'overflow-hidden flex-[10] bg-brand' : 'overflow-visible flex-[1] min-w-[85px] bg-white shadow-sm border border-gray-100 hover:shadow-md'}`}
              >
                {!isActive ? (
                  <div className="w-full h-full flex items-center justify-start pl-5">
                    <span className="text-[#CDBA93] text-5xl font-medium font-serif leading-none py-2 transition-transform duration-300 hover:scale-110 whitespace-nowrap inline-block tabular-nums">
                      {step.number}
                    </span>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="w-full h-full flex flex-col p-8 relative z-10"
                  >
                    <div className="flex gap-6 mb-6 max-w-2xl">
                      <span className="text-[#CDBA93] text-5xl font-medium font-serif leading-none shrink-0">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-white text-3xl font-medium mb-2">{step.title}</h3>
                        <p className="text-white/90 text-base font-light leading-relaxed line-clamp-2">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {/* Premium unlock mechanism (Desktop) */}
                    {(() => {
                      const shouldShowLock = index > 0 && !isUnlocked;
                      return (
                        <div 
                          className={`w-full flex-1 rounded-2xl overflow-hidden relative bg-brand shadow-2xl mt-2 group ${shouldShowLock ? 'cursor-pointer' : ''}`}
                          onClick={() => { if (shouldShowLock) setIsModalOpen(true); }}
                        >
                           <img 
                             src={step.image} 
                             alt={step.title} 
                             className={`w-full h-full object-cover transition-all duration-500 ${shouldShowLock ? 'opacity-60 blur-[3px] grayscale-[30%] group-hover:scale-105' : ''}`} 
                           />
                           {shouldShowLock && (
                             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center transition-opacity duration-300">
                               <div className="bg-brand/90 px-6 py-3 rounded-full text-white text-[11px] tracking-widest uppercase font-bold flex items-center gap-2 shadow-2xl backdrop-blur-md transform transition-all duration-300 group-hover:scale-105">
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                 Unlock Image
                               </div>
                             </div>
                           )}
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsModalOpen(false)}
               className="absolute inset-0 bg-[#0d1716]/60 backdrop-blur-md"
             />
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 20 }}
               className="relative z-10 w-full max-w-lg bg-[#112322] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden border border-white/10"
             >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400 rounded-full mix-blend-screen filter blur-[90px] opacity-18 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-[110px] opacity-6 pointer-events-none"></div>
                
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-white hover:text-white transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>

                <h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Unlock <span className="bg-linear-to-r from-emerald-300 via-white to-emerald-400 bg-clip-text text-transparent">Image.</span></h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                  Please provide your details to view the premium property details and gallery.
                </p>
                
                <form 
                  className="flex flex-col gap-6 w-full" 
                  onSubmit={(event) => {
                    event.preventDefault();
                    const form = event.currentTarget;
                    const nameValue = String(new FormData(form).get("proc_name") ?? "");
                    const emailValue = String(new FormData(form).get("proc_email") ?? "");
                    const phoneValue = String(new FormData(form).get("proc_phone") ?? "");

                    const nextErrors: { name?: string; email?: string; phone?: string } = {};

                    if (!validateName(nameValue)) {
                      nextErrors.name = "Enter your full name.";
                    }

                    if (!validateEmail(emailValue)) {
                      nextErrors.email = "Enter a valid email address.";
                    }

                    if (!validatePhone(phoneValue)) {
                      nextErrors.phone = "Enter a valid mobile number.";
                    }

                    setModalErrors(nextErrors);

                    if (Object.keys(nextErrors).length === 0) {
                      submitToSellDo(nameValue, emailValue, phoneValue, "Unlock Floor Plan Modal Form");
                      submitToSMTP(nameValue, emailValue, phoneValue, "Unlock Floor Plan Modal Form");
                      setIsUnlocked(true);
                      setIsModalOpen(false);
                      form.reset();
                      setModalErrors({});
                    }
                  }}
                >
                  <div className="relative z-0 w-full group">
                    <input 
                      suppressHydrationWarning
                      type="text" 
                      name="proc_name" 
                      id="proc_name" 
                      className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-400 peer transition-colors" 
                      placeholder=" " 
                      required 
                    />
                    <label htmlFor="proc_name" className="peer-focus:font-medium absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                    {modalErrors.name && <p className="mt-2 text-xs text-rose-400">{modalErrors.name}</p>}
                  </div>

                  <div className="relative z-0 w-full group">
                    <input 
                      suppressHydrationWarning
                      type="email" 
                      name="proc_email" 
                      id="proc_email" 
                      inputMode="email"
                      onChange={() => setModalErrors((current) => ({ ...current, email: undefined }))}
                      className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-400 peer transition-colors" 
                      placeholder=" " 
                      required 
                    />
                    <label htmlFor="proc_email" className="peer-focus:font-medium absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                    {modalErrors.email && <p className="mt-2 text-xs text-rose-400">{modalErrors.email}</p>}
                  </div>

                  <div className="relative z-0 w-full group">
                    <input 
                      suppressHydrationWarning
                      type="tel" 
                      name="proc_phone" 
                      id="proc_phone" 
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={15}
                      onChange={(event) => {
                        const digitsOnly = event.currentTarget.value.replace(/\D/g, "");
                        event.currentTarget.value = digitsOnly;
                        setModalErrors((current) => ({ ...current, phone: undefined }));
                      }}
                      className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-400 peer transition-colors" 
                      placeholder=" " 
                      required 
                    />
                    <label htmlFor="proc_phone" className="peer-focus:font-medium absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>
                    {modalErrors.phone && <p className="mt-2 text-xs text-rose-400">{modalErrors.phone}</p>}
                  </div>

                  <motion.button 
                    suppressHydrationWarning
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full bg-white text-ink font-semibold text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-brand-soft transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(14,123,83,0.2)]"
                  >
                    Unlock Details
                  </motion.button>
                </form>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

const TESTIMONIALS_DATA = [
  {
    quote: "Working with Eldeco feels like a partnership; as we continued to use their tool and found more use cases, our feature requests quickly found.",
    name: "Alonso D. Dowson",
    role: "House Owner"
  },
  {
    quote: "The attention to detail in their designs is exceptional. Every corner of our new home feels thoughtfully planned and executed to perfection.",
    name: "Sarah J. Miller",
    role: "Interior Designer"
  },
  {
    quote: "I've worked with many developers, but the transparency and quality provided by the team here is truly in a league of its own.",
    name: "Michael Chen",
    role: "Real Estate Investor"
  }
];

function TestimonialSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isImageRevealed, setIsImageRevealed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#F9F9F9] py-20 md:py-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col items-start text-left mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-brand mb-3">Community Voices</h4>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-brand" 
            />
          </motion.div>
          <div className="overflow-hidden mt-6">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[32px] md:text-[56px] font-serif text-ink leading-tight"
            >
              Happy Users Journey & <br /> Feedbacks
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            {/* Stats Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 flex flex-col justify-between h-[200px]">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="User" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="User" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="User" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="User" />
                </div>
                <div className="flex text-[#D4AF37] gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-[36px] font-medium text-black leading-none mb-2">4.9 / 5.0</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">From bustling urban condos to peaceful...</p>
              </div>
            </div>
            
            {/* Hover Image Card - Toggle Reveal */}
            <div 
              onMouseEnter={() => setIsImageRevealed(!isImageRevealed)}
              className="relative w-full h-[460px] rounded-2xl overflow-hidden cursor-pointer shadow-md bg-gray-100"
            >
              {/* Revealed Image (Bottom) */}
              <div className="absolute inset-0 z-0">
                <img src="/7.jpeg" className="w-full h-full object-cover" alt="House Exterior Alternative" />
              </div>
              
              {/* Cover Image Slices (Top) */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={isImageRevealed ? { 
                      opacity: 0, x: 40, y: -40, scale: 1.1 
                    } : { 
                      opacity: 1, x: 0, y: 0, scale: 1 
                    }}
                    transition={{ 
                      delay: isImageRevealed ? i * 0.04 : (11 - i) * 0.03, 
                      duration: 0.6, 
                      ease: [0.19, 1, 0.22, 1] 
                    }}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      clipPath: `polygon(${(i - 1) * 10}% 0%, ${(i + 1) * 10}% 0%, ${i * 10}% 100%, ${(i - 2) * 10}% 100%)`,
                    }}
                  >
                    <img src="/8.jpeg" className="w-full h-full object-cover" alt="House Exterior" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            {/* Top Image with Play Button */}
            <div className="relative w-full h-[360px] rounded-2xl overflow-hidden shadow-md">
              <img src="/1.jpeg" className="w-full h-full object-cover" alt="Modern House" />
              <div className="absolute inset-0 bg-linear-to-t from-[#112223]/45 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-[18px] font-medium mb-1">Alonso D. Dowson</h4>
                <p className="text-[12px] text-white">House Owner</p>
              </div>
            </div>

            {/* Black Testimonial Card - Animated Content */}
            <div className="bg-brand text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between h-[300px] relative overflow-hidden">
              <div className="absolute bottom-[-30px] right-2 text-[120px] leading-none text-white/5 font-serif pointer-events-none">”</div>
              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex text-[#D4AF37] gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <p className="text-[15px] leading-relaxed text-white/90 font-light italic">
                      " {TESTIMONIALS_DATA[activeTestimonial].quote} "
                    </p>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6"
                  >
                    <h4 className="text-[16px] font-medium text-white">{TESTIMONIALS_DATA[activeTestimonial].name}</h4>
                    <p className="text-[12px] text-white mt-1">{TESTIMONIALS_DATA[activeTestimonial].role}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            {/* Tags Card */}
            <div className="bg-[#A98C66] rounded-2xl p-5 shadow-md flex flex-col justify-center gap-2 h-[180px]">
              <div className="bg-white rounded-full px-4 py-1 w-max shadow-sm transition-transform hover:-translate-y-1 cursor-default">
                <span className="text-[10px] font-semibold text-black"><span className="text-[#A98C66]">Alonso D.</span> — Quality design</span>
              </div>
              <div className="bg-white rounded-full px-4 py-1 w-max shadow-sm transition-transform hover:-translate-y-1 cursor-default ml-4">
                <span className="text-[10px] font-semibold text-black"><span className="text-[#A98C66]">Miranda</span> — One of the best development</span>
              </div>
              <div className="bg-white rounded-full px-4 py-1 w-max shadow-sm transition-transform hover:-translate-y-1 cursor-default">
                <span className="text-[10px] font-semibold text-black"><span className="text-[#A98C66]">Nelson M.</span> — Unbelievable & next-gen design team</span>
              </div>
              <div className="bg-white rounded-full px-4 py-1 w-max shadow-sm transition-transform hover:-translate-y-1 cursor-default ml-2">
                <span className="text-[10px] font-semibold text-black"><span className="text-[#A98C66]">Alvon B.</span> — Better quality design, communication ui & ux</span>
              </div>
            </div>

            {/* Marquee Image Card */}
            <div className="relative w-full h-[348px] rounded-2xl overflow-hidden shadow-md group">
              <img src="/5.jpeg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Futuristic House" />
              <div className="absolute inset-0 bg-[#0b1b1c]/15"></div>
              <div className="absolute bottom-8 left-0 right-0 overflow-hidden pointer-events-none">
                <motion.div 
                  animate={{ x: ["0%", "-50%"] }} 
                  transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
                  className="flex whitespace-nowrap"
                >
                  <span className="text-[44px] md:text-[50px] font-bold text-white tracking-tight pr-5">
                    Quality real estate solutions Quality real estate solutions Quality real estate solutions
                  </span>
                  <span className="text-[44px] md:text-[50px] font-bold text-white tracking-tight pr-5">
                    Quality real estate solutions Quality real estate solutions Quality real estate solutions
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Percent Card */}
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col justify-center items-center h-[124px] relative overflow-hidden text-center">
              <p className="text-[12px] text-gray-500 font-medium mb-0 relative z-10">Quality real estate solutions</p>
              <h3 className="text-[64px] md:text-[72px] leading-none font-medium text-transparent relative z-10 tracking-tighter" 
                  style={{ WebkitTextStroke: "1px #CDBA93", opacity: 0.9 }}>
                <AnimatedCounter from={50} to={98.8} duration={2.5} decimals={1} />%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const AMENITIES_DATA = [
  {
    title: "Swimming Pool",
    iconSrc: "/swimming-pool.png",
    desc: "A lifestyle designed for your wellbeing. As highlighted in the brochure, residents can enjoy a complete fitness routine within the community itself.",
    image: "/6.jpeg"
  },
  {
    title: "Gymnasium",
    iconSrc: "/weightlifting.png",
    desc: "Fully equipped Gymnasium. Live fitness and live active with state-of-the-art equipment designed for your daily wellbeing and complete fitness routine.",
    image: "/gym.png"
  },
  {
    title: "Club Latitude",
    iconSrc: "/night-club.png",
    desc: "Spaces designed for togetherness. Featuring a Party Hall where, from family celebrations to social gatherings, every moment becomes memorable here.",
    image: "/club.png"
  },
  {
    title: "Gardens",
    iconSrc: "/park.png",
    desc: "Wake up to lush landscapes and landscaped gardens. Nature-integrated design making every morning refreshing and peaceful for all residents.",
    image: "/gardens.png"
  },
  {
    title: "Play Areas",
    iconSrc: "/playground.png",
    desc: "Designer children's play area surrounded by safe lush greenery. A perfect space for children to explore, play, and grow in a secure environment.",
    image: "/play.png"
  },
  {
    title: "Sports Court",
    iconSrc: "/sport.png",
    desc: "Premium multipurpose sports court for tennis and badminton. Perfectly designed for evening matches with professional floodlighting and surfacing.",
    image: "/sports.png"
  }
];

function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-white py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col items-start text-left mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-brand mb-3">What We Offer</h4>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-brand" 
            />
          </motion.div>
          <div className="overflow-hidden mt-6">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[32px] md:text-[56px] font-serif text-ink leading-tight"
            >
              House Amenities
            </motion.h2>
          </div>
        </div>
        
        <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center gap-2 md:gap-6 max-w-[1000px] mx-auto mt-16 px-2">
          {AMENITIES_DATA.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button 
                suppressHydrationWarning
                key={idx} 
                onClick={() => setActiveTab(idx)}
                className={`flex flex-col items-center justify-center w-full aspect-square md:w-[140px] md:h-[140px] transition-all duration-300 ${isActive ? 'border-2 border-black bg-white shadow-xl scale-105 z-10' : 'border border-transparent hover:border-gray-200 hover:bg-gray-50'}`}
              >
                <img src={item.iconSrc} alt={item.title} className={`mb-3 md:mb-4 transition-all duration-300 ${isActive ? 'w-8 h-8 md:w-10 md:h-10 opacity-100 grayscale-0' : 'w-7 h-7 md:w-9 md:h-9 opacity-50 grayscale'}`} />
                <span className={`text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-center px-1 ${isActive ? 'text-black' : 'text-gray-500'}`}>{item.title}</span>
              </button>
            );
          })}
        </div>

        <div className="relative max-w-[1200px] mx-auto mt-20 md:mt-32 mb-10 md:mb-16 flex flex-col md:block">
          <div className="w-full md:w-[90%] bg-brand pt-16 pb-24 px-8 md:pt-0 md:pb-0 md:pl-24 md:pr-[50%] md:h-[500px] flex flex-col justify-center relative z-0 shadow-2xl">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.4 }}
               >
                 <h3 className="text-[36px] md:text-[46px] font-serif text-white mb-6 leading-tight tracking-wide">{AMENITIES_DATA[activeTab].title}</h3>
                 <p className="text-[15px] leading-[1.8] text-white mb-10 max-w-md font-light">{AMENITIES_DATA[activeTab].desc}</p>
                 <button suppressHydrationWarning className="bg-white text-ink px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-brand-soft transition-colors shadow-lg rounded-full">
                   Get More Info
                 </button>
               </motion.div>
             </AnimatePresence>
          </div>
          
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative md:absolute md:right-[4%] md:top-[-40px] w-[90%] mx-auto md:mx-0 md:w-[45%] h-[220px] md:h-[460px] z-10 shadow-2xl -mt-10 md:mt-0 overflow-hidden border-8 md:border-12 border-white"
          >
             <AnimatePresence mode="wait">
               <motion.img
                 key={activeTab}
                 initial={{ opacity: 0, scale: 1.05 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 0.5 }}
                 src={AMENITIES_DATA[activeTab].image} 
                 alt={AMENITIES_DATA[activeTab].title}
                 className="w-full h-full object-cover absolute inset-0" 
               />
             </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
function LocationSection() {
  return (
    <section id="location" className="w-full bg-white py-20 md:py-32 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-16">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-brand mb-3">Strategic Map</h4>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-brand" 
            />
          </motion.div>
          <div className="overflow-hidden mt-6">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[32px] md:text-[56px] font-serif text-ink leading-tight"
            >
              Location
            </motion.h2>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col">
        <div className="w-full relative flex justify-center mb-6 md:mb-10">
          <img 
            src="/image.png" 
            alt="Map Location" 
            className="w-full max-w-[1000px] h-auto max-h-[600px] object-contain mix-blend-multiply opacity-95 transition-all duration-700 hover:opacity-100 hover:scale-105"
          />
        </div>

        {/* Mobile View: Simple Vertical List (Hidden on Desktop) */}
        <div className="md:hidden mt-10 space-y-8">
          {[
            { text: "Prime location on IIM Road, one of Lucknow’s emerging residential corridors", icon: <MapPin size={18} /> },
            { text: "Excellent connectivity to Sitapur Road, Hardoi Road & Ring Road", icon: <Activity size={18} /> },
            { text: "Close proximity to Indian Institute of Management Lucknow", icon: <Layout size={18} /> },
            { text: "Easy access to Chaudhary Charan Singh International Airport", icon: <Plane size={18} /> },
            { text: "Well-connected to Charbagh Railway Station", icon: <Wind size={18} /> },
            { text: "Nearby reputed schools, colleges & healthcare institutions", icon: <ShieldCheck size={18} /> },
            { text: "Minutes away from shopping destinations, entertainment hubs & daily conveniences", icon: <Smile size={18} /> },
            { text: "Smooth connectivity to Hazratganj, Gomti Nagar & central Lucknow", icon: <Droplets size={18} /> },
            { text: "Surrounded by upcoming residential and commercial developments", icon: <Trees size={18} /> },
            { text: "Peaceful low-density environment with wide roads and greener surroundings", icon: <Activity size={18} /> }
          ].map((item, i) => (
            <div key={i} className="flex gap-5 group">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/5 flex items-center justify-center text-brand">
                {item.icon}
              </div>
              <div className="flex-1 pb-6 border-b border-gray-100 last:border-0">
                <p className="text-[15px] md:text-[16px] leading-relaxed text-ink font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Premium Masonry Bento (Hidden on Mobile) */}
        <div className="hidden md:block mt-6 md:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-min">
            {/* 1. Prime Location - Large Featured Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="lg:col-span-4 lg:row-span-1 bg-brand rounded-4xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group shadow-2xl"
            >
              <MapPin className="absolute top-10 right-10 text-white/10 group-hover:scale-110 transition-transform duration-700" size={120} />
              <div className="relative z-10">
                <span className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">Emerging Residential Corridor</span>
                <h3 className="text-white text-2xl md:text-4xl font-serif leading-tight">
                  Prime location on IIM Road, one of Lucknow’s emerging residential corridors
                </h3>
              </div>
            </motion.div>

            {/* 2. Connectivity - Accent Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="lg:col-span-2 bg-[#F7F9F8] border border-brand/10 rounded-4xl p-8 flex flex-col justify-between group hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shadow-lg">
                <Activity size={24} />
              </div>
              <p className="text-[17px] md:text-[19px] font-medium text-ink leading-relaxed mt-8">
                Excellent connectivity to Sitapur Road, Hardoi Road & Ring Road
              </p>
            </motion.div>

            {/* 3. IIM Proximity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="lg:col-span-3 bg-white border border-gray-100 rounded-4xl p-10 flex items-center gap-8 shadow-sm hover:shadow-xl transition-all"
            >
              <span className="text-5xl font-serif text-brand/10">03</span>
              <p className="text-[18px] md:text-[21px] font-serif italic text-ink">
                Close proximity to Indian Institute of Management Lucknow
              </p>
            </motion.div>

            {/* 4. Airport */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="lg:col-span-3 bg-white border border-gray-100 rounded-4xl p-10 flex items-center gap-8 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-brand">
                <Plane size={28} />
              </div>
              <p className="text-[18px] md:text-[21px] font-medium text-ink">
                Easy access to Chaudhary Charan Singh International Airport
              </p>
            </motion.div>

            {/* 5. Railway */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="lg:col-span-2 bg-[#FAF9F6] border border-[#F5E6D3] rounded-4xl p-8 flex flex-col justify-end min-h-[220px]"
            >
              <Wind className="text-brand/20 mb-6" size={32} />
              <p className="text-[16px] md:text-[18px] font-medium text-ink">
                Well-connected to Charbagh Railway Station
              </p>
            </motion.div>

            {/* 6. Schools/Health */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="lg:col-span-4 bg-white border border-gray-100 rounded-4xl p-8 md:p-12 flex items-center gap-8 shadow-sm"
            >
              <div className="flex -space-x-4">
                 <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center border-4 border-white z-20 shadow-lg"><ShieldCheck size={24} /></div>
                 <div className="w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center border-4 border-white z-10"><Droplets size={24} /></div>
              </div>
              <p className="text-[18px] md:text-[22px] font-medium text-ink">
                Nearby reputed schools, colleges & healthcare institutions
              </p>
            </motion.div>

            {/* 7. Shopping */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
              className="lg:col-span-3 bg-white border border-gray-100 rounded-4xl p-10 flex flex-col justify-between hover:bg-gray-50 transition-colors"
            >
              <Smile className="text-brand" size={32} />
              <p className="text-[18px] font-medium text-ink mt-8">
                Minutes away from shopping destinations, entertainment hubs & daily conveniences
              </p>
            </motion.div>

            {/* 8. City Reach */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
              className="lg:col-span-3 bg-brand text-white rounded-4xl p-10 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              <p className="text-[19px] md:text-[23px] font-serif leading-relaxed relative z-10">
                Smooth connectivity to Hazratganj, Gomti Nagar & central Lucknow
              </p>
            </motion.div>

            {/* 9. Upcoming Growth */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
              className="lg:col-span-3 bg-gray-50 rounded-4xl p-8 border border-gray-100"
            >
              <p className="text-[16px] md:text-[18px] text-gray-500 uppercase tracking-widest font-bold mb-4">Future Potential</p>
              <p className="text-[19px] md:text-[22px] font-medium text-ink">
                Surrounded by upcoming residential and commercial developments
              </p>
            </motion.div>

            {/* 10. Peaceful Environment */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.9 }}
              className="lg:col-span-3 bg-[#F4F9F4] rounded-4xl p-8 border border-brand/5 flex items-center gap-8"
            >
              <Trees className="text-brand shrink-0" size={48} />
              <p className="text-[19px] md:text-[22px] font-medium text-brand">
                Peaceful low-density environment with wide roads and greener surroundings
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


function MarqueeSection() {
  return (
    <section className="relative w-full bg-white pt-10 pb-4 overflow-hidden">
      <div className="flex whitespace-nowrap w-full">
        <motion.div 
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-black text-6xl md:text-[90px] font-bold tracking-tighter px-8 md:px-12">Talk with us!</span>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-black opacity-20"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const validateName = (value: string) => value.trim().length > 0;
  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value.trim());
  const validatePhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  };

  return (
    <section id="contact" className="w-full bg-white py-20 md:py-32 flex flex-col items-center justify-center relative">
      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col">
        {/* Premium Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto bg-brand rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden mt-10 border border-white/10"
        >
          {/* Decorative background glow */}
          <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-emerald-400 rounded-full mix-blend-screen filter blur-[120px] opacity-12 pointer-events-none"></div>
          <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-[120px] opacity-8 pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">Your Limitless<br/><span className="bg-linear-to-r from-emerald-300 via-white to-emerald-400 bg-clip-text text-transparent">Life Awaits.</span></h3>
              <p className="text-white text-lg font-light leading-relaxed mb-8 max-w-md">
                Book your dream home at Eldeco Latitude 27 today and experience a lifestyle crafted for the future. Schedule a site visit, get price details, or talk to our expert.
              </p>
            </div>
            
            <form
              className="flex flex-col gap-8 w-full max-w-md ml-auto"
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const nameValue = String(new FormData(form).get("name") ?? "");
                const emailValue = String(new FormData(form).get("email") ?? "");
                const phoneValue = String(new FormData(form).get("phone") ?? "");

                const nextErrors: { name?: string; email?: string; phone?: string } = {};

                if (!validateName(nameValue)) {
                  nextErrors.name = "Enter your full name.";
                }

                if (!validateEmail(emailValue)) {
                  nextErrors.email = "Enter a valid email address.";
                }

                if (!validatePhone(phoneValue)) {
                  nextErrors.phone = "Enter a valid mobile number.";
                }

                setFormErrors(nextErrors);

                if (Object.keys(nextErrors).length > 0) {
                  return;
                }

                submitToSellDo(nameValue, emailValue, phoneValue, "Contact Section Form");
                submitToSMTP(nameValue, emailValue, phoneValue, "Contact Section Form");

                setIsThankYouOpen(true);
                form.reset();
                setFormErrors({});
              }}
            >
              <div className="relative z-0 w-full group">
                <input suppressHydrationWarning type="text" name="name" id="name" className="block py-3 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-white/15 appearance-none focus:outline-none focus:ring-0 focus:border-white/35 peer transition-colors" placeholder=" " required />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-lg text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Full Name</label>
                <p className="mt-2 text-xs text-white">Enter your name as it appears on your enquiry.</p>
                {formErrors.name && <p className="mt-2 text-xs text-rose-400">{formErrors.name}</p>}
              </div>

              <div className="relative z-0 w-full group">
                <input
                  suppressHydrationWarning
                  type="email"
                  name="email"
                  id="email"
                  inputMode="email"
                  onChange={() => setFormErrors((current) => ({ ...current, email: undefined }))}
                  className="block py-3 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-white/15 appearance-none focus:outline-none focus:ring-0 focus:border-white/35 peer transition-colors"
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-lg text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email Address</label>
                <p className="mt-2 text-xs text-white">We’ll send the brochure and payment details here.</p>
                {formErrors.email && <p className="mt-2 text-xs text-rose-400">{formErrors.email}</p>}
              </div>

              <div className="relative z-0 w-full group">
                <input
                  suppressHydrationWarning
                  type="tel"
                  name="phone"
                  id="phone"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={15}
                  onChange={(event) => {
                    const digitsOnly = event.currentTarget.value.replace(/\D/g, "");
                    event.currentTarget.value = digitsOnly;
                    setFormErrors((current) => ({ ...current, phone: undefined }));
                  }}
                  className="block py-3 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-white/15 appearance-none focus:outline-none focus:ring-0 focus:border-white/35 peer transition-colors"
                  placeholder=" "
                  required
                />
                <label htmlFor="phone" className="peer-focus:font-medium absolute text-lg text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Mobile Number</label>
                <p className="mt-2 text-xs text-white">A premium advisor will call you back shortly.</p>
                {formErrors.phone && <p className="mt-2 text-xs text-rose-400">{formErrors.phone}</p>}
              </div>

              <motion.button 
                suppressHydrationWarning
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full bg-white text-ink font-semibold text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-brand-soft transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:shadow-[0_0_30px_rgba(14,123,83,0.16)]"
              >
                Schedule a Site Visit
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isThankYouOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0d1716]/65 backdrop-blur-md"
              onClick={() => setIsThankYouOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="relative z-10 w-full max-w-md overflow-hidden rounded-4xl border border-white/15 bg-brand p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.12),transparent_42%)] pointer-events-none" />

              <div className="relative flex flex-col items-center text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-300">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="mt-6 text-3xl md:text-4xl font-medium tracking-tight text-white leading-none">
                  Thank you.
                </h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-white">
                  Our team will respond shortly.
                </p>
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={() => setIsThankYouOpen(false)}
                  className="mt-8 w-full rounded-full border border-white/15 bg-white text-zinc-950 px-6 py-3 text-sm font-semibold tracking-[0.2em] uppercase transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  aria-label="Close thank you popup"
                >
                  OK
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


