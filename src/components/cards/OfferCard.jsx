export default function OfferCard({ offer }) {
  return (
    <div className="rounded-xl border p-4 bg-white">
      <h3 className="font-bold">{offer.title}</h3>
      <p className="text-sm text-gray-600">{offer.description}</p>
    </div>
  );
}
