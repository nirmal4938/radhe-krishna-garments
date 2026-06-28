import { useState, useEffect } from "react";

const STORAGE_KEY = "rk_leads";

export default function useLeads() {
  const [leads, setLeads] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [leadForm, setLeadForm] = useState({
    name: "",
    phone: "",
    interest: "Women Sarees",
  });

  const [showLeadModal, setShowLeadModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  }, [leads]);

  const trackLead = (type) => {
    setLeads((prev) => [{ type, time: new Date().toLocaleString() }, ...prev]);
  };

  const saveLead = () => {
    if (!leadForm.name || !leadForm.phone) {
      alert("Please fill name and phone");
      return;
    }

    const lead = {
      id: Date.now(),
      name: leadForm.name,
      phone: leadForm.phone,
      interest: leadForm.interest,
      source: "Opening Offer",
      createdAt: new Date().toLocaleString(),
    };

    const updated = [lead, ...leads];
    setLeads(updated);

    const message = `Namaste!

My Name : ${lead.name}

Phone : ${lead.phone}

Interested In : ${lead.interest}

I want to know more about Radhe Krishna Garments Opening Offer.`;

    window.open(
      `https://wa.me/917218396694?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    setShowLeadModal(false);
    setLeadForm({
      name: "",
      phone: "",
      interest: "Women Sarees",
    });
  };

  return {
    leads,
    leadForm,
    setLeadForm,
    showLeadModal,
    setShowLeadModal,
    trackLead,
    saveLead,
  };
}
