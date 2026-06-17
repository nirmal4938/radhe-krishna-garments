import {
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  Shirt,
  Users,
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
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#8B1E3F] via-[#5a1025] to-[#8B1E3F] text-white relative overflow-hidden">
        {/* glow background */}
        <div className="absolute w-[400px] h-[400px] bg-[#D4AF37]/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-[#D4AF37]/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

        <p className="text-sm tracking-widest opacity-80">
          ✨ SHREE GANESHAY NAMAH ✨
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
          भव्य शुभारंभ
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          <span className="text-[#D4AF37]">Radhe Krishna</span> Garments
        </h2>

        <p className="text-lg md:text-2xl mt-3 font-medium opacity-90">
          रेडीमेड गारमेंट्स & साड़ी सेंटर
        </p>

        <p className="mt-6 max-w-xl text-white/90">
          फैशन, ट्रेंड और परंपरा का अद्भुत संगम — अब आपके शहर में
        </p>

        {/* event card */}
        <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-full max-w-md">
          <div className="flex items-center justify-center gap-2">
            <Calendar size={18} /> 17 जून 2026
          </div>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Clock size={18} /> 11:00 AM
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <a
            href={`tel:${phone}`}
            className="px-8 py-3 rounded-full bg-[#D4AF37] text-[#8B1E3F] font-bold flex items-center gap-2 hover:scale-105 transition"
          >
            <Phone size={18} /> Call Now
          </a>

          <a
            href={whatsapp}
            target="_blank"
            className="px-8 py-3 rounded-full bg-green-500 text-white font-bold flex items-center gap-2 hover:scale-105 transition"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </section>

      {/* ================= TRUST / ABOUT ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#8B1E3F]">
          आपका भरोसेमंद फैशन डेस्टिनेशन
        </h2>

        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          महिलाओं, पुरुषों और बच्चों के लिए premium readymade garments और
          traditional sarees का विशाल संग्रह अब Simrahi Bazaar में।
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <Shirt className="text-[#8B1E3F]" />
            <h3 className="font-bold mt-3">Men’s Wear</h3>
            <p className="text-sm text-gray-600 mt-2">
              Formal, Casual & Ethnic Collection
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <Sparkles className="text-[#8B1E3F]" />
            <h3 className="font-bold mt-3">Women Sarees</h3>
            <p className="text-sm text-gray-600 mt-2">
              Traditional to Designer Sarees
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <Users className="text-[#8B1E3F]" />
            <h3 className="font-bold mt-3">Kids Collection</h3>
            <p className="text-sm text-gray-600 mt-2">
              Comfortable & Trendy Outfits
            </p>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#8B1E3F]">हमें यहाँ पधारें</h2>

        <div className="mt-8 max-w-2xl mx-auto bg-[#FFF7F0] p-8 rounded-2xl shadow-inner">
          <MapPin className="mx-auto text-[#8B1E3F]" size={28} />
          <p className="mt-4 font-semibold">
            NH-27, प्रतापगंज रोड, <br />
            सिमराही बाजार, मेन चौक
          </p>

          <a
            href={maps}
            target="_blank"
            className="inline-block mt-6 px-6 py-3 bg-[#8B1E3F] text-white rounded-full font-semibold hover:bg-[#5a1025]"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#8B1E3F] text-white py-10 text-center">
        <p className="text-lg font-semibold">Radhe Krishna Garments</p>
        <p className="text-sm opacity-80 mt-2">Contact: {phone} | 8709647912</p>
        <p className="text-xs mt-4 opacity-60">© 2026 All Rights Reserved</p>
      </footer>

      {/* ================= STICKY MOBILE CTA ================= */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-2xl flex border-t">
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
