import {
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  Shirt,
  Users,
  Star,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

export default function App() {
  const phone = "917218396694";

  const whatsappText =
    "Namaste! Radhe Krishna Garments opening ke baare me jankari chahiye";

  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
    whatsappText,
  )}`;

  const maps =
    "https://maps.google.com/?q=NH-27,Pratapganj+Road,Simrahi+Bazar,Main+Chowk";

  return (
    <div className="bg-[#FFF7F0] text-gray-900 scroll-smooth">
      {/* ================= HERO (HIGH IMPACT) ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#2b0a14] via-[#8B1E3F] to-[#2b0a14] text-white relative overflow-hidden">
        {/* animated glow layers */}
        <div className="absolute w-[500px] h-[500px] bg-[#D4AF37]/20 blur-3xl rounded-full top-[-150px] left-[-150px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-[#D4AF37]/10 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />

        {/* trust badge */}
        <div className="flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full mb-4 backdrop-blur border border-white/20">
          <BadgeCheck size={16} />
          <span className="text-xs tracking-widest">
            TRUSTED LOCAL FASHION STORE
          </span>
        </div>

        <p className="text-sm tracking-[0.3em] opacity-80">
          ✨ SHREE GANESHAY NAMAH ✨
        </p>

        <h1 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
          GRAND OPENING
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          <span className="text-[#D4AF37]">Radhe Krishna</span> Garments
        </h2>

        <p className="text-xl md:text-2xl mt-3 font-medium text-white/90">
          Saree • Readymade • Kids Fashion Hub
        </p>

        {/* emotional hook */}
        <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">
          जहां परंपरा मिलती है ट्रेंड से — अब आपके शहर में एक नया फैशन
          डेस्टिनेशन खुल रहा है।
        </p>

        {/* event highlight card */}
        <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-md shadow-2xl">
          <div className="flex items-center justify-center gap-2 font-semibold">
            <Calendar size={18} /> 17 जून 2026
          </div>
          <div className="flex items-center justify-center gap-2 mt-2 text-lg">
            <Clock size={18} /> 11:00 AM
          </div>

          <div className="mt-3 text-xs text-white/70">
            Special Opening Offers • Limited Day Discounts
          </div>
        </div>

        {/* CTA (HIGH CONTRAST) */}
        <div className="flex flex-col md:flex-row gap-4 mt-10 w-full max-w-md">
          <a
            href={`tel:${phone}`}
            className="flex-1 px-8 py-3 rounded-full bg-[#D4AF37] text-[#2b0a14] font-extrabold flex items-center justify-center gap-2 hover:scale-105 transition shadow-lg"
          >
            <Phone size={18} /> CALL NOW
          </a>

          <a
            href={whatsapp}
            target="_blank"
            className="flex-1 px-8 py-3 rounded-full bg-green-500 text-white font-extrabold flex items-center justify-center gap-2 hover:scale-105 transition shadow-lg"
          >
            <MessageCircle size={18} /> WHATSAPP
          </a>
        </div>

        <p className="mt-6 text-xs text-white/60">
          ⚡ Fast Response Guaranteed | 📍 Local Store
        </p>
      </section>
      <div className="bg-[#8B1E3F] text-white py-3 text-center text-sm font-semibold">
        ⚡ GRAND OPENING OFFER: पहले 100 ग्राहकों के लिए SPECIAL DISCOUNT +
        SURPRISE GIFTS
      </div>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
          <span className="flex items-center gap-2">
            <Star size={14} /> Premium Collection
          </span>

          <span className="flex items-center gap-2">
            <TrendingUp size={14} /> Latest Fashion Trends
          </span>

          <span className="flex items-center gap-2">
            <BadgeCheck size={14} /> Trusted Local Brand
          </span>
        </div>
      </section>
      {/* ================= BRAND STORY (LEVEL 100 ADDITION) ================= */}
      <section className="py-24 px-6 bg-white text-center relative overflow-hidden">
        <div className="absolute w-[300px] h-[300px] bg-[#D4AF37]/10 blur-3xl rounded-full top-[-80px] left-[-80px]" />

        <h2 className="text-4xl font-black text-[#8B1E3F]">हमारी कहानी</h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Radhe Krishna Garments सिर्फ एक दुकान नहीं है — यह एक विश्वास है।
          वर्षों से हम Simrahi Bazaar में परिवारों को गुणवत्ता, परंपरा और आधुनिक
          फैशन का सही संतुलन प्रदान कर रहे हैं।
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-gray-500">
          हमारा उद्देश्य सिर्फ कपड़े बेचना नहीं, बल्कि हर ग्राहक को “खुश और
          आत्मविश्वासी” बनाना है।
        </p>

        {/* trust chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <span className="px-4 py-2 bg-[#FFF7F0] border rounded-full text-sm">
            👨‍👩‍👧 Family Trusted Store
          </span>

          <span className="px-4 py-2 bg-[#FFF7F0] border rounded-full text-sm">
            🏆 Premium Quality Assurance
          </span>

          <span className="px-4 py-2 bg-[#FFF7F0] border rounded-full text-sm">
            🧵 Traditional + Modern Fashion
          </span>
        </div>
      </section>
      {/* ================= COLLECTION ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-black text-[#8B1E3F]">
          Explore Our Collection
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Designed for elegance, comfort & tradition — everything under one
          roof.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <Shirt className="text-[#8B1E3F] mx-auto" size={32} />
            <h3 className="font-bold mt-4 text-lg">Men’s Fashion</h3>
            <p className="text-gray-500 mt-2">
              Formal • Ethnic • Casual Premium Wear
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <Sparkles className="text-[#8B1E3F] mx-auto" size={32} />
            <h3 className="font-bold mt-4 text-lg">Women Sarees</h3>
            <p className="text-gray-500 mt-2">
              Designer • Traditional • Festival Collection
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <Users className="text-[#8B1E3F] mx-auto" size={32} />
            <h3 className="font-bold mt-4 text-lg">Kids Wear</h3>
            <p className="text-gray-500 mt-2">
              Comfortable • Trendy • Affordable Fashion
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-gradient-to-b from-[#FFF7F0] to-white">
        <h2 className="text-4xl font-black text-[#8B1E3F]">Opening Offers</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border">
            🎁 <h3 className="font-bold mt-2">Special Discount</h3>
            <p className="text-gray-500 mt-2">Grand opening limited offers</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border">
            🛍️ <h3 className="font-bold mt-2">Combo Deals</h3>
            <p className="text-gray-500 mt-2">Buy more save more pricing</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border">
            🎉 <h3 className="font-bold mt-2">Gift on Purchase</h3>
            <p className="text-gray-500 mt-2">
              Surprise gifts for first buyers
            </p>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-[#FFF7F0] text-center">
        <h2 className="text-4xl font-black text-[#8B1E3F]">Visit Our Store</h2>

        <div className="mt-10 max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-xl border">
          <MapPin className="mx-auto text-[#8B1E3F]" size={32} />

          <p className="mt-5 text-lg font-semibold">
            NH-27, Pratapganj Road <br />
            Simrahi Bazaar, Main Chowk
          </p>

          <a
            href={maps}
            target="_blank"
            className="inline-block mt-8 px-8 py-3 bg-[#8B1E3F] text-white rounded-full font-bold hover:bg-[#5a1025] transition"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#2b0a14] text-white py-12 text-center">
        <p className="text-xl font-bold">Radhe Krishna Garments</p>

        <p className="text-sm mt-2 text-white/70">Call: {phone} | 8709647912</p>

        <p className="text-xs mt-6 text-white/40">
          © 2026 • Designed for Fashion Impact
        </p>
      </footer>

      {/* ================= STICKY CTA ================= */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t shadow-2xl flex">
        <a
          href={`tel:${phone}`}
          className="flex-1 py-4 flex justify-center items-center gap-2 font-bold text-[#8B1E3F]"
        >
          <Phone size={18} /> Call
        </a>

        <a
          href={whatsapp}
          target="_blank"
          className="flex-1 py-4 flex justify-center items-center gap-2 bg-green-500 text-white font-bold"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>

        <a
          href={maps}
          target="_blank"
          className="flex-1 py-4 flex justify-center items-center gap-2 font-bold text-[#8B1E3F]"
        >
          <MapPin size={18} /> Map
        </a>
      </div>
    </div>
  );
}
