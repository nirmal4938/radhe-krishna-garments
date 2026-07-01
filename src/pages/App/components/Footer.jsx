import logo from "../../../assets/rk-logo.png";
import { useTenant } from "../../../context/TenantContext";

const maps =
  "https://maps.google.com/?q=NH-27,Pratapganj+Road,Simrahi+Bazar,Main+Chowk";

export default function Footer() {
  const { currentTenant } = useTenant();

  const tenantLogo = currentTenant.logo || logo;
  const tenantName = currentTenant.name || "Radhe Krishna Garments";
  const tenantDescription =
    currentTenant.description ||
    "Premium ethnic fashion experience in Simrahi Bazaar.";
  const tenantPhone = currentTenant.contact?.phone || "917218396694";
  const tenantAddress = currentTenant.contact?.address || "Simrahi Bazaar";

  return (
    <footer className="bg-[#12040a] text-white mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 py-14">
        <div>
          <img src={tenantLogo} className="w-16 h-16 mb-4" />
          <p className="font-bold text-lg">{tenantName}</p>
          <p className="text-white/60 text-sm mt-2">{tenantDescription}</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Explore</h3>
          <p className="text-white/60">Home</p>
          <p className="text-white/60">Shop</p>
          <p className="text-white/60">Offers</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <p className="text-white/60">📞 {tenantPhone}</p>
          <p className="text-white/60">📍 {tenantAddress}</p>
        </div>
      </div>

      <div className="text-center py-6 text-white/40 text-xs border-t border-white/10">
        © 2026 {tenantName} • Crafted for Premium Fashion Impact
      </div>
    </footer>
  );
}
