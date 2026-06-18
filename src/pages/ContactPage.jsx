import { useState } from "react";
import Navbar from "../components/Navbar";
import { supabase } from "../lib/supabase";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    farm_name: "",
    email: "",
    phone: "",
    country: "",
    interest: "FarmOS Livestock Farm System",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setNotice("");

    try {
      const { error } = await supabase.from("contact_requests").insert([
        {
          name: form.name,
          farm_name: form.farm_name,
          email: form.email,
          phone: form.phone,
          country: form.country,
          interest: form.interest,
          message: form.message,
        },
      ]);

      if (error) {
        console.error("Contact form error:", error);
        setNotice("Something went wrong. Please try again.");
        return;
      }

      const { error: emailError } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: form,
        }
      );

      if (emailError) {
        console.error("Email notification failed:", emailError);
      }

      setNotice(
        "Thank you for contacting Tavaro Group. We've received your request and will get back to you as soon as possible."
      );

      setForm({
        name: "",
        farm_name: "",
        email: "",
        phone: "",
        country: "",
        interest: "FarmOS Livestock Farm System",
        message: "",
      });
    } catch (err) {
      console.error("Unexpected contact form error:", err);
      setNotice("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-5xl font-black">Contact Tavaro Group</h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Interested in FarmOS, future FarmOS products, partnerships,
          demonstrations, or early access? We'd love to hear from you.
        </p>

        {notice && (
          <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 font-bold text-emerald-300">
            {notice}
          </div>
        )}

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name"
              value={form.name}
              onChange={(value) => updateField("name", value)}
              required
            />

            <Input
              label="Farm / Company Name"
              value={form.farm_name}
              onChange={(value) => updateField("farm_name", value)}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label="Email"
                type="email"
                value={form.email}
                onChange={(value) => updateField("email", value)}
                required
              />

              <Input
                label="Phone / WhatsApp"
                value={form.phone}
                onChange={(value) => updateField("phone", value)}
              />
            </div>

            <Input
              label="Country"
              value={form.country}
              onChange={(value) => updateField("country", value)}
            />

            <div>
              <label className="mb-2 block font-bold">Interested In</label>
              <select
                value={form.interest}
                onChange={(e) => updateField("interest", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white outline-none focus:border-emerald-400"
              >
                <option>FarmOS Livestock Farm System</option>
                <option>FarmOS Mobile App</option>
                <option>FarmOS Apiary System</option>
                <option>Partnership Opportunities</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-bold">Message</label>
              <textarea
                rows="6"
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white outline-none focus:border-emerald-400"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-emerald-500 px-8 py-4 font-black text-slate-950 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Request Information"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="mb-2 block font-bold">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white outline-none focus:border-emerald-400"
      />
    </div>
  );
}