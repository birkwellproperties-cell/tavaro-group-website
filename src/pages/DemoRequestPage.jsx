import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabase";
import SEO from "../components/SEO";

export default function DemoRequestPage() {
  const [form, setForm] = useState({
    name: "",
    farm_name: "",
    email: "",
    phone: "",
    country: "",
    herd_size: "",
    preferred_time: "",
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

  function buildMessage() {
    return `
Herd Size: ${form.herd_size}
Preferred Demo Time: ${form.preferred_time}

Message:
${form.message}
    `;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setNotice("");

    const payload = {
      name: form.name,
      farm_name: form.farm_name,
      email: form.email,
      phone: form.phone,
      country: form.country,
      interest: "FarmOS Demo Request",
      message: buildMessage(),
    };

    try {
      const { error } = await supabase.from("contact_requests").insert([payload]);

      if (error) {
        console.error("Demo request error:", error);
        setNotice("Something went wrong. Please try again.");
        return;
      }

      const { error: emailError } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: payload,
        }
      );

      if (emailError) {
        console.error("Email notification failed:", emailError);
      }

      setNotice(
        "Thank you. Your FarmOS demo request has been received. We will contact you soon."
      );

      setForm({
        name: "",
        farm_name: "",
        email: "",
        phone: "",
        country: "",
        herd_size: "",
        preferred_time: "",
        message: "",
      });
    } catch (err) {
      console.error("Unexpected demo request error:", err);
      setNotice("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <SEO
        title="Request a FarmOS Demo"
         description="Request a demonstration of FarmOS Livestock Farm System and see how it can modernize farm operations."
      />
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-amber-500/20 px-6 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(191,148,75,0.18),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(20,80,140,0.35),transparent_35%)]" />

          <div className="relative mx-auto max-w-5xl">
            <p className="inline-block rounded-full bg-amber-500 px-4 py-2 text-sm font-black uppercase tracking-wider text-slate-950">
              FarmOS Demo
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              See FarmOS in action.
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">
              Request a walkthrough of the FarmOS Livestock desktop platform and
              see how it can help manage animals, health, feed, production,
              staff, reports, and daily farm operations.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8">
              <p className="text-sm font-black uppercase tracking-widest text-amber-400">
                What You Can Expect
              </p>

              <h2 className="mt-4 text-3xl font-black">
                A practical product walkthrough
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                We’ll walk through how FarmOS helps farms organize records,
                monitor health activities, track production, manage staff
                operations, and view executive dashboards.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "Executive Farm Command Center",
                  "Animal & Herd Records",
                  "Health Scheduling & Alerts",
                  "Feed, Production & Reports",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-amber-500/20 bg-white/[0.04] p-4 text-sm font-bold text-slate-200"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-500/25 bg-gradient-to-r from-[#071a33] to-[#020817] p-8 shadow-2xl shadow-black/30">
              <p className="text-sm font-black uppercase tracking-widest text-amber-400">
                Production Status
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Desktop platform ready
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                FarmOS Livestock desktop platform is production ready. The
                mobile application is launching soon.
              </p>
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
                onChange={(v) => updateField("name", v)}
                required
              />

              <Input
                label="Farm / Company Name"
                value={form.farm_name}
                onChange={(v) => updateField("farm_name", v)}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => updateField("email", v)}
                  required
                />

                <Input
                  label="Phone / WhatsApp"
                  value={form.phone}
                  onChange={(v) => updateField("phone", v)}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="Country"
                  value={form.country}
                  onChange={(v) => updateField("country", v)}
                />

                <Input
                  label="Approximate Herd Size"
                  value={form.herd_size}
                  onChange={(v) => updateField("herd_size", v)}
                />
              </div>

              <Input
                label="Preferred Demo Time"
                value={form.preferred_time}
                onChange={(v) => updateField("preferred_time", v)}
                placeholder="Example: Weekday mornings, evenings, next Tuesday"
              />

              <div>
                <label className="mb-2 block font-bold">Message</label>
                <textarea
                  rows="6"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full rounded-xl border border-amber-500/20 bg-[#06152a] p-4 text-white outline-none focus:border-amber-400"
                  placeholder="Tell us what you want to see in the demo..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-amber-500 px-8 py-4 font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Request Demo"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
}) {
  return (
    <div>
      <label className="mb-2 block font-bold">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-amber-500/20 bg-[#06152a] p-4 text-white outline-none focus:border-amber-400"
      />
    </div>
  );
}