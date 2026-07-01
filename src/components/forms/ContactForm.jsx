import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <form className="space-y-4">
      <Input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <Input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        className="w-full rounded-lg border p-3"
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <Button>Send Message</Button>
    </form>
  );
}
