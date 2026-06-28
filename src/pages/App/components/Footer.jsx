import logo from "../../../assets/rk-logo.png";

const phone = "917218396694";

export default function Footer() {
  return (
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
}
