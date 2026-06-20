import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  TrendingUp,
  BadgeCheck,
  BarChart3,
  ShoppingBag,
  Shirt,
  Sparkles,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import logo from "./assets/rk-logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const phone = "917218396694";

  const whatsappText =
    "Namaste! Radhe Krishna Garments opening ke baare me jankari chahiye";

  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
    whatsappText,
  )}`;

  const maps =
    "https://maps.google.com/?q=NH-27,Pratapganj+Road,Simrahi+Bazar,Main+Chowk";

  const heroRef = useRef();
  const sectionRefs = useRef([]);

  const [page, setPage] = useState("home");
  const [leads, setLeads] = useState([]);

  // ================= HERO CAROUSEL =================
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

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // ================= GSAP WOW EFFECTS =================
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-box", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      sectionRefs.current.forEach((el) => {
        if (!el) return;

        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, [page]);

  const trackLead = (type) => {
    setLeads((prev) => [{ type, time: new Date().toLocaleString() }, ...prev]);
  };

  // ================= HOME =================
  const Home = () => (
    <>
      {/* HERO */}
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

        {/* CTA */}
        <div className="hero-box mt-10 flex gap-4">
          <button
            onClick={() => {
              trackLead("call");
              window.location.href = `tel:${phone}`;
            }}
            className="px-8 py-3 bg-[#D4AF37] text-black font-bold rounded-full hover:scale-105 transition"
          >
            <Phone className="inline mr-2" /> Call
          </button>

          <a
            href={whatsapp}
            onClick={() => trackLead("whatsapp")}
            target="_blank"
            className="px-8 py-3 bg-green-500 text-white font-bold rounded-full hover:scale-105 transition"
          >
            <MessageCircle className="inline mr-2" /> WhatsApp
          </a>
        </div>
      </section>

      {/* OFFER STRIP */}
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className="bg-gradient-to-r from-[#8B1E3F] to-[#4a0d1f] text-white py-3 text-center font-semibold"
      >
        🎁 Limited Opening Offer - Flat Discounts + Gifts
      </div>

      {/* TRUST */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="bg-white py-12 text-center"
      >
        <div className="flex justify-center gap-10 text-gray-600">
          <span className="flex items-center gap-2">
            <Star /> Premium
          </span>
          <span className="flex items-center gap-2">
            <TrendingUp /> Trending
          </span>
          <span className="flex items-center gap-2">
            <BadgeCheck /> Trusted
          </span>
        </div>
      </section>

      {/* COLLECTION */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="py-28 text-center"
      >
        <h2 className="text-4xl font-black text-[#8B1E3F]">
          Premium Collection
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14 max-w-6xl mx-auto">
          {[
            { icon: Shirt, title: "Men Fashion" },
            { icon: Sparkles, title: "Women Sarees" },
            { icon: Users, title: "Kids Wear" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 bg-white rounded-3xl shadow-lg border hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <item.icon className="mx-auto text-[#8B1E3F]" size={38} />
              <h3 className="font-bold mt-4 text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="py-28 text-center bg-white"
      >
        <MapPin className="mx-auto text-[#8B1E3F]" size={42} />
        <p className="mt-4 font-semibold text-lg">Simrahi Bazaar, NH-27 Road</p>

        <a
          href={maps}
          target="_blank"
          className="inline-block mt-6 px-8 py-3 bg-[#8B1E3F] text-white rounded-full"
        >
          Get Directions
        </a>
      </section>
    </>
  );

  // ================= DASHBOARD =================
  const Dashboard = () => {
    const total = leads.length;

    return (
      <div className="p-10">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <BarChart3 /> Lead Dashboard
        </h2>

        <p className="mt-2 text-gray-500">Total Leads: {total}</p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {leads.map((l, i) => (
            <div key={i} className="p-5 bg-white shadow rounded-2xl">
              <p className="font-bold text-[#8B1E3F]">{l.type}</p>
              <p className="text-sm text-gray-500">{l.time}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ================= FOOTER (FINAL PREMIUM) =================
  const Footer = () => (
    <footer className="bg-[#12040a] text-white mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 py-14">
        <div>
          <img src={logo} className="w-16 h-16 mb-4" />
          <p className="font-bold text-lg">Radhe Krishna Garments</p>
          <p className="text-white/60 text-sm mt-2">
            Premium ethnic fashion experience in Simrahi Bazaar.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Explore</h3>
          <p className="text-white/60">Home</p>
          <p className="text-white/60">Shop</p>
          <p className="text-white/60">Offers</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <p className="text-white/60">📞 {phone}</p>
          <p className="text-white/60">📍 Simrahi Bazaar</p>
        </div>
      </div>

      <div className="text-center py-6 text-white/40 text-xs border-t border-white/10">
        © 2026 Radhe Krishna Garments • Crafted for Premium Fashion Impact
      </div>
    </footer>
  );

  // ================= APP =================
  return (
    <div className="bg-[#FFF7F0] min-h-screen">
      {/* NAV */}
      <div className="flex justify-center gap-6 p-4 bg-white shadow sticky top-0 z-50">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("shop")}>Shop</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
      </div>

      {page === "home" && Home()}
      {page === "shop" && (
        <div className="p-10 text-center">
          <ShoppingBag size={60} className="mx-auto text-[#8B1E3F]" />
          <h2 className="text-3xl font-bold mt-4">Shop Coming Soon</h2>
        </div>
      )}
      {page === "dashboard" && <Dashboard />}

      <Footer />
    </div>
  );
}
