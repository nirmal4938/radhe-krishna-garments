import { MapPin } from "lucide-react";

const maps =
  "https://maps.google.com/?q=NH-27,Pratapganj+Road,Simrahi+Bazar,Main+Chowk";

export default function LocationSection() {
  return (
    <section className="py-28 text-center bg-white">
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
  );
}
