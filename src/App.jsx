import React, { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";

const systems = [
  {
    name: "FarmOS Livestock Farm System",
    status: "Preparing For Production",
    highlight: true,
    description:
      "A complete livestock farm management platform for animal records, health, breeding, feed, production, staff, assets, alerts, reports, backups, and daily operations.",
  },
  {
    name: "FarmOS Apiary System",
    status: "Coming Soon",
    description:
      "Hive management, inspections, queen tracking, honey harvests, feeding, pest monitoring, and production records.",
  },
  {
    name: "FarmOS Poultry System",
    status: "Planned",
    description:
      "Flock records, egg production, broiler performance, feed conversion, mortality tracking, vaccination schedules, and reports.",
  },
  {
    name: "FarmOS Dairy System",
    status: "Planned",
    description:
      "Milk production, cow records, mastitis tracking, reproduction, milk quality, and dairy performance analytics.",
  },
];

const features = [
  ["Animal Records", "Track every animal from intake to sale."],
  ["Health Scheduling", "Vaccines, treatments, withdrawals, and due alerts."],
  ["Feed Management", "Inventory, usage logs, costs, and low-stock alerts."],
  ["Production Logs", "Milk, weights, growth, and performance tracking."],
  ["Staff Operations", "Tasks, users, roles, approvals, and accountability."],
  ["Executive Reports", "Dashboards, KPIs, backups, recovery, and audit logs."],
];

const plans = [
  ["Community", "Free", "Small farms getting started"],
  ["Starter", "$5/mo", "Growing farms needing structure"],
  ["Professional", "$15/mo", "Multi-user farm operations"],
  ["Enterprise", "Contact", "Large farms and organizations"],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    farmName: "",
    email: "",
    phone: "",
    country: "",
    animals: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent("FarmOS Early Access Request");
    const body = encodeURIComponent(`
Name: ${form.name}
Farm Name: ${form.farmName}
Email: ${form.email}
Phone: ${form.phone}
Country: ${form.country}
Animal Count: ${form.animals}

Message:
${form.message}
    `);

    window.location.href = `mailto:info@tavarogroup.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 font-black text-slate-950">
              T
            </div>
            <div>
              <h1 className="text-xl font-black">Tavaro Group</h1>
              <p className="text-xs text-slate-400">Software Systems For Real Operations</p>
            </div>
          </a>

          <nav className="hidden gap-8 text-sm font-bold text-slate-300 md:flex">
            <a href="#farmos" className="hover:text-emerald-400">FarmOS</a>
            <a href="#systems" className="hover:text-emerald-400">Systems</a>
            <a href="#pricing" className="hover:text-emerald-400">Pricing</a>
            <a href="#early-access" className="hover:text-emerald-400">Early Access</a>
          </nav>

          <a
            href="#early-access"
            className="hidden rounded-xl bg-emerald-500 px-5 py-3 text-sm font-black text-slate-950 hover:bg-emerald-400 md:block"
          >
            Join Waitlist
          </a>

          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu />
          </button>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950 p-6 md:hidden">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black">Tavaro Group</h2>
              <button onClick={() => setMenuOpen(false)}>
                <X />
              </button>
            </div>

            <div className="mt-10 grid gap-6 text-lg font-bold">
              <a href="#farmos" onClick={() => setMenuOpen(false)}>FarmOS</a>
              <a href="#systems" onClick={() => setMenuOpen(false)}>Systems</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
              <a href="#early-access" onClick={() => setMenuOpen(false)}>Early Access</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
              FarmOS Livestock Farm System • Early Access Open
            </p>

            <h2 className="text-5xl font-black leading-tight md:text-7xl">
              Software systems built for farms, businesses, and real operations.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Tavaro Group builds practical software platforms. Our flagship
              product, FarmOS Livestock Farm System, is preparing for production
              launch and helps farms manage animals, health, feed, production,
              staff, alerts, reports, and daily operations in one system.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#early-access"
                className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-black text-slate-950 hover:bg-emerald-400"
              >
                Request Early Access <ArrowRight size={20} />
              </a>

              <a
                href="#farmos"
                className="rounded-xl border border-white/20 px-6 py-4 font-black hover:bg-white/10"
              >
                View FarmOS
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="rounded-2xl bg-slate-900 p-5">
              <p className="text-sm font-black text-emerald-400">
                Executive Farm Command Center
              </p>
              <h3 className="mt-2 text-3xl font-black">FarmOS</h3>
              <p className="mt-3 text-slate-400">
                Livestock operations, health, production, feed, staff, assets,
                finance, and reports from one dashboard.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Active Animals",
                  "Health Alerts",
                  "Feed Inventory",
                  "Milk & Weight Logs",
                  "Staff Tasks",
                  "Backup & Recovery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950 p-4"
                  >
                    <CheckCircle2 className="text-emerald-400" size={20} />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="farmos" className="border-y border-white/10 bg-slate-900/70">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-emerald-400">
              Flagship Product
            </p>
            <h3 className="text-4xl font-black">FarmOS Livestock Farm System</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              FarmOS is being built for livestock farms that need better records,
              smarter alerts, production visibility, staff accountability, and
              operational control before problems become costly.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-slate-950 p-6">
                  <ShieldCheck className="mb-5 text-emerald-400" />
                  <h4 className="text-xl font-black">{title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="systems" className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-sm font-black uppercase tracking-widest text-emerald-400">
            FarmOS Product Family
          </p>
          <h3 className="text-4xl font-black">Agricultural Systems Under FarmOS</h3>
          <p className="mt-4 max-w-3xl text-slate-300">
            FarmOS is planned as a family of farm management systems sharing the
            same platform foundation: users, roles, reports, alerts, mobile tools,
            backups, billing, and dashboards.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {systems.map((system) => (
              <div
                key={system.name}
                className={`rounded-3xl border p-7 ${
                  system.highlight
                    ? "border-emerald-400/40 bg-emerald-400/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <p className="mb-4 inline-block rounded-full bg-emerald-500 px-4 py-2 text-xs font-black text-slate-950">
                  {system.status}
                </p>
                <h4 className="text-2xl font-black">{system.name}</h4>
                <p className="mt-4 leading-7 text-slate-300">{system.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/70">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-4">
            <Stat icon={<ClipboardList />} value="Records" label="Animal, health, feed, and production tracking" />
            <Stat icon={<HeartPulse />} value="Alerts" label="Health, feed, task, and operational notifications" />
            <Stat icon={<Smartphone />} value="Mobile" label="Android-ready field access for farm teams" />
            <Stat icon={<Layers3 />} value="Platform" label="Built to support future FarmOS systems" />
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-sm font-black uppercase tracking-widest text-emerald-400">
            Launch Pricing
          </p>
          <h3 className="text-4xl font-black">Simple Plans For Every Farm Stage</h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map(([name, price, description]) => (
              <div key={name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-2xl font-black">{name}</h4>
                <p className="mt-4 text-4xl font-black text-emerald-400">{price}</p>
                <p className="mt-4 text-sm text-slate-400">{description}</p>
                <a
                  href="#early-access"
                  className="mt-6 block rounded-xl bg-white px-5 py-3 text-center font-black text-slate-950 hover:bg-emerald-400"
                >
                  Request Access
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="early-access" className="bg-emerald-500 px-6 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-4xl font-black">Request Early Access</h3>
              <p className="mt-5 text-lg font-semibold leading-8">
                Join the FarmOS early access list before public app release.
                Early users may receive onboarding support, launch updates, and
                first access to production testing.
              </p>

              <div className="mt-8 grid gap-4">
                <ContactLine icon={<Mail />} text="info@tavarogroup.com" />
                <ContactLine icon={<Phone />} text="Phone number coming soon" />
                <ContactLine icon={<MapPin />} text="United States" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-3xl bg-slate-950 p-6 text-white">
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Input label="Farm Name" value={form.farmName} onChange={(v) => setForm({ ...form, farmName: v })} required />
                <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                <Input label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                <Input label="Country" value={form.country} onChange={(v) => setForm({ ...form, country: v })} />
                <Input label="Number of Animals" value={form.animals} onChange={(v) => setForm({ ...form, animals: v })} />
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-bold text-slate-300">Message</span>
                <textarea
                  className="min-h-32 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-emerald-400"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your farm or system needs..."
                />
              </label>

              <button className="mt-6 w-full rounded-xl bg-emerald-500 px-6 py-4 font-black text-slate-950 hover:bg-emerald-400">
                Submit Early Access Request
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <h4 className="text-xl font-black">Tavaro Group</h4>
            <p className="mt-2 text-sm text-slate-400">
              Building practical software systems for farms and business operations.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Tavaro Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950 p-6">
      <div className="mb-4 text-emerald-400">{icon}</div>
      <h4 className="text-2xl font-black">{value}</h4>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}

function ContactLine({ icon, text }) {
  return (
    <div className="flex items-center gap-3 font-bold">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-300">{label}</span>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-emerald-400"
      />
    </label>
  );
}