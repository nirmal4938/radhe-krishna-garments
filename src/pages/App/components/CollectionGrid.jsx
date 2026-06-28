import { useState } from "react";
import { Shirt, Sparkles, Users } from "lucide-react";

const collections = [
  { icon: Shirt, title: "Men Fashion" },
  { icon: Sparkles, title: "Women Sarees" },
  { icon: Users, title: "Kids Wear" },
];

export default function CollectionGrid() {
  const [active, setActive] = useState(0);

  const toggleActive = (index) => setActive(index);

  return (
    <section className="py-28 text-center">
      <h2 className="text-4xl font-black text-[#8B1E3F]">Premium Collection</h2>

      <div className="grid md:grid-cols-3 gap-10 mt-14 max-w-6xl mx-auto">
        {collections.map((item, i) => (
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
  );
}
