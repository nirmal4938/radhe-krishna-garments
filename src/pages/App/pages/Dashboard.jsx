import { useState } from "react";
import { BarChart3, IndianRupee, TrendingUp, Users } from "lucide-react";

const COST_PER_LEAD = 200; // Rs 200 per lead

// Reusable KPI card component
const KpiCard = ({ icon: Icon, label, value, subtext, color }) => (
  <div className="p-6 bg-white shadow-md rounded-2xl border-gray-100 hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <Icon size={22} className={color} />
    </div>
    <p className="text-3xl font-bold mt-2 text-gray-900">{value}</p>
    {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
  </div>
);

const sampleLeads = [
  {
    type: "WhatsApp",
    time: "17 Jun, 11:05 AM",
    name: "Rahul",
    phone: "98xxxxxx01",
  },
  {
    type: "Call",
    time: "17 Jun, 11:12 AM",
    name: "Sneha",
    phone: "97xxxxxx02",
  },
];

export default function Dashboard({ leads = [] }) {
  const totalLeads = leads.length;
  const totalCost = totalLeads * COST_PER_LEAD;
  const avgCostPerLead = totalLeads > 0 ? COST_PER_LEAD : 0;

  const KpiCard = ({ icon: Icon, label, value, subtext, color }) => (
    <div className="p-6 bg-white shadow-md rounded-2xl border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <Icon size={22} className={color} />
      </div>
      <p className="text-3xl font-bold mt-2 text-gray-900">{value}</p>
      {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
    </div>
  );

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-[#8B1E3F]">
          <BarChart3 size={32} /> Lead Dashboard
        </h2>
        <p className="text-sm text-gray-500">Radhe Krishna Garments</p>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <KpiCard
          icon={Users}
          label="Total Leads"
          value={totalLeads}
          color="text-blue-600"
        />
        <KpiCard
          icon={IndianRupee}
          label="Cost Per Lead"
          value={`₹${avgCostPerLead}`}
          color="text-green-600"
        />
        <KpiCard
          icon={TrendingUp}
          label="Total Spend"
          value={`₹${totalCost.toLocaleString("en-IN")}`}
          subtext={`₹${COST_PER_LEAD} x ${totalLeads} leads`}
          color="text-[#8B1E3F]"
        />
      </div>

      {/* Leads Table/Grid */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Leads
        </h3>

        {totalLeads === 0 ? (
          <div className="text-center p-10 bg-white rounded-2xl shadow border-dashed border-2 border-gray-200">
            <p className="text-gray-500">
              No leads yet. Share your landing page 🚀
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leads.map((l, i) => (
              <div
                key={i}
                className="p-5 bg-white shadow-sm rounded-2xl border-gray-100 hover:border-[#8B1E3F] transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-[#8B1E3F] text-lg">
                      {l.type || "General Lead"}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{l.time}</p>
                    {l.name && (
                      <p className="text-sm font-medium mt-2">{l.name}</p>
                    )}
                    {l.phone && (
                      <p className="text-sm text-gray-600">{l.phone}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Cost</p>
                    <p className="font-bold text-green-700">₹{COST_PER_LEAD}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
