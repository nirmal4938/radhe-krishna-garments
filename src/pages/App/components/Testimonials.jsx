import { Quote, Star, HeartHandshake } from "lucide-react";

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

export default function Testimonials() {
  return (
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
          Simrahi Bazaar में एक नए fashion destination के आगमन को लेकर लोगों में
          उत्साह।
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
              <Quote size={42} className="text-[#D4AF37] opacity-80 mx-auto" />

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
  );
}
