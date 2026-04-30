"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronDown, Phone, ArrowRight, Play, ChevronRight, Waves, Dumbbell, Users, TreePine, Smile, Activity } from "lucide-react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";


function AnimatedCounter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F9F9]">
      <header className="w-full bg-white border-b border-gray-100 z-50 relative">
        <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo-header.png" alt="Eldeco Logo" className="h-24 w-auto object-contain" />
          </div>
          <nav className="hidden lg:flex items-center gap-10 text-[13px] font-semibold tracking-[0.15em] text-black uppercase">
            <a href="#" className="hover:text-gray-500 transition-colors">HOME</a>
            <a href="#" className="hover:text-gray-500 transition-colors">OVERVIEW</a>
            <a href="#" className="hover:text-gray-500 transition-colors">CONFIGURATION</a>
            <a href="#" className="hover:text-gray-500 transition-colors">GALLERY</a>
            <a href="#" className="hover:text-gray-500 transition-colors">LOCATION</a>
            <a href="#" className="hover:text-gray-500 transition-colors">CONTACT US</a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black">
              <Phone size={18} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-black tracking-widest uppercase mb-1">Call Us Now</span>
              <span className="text-[15px] font-medium text-gray-500">+91 9821255300</span>
            </div>
          </div>
        </div>
      </header>

      <section className="relative w-full h-[110vh] min-h-[900px] overflow-hidden bg-linear-to-b from-[#fdfdfd] to-[#e4e4e4] flex flex-col justify-end">
        <motion.div initial={{ y: "50%", opacity: 0 }} animate={{ y: 0, opacity: 0.9 }} transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }} className="absolute inset-0 flex items-center justify-center pointer-events-none pb-140 select-none">
          <h1 className="font-serif text-black opacity-90 text-center leading-none" style={{ fontSize: "clamp(80px, 20vw, 350px)" }}>ELDECO</h1>
        </motion.div>
        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="absolute bottom-0 left-0 right-0 w-full h-full flex justify-center pointer-events-none z-10">
          <img src="/hero-image.png" alt="Luxury Apartments" className="w-full h-full object-cover object-bottom" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 1 }} className="relative z-20 w-full max-w-[1400px] mx-auto px-6 pb-16 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl text-white">
            <h2 className="text-[42px] md:text-[64px] font-serif leading-[1.05] text-white tracking-wide mb-4 text-shadow-premium">
              Live Limitless.<br />Live Elevated.
            </h2>
            <h3 className="text-[18px] md:text-[22px] font-medium text-white/95 mb-3 tracking-wider text-shadow-premium">
              Premium 2, 3 & 4 BHK Residences at Eldeco City, IIM Road, Lucknow
            </h3>
            <p className="text-[16px] md:text-[18px] text-white/90 max-w-xl leading-relaxed text-shadow-premium font-medium">
              Where luxury meets nature, space meets comfort, and life meets its finest expression.
            </p>
            <div className="w-16 h-[3px] bg-white/80 mt-8 mb-8"></div>
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center justify-between bg-black text-white rounded-full pl-6 pr-2 py-2 gap-6 hover:bg-[#1a1a1a] transition-all duration-300 shadow-xl">
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Book a Site Visit</span>
                <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                  <ArrowRight size={14} />
                </div>
              </button>
              <button className="group flex items-center justify-between bg-white text-black rounded-full pl-6 pr-2 py-2 gap-6 hover:bg-gray-100 transition-all duration-300 shadow-xl">
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Download Brochure</span>
                <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-y-1">
                  <ArrowRight size={14} className="rotate-90" />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="w-full bg-white text-black py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
            <div className="lg:w-1/4 shrink-0">
              <h4 className="text-[13px] font-medium leading-relaxed mb-4">Project Overview</h4>
              <div className="w-full h-px bg-gray-200 relative">
                <div className="absolute top-0 left-0 w-12 h-px bg-black"></div>
              </div>
            </div>
            <div className="lg:w-3/4">
              <h2 className="text-[42px] md:text-[64px] font-serif leading-[1.1] tracking-wide text-[#111]">
                Experience Limitless <br className="hidden md:block" /> Living
              </h2>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.5 } } }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 overflow-hidden pb-10">
            <motion.div variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } } }} className="lg:col-span-4">
              <div className="w-full h-[600px] overflow-hidden rounded-sm relative">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern House" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }} className="lg:col-span-4 flex flex-col justify-between py-4">
              <div className="relative pb-10">
                <h3 className="text-[64px] md:text-[80px] font-medium tracking-tighter leading-none mb-2"><AnimatedCounter to={4} /></h3>
                <p className="text-[18px] font-serif text-gray-800">Apartments per floor</p>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200 mt-8">
                  <div className="absolute top-0 left-0 w-16 h-[2px] bg-black mt-[-0.5px]"></div>
                </div>
              </div>
              <div className="relative pb-10">
                <h3 className="text-[64px] md:text-[80px] font-medium tracking-tighter leading-none mb-2">1.3</h3>
                <p className="text-[18px] font-serif text-gray-800">Acres of Greens</p>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200 mt-8">
                  <div className="absolute top-0 left-0 w-16 h-[2px] bg-black mt-[-0.5px]"></div>
                </div>
              </div>
              <div className="relative">
                <h3 className="text-[64px] md:text-[80px] font-medium tracking-tighter leading-none mb-2"><AnimatedCounter to={24} /><span className="text-4xl">x</span>7</h3>
                <p className="text-[18px] font-serif text-gray-800">Security & CCTV</p>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.25 } } }} className="lg:col-span-4 flex flex-col justify-between py-4">
              <div>
                <motion.p variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }} className="text-[15px] leading-relaxed text-gray-600 mb-6">
                  Step into a world where every detail is crafted to perfection. At Eldeco Latitude 27, life goes beyond boundaries—offering serene views, abundant greenery, and thoughtfully designed spaces that redefine urban living.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }} className="text-[15px] leading-relaxed text-gray-600 mb-10">
                  Located within the well-established township of Eldeco City, this premium residential development offers spacious homes filled with natural light, fresh air, and unmatched comfort.
                </motion.p>
                <motion.div variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}>
                  <button className="bg-[#111] hover:bg-black text-white px-8 py-3.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-colors shadow-lg">Learn More</button>
                </motion.div>
              </div>
              <motion.div variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }} className="mt-12 relative w-full h-[280px] overflow-hidden rounded-sm group">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 justify-center">
                  <span className="px-4 py-1.5 rounded-full border border-white/80 text-white text-[11px] font-medium tracking-wide backdrop-blur-sm bg-black/20">Fitness</span>
                  <span className="px-4 py-1.5 rounded-full border border-white/80 text-white text-[11px] font-medium tracking-wide backdrop-blur-sm bg-black/20">Greens</span>
                  <span className="px-4 py-1.5 rounded-full border border-white/80 text-white text-[11px] font-medium tracking-wide backdrop-blur-sm bg-black/20">Social</span>
                  <span className="px-4 py-1.5 rounded-full border border-white/80 text-white text-[11px] font-medium tracking-wide backdrop-blur-sm bg-black/20">Comfort</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CarouselSection />
      <WhyChooseSection />
      <AmenitiesSection />
      <VideoSection />
      <TestimonialSection />
    </div>
  );
}

const CAROUSEL_DATA = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Live Fitness. Live Active.",
    title: "A lifestyle designed for wellbeing",
    description: "Swimming Pool, Fully equipped Gymnasium, Badminton Court, Open spaces for Yoga & Recreation."
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Live Green. Live Peaceful.",
    title: "Wake up to lush landscapes",
    description: "Landscaped gardens, Walking pathways, Nature-integrated design making every morning refreshing."
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Live Social. Live Celebrations.",
    title: "Spaces designed for togetherness",
    description: "Club Latitude, Party Hall, Multipurpose Sports Court. From family celebrations to social gatherings."
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    <section className="w-full bg-[#1A1A1A] text-white py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="max-w-2xl">
            <h4 className="text-[12px] font-semibold tracking-widest mb-6 inline-block border-b border-white/30 pb-2 uppercase">
              Lifestyle & Amenities
            </h4>
            <h2 className="text-[42px] md:text-[56px] font-serif leading-[1.1] tracking-wide text-white">
              A lifestyle designed <br className="hidden md:block" /> for your wellbeing
            </h2>
          </div>
          <div className="max-w-md lg:pb-3">
            <p className="text-[15px] text-white/70 leading-relaxed mb-8">
              Explore a handpicked selection of state-of-the-art amenities, giving you complete fitness routine and serene living within the community itself.
            </p>
            <button className="bg-white text-black pl-8 pr-3 py-3 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gray-200 flex items-center gap-5 group shadow-xl">
              View All Amenities
              <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1400px] mx-auto relative px-6 md:px-16 group/carousel">
        <button onClick={handlePrev} className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black z-10 shadow-xl transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hover:scale-110"><ChevronDown size={20} className="rotate-90 ml-[-2px]" /></button>
        <button onClick={handleNext} className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black z-10 shadow-xl transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hover:scale-110"><ChevronDown size={20} className="-rotate-90 mr-[-2px]" /></button>
        <div className="overflow-hidden w-full">
          <motion.div className="flex gap-6 w-max" animate={{ x: itemWidth ? -(currentIndex * itemWidth) : 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            {CAROUSEL_DATA.map((item, idx) => (
              <div key={idx} ref={idx === 0 ? itemRef : null} className="shrink-0 w-[85vw] md:w-[calc((100vw-8rem-3rem)/3)] lg:w-[calc((1400px-8rem-3rem)/3)] h-[400px] md:h-[550px] overflow-hidden rounded-sm group relative cursor-pointer shadow-2xl">
                <img src={item.src} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-linear-to-t from-[#111] via-[#111]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
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
          <button key={idx} onClick={() => setCurrentIndex(idx)} className={`transition-all duration-500 rounded-full h-1.5 ${currentIndex === idx ? 'w-10 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'}`} />
        ))}
      </div>
    </section>
  );
}

const FEATURES = [
  { num: "01", title: "Trusted Eldeco Legacy", desc: "Years of experience navigating premium residential markets with trusted quality & execution." },
  { num: "02", title: "Lucrative Location", desc: "Strategically located at Eldeco City, IIM Road with 10 mins connectivity to Kapurthala market." },
  { num: "03", title: "Premium Low-Density", desc: "Nature + Luxury integration featuring only 4 units per floor ensuring 3-side open ventilation." }
];

function WhyChooseSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32">
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
            <div className="w-full aspect-4/3 md:aspect-16/10 relative rounded-sm overflow-hidden group cursor-pointer shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Property Video Cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 shadow-lg border border-white/30">
                  <Play size={32} className="ml-2 fill-white" />
                </div>
              </div>
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
    <section className="w-full bg-[#111] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h4 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[12px] font-semibold text-white/60 tracking-[0.25em] uppercase mb-6 inline-block border-b border-white/20 pb-2">
            Cinematic Tour
          </motion.h4>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[42px] md:text-[64px] font-serif leading-[1.1] text-white max-w-4xl mx-auto">
            Experience the Pinnacle <br className="hidden md:block" /> of Luxury Living
          </motion.h2>
        </div>
        <motion.div ref={containerRef} style={{ scale, opacity }} className="relative w-full aspect-video md:aspect-21/9 rounded-sm overflow-hidden group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Cinematic Video Cover" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75 duration-1000"></div>
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/20 relative z-10">
                <Play size={40} className="ml-3 fill-white" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-black/80 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}

const TESTIMONIALS_DATA = [
  {
    quote: "Their market knowledge and curated selection truly stood out. We were presented with properties that matched our lifestyle perfectly. An outstanding luxury experience overall.",
    name: "Michael Chen",
    title: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    stars: 5,
  },
  {
    quote: "The level of professionalism and attention to detail is unmatched. Eldeco helped us find our dream home without any hassle. A truly white-glove service.",
    name: "Sarah Jenkins",
    title: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    stars: 5,
  },
  {
    quote: "From the initial consultation to the final closing, the team demonstrated exceptional expertise and dedication. Highly recommended for luxury real estate.",
    name: "David & Emma Wright",
    title: "Real Estate Investors",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    stars: 5,
  }
];

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="flex flex-col lg:justify-between h-full">
            <div className="text-right lg:border-r border-gray-200 lg:pr-10 lg:py-2 max-w-md ml-auto flex flex-col items-end">
              <p className="text-[15px] leading-[1.8] text-gray-500 mb-6 font-medium">
                Our clients value discretion, expertise, and results.<br className="hidden md:block" /> Here's what they say about their experience working<br className="hidden md:block" /> with Eldeco in the luxury real estate market.
              </p>
              <a href="#" className="inline-flex items-center text-[11px] font-bold tracking-[0.15em] text-gray-800 uppercase hover:text-black transition-colors group">
                MORE TESTIMONIALS
                <div className="ml-3 bg-black text-white rounded-full w-[18px] h-[18px] flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ChevronRight size={12} strokeWidth={3} />
                </div>
              </a>
            </div>
            <div className="w-full h-[350px] md:h-[450px] mt-12 lg:mt-24 rounded-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Luxury Home with Pool" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col justify-start lg:pt-2">
            <div className="mb-12">
               <span className="text-[13px] font-semibold text-[#111] mb-6 border-b border-gray-200 inline-block pb-2">Client Trust Stories</span>
               <h2 className="text-[48px] lg:text-[56px] font-serif text-[#111] leading-[1.1]">Trusted by Global<br/>Luxury Clients</h2>
            </div>
            
            <div className="relative mt-4 flex-1">
               {/* Large Quote Icon behind */}
               <div className="absolute top-[-40px] left-[-20px] md:left-[-30px] text-[160px] md:text-[200px] font-serif text-gray-100/60 leading-none select-none z-0 pointer-events-none">
                 ”
               </div>
               
               <div className="relative z-10 min-h-[280px]">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={currentIndex}
                     initial={{ opacity: 0, x: 30 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -30 }}
                     transition={{ duration: 0.5, ease: "easeInOut" }}
                     className="flex flex-col"
                   >
                     <p className="text-[20px] md:text-[24px] lg:text-[26px] font-serif text-[#333] leading-[1.6] mb-10 max-w-xl">
                        “{TESTIMONIALS_DATA[currentIndex].quote}”
                     </p>
                     <div className="flex items-start gap-5">
                        <img src={TESTIMONIALS_DATA[currentIndex].image} alt={TESTIMONIALS_DATA[currentIndex].name} className="w-16 h-16 rounded-full object-cover shadow-sm" />
                        <div>
                           <h4 className="text-[18px] font-serif text-[#111] font-semibold">{TESTIMONIALS_DATA[currentIndex].name}</h4>
                           <p className="text-[13px] text-gray-500 mt-0.5">{TESTIMONIALS_DATA[currentIndex].title}</p>
                           <div className="flex text-yellow-400 gap-1 mt-1.5">
                             {Array.from({ length: TESTIMONIALS_DATA[currentIndex].stars }).map((_, i) => (
                               <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                               </svg>
                             ))}
                           </div>
                           <div className="flex gap-2.5 mt-6 items-center">
                              {TESTIMONIALS_DATA.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setCurrentIndex(idx)}
                                  className={`transition-all duration-300 rounded-full ${
                                    currentIndex === idx 
                                      ? 'w-6 h-[7px] border border-gray-400 bg-transparent' 
                                      : 'w-[7px] h-[7px] bg-gray-200 hover:bg-gray-300'
                                  }`}
                                  aria-label={`Go to testimonial ${idx + 1}`}
                                />
                              ))}
                           </div>
                        </div>
                     </div>
                   </motion.div>
                 </AnimatePresence>
               </div>
            </div>
          </div>
        </div>
        
        {/* Bottom text */}
        <div className="mt-24 md:mt-32 flex items-center justify-center">
           <div className="h-px bg-gray-200 flex-1 max-w-[300px] lg:max-w-[400px]"></div>
           <span className="px-6 text-[12px] md:text-[13px] font-bold text-[#111] tracking-wide text-center">Trusted by 900+ Premium Real Estate Clients</span>
           <div className="h-px bg-gray-200 flex-1 max-w-[300px] lg:max-w-[400px]"></div>
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
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Gymnasium",
    iconSrc: "/weightlifting.png",
    desc: "Fully equipped Gymnasium. Live fitness and live active with state-of-the-art equipment designed for your daily wellbeing and complete fitness routine.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Club Latitude",
    iconSrc: "/night-club.png",
    desc: "Spaces designed for togetherness. Featuring a Party Hall where, from family celebrations to social gatherings, every moment becomes memorable here.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Gardens",
    iconSrc: "/park.png",
    desc: "Wake up to lush landscapes and open greens. The project emphasizes daily connection with nature, making every morning refreshing and every evening calming.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Play Areas",
    iconSrc: "/playground.png",
    desc: "Perfect for families and children. Dedicated play areas and open activity zones ensure safe, joyful, and vibrant community living.",
    image: "https://images.unsplash.com/photo-1595787142842-7404bc60470d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Sports Court",
    iconSrc: "/sport.png",
    desc: "Multipurpose Sports Court and Badminton Court. A perfect space to engage in sports, stay active, and enjoy a limitless life.",
    image: "https://images.unsplash.com/photo-1628731599422-0d322cebb411?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-px bg-black/20"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/60">What We Offer</span>
          <div className="w-12 h-px bg-black/20"></div>
        </div>
        <h2 className="text-[42px] md:text-[56px] font-serif text-center text-[#111] leading-none">House Amenities</h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 max-w-[1000px] mx-auto mt-16 px-2">
          {AMENITIES_DATA.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button 
                key={idx} 
                onClick={() => setActiveTab(idx)}
                className={`flex flex-col items-center justify-center w-[110px] h-[110px] md:w-[140px] md:h-[140px] transition-all duration-300 ${isActive ? 'border-2 border-black bg-white shadow-xl scale-105 z-10' : 'border border-transparent hover:border-gray-200 hover:bg-gray-50'}`}
              >
                <img src={item.iconSrc} alt={item.title} className={`mb-4 transition-all duration-300 ${isActive ? 'w-10 h-10 opacity-100 grayscale-0' : 'w-9 h-9 opacity-50 grayscale'}`} />
                <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-center ${isActive ? 'text-black' : 'text-gray-500'}`}>{item.title}</span>
              </button>
            );
          })}
        </div>

        <div className="relative max-w-[1200px] mx-auto mt-20 md:mt-32 mb-10 md:mb-16 flex flex-col md:block">
          <div className="w-full md:w-[90%] bg-[#111111] pt-16 pb-24 px-8 md:pt-0 md:pb-0 md:pl-24 md:pr-[50%] md:h-[500px] flex flex-col justify-center relative z-0 shadow-2xl">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.4 }}
               >
                 <h3 className="text-[36px] md:text-[46px] font-serif text-white mb-6 leading-tight tracking-wide">{AMENITIES_DATA[activeTab].title}</h3>
                 <p className="text-[15px] leading-[1.8] text-white/70 mb-10 max-w-md font-light">{AMENITIES_DATA[activeTab].desc}</p>
                 <button className="bg-white text-black px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors shadow-lg rounded-full">
                   Get More Info
                 </button>
               </motion.div>
             </AnimatePresence>
          </div>
          
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative md:absolute md:right-[4%] md:top-[-40px] w-[90%] mx-auto md:mx-0 md:w-[45%] h-[350px] md:h-[460px] z-10 shadow-2xl -mt-10 md:mt-0 overflow-hidden border-8 md:border-12 border-white"
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
