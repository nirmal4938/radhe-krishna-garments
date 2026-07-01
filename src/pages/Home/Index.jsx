// import { useEffect, useState } from "react";

// import businessService from "../../services/business.service";
// import homeService from "../../services/home.service";
// import productService from "../../services/product.service";
// import collectionService from "../../services/collection.service";
// import offerService from "../../services/offer.service";
// import reviewService from "../../services/review.service";

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [business, setBusiness] = useState(null);
//   const [home, setHome] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [collections, setCollections] = useState([]);
//   const [offers, setOffers] = useState([]);
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     loadHome();
//   }, []);

//   const loadHome = async () => {
//     try {
//       setLoading(true);

//       const [
//         businessRes,
//         homeRes,
//         productRes,
//         collectionRes,
//         offerRes,
//         reviewRes,
//       ] = await Promise.all([
//         businessService.getBusiness(),
//         homeService.getHomePage(),
//         productService.getFeaturedProducts(),
//         collectionService.getFeaturedCollections(),
//         offerService.getFeaturedOffers(),
//         reviewService.getFeaturedReviews(),
//       ]);

//       setBusiness(businessRes.data);
//       setHome(homeRes.data);
//       console.log("products");
//       setProducts(productRes.data);
//       setCollections(collectionRes.data);
//       setOffers(offerRes.data);
//       setReviews(reviewRes.data);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load homepage.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="container mx-auto py-20 text-center">
//         <h2 className="text-xl font-semibold">Loading Store...</h2>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mx-auto py-20 text-center">
//         <h2 className="text-red-600 text-xl font-semibold">{error}</h2>
//       </div>
//     );
//   }

//   return (
//     <main className="space-y-24 bg-white">
//       {/* HERO SECTION */}
//       <section className="bg-gradient-to-b from-gray-50 to-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold tracking-tight">
//             {home?.hero?.title || business?.name}
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
//             {home?.hero?.subtitle || business?.description}
//           </p>

//           <div className="mt-8 flex justify-center gap-4">
//             <button className="rounded-lg bg-black px-6 py-3 text-white">
//               Shop Now
//             </button>

//             <button className="rounded-lg border px-6 py-3">
//               Explore Collections
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* COLLECTIONS */}
//       <section className="container mx-auto px-4">
//         <h2 className="mb-10 text-3xl font-bold">Featured Collections</h2>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {collections.map((collection) => (
//             <div
//               key={collection.id}
//               className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={collection.image}
//                   alt={collection.name}
//                   className="h-52 w-full object-cover transition group-hover:scale-105"
//                 />
//               </div>

//               <div className="p-5">
//                 <h3 className="text-lg font-semibold">{collection.name}</h3>

//                 <p className="mt-2 text-sm text-gray-600">
//                   {collection.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PRODUCTS */}
//       <section className="container mx-auto px-4">
//         <h2 className="mb-10 text-3xl font-bold">Featured Products</h2>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-lg"
//             >
//               <div className="overflow-hidden rounded-xl">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-48 w-full object-cover transition group-hover:scale-105"
//                 />
//               </div>

//               <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>

//               <p className="mt-2 text-gray-700 font-medium">₹{product.price}</p>

//               <button className="mt-4 w-full rounded-lg bg-black py-2 text-white">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* OFFERS */}
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="mb-10 text-3xl font-bold">Latest Offers</h2>

//           <div className="grid gap-8 md:grid-cols-2">
//             {offers.map((offer) => (
//               <div
//                 key={offer.id}
//                 className="rounded-2xl border bg-white p-6 shadow-sm"
//               >
//                 <h3 className="text-xl font-bold">{offer.title}</h3>

//                 <p className="mt-2 text-gray-600">{offer.description}</p>

//                 {offer.couponCode && (
//                   <div className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-white">
//                     {offer.couponCode}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* REVIEWS */}
//       <section className="container mx-auto px-4">
//         <h2 className="mb-10 text-3xl font-bold">What Customers Say</h2>

//         <div className="grid gap-8 md:grid-cols-3">
//           {reviews.map((review) => (
//             <div
//               key={review.id}
//               className="rounded-2xl border bg-white p-6 shadow-sm"
//             >
//               <h3 className="font-semibold">{review.customerName}</h3>

//               <p className="mt-1 text-yellow-500">
//                 {"★".repeat(review.rating)}
//               </p>

//               <p className="mt-4 text-gray-600">{review.review}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

import { useEffect, useState, useCallback } from "react";

import businessService from "../../services/business.service";
import homeService from "../../services/home.service";
import productService from "../../services/product.service";
import collectionService from "../../services/collection.service";
import offerService from "../../services/offer.service";
import reviewService from "../../services/review.service";

/**
 * ==========================================================
 * Home Page
 * ==========================================================
 */

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [pageData, setPageData] = useState({
    business: null,
    home: null,
    products: [],
    collections: [],
    offers: [],
    reviews: [],
  });

  /**
   * ----------------------------------------------------------
   * Load Home Page
   * ----------------------------------------------------------
   */

  const loadHome = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        businessRes,
        homeRes,
        productRes,
        collectionRes,
        offerRes,
        reviewRes,
      ] = await Promise.all([
        businessService.getBusiness(),
        homeService.getHomePage(),
        productService.getFeaturedProducts(),
        collectionService.getFeaturedCollections(),
        offerService.getFeaturedOffers(),
        reviewService.getFeaturedReviews(),
      ]);

      setPageData({
        business: businessRes?.data ?? null,
        home: homeRes?.data ?? null,
        products: productRes?.data ?? [],
        collections: collectionRes?.data ?? [],
        offers: offerRes?.data ?? [],
        reviews: reviewRes?.data ?? [],
      });
    } catch (err) {
      console.error("Home Page Error:", err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Unable to load storefront.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadHome();
  }, [loadHome]);

  /**
   * ----------------------------------------------------------
   * Loading
   * ----------------------------------------------------------
   */

  if (loading) {
    return <LoadingState />;
  }

  /**
   * ----------------------------------------------------------
   * Error
   * ----------------------------------------------------------
   */

  if (error) {
    return <ErrorState error={error} onRetry={loadHome} />;
  }

  /**
   * ----------------------------------------------------------
   * Render
   * ----------------------------------------------------------
   */

  return (
    <main className="min-h-screen bg-white">
      <HeroSection business={pageData.business} hero={pageData.home?.hero} />

      <TrustSection />

      <CollectionsSection collections={pageData.collections} />

      <ProductsSection products={pageData.products} />

      <OffersSection offers={pageData.offers} />

      <ReviewsSection reviews={pageData.reviews} />
    </main>
  );
}

/* ==========================================================
   Loading State
========================================================== */

function LoadingState() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <div className="mx-auto mb-6 h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-black" />

        <h2 className="text-2xl font-bold">Loading Store</h2>

        <p className="mt-2 text-gray-500">
          Please wait while we prepare your shopping experience.
        </p>
      </div>
    </main>
  );
}

/* ==========================================================
   Error State
========================================================== */

function ErrorState({ error, onRetry }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
      <div className="max-w-lg rounded-3xl border bg-white p-10 text-center shadow-sm">
        <div className="mb-5 text-6xl">⚠️</div>

        <h2 className="text-3xl font-bold">Something went wrong</h2>

        <p className="mt-4 text-gray-600">{error}</p>

        <button
          onClick={onRetry}
          className="mt-8 rounded-xl bg-black px-8 py-3 text-white transition hover:bg-gray-800"
        >
          Retry
        </button>
      </div>
    </main>
  );
}

/* ==========================================================
   Sections
   (Implemented in Part 2, Part 3 & Part 4)
========================================================== */

/* ==========================================================
   Hero Section
========================================================== */

function HeroSection({ business, hero }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Background Decoration */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-gray-200/40 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gray-300/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
        {/* LEFT */}
        <div>
          {/* Store Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow-sm">
            {business?.logo ? (
              <img
                src={business.logo}
                alt={business.name}
                className="h-6 w-6 rounded-full object-cover"
              />
            ) : (
              <div className="h-6 w-6 rounded-full bg-black" />
            )}

            <span className="font-medium">
              {business?.name || "SyncWare Store"}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-6xl">
            {hero?.title ||
              `Discover Premium Collections at ${
                business?.name || "Our Store"
              }`}
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            {hero?.subtitle ||
              business?.description ||
              "Experience premium quality products, curated collections, exclusive offers and a seamless shopping experience."}
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-800">
              Shop Now
            </button>

            <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold transition hover:border-black">
              Explore Collections
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t pt-8">
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm text-gray-500">Products</p>
            </div>

            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm text-gray-500">Collections</p>
            </div>

            <div>
              <p className="text-3xl font-bold">4.9★</p>
              <p className="text-sm text-gray-500">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="overflow-hidden rounded-[36px] border bg-white shadow-2xl">
            <img
              src={
                hero?.image ||
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
              }
              alt="Hero"
              className="h-[620px] w-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -left-6 top-10 rounded-2xl bg-white p-5 shadow-xl">
            <p className="text-sm text-gray-500">Verified Store</p>
            <p className="mt-1 font-bold">Trusted by Thousands</p>
          </div>

          {/* Floating Offer */}
          <div className="absolute -right-6 bottom-10 rounded-2xl bg-black p-5 text-white shadow-xl">
            <p className="text-sm opacity-80">Today's Offer</p>
            <p className="mt-1 text-xl font-bold">Up to 40% OFF</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================
   Trust Section
========================================================== */

function TrustSection() {
  const items = [
    {
      title: "Premium Quality",
      description: "Carefully selected products from trusted brands.",
      icon: "⭐",
    },
    {
      title: "Fast Delivery",
      description: "Reliable shipping with secure packaging.",
      icon: "🚚",
    },
    {
      title: "Secure Payments",
      description: "100% safe online payment experience.",
      icon: "🔒",
    },
    {
      title: "Customer Support",
      description: "Friendly assistance whenever you need help.",
      icon: "💬",
    },
  ];

  return (
    <section className="border-y bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Why Customers Choose Us</h2>

          <p className="mt-4 text-lg text-gray-600">
            Built on trust, quality and an exceptional shopping experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">{item.icon}</div>

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================
   Collections Section
========================================================== */

function CollectionsSection({ collections = [] }) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Collections
            </p>

            <h2 className="mt-2 text-4xl font-bold">Shop by Collection</h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Discover curated collections designed for every occasion.
            </p>
          </div>

          <button className="hidden rounded-xl border px-6 py-3 font-medium hover:bg-gray-100 lg:block">
            View All
          </button>
        </div>

        {collections.length === 0 ? (
          <div className="rounded-3xl border border-dashed py-20 text-center text-gray-500">
            No collections available.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={
                      collection.image ||
                      "https://placehold.co/600x700?text=Collection"
                    }
                    alt={collection.name}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold">
                    Featured
                  </span>
                </div>

                <div className="space-y-3 p-6">
                  <h3 className="text-xl font-bold">{collection.name}</h3>

                  <p className="line-clamp-2 text-gray-600">
                    {collection.description}
                  </p>

                  <button className="mt-4 w-full rounded-xl border py-3 font-semibold transition hover:bg-black hover:text-white">
                    Explore Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ==========================================================
   Products Section
========================================================== */

function ProductsSection({ products = [] }) {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Featured Products
            </p>

            <h2 className="mt-2 text-4xl font-bold">Best Sellers</h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Hand-picked products loved by our customers.
            </p>
          </div>

          <button className="hidden rounded-xl border px-6 py-3 font-medium hover:bg-white lg:block">
            Browse All
          </button>
        </div>

        {products.length === 0 ? (
          <div className="rounded-3xl border border-dashed py-20 text-center text-gray-500">
            No featured products found.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => {
              const originalPrice =
                product.originalPrice || product.mrp || product.price * 1.2;

              const discount =
                Math.round(
                  ((originalPrice - product.price) / originalPrice) * 100,
                ) || 0;

              return (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={
                        product.image ||
                        "https://placehold.co/600x700?text=Product"
                      }
                      alt={product.name}
                      className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    {discount > 0 && (
                      <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                        {discount}% OFF
                      </span>
                    )}

                    <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow hover:scale-110">
                      ♡
                    </button>
                  </div>

                  <div className="space-y-4 p-6">
                    <h3 className="line-clamp-2 text-lg font-bold">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">
                        ₹{product.price}
                      </span>

                      {originalPrice > product.price && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-yellow-500">
                      ⭐⭐⭐⭐⭐
                      <span className="text-sm text-gray-500">(4.8)</span>
                    </div>

                    <button className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/* ==========================================================
   Offers Section
========================================================== */

function OffersSection({ offers = [] }) {
  if (!offers.length) return null;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-gray-500">
            OFFERS
          </p>

          <h2 className="mt-3 text-4xl font-bold">Deals You Shouldn't Miss</h2>

          <p className="mt-4 text-gray-600">
            Limited-time promotions crafted for you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black via-gray-900 to-gray-800 p-10 text-white shadow-xl"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <p className="text-sm uppercase tracking-widest opacity-70">
                Exclusive Offer
              </p>

              <h3 className="mt-4 text-3xl font-bold">{offer.title}</h3>

              <p className="mt-5 max-w-md text-gray-300">{offer.description}</p>

              {offer.couponCode && (
                <div className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-black">
                  {offer.couponCode}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================
   Reviews
========================================================== */

function ReviewsSection({ reviews = [] }) {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-gray-500">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold">Loved by Customers</h2>

          <p className="mt-4 text-gray-600">
            Real feedback from happy shoppers.
          </p>
        </div>

        {reviews.length === 0 ? (
          <div className="rounded-3xl border border-dashed py-16 text-center text-gray-500">
            No reviews yet.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 text-yellow-500">
                  {"★".repeat(review.rating || 5)}
                </div>

                <p className="leading-8 text-gray-600">"{review.review}"</p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                    {review.customerName?.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold">{review.customerName}</p>

                    <p className="text-sm text-green-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ==========================================================
   Newsletter CTA
========================================================== */

function NewsletterSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl rounded-[40px] bg-black px-10 py-20 text-center text-white">
        <p className="uppercase tracking-[4px] text-gray-400">Stay Updated</p>

        <h2 className="mt-4 text-5xl font-bold">Never Miss New Arrivals</h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Subscribe to receive exclusive offers, latest collections and special
          discounts.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
          <input
            className="flex-1 rounded-xl px-5 py-4 text-black outline-none"
            placeholder="Enter your email"
          />

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-black">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================
   Footer CTA
========================================================== */

function FooterCTA({ business }) {
  return (
    <section className="border-t py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 lg:flex-row">
        <div>
          <h3 className="text-3xl font-bold">
            {business?.name || "SyncWare Store"}
          </h3>

          <p className="mt-3 text-gray-600">Thank you for shopping with us.</p>
        </div>

        <button className="rounded-xl bg-black px-8 py-4 text-white hover:bg-gray-800">
          Start Shopping
        </button>
      </div>
    </section>
  );
}
