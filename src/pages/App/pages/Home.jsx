import Hero from "../components/Hero";
import CollectionGrid from "../components/CollectionGrid";
import Testimonials from "../components/Testimonials";
import LocationSection from "../components/LocationSection";
import Footer from "../components/Footer";
import { Star, TrendingUp, BadgeCheck } from "lucide-react";
import { MessageCircle } from "lucide-react";
import useLeads from "../hooks/useLeads";

export default function Home() {
  const {
    leads,
    leadForm,
    setLeadForm,
    showLeadModal,
    setShowLeadModal,
    saveLead,
  } = useLeads();

  return (
    <div className="bg-[#FFF7F0] min-h-screen">
      {/* HERO */}
      <Hero />
      {/* OFFER STRIP */}
      <div className="bg-gradient-to-r from-[#8B1E3F] to-[#4a0d1f] text-white py-3 text-center font-semibold">
        🎁 Limited Opening Offer - Flat Discounts + Gifts
      </div>
      {/* TRUST */}
      <section className="bg-white py-12 text-center">
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
      <CollectionGrid />
      {/* ================= CUSTOMER LOVE ================= */}
      <Testimonials />
      {/* LOCATION */}
      <LocationSection />
      {/* FOOTER */}
      <Footer />
      {/* LEAD MODAL */}
      {showLeadModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-5">
          <div className="bg-white rounded-[32px] w-full max-w-md shadow-[0_25px_100px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="p-8 space-y-5">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  value={leadForm.name}
                  onChange={(e) =>
                    setLeadForm({ ...leadForm, name: e.target.value })
                  }
                  className="w-full mt-2 p-4 rounded-2xl border border-[#8B1E3F] outline-none focus:ring-2 focus:ring-[#8B1E3F]"
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
                    setLeadForm({ ...leadForm, phone: e.target.value })
                  }
                  className="w-full mt-2 p-4 rounded-2xl border border-[#8B1E3F] outline-none focus:ring-2 focus:ring-[#8B1E3F]"
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
                    setLeadForm({ ...leadForm, interest: e.target.value })
                  }
                  className="w-full mt-2 p-4 rounded-2xl border border-[#8B1E3F] outline-none focus:ring-2 focus:ring-[#8B1E3F]"
                >
                  <option>Women Sarees</option>
                  <option>Men Fashion</option>
                  <option>Kids Wear</option>
                  <option>Wedding Collection</option>
                </select>
              </div>
              <button
                onClick={saveLead}
                className="w-full bg-green-500 text-white font-bold py-4 rounded-2xl hover:scale-105 transition shadow-xl"
              >
                <MessageCircle className="inline mr-2" /> Get Offer On WhatsApp
              </button>
              <button
                onClick={() => setShowLeadModal(false)}
                className="w-full text-gray-500 text-sm hover:text-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
