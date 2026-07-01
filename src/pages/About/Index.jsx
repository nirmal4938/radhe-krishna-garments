import { useEffect, useState } from "react";

import businessService from "../../services/business.service";

export default function About() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [business, setBusiness] = useState(null);

  useEffect(() => {
    loadBusiness();
  }, []);

  async function loadBusiness() {
    try {
      setLoading(true);

      const response = await businessService.getBusiness();

      setBusiness(response.data);
    } catch (err) {
      console.error(err);
      setError("Unable to load business information.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-xl font-semibold">Loading Business...</h2>
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
    <main className="container mx-auto px-4 py-10 space-y-16">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl font-bold">About {business?.name}</h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          {business?.description}
        </p>
      </section>

      {/* Company Information */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border p-8">
          <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>

          <p className="text-gray-600 leading-7">
            {business?.about ||
              "Our business is committed to delivering quality products and outstanding customer service. We continuously innovate to provide the best shopping experience for our customers."}
          </p>
        </div>

        <div className="rounded-xl border p-8">
          <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>

          <p className="text-gray-600 leading-7">
            {business?.mission ||
              "To provide trusted products, exceptional value, and long-lasting relationships with our customers."}
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="rounded-xl border p-8">
        <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>

        <p className="text-gray-600 leading-7">
          {business?.vision ||
            "To become a trusted brand recognized for quality, innovation, and customer satisfaction."}
        </p>
      </section>

      {/* Business Information */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">Business Information</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-6">
            <h3 className="text-sm uppercase tracking-wide text-gray-500">
              Owner
            </h3>

            <p className="mt-2 text-lg font-semibold">
              {business?.ownerName || "N/A"}
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-sm uppercase tracking-wide text-gray-500">
              Email
            </h3>

            <p className="mt-2 text-lg font-semibold">
              {business?.email || "N/A"}
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-sm uppercase tracking-wide text-gray-500">
              Phone
            </h3>

            <p className="mt-2 text-lg font-semibold">
              {business?.phone || "N/A"}
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-sm uppercase tracking-wide text-gray-500">
              Address
            </h3>

            <p className="mt-2 text-lg font-semibold">
              {business?.address || "N/A"}
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">Why Choose Us</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">1000+</h3>

            <p className="mt-3 text-gray-600">Happy Customers</p>
          </div>

          <div className="rounded-xl border p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>

            <p className="mt-3 text-gray-600">Products</p>
          </div>

          <div className="rounded-xl border p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">50+</h3>

            <p className="mt-3 text-gray-600">Brands</p>
          </div>

          <div className="rounded-xl border p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">5★</h3>

            <p className="mt-3 text-gray-600">Customer Rating</p>
          </div>
        </div>
      </section>
    </main>
  );
}
