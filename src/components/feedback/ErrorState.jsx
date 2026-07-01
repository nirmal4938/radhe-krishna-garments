export default function ErrorState({ message }) {
  return (
    <div className="py-10 text-center text-red-500">
      {message || "Something went wrong"}
    </div>
  );
}
