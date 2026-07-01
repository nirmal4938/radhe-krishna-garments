import { useEffect, useMemo, useState } from "react";

import productService from "../../services/product.service";

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);

      const response = await productService.getProducts();

      setProducts(response.data || []);
    } catch (err) {
      console.error(err);
      setError("Unable to load products.");
    } finally {
      setLoading(false);
    }
  }

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (search.trim()) {
      const keyword = search.toLowerCase();

      list = list.filter(
        (product) =>
          product.name.toLowerCase().includes(keyword) ||
          product.description.toLowerCase().includes(keyword),
      );
    }

    switch (sort) {
      case "price-low":
        list.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        list.sort((a, b) => b.price - a.price);
        break;

      case "name":
      default:
        list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [products, search, sort]);

  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-xl font-semibold">Loading Products...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-xl font-semibold text-red-600">{error}</h2>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Products</h1>

        <p className="mt-3 text-gray-600">
          Browse our complete product catalogue.
        </p>
      </header>

      {/* Filters */}

      <section className="mb-8 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 rounded-lg border p-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="rounded-lg border p-3"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="name">Sort by Name</option>

          <option value="price-low">Price: Low to High</option>

          <option value="price-high">Price: High to Low</option>
        </select>
      </section>

      {/* Results */}

      <section className="mb-6">
        <p className="text-gray-500">
          {filteredProducts.length} products found
        </p>
      </section>

      {/* Product Grid */}

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold">{product.name}</h3>

              <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                {product.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold">₹{product.price}</span>

                <button className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800">
                  View
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {!filteredProducts.length && (
        <div className="py-20 text-center text-gray-500">
          No products found.
        </div>
      )}
    </main>
  );
}
