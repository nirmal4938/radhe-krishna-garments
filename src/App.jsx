// import { useState } from "react";
// import NavBar from "./pages/App/components/NavBar";
// import Home from "./pages/App/pages/Home";
// import Shop from "./pages/App/pages/Shop";
// import Dashboard from "./pages/App/pages/Dashboard";
// import useLeads from "./pages/App/hooks/useLeads";
// import { MessageCircle } from "lucide-react";

// export default function App() {
//   const [page, setPage] = useState("home");
//   const {
//     leads,
//     leadForm,
//     setLeadForm,
//     showLeadModal,
//     setShowLeadModal,
//     saveLead,
//   } = useLeads();

//   return (
//     <div className="bg-[#FFF7F0] min-h-screen">
//       <NavBar page={page} setPage={setPage} />

//       {page === "home" && <Home />}
//       {page === "shop" && <Shop />}
//       {page === "dashboard" && <Dashboard leads={leads} />}

//       {showLeadModal && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-5">
//           <div className="bg-white rounded-[32px] w-full max-w-md shadow-[0_25px_100px_rgba(0,0,0,0.3)] overflow-hidden">
//             <div className="p-8 space-y-5">
//               <div>
//                 <label className="text-sm font-semibold text-gray-700">
//                   Your Name
//                 </label>
//                 <input
//                   value={leadForm.name}
//                   onChange={(e) =>
//                     setLeadForm({ ...leadForm, name: e.target.value })
//                   }
//                   className="w-full mt-2 p-4 rounded-2xl border border-[#8B1E3F] outline-none focus:ring-2 focus:ring-[#8B1E3F]"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-semibold text-gray-700">
//                   Mobile Number
//                 </label>
//                 <input
//                   value={leadForm.phone}
//                   onChange={(e) =>
//                     setLeadForm({ ...leadForm, phone: e.target.value })
//                   }
//                   className="w-full mt-2 p-4 rounded-2xl border border-[#8B1E3F] outline-none focus:ring-2 focus:ring-[#8B1E3F]"
//                   placeholder="98XXXXXXXX"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-semibold text-gray-700">
//                   Interested In
//                 </label>
//                 <select
//                   value={leadForm.interest}
//                   onChange={(e) =>
//                     setLeadForm({ ...leadForm, interest: e.target.value })
//                   }
//                   className="w-full mt-2 p-4 rounded-2xl border border-[#8B1E3F] outline-none focus:ring-2 focus:ring-[#8B1E3F]"
//                 >
//                   <option>Women Sarees</option>
//                   <option>Men Fashion</option>
//                   <option>Kids Wear</option>
//                   <option>Wedding Collection</option>
//                 </select>
//               </div>
//               <button
//                 onClick={saveLead}
//                 className="w-full bg-green-500 text-white font-bold py-4 rounded-2xl hover:scale-105 transition shadow-xl"
//               >
//                 <MessageCircle className="inline mr-2" /> Get Offer On WhatsApp
//               </button>
//               <button
//                 onClick={() => setShowLeadModal(false)}
//                 className="w-full text-gray-500 text-sm hover:text-black"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import AppRouter from "./routes/AppRouter";

export default function App() {
  return <AppRouter />;
}
