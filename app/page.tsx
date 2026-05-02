"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronDown, Phone, ArrowRight, Play, ChevronRight, Waves, Dumbbell, Users, TreePine, Smile, Activity, ArrowUp } from "lucide-react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";


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

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
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
          <h1 className="font-serif text-emerald-900 opacity-95 text-center leading-none" style={{ fontSize: "clamp(80px, 20vw, 350px)" }}>ELDECO</h1>
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
      <ProcessSection />
      <LocationSection />
      <TestimonialSection />
      <MarqueeSection />
      <ContactSection />
      <FooterSection />
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
  { num: "01", title: "Trusted Eldeco Legacy", desc: "Backed by decades of experience in crafting premium residential communities with unmatched quality and execution." },
  { num: "02", title: "Prime Location, Lucknow", desc: "Strategically located at the entrance of Eldeco City, IIM Road. Just 10 mins to Kapurthala market, 25 mins to Railway Station, 35 mins to Airport." },
  { num: "03", title: "Premium Low-Density Living", desc: "Nature + Luxury integration with only 4 apartments per floor, 3-side open homes ensuring maximum ventilation & natural light." },
  { num: "04", title: "Ready Township Ecosystem", desc: "A well-established township with approx. 1.3 acres of lush greens, near top schools like DPS & Central School, hospitals & daily conveniences." }
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
            <div className="w-full aspect-video relative rounded-sm overflow-hidden shadow-2xl">
              <video autoPlay muted loop playsInline poster="/hero-image.png" className="w-full h-full object-cover transition-transform duration-1000">
                <source src="/2nd.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent pointer-events-none" />
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
          <video autoPlay muted loop playsInline poster="/hero-image.png" className="w-full h-full object-cover transition-transform duration-1000">
            <source src="/1.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-black/20 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-black/80 to-transparent pointer-events-none"></div>
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

function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#F9F9F9] pt-10 pb-4 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4 h-[500px] md:h-[675px]">
          {FLOOR_PLAN_DATA.map((step, index) => {
            const isActive = index === activeStep;
            
            return (
              <motion.div
                key={step.id}
                layout
                onClick={() => setActiveStep(index)}
                className={`relative rounded-3xl cursor-pointer transition-all duration-500 ease-in-out ${isActive ? 'overflow-hidden flex-[10] bg-[#050505]' : 'overflow-visible flex-[1] min-w-[70px] md:min-w-[85px] bg-white shadow-sm border border-gray-100 hover:shadow-md'}`}
              >
                {/* INACTIVE STATE */}
                {!isActive && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className="w-full h-full flex items-center justify-start pl-4 md:pl-5 overflow-visible"
                  >
                    <span className="text-[#CDBA93] text-4xl md:text-6xl font-medium font-serif leading-none py-2 transition-transform duration-300 hover:scale-110 whitespace-nowrap inline-block tabular-nums">
                      {step.number}
                    </span>
                  </motion.div>
                )}

                {/* ACTIVE STATE */}
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="w-full h-full flex flex-col p-10 relative z-10"
                  >
                    <div className="flex gap-8 mb-8 max-w-2xl">
                      <span className="text-[#CDBA93] text-5xl md:text-6xl font-medium font-serif leading-none flex-shrink-0">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-white text-3xl md:text-4xl font-medium mb-3">{step.title}</h3>
                        <p className="text-white/60 text-lg font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div 
                      className={`flex-1 w-full rounded-2xl overflow-hidden relative shadow-2xl mt-2 ${index > 0 ? 'cursor-pointer group' : ''}`}
                      onClick={() => { if (index > 0) setIsModalOpen(true); }}
                    >
                       <img 
                         src={step.image} 
                         alt={step.title} 
                         className={`w-full h-full object-cover transition-all duration-500 ${index > 0 ? 'opacity-40 blur-md grayscale group-hover:scale-105' : ''}`} 
                       />
                       
                       {index > 0 && (
                         <div className="absolute inset-0 z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <div className="bg-black/80 px-6 py-3 rounded-full text-white text-sm tracking-widest uppercase font-bold flex items-center gap-2 shadow-2xl backdrop-blur-md transform transition-all duration-300 group-hover:scale-105 hover:bg-emerald-400 hover:text-black">
                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                             Unlock Image
                           </div>
                         </div>
                       )}
                    </div>
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
               className="absolute inset-0 bg-black/60 backdrop-blur-md"
             />
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 20 }}
               className="relative z-10 w-full max-w-lg bg-[#0A0A0A] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden border border-white/10"
             >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400 rounded-full mix-blend-screen filter blur-[90px] opacity-18 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-[110px] opacity-6 pointer-events-none"></div>
                
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>

                <h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Unlock <span className="bg-gradient-to-r from-emerald-300 via-white to-emerald-400 bg-clip-text text-transparent">Image.</span></h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                  Please provide your details to view the premium property details and gallery.
                </p>
                
                <form className="flex flex-col gap-6 w-full" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                  <div className="relative z-0 w-full group">
                    <input type="text" name="proc_name" id="proc_name" className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-400 peer transition-colors" placeholder=" " required />
                    <label htmlFor="proc_name" className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                  </div>

                  <div className="relative z-0 w-full group">
                    <input type="email" name="proc_email" id="proc_email" className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-400 peer transition-colors" placeholder=" " required />
                    <label htmlFor="proc_email" className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                  </div>

                  <div className="relative z-0 w-full group">
                    <input type="tel" name="proc_phone" id="proc_phone" className="block py-3 px-0 w-full text-base text-white bg-transparent border-0 border-b border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-400 peer transition-colors" placeholder=" " required />
                    <label htmlFor="proc_phone" className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>
                  </div>

                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full bg-white text-black font-semibold text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-emerald-300 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]"
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

function TestimonialSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isImageRevealed, setIsImageRevealed] = useState(false);
  const testimonials = [
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="w-full bg-[#F9F9F9] py-20 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[44px] md:text-[52px] font-medium leading-[1.1] text-black mb-12 max-w-2xl tracking-tight">
          Happy Users Journey & <br /> Feedbacks Here.
        </h2>

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
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="House Exterior Alternative" />
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
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="House Exterior" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            {/* Top Image with Play Button */}
            <div className="relative w-full h-[360px] rounded-2xl overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover" alt="Modern House" />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-[18px] font-medium mb-1">Alonso D. Dowson</h4>
                <p className="text-[12px] text-white/70">House Owner</p>
              </div>
            </div>

            {/* Black Testimonial Card - Animated Content */}
            <div className="bg-[#050505] text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between h-[300px] relative overflow-hidden">
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
                      “ {testimonials[activeTestimonial].quote} ”
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
                    <h4 className="text-[16px] font-medium text-white">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-[12px] text-white/50 mt-1">{testimonials[activeTestimonial].role}</p>
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
              <img src="https://images.unsplash.com/photo-1600566753190-17f54e06c58c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Futuristic House" />
              <div className="absolute inset-0 bg-black/10"></div>
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
function LocationSection() {
  return (
    <section className="w-full bg-white py-20 md:py-32 flex flex-col items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col">
        <div className="w-full relative flex justify-center mb-24">
          <img 
            src="/image.png" 
            alt="Map Location" 
            className="w-full max-w-[1000px] h-auto max-h-[600px] object-contain mix-blend-multiply opacity-95 transition-all duration-700 hover:opacity-100 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}


function MarqueeSection() {
  return (
    <section className="w-full bg-white pt-10 pb-4 overflow-hidden">
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
    <section className="w-full bg-white py-20 md:py-32 flex flex-col items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col">
        {/* Premium Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto bg-zinc-950 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden mt-10 border border-white/10"
        >
          {/* Decorative background glow */}
          <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-emerald-400 rounded-full mix-blend-screen filter blur-[120px] opacity-12 pointer-events-none"></div>
          <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-[120px] opacity-8 pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">Your Limitless<br/><span className="bg-gradient-to-r from-emerald-300 via-white to-emerald-400 bg-clip-text text-transparent">Life Awaits.</span></h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-md">
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

                setIsThankYouOpen(true);
                form.reset();
                setFormErrors({});
              }}
            >
              <div className="relative z-0 w-full group">
                <input type="text" name="name" id="name" className="block py-3 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-white/15 appearance-none focus:outline-none focus:ring-0 focus:border-white/35 peer transition-colors" placeholder=" " required />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Full Name</label>
                <p className="mt-2 text-xs text-white/35">Enter your name as it appears on your enquiry.</p>
                {formErrors.name && <p className="mt-2 text-xs text-rose-400">{formErrors.name}</p>}
              </div>

              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  inputMode="email"
                  onChange={() => setFormErrors((current) => ({ ...current, email: undefined }))}
                  className="block py-3 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-white/15 appearance-none focus:outline-none focus:ring-0 focus:border-white/35 peer transition-colors"
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email Address</label>
                <p className="mt-2 text-xs text-white/35">We’ll send the brochure and payment details here.</p>
                {formErrors.email && <p className="mt-2 text-xs text-rose-400">{formErrors.email}</p>}
              </div>

              <div className="relative z-0 w-full group">
                <input
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
                <label htmlFor="phone" className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Mobile Number</label>
                <p className="mt-2 text-xs text-white/35">A premium advisor will call you back shortly.</p>
                {formErrors.phone && <p className="mt-2 text-xs text-rose-400">{formErrors.phone}</p>}
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full bg-white text-black font-semibold text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-emerald-300 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:shadow-[0_0_30px_rgba(52,211,153,0.14)]"
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
              className="absolute inset-0 bg-black/65 backdrop-blur-md"
              onClick={() => setIsThankYouOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="relative z-10 w-full max-w-md overflow-hidden rounded-[2rem] border border-white/15 bg-zinc-950 p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
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
                <p className="mt-4 text-sm md:text-base leading-relaxed text-white/72">
                  Our team will respond shortly.
                </p>
                <button
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

function FooterSection() {
  return (
    <footer className="w-full bg-[#050505] pt-24 pb-12 flex flex-col items-center justify-center relative">
      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col">
        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center mb-24">
          
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <h4 className="text-white/60 text-sm tracking-wide font-light">Catch us here</h4>
            <div className="flex flex-col gap-4 text-white text-base font-light">
              <p>Eldeco City, IIM Road, Lucknow</p>
              <a href="mailto:info@eldeco.in" className="hover:text-[#CDBA93] transition-colors">info@eldeco.in</a>
              <p>+91 9821255300</p>
            </div>
          </div>

          {/* Middle Column - Google Map Embed */}
          <div className="w-full h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-2xl relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280946272!2d-74.1448332152011!3d40.69763123307525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1714578120000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-6">
            <h4 className="text-white/60 text-sm tracking-wide font-light">Opening hours</h4>
            <div className="flex flex-col gap-4 text-white text-base font-light">
              <p>Mon: <span className="text-white/80">10:00am — 09:00pm</span></p>
              <p>Thu — Sat: <span className="text-white/80">10:00am — 09:00pm</span></p>
              <p>Sunday: <span className="text-white/80">close</span></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-sm font-light text-center md:text-left">
            © All rights reserved <br className="md:hidden"/> by <span className="text-white">Eldeco Latitude 27</span>
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>

          <div className="flex items-center gap-8">
            <p className="hidden md:block text-white/60 text-sm font-light">
              Designed & developed by <span className="text-[#CDBA93] font-medium tracking-wide">Zlaark</span>
            </p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all group">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
