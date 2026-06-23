import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabase";
import SEO from "../components/SEO";
import {
  trackContactSubmitted,
  trackRequestDemoClick,
} from "../lib/analytics";

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

      trackContactSubmitted();

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
    <div className="min-h-screen bg-[#020817] text-white">
      <SEO
        title="Contact Tavaro Group"
        description="Contact Tavaro Group about FarmOS, partnerships, demonstrations, and agricultural software solutions."
      />

      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-amber-500/20 px-6 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(191,148,75,0.18),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(20,80,140,0.35),transparent_35%)]" />

          <div className="relative mx-auto max-w-4xl">
            <p className="inline-block rounded-full bg-amber-500 px-4 py-2 text-sm font-black uppercase tracking-wider text-slate-950">
              Contact Tavaro Group
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Let’s talk about your farm or operation.
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-300">
              Interested in FarmOS, future FarmOS products, partnerships,
              demonstrations, or early access? Send us a message and we’ll get
              back to you.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8">
              <p className="text-sm font-black uppercase tracking-widest text-amber-400">
                Direct Contact
              </p>

              <h2 className="mt-4 text-3xl font-black">Tavaro Group</h2>

              <p className="mt-4 leading-7 text-slate-300">
                For FarmOS demos, partnerships, early access, and product
                inquiries.
              </p>

              <div className="mt-8 space-y-4 text-sm font-bold text-slate-300">
                <p>
                  <span className="text-amber-400">Email:</span>{" "}
                  info@tavarogroup.com
                </p>
                <p>
                  <span className="text-amber-400">Product:</span>{" "}
                  FarmOS Livestock Farm System
                </p>
                <p>
                  <span className="text-amber-400">Status:</span>{" "}
                  Desktop platform production ready
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-500/25 bg-gradient-to-r from-[#071a33] to-[#020817] p-8 shadow-2xl shadow-black/30">
              <p className="text-sm font-black uppercase tracking-widest text-amber-400">
                Need a walkthrough?
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Request a FarmOS demo
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Want to see the actual platform? Request a demo and we’ll show
                how FarmOS can support your farm records, health schedules,
                production tracking, and reporting.
              </p>

              <a
                href="/demo"
                onClick={() => trackRequestDemoClick("contact_side_cta")}
                className="mt-6 inline-block rounded-xl bg-amber-500 px-6 py-4 font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
              >
                Request Demo
              </a>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            {notice && (
              <div className="mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 font-bold text-amber-300">
                {notice}
              </div>
            )}

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
                  className="w-full rounded-xl border border-amber-500/20 bg-[#06152a] p-4 text-white outline-none focus:border-amber-400"
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
                  className="w-full rounded-xl border border-amber-500/20 bg-[#06152a] p-4 text-white outline-none focus:border-amber-400"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-amber-500 px-8 py-4 font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Request Information"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
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
        className="w-full rounded-xl border border-amber-500/20 bg-[#06152a] p-4 text-white outline-none focus:border-amber-400"
      />
    </div>
  );
}