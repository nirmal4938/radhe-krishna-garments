import { useEffect, useMemo, useState } from "react";

import offerService from "../../services/offer.service";

export default function Offers() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [offers, setOffers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadOffers();
  }, []);

  async function loadOffers() {
    try {
      setLoading(true);

      const response = await offerService.getOffers();

      setOffers(response.data || []);
    } catch (err) {
      console.error(err);
      setError("Unable to load offers.");
    } finally {
      setLoading(false);
    }
  }

  const filteredOffers = useMemo(() => {
    if (!search.trim()) return offers;

    const keyword = search.toLowerCase();

    return offers.filter(
      (offer) =>
        offer.title?.toLowerCase().includes(keyword) ||
        offer.description?.toLowerCase().includes(keyword),
    );
  }, [offers, search]);

  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-xl font-semibold">Loading Offers...</h2>
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
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Special Offers</h1>

        <p className="mt-3 text-gray-600">Grab the best deals and discounts.</p>
      </header>

      {/* Search */}
      <section className="mb-8">
        <input
          type="text"
          placeholder="Search offers..."
          className="w-full rounded-lg border p-3 md:w-96"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* Results Count */}
      <section className="mb-6">
        <p className="text-gray-500">
          {filteredOffers.length} offers available
        </p>
      </section>

      {/* Offers Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredOffers.map((offer) => (
          <article
            key={offer.id}
            className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            {/* Offer Badge */}
            {offer.discount && (
              <div className="mb-4 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                {offer.discount}% OFF
              </div>
            )}

            {/* Title */}
            <h2 className="text-xl font-semibold">{offer.title}</h2>

            {/* Description */}
            <p className="mt-3 text-gray-600">{offer.description}</p>

            {/* Offer Code */}
            {offer.couponCode && (
              <div className="mt-5 rounded-lg bg-gray-100 p-3">
                <p className="text-sm text-gray-500">Use Code</p>

                <p className="text-lg font-bold tracking-wide">
                  {offer.couponCode}
                </p>
              </div>
            )}

            {/* Validity */}
            {offer.validUntil && (
              <p className="mt-4 text-sm text-gray-500">
                Valid until: {new Date(offer.validUntil).toLocaleDateString()}
              </p>
            )}

            {/* CTA */}
            <button className="mt-6 w-full rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800">
              Claim Offer
            </button>
          </article>
        ))}
      </section>

      {/* Empty State */}
      {!filteredOffers.length && (
        <div className="py-20 text-center text-gray-500">No offers found.</div>
      )}
    </main>
  );
}
