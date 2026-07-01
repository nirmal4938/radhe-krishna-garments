export default function ProductCard({ product }) {
  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{product.name}</h3>

      <p className="text-gray-600">₹{product.price}</p>
    </div>
  );
}
