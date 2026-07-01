import { useEffect, useState } from "react";

import contactService from "../../services/contact.service";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [contactInfo, setContactInfo] = useState(null);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    loadContactInfo();
  }, []);

  async function loadContactInfo() {
    try {
      setLoading(true);

      const response = await contactService.getContactInfo();

      setContactInfo(response.data);
    } catch (err) {
      console.error(err);
      setError("Unable to load contact information.");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await contactService.submitContact(form);

      if (response.success) {
        setSuccess(response.message);
        setForm(initialForm);
      }
    } catch (err) {
      console.error(err);
      setError("Unable to submit your message.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-xl font-semibold">
          Loading Contact Information...
        </h2>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10 space-y-12">
      {/* Header */}

      <section className="text-center">
        <h1 className="text-5xl font-bold">Contact Us</h1>

        <p className="mt-4 text-gray-600">We'd love to hear from you.</p>
      </section>

      {/* Contact Information */}

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">Address</h3>

          <p className="mt-3 text-gray-600">{contactInfo?.address}</p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">Phone</h3>

          <p className="mt-3 text-gray-600">{contactInfo?.phone}</p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">Email</h3>

          <p className="mt-3 text-gray-600">{contactInfo?.email}</p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="font-semibold">WhatsApp</h3>

          <p className="mt-3 text-gray-600">{contactInfo?.whatsapp}</p>
        </div>
      </section>

      {/* Business Hours */}

      <section>
        <h2 className="mb-6 text-3xl font-bold">Business Hours</h2>

        <div className="rounded-xl border p-6">
          {Object.entries(contactInfo?.businessHours || {}).map(
            ([day, hours]) => (
              <div
                key={day}
                className="flex justify-between border-b py-2 last:border-0"
              >
                <span className="capitalize font-medium">{day}</span>

                <span>{hours}</span>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Contact Form */}

      <section>
        <h2 className="mb-6 text-3xl font-bold">Send a Message</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl border p-8"
        >
          <input
            className="w-full rounded-lg border p-3"
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className="w-full rounded-lg border p-3"
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="w-full rounded-lg border p-3"
            placeholder="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            className="w-full rounded-lg border p-3"
            placeholder="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            rows={6}
            className="w-full rounded-lg border p-3"
            placeholder="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />

          {error && (
            <div className="rounded bg-red-100 p-3 text-red-700">{error}</div>
          )}

          {success && (
            <div className="rounded bg-green-100 p-3 text-green-700">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* Social Links */}

      <section>
        <h2 className="mb-6 text-3xl font-bold">Follow Us</h2>

        <div className="flex flex-wrap gap-4">
          {Object.entries(contactInfo?.socialLinks || {}).map(
            ([platform, url]) => (
              <a
                key={platform}
                href={url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border px-5 py-3 capitalize transition hover:bg-gray-100"
              >
                {platform}
              </a>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
