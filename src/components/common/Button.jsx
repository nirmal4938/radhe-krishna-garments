export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const base = "px-4 py-2 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
