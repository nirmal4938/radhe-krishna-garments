import { useState } from "react";
import { SearchIcon, FilterIcon } from "lucide-react";

const products = [
  { id: 1, name: "Saree 1", price: 1200, image: "assets/saree1.jpg" },
  { id: 2, name: "Saree 2", price: 1500, image: "assets/saree2.jpg" },
  { id: 3, name: "Saree 3", price: 1800, image: "assets/saree3.jpg" },
];

const filters = [
  { label: "Price Range", options: ["Low", "Medium", "High"] },
  { label: "Category", options: ["Women", "Men", "Kids"] },
];

export default function ProductList() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const priceMatch = product.price <= (activeFilter?.priceMax || Infinity);
    return nameMatch && priceMatch;
  });

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex justify-between mb-8">
        <SearchIcon size={24} className="text-[#8B1E3F]" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64 p-4 border border-[#8B1E3F] rounded-2xl"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-12">
        {filters.map((filter, i) => (
          <div key={i} className="flex items-center gap-2">
            <FilterIcon size={20} className="text-[#8B1E3F]" />
            <p className="text-sm text-[#8B1E3F]">{filter.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-6 bg-white rounded-2xl shadow-lg border hover:shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-48 object-cover"
            />
            <h3 className="text-xl font-bold mt-4 text-[#8B1E3F]">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{product.price} ₹</p>
            <button className="text-sm text-green-500 mt-2">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
