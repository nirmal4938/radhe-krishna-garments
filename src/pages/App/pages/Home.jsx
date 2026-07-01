import { useEffect, useState, useContext } from "react";

import Hero from "../../components/Hero";
import CollectionGrid from "../../components/CollectionGrid";
import Testimonials from "../../components/Testimonials";
import LocationSection from "../../components/LocationSection";
import Footer from "../../components/Footer";

import { Star, TrendingUp, BadgeCheck, MessageCircle } from "lucide-react";
import useLeads from "../../hooks/useLeads";

import { BusinessContext } from "../../context/BusinessContext";

export default function Home() {
  const { business } = useContext(BusinessContext);

  const {
    leads,
    leadForm,
    setLeadForm,
    showLeadModal,
    setShowLeadModal,
    saveLead,
  } = useLeads();

  return (
    <div className="min-h-screen bg-[#FFF7F0]">
      {/* ===================================================== */}
      {/* HERO (FULLY DYNAMIC - BUSINESS DRIVEN) */}
      {/* ===================================================== */}

      <Hero
        data={{
          title:
            business?.home?.hero?.title ||
            `Welcome to ${business?.name || "Our Store"}`,

          subtitle:
            business?.home?.hero?.subtitle ||
            business?.description ||
            "Discover premium products curated just for you",

          ctaPrimary: business?.home?.hero?.ctaPrimary || "Shop Now",

          ctaSecondary:
            business?.home?.hero?.ctaSecondary || "Explore Collections",

          backgroundImage: business?.home?.hero?.backgroundImage || "",
        }}
      />

      {/* OFFER STRIP */}
      <div className="bg-gradient-to-r from-[#8B1E3F] to-[#4a0d1f] py-3 text-center font-semibold text-white">
        🎁 {business?.name || "Store"} - Limited Time Opening Offers
      </div>

      {/* TRUST SECTION */}
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

      {/* COLLECTIONS */}
      <CollectionGrid />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* LOCATION */}
      <LocationSection />

      {/* ===================================================== */}
      {/* LEAD MODAL */}
      {/* ===================================================== */}

      {showLeadModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[32px] bg-white shadow-2xl">
            <div className="space-y-5 p-8">
              <h2 className="text-xl font-bold">
                Get Best Offers from {business?.name || "Store"}
              </h2>

              {/* NAME */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Your Name
                </label>

                <input
                  value={leadForm.name}
                  onChange={(e) =>
                    setLeadForm({ ...leadForm, name: e.target.value })
                  }
                  className="mt-2 w-full rounded-2xl border border-[#8B1E3F] p-4 outline-none focus:ring-2 focus:ring-[#8B1E3F]"
                  placeholder="Enter your name"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Mobile Number
                </label>

                <input
                  value={leadForm.phone}
                  onChange={(e) =>
                    setLeadForm({ ...leadForm, phone: e.target.value })
                  }
                  className="mt-2 w-full rounded-2xl border border-[#8B1E3F] p-4 outline-none focus:ring-2 focus:ring-[#8B1E3F]"
                  placeholder="98XXXXXXXX"
                />
              </div>

              {/* INTEREST */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Interested In
                </label>

                <select
                  value={leadForm.interest}
                  onChange={(e) =>
                    setLeadForm({ ...leadForm, interest: e.target.value })
                  }
                  className="mt-2 w-full rounded-2xl border border-[#8B1E3F] p-4 outline-none focus:ring-2 focus:ring-[#8B1E3F]"
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
                className="w-full rounded-2xl bg-green-500 py-4 font-bold text-white shadow-xl transition hover:scale-105"
              >
                <MessageCircle className="mr-2 inline" />
                Get Offer on WhatsApp
              </button>

              <button
                onClick={() => setShowLeadModal(false)}
                className="w-full text-sm text-gray-500 hover:text-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
