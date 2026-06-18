import Navbar from "../components/Navbar";

export default function FarmOSPage() {
  const features = [
    "Animal & Herd Records",
    "Health Scheduling & Alerts",
    "Breeding Management",
    "Feed Inventory & Usage Tracking",
    "Milk & Production Recording",
    "Weight Tracking & Analytics",
    "Staff & User Management",
    "Work Orders & Asset Management",
    "Executive Dashboards",
    "Backup & Recovery Center",
    "Reports & Business Intelligence",
    "Mobile App Launching Soon",
  ];

  const products = [
    {
      name: "FarmOS Livestock Farm System",
      status: "Desktop Platform Ready",
      active: true,
    },
    {
      name: "FarmOS Mobile App",
      status: "Launching Soon",
      active: false,
    },
    {
      name: "FarmOS Apiary System",
      status: "Coming Soon",
      active: false,
    },
    {
      name: "FarmOS Poultry System",
      status: "Planned",
      active: false,
    },
  ];

  const plans = [
    {
      name: "Community",
      price: "Free",
      description: "For small farms getting started.",
    },
    {
      name: "Starter",
      price: "$5/mo",
      description: "For growing farms that need better records.",
    },
    {
      name: "Professional",
      price: "$15/mo",
      description: "For serious farm operations with multiple users.",
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "For large farms, organizations, and custom deployments.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-5xl">
          <p className="mb-4 inline-block rounded-full bg-emerald-500 px-4 py-2 text-sm font-black text-slate-950">
            Flagship Product • Desktop Platform Production Ready
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            FarmOS Livestock Farm System
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">
            A production-ready desktop livestock management platform designed to
            help farms manage animals, health, breeding, feed, production,
            staff, finances, assets, reporting, backups, and daily operations
            from one centralized system. The FarmOS mobile application is
            launching soon.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-xl bg-emerald-500 px-6 py-4 font-black text-slate-950 hover:bg-emerald-400"
            >
              Request Demo
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-white/20 px-6 py-4 font-black hover:bg-white/10"
            >
              Join Early Access
            </a>
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
          <StatusCard title="Desktop Platform" status="Production Ready" />
          <StatusCard title="Mobile App" status="Launching Soon" />
          <StatusCard title="FarmOS Ecosystem" status="Expanding" />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">
          Built For Real Livestock Operations
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          FarmOS helps livestock producers replace spreadsheets, paper records,
          delayed updates, and disconnected systems with one organized platform
          that provides visibility, accountability, and practical insight into
          daily farm operations.
        </p>
      </section>

      {/* FEATURES */}
      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black">Core Features</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-black text-emerald-400">✓ {feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT FAMILY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">FarmOS Product Family</h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
          FarmOS is growing into a family of agricultural systems designed for
          different types of farms while sharing the same practical foundation:
          records, users, alerts, reports, dashboards, backups, and operational
          control.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              status={product.status}
              active={product.active}
            />
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black">Launch Pricing</h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            FarmOS Livestock is designed to support small farms, growing farms,
            and larger operations with simple pricing tiers.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="mt-4 text-4xl font-black text-emerald-400">
                  {plan.price}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-500 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">
            Ready to Modernize Your Farm Records?
          </h2>

          <p className="mt-6 max-w-3xl text-lg font-semibold">
            FarmOS Livestock desktop platform is production ready, and the
            mobile application is launching soon. Contact us to request a demo,
            discuss onboarding, or join the early access list.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-slate-950 px-6 py-4 font-black text-white"
          >
            Request Demo
          </a>
        </div>
      </section>
    </div>
  );
}

function StatusCard({ title, status }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950 p-6">
      <p className="text-sm font-black uppercase tracking-wider text-emerald-400">
        {title}
      </p>
      <h3 className="mt-3 text-2xl font-black">{status}</h3>
    </div>
  );
}

function ProductCard({ name, status, active = false }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        active
          ? "border-emerald-400/20 bg-emerald-400/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      <h3 className="text-2xl font-black">{name}</h3>
      <p className="mt-3 text-slate-300">{status}</p>
    </div>
  );
}