import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { BarChart3, Users, IndianRupee, TrendingUp } from "lucide-react";
import { Calendar, Clock, Quote, HeartHandshake } from "lucide-react";

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
  IndianRupee,
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
  const [leads, setLeads] = useState(() => {
    return JSON.parse(localStorage.getItem("rk_leads")) || [];
  });
  const [showLeadModal, setShowLeadModal] = useState(false);

  const [leadForm, setLeadForm] = useState({
    name: "",
    phone: "",
    interest: "Women Sarees",
  });

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

  const testimonials = [
    {
      name: "Priya Devi",
      city: "Simrahi Bazaar",
      review:
        "ऐसी दुकान का हमें काफी समय से इंतजार था। Sarees और Readymade का शानदार collection एक ही जगह मिलेगा।",
    },

    {
      name: "Rakesh Kumar",
      city: "Pratapganj",
      review:
        "Grand Opening को लेकर पूरे इलाके में उत्साह है। Quality और Variety दोनों देखने का इंतजार है।",
    },

    {
      name: "Anjali Kumari",
      city: "NH-27",
      review:
        "Traditional और Latest Fashion का combination अगर कहीं मिलेगा तो यहीं मिलेगा।",
    },
  ];
  const saveLead = () => {
    if (!leadForm.name || !leadForm.phone) {
      alert("Please fill name and phone");
      return;
    }

    const lead = {
      id: Date.now(),

      name: leadForm.name,

      phone: leadForm.phone,

      interest: leadForm.interest,

      source: "Opening Offer",

      createdAt: new Date().toLocaleString(),
    };

    const updated = [lead, ...leads];

    setLeads(updated);

    localStorage.setItem(
      "rk_leads",

      JSON.stringify(updated),
    );

    const message = `Namaste!

My Name : ${lead.name}

Phone : ${lead.phone}

Interested In : ${lead.interest}

I want to know more about Radhe Krishna Garments Opening Offer.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,

      "_blank",
    );

    setShowLeadModal(false);

    setLeadForm({
      name: "",

      phone: "",

      interest: "Women Sarees",
    });
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

          <button
            onClick={() => setShowLeadModal(true)}
            className="
  px-8 py-3
  bg-green-500
  text-white
  font-bold
  rounded-full

  hover:scale-105
  transition

  shadow-xl
"
          >
            <MessageCircle className="inline mr-2" />
            Claim Opening Offer
          </button>
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
      {/* ================= CUSTOMER LOVE ================= */}

      <section className="py-24 px-6 relative overflow-hidden">
        {/* background glows */}

        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#8B1E3F]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white shadow px-5 py-2 rounded-full">
            <HeartHandshake size={18} className="text-[#8B1E3F]" />

            <span className="text-sm font-semibold text-[#8B1E3F]">
              Community Trust
            </span>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#8B1E3F]">
            लोग क्या कह रहे हैं
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Simrahi Bazaar में एक नए fashion destination के आगमन को लेकर लोगों
            में उत्साह।
          </p>

          <div className="mt-14 flex gap-8 overflow-x-auto pb-4 snap-x">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="snap-center min-w-[330px] md:min-w-[380px]
          bg-white/70 backdrop-blur-xl border border-white
          rounded-[32px] p-8 shadow-2xl hover:-translate-y-2
          hover:shadow-[0_25px_80px_rgba(139,30,63,0.25)]
          transition duration-500"
              >
                <Quote
                  size={42}
                  className="text-[#D4AF37] opacity-80 mx-auto"
                />

                <p className="mt-6 text-gray-700 leading-8 italic text-lg">
                  "{item.review}"
                </p>

                <div className="flex justify-center mt-8">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>

                <h4 className="mt-6 font-bold text-xl text-[#8B1E3F]">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">{item.city}</p>
              </div>
            ))}
          </div>
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

  // Pass your leads array as a prop
  const sampleLeads = [
    {
      type: "WhatsApp",
      time: "17 Jun, 11:05 AM",
      name: "Rahul",
      phone: "98xxxxxx01",
    },
    {
      type: "Call",
      time: "17 Jun, 11:12 AM",
      name: "Sneha",
      phone: "97xxxxxx02",
    },
  ];

  const COST_PER_LEAD = 200; // Rs 200 per lead

  const Dashboard = ({ leads = [] }) => {
    const totalLeads = leads.length;
    const totalCost = totalLeads * COST_PER_LEAD;
    const avgCostPerLead = totalLeads > 0 ? COST_PER_LEAD : 0;

    // KPI Card Component - Reusable
    const KpiCard = ({ icon: Icon, label, value, subtext, color }) => (
      <div className="p-6 bg-white shadow-md rounded-2xl border-gray-100 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <Icon size={22} className={color} />
        </div>
        <p className="text-3xl font-bold mt-2 text-gray-900">{value}</p>
        {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
      </div>
    );

    return (
      <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[#8B1E3F]">
            <BarChart3 size={32} /> Lead Dashboard
          </h2>
          <p className="text-sm text-gray-500">Radhe Krishna Garments</p>
        </div>

        {/* KPI Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <KpiCard
            icon={Users}
            label="Total Leads"
            value={totalLeads}
            color="text-blue-600"
          />
          <KpiCard
            icon={IndianRupee}
            label="Cost Per Lead"
            value={`₹${avgCostPerLead}`}
            color="text-green-600"
          />
          <KpiCard
            icon={TrendingUp}
            label="Total Spend"
            value={`₹${totalCost.toLocaleString("en-IN")}`}
            subtext={`₹${COST_PER_LEAD} x ${totalLeads} leads`}
            color="text-[#8B1E3F]"
          />
        </div>

        {/* Leads Table/Grid */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Leads
          </h3>

          {totalLeads === 0 ? (
            <div className="text-center p-10 bg-white rounded-2xl shadow border-dashed border-2 border-gray-200">
              <p className="text-gray-500">
                No leads yet. Share your landing page 🚀
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {leads.map((l, i) => (
                <div
                  key={i}
                  className="p-5 bg-white shadow-sm rounded-2xl border-gray-100 hover:border-[#8B1E3F] transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-[#8B1E3F] text-lg">
                        {l.type || "General Lead"}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{l.time}</p>
                      {l.name && (
                        <p className="text-sm font-medium mt-2">{l.name}</p>
                      )}
                      {l.phone && (
                        <p className="text-sm text-gray-600">{l.phone}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Cost</p>
                      <p className="font-bold text-green-700">
                        ₹{COST_PER_LEAD}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // export default Dashboard;

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
      {page === "dashboard" && <Dashboard leads={sampleLeads} />}
      {showLeadModal && (
        <div
          className="
fixed inset-0

bg-black/60

backdrop-blur-sm

z-[999]

flex

items-center

justify-center

p-5
"
        >
          <div
            className="
bg-white

rounded-[32px]

w-full

max-w-md

shadow-[0_25px_100px_rgba(0,0,0,0.3)]

overflow-hidden
"
          >
            {/* TOP */}

            <div className="bg-gradient-to-r from-[#8B1E3F] to-[#4a0d1f] p-8 text-white text-center">
              <h2 className="text-3xl font-black">🎁 Claim Opening Offer</h2>

              <p className="text-white/70 mt-2">
                Grand Opening Special Discount
              </p>
            </div>

            {/* BODY */}

            <div className="p-8 space-y-5">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Your Name
                </label>

                <input
                  value={leadForm.name}
                  onChange={(e) =>
                    setLeadForm({
                      ...leadForm,

                      name: e.target.value,
                    })
                  }
                  className="
w-full

mt-2

p-4

rounded-2xl

border

outline-none

focus:ring-2

focus:ring-[#8B1E3F]
"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Mobile Number
                </label>

                <input
                  value={leadForm.phone}
                  onChange={(e) =>
                    setLeadForm({
                      ...leadForm,

                      phone: e.target.value,
                    })
                  }
                  className="
w-full

mt-2

p-4

rounded-2xl

border

outline-none

focus:ring-2

focus:ring-[#8B1E3F]
"
                  placeholder="98XXXXXXXX"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Interested In
                </label>

                <select
                  value={leadForm.interest}
                  onChange={(e) =>
                    setLeadForm({
                      ...leadForm,

                      interest: e.target.value,
                    })
                  }
                  className="
w-full

mt-2

p-4

rounded-2xl

border

outline-none

focus:ring-2

focus:ring-[#8B1E3F]
"
                >
                  <option>Women Sarees</option>

                  <option>Men Fashion</option>

                  <option>Kids Wear</option>

                  <option>Wedding Collection</option>
                </select>
              </div>

              {/* CTA */}

              <button
                onClick={saveLead}
                className="
w-full

bg-green-500

text-white

font-bold

py-4

rounded-2xl

hover:scale-[1.02]

transition

shadow-xl
"
              >
                <MessageCircle className="inline mr-2" />
                Get Offer On WhatsApp
              </button>

              <button
                onClick={() => setShowLeadModal(false)}
                className="
w-full

text-gray-500

text-sm

hover:text-black
"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
