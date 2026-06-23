import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScreenshotLightbox from "../components/ScreenshotLightbox";

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
    { name: "FarmOS Livestock Farm System", status: "Desktop Platform Ready", active: true },
    { name: "FarmOS Mobile App", status: "Launching Soon" },
    { name: "FarmOS Apiary System", status: "Coming Soon" },
    { name: "FarmOS Poultry System", status: "Planned" },
  ];

  const plans = [
    { name: "Community", price: "Free", description: "For small farms getting started." },
    { name: "Starter", price: "$5/mo", description: "For growing farms that need better records." },
    { name: "Professional", price: "$15/mo", description: "For serious farm operations with multiple users." },
    { name: "Enterprise", price: "Contact Us", description: "For large farms, organizations, and custom deployments." },
  ];

  const screenshots = [
    {
      src: "/screenshots/executive-dashboard.png",
      title: "Executive Farm Command Center",
      text: "View herd health, production, finances, alerts, risk indicators, and operational performance from one dashboard.",
    },
    {
      src: "/screenshots/herd-register.png",
      title: "Animal & Herd Records",
      text: "Track every animal with organized records, identifiers, status, and lifecycle information.",
    },
    {
      src: "/screenshots/health-scheduler.png",
      title: "Health Scheduling & Alerts",
      text: "Schedule vaccinations, treatments, deworming, and other health activities across the herd.",
    },
    {
      src: "/screenshots/health-analytics.png",
      title: "Health Analytics",
      text: "Turn health records into insight with disease patterns, compliance tracking, and management visibility.",
    },
    {
      src: "/screenshots/executive-action-center.png",
      title: "Executive Action Center",
      text: "Identify risks, prioritize action, and support better farm decisions using operational intelligence.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-amber-500/20 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(191,148,75,0.18),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(20,80,140,0.35),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="inline-block rounded-full bg-amber-500 px-4 py-2 text-sm font-black uppercase tracking-wider text-slate-950">
            Flagship Product • Desktop Platform Production Ready
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
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
              href="/demo"
              className="rounded-xl bg-amber-500 px-6 py-4 font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
            >
              Request Demo
            </a>

            <a
              href="#pricing"
              className="rounded-xl border border-amber-500/40 px-6 py-4 font-black text-amber-300 hover:bg-amber-500/10"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-widest text-amber-400">
          FarmOS In Action
        </p>

        <h2 className="mt-4 text-4xl font-black">
          See the production-ready desktop platform.
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
          FarmOS is already built as a working desktop platform for livestock
          operations. These screens show the real system farmers can use to
          manage records, health, production, reporting, and executive decisions.
        </p>

        <ScreenshotLightbox images={screenshots} />
      </section>

      <section className="border-y border-amber-500/20 bg-[#06152a]/70">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
          <StatusCard title="Desktop Platform" status="Production Ready" />
          <StatusCard title="Mobile App" status="Launching Soon" />
          <StatusCard title="FarmOS Ecosystem" status="Expanding" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">Built For Real Livestock Operations</h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          FarmOS helps livestock producers replace spreadsheets, paper records,
          delayed updates, and disconnected systems with one organized platform
          that provides visibility, accountability, and practical insight into
          daily farm operations.
        </p>
      </section>

      <section className="border-y border-amber-500/20 bg-[#06152a]/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black">Core Features</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-amber-500/20 bg-white/[0.04] p-6"
              >
                <h3 className="font-black text-amber-400">✓ {feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section id="pricing" className="border-y border-amber-500/20 bg-[#06152a]/70">
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
                className="rounded-2xl border border-amber-500/20 bg-white/[0.04] p-6 shadow-xl shadow-black/20"
              >
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="mt-4 text-4xl font-black text-amber-400">
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

      <section className="border-y border-amber-500/20 bg-[#020817] px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-amber-500/25 bg-gradient-to-r from-[#071a33] to-[#020817] p-10 shadow-2xl shadow-black/30">
          <p className="text-sm font-black uppercase tracking-widest text-amber-400">
            FarmOS Demo
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Ready to modernize your farm records?
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            FarmOS Livestock desktop platform is production ready, and the
            mobile application is launching soon. Request a demo to see how
            FarmOS can help organize your farm operations.
          </p>

          <a
            href="/demo"
            className="mt-8 inline-block rounded-xl bg-amber-500 px-6 py-4 font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
          >
            Request Demo
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StatusCard({ title, status }) {
  return (
    <div className="rounded-3xl border border-amber-500/20 bg-[#020817] p-6 shadow-xl shadow-black/20">
      <p className="text-sm font-black uppercase tracking-wider text-amber-400">
        {title}
      </p>
      <h3 className="mt-3 text-2xl font-black">{status}</h3>
    </div>
  );
}

function ProductCard({ name, status, active = false }) {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-xl shadow-black/20 ${
        active
          ? "border-amber-500/25 bg-amber-500/10"
          : "border-amber-500/20 bg-white/[0.04]"
      }`}
    >
      <h3 className="text-2xl font-black">{name}</h3>
      <p className="mt-3 text-slate-300">{status}</p>
    </div>
  );
}