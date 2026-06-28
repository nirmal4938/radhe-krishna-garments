import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo from "../../../assets/rk-logo.png";

export default function Hero() {
  const slides = [
    {
      title: "Premium Ethnic Wear",
      desc: "Elegance meets tradition",
    },
    {
      title: "Wedding Collection 2026",
      desc: "Luxury bridal fashion",
    },
    {
      title: "Kids Trend Fashion",
      desc: "Comfort + style combo",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const heroRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-box", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#12040a] via-[#8B1E3F] to-[#12040a] text-white relative overflow-hidden"
    >
      <div className="absolute w-[600px] h-[600px] bg-[#D4AF37]/20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[450px] h-[450px] bg-[#D4AF37]/10 blur-3xl rounded-full bottom-[-180px] right-[-180px]" />

      <img
        src={logo}
        className="hero-box w-28 h-28 rounded-full border border-white/30 bg-white/10 backdrop-blur shadow-xl"
      />

      <p className="hero-box text-xs mt-6 tracking-[0.4em] text-white/60">
        ✨ SHREE GANESHAY NAMAH ✨
      </p>

      <h1 className="hero-box text-5xl md:text-7xl font-black mt-5">
        GRAND OPENING
      </h1>

      <h2 className="hero-box text-3xl md:text-5xl font-bold mt-4">
        <span className="text-[#D4AF37]">Radhe Krishna</span> Garments
      </h2>

      {/* ===== CAROUSEL ===== */}
      <div className="hero-box mt-6 relative w-full max-w-md h-24 flex items-center justify-center">
        <button onClick={prevSlide} className="absolute left-0">
          <ChevronLeft />
        </button>

        <div className="text-center transition-all duration-700">
          <p className="text-xl font-bold">{slides[slideIndex].title}</p>
          <p className="text-sm text-white/70">{slides[slideIndex].desc}</p>
        </div>

        <button onClick={nextSlide} className="absolute right-0">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
