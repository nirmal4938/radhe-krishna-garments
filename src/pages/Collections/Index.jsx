import { useEffect, useMemo, useState } from "react";

import collectionService from "../../services/collection.service";

export default function Collections() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [collections, setCollections] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCollections();
  }, []);

  async function loadCollections() {
    try {
      setLoading(true);

      const response = await collectionService.getCollections();

      setCollections(response.data || []);
    } catch (err) {
      console.error(err);
      setError("Unable to load collections.");
    } finally {
      setLoading(false);
    }
  }

  const filteredCollections = useMemo(() => {
    if (!search.trim()) return collections;

    const keyword = search.toLowerCase();

    return collections.filter(
      (collection) =>
        collection.name.toLowerCase().includes(keyword) ||
        collection.description.toLowerCase().includes(keyword),
    );
  }, [collections, search]);

  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-xl font-semibold">Loading Collections...</h2>
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
      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Collections</h1>

        <p className="mt-3 text-gray-600">Browse our product collections.</p>
      </header>

      {/* Search */}
      <section className="mb-8">
        <input
          type="text"
          placeholder="Search collections..."
          className="w-full rounded-lg border p-3 md:w-96"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* Result Count */}
      <section className="mb-6">
        <p className="text-gray-500">
          {filteredCollections.length} collections found
        </p>
      </section>

      {/* Collection Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCollections.map((collection) => (
          <article
            key={collection.id}
            className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md"
          >
            <img
              src={collection.image}
              alt={collection.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold">{collection.name}</h2>

              <p className="mt-3 text-sm text-gray-600">
                {collection.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {collection.productCount} Products
                </span>

                <button className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800">
                  Explore
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {!filteredCollections.length && (
        <div className="py-20 text-center text-gray-500">
          No collections found.
        </div>
      )}
    </main>
  );
}
