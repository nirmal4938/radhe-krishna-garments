import { useState } from "react";

export default function NavBar({ page, setPage }) {
  return (
    <div className="flex justify-center gap-6 p-4 bg-white shadow sticky top-0 z-50">
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("shop")}>Shop</button>
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
    </div>
  );
}
