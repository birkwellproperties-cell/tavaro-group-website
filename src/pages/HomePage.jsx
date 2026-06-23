import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <SEO
        title="Tavaro Group | Agricultural Software Systems"
        description="Practical agricultural software built from real farming experience. Explore FarmOS Livestock Farm System."
      />

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-amber-500/20 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(191,148,75,0.2),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(20,80,140,0.38),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-block rounded-full bg-amber-500 px-4 py-2 text-sm font-black uppercase tracking-wider text-slate-950">
              Built From Real Farming Experience
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Powering farms.
              <span className="gold-text block">Empowering growth.</span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">
              Tavaro Group builds practical software systems shaped by real
              farming challenges. FarmOS was created after experiencing the
              difficulty of managing farm operations from abroad — delayed
              updates, missing records, and decisions made without clear
              information.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/farmos"
                className="rounded-xl bg-amber-500 px-6 py-4 font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
              >
                Explore FarmOS
              </a>

              <a
                href="/about"
                className="rounded-xl border border-amber-500/40 px-6 py-4 font-black text-amber-300 hover:bg-amber-500/10"
              >
                Read Our Story
              </a>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <p className="text-sm font-black uppercase tracking-widest text-amber-400">
              Flagship Platform
            </p>

            <h2 className="mt-4 text-3xl font-black">FarmOS Livestock</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Production-ready desktop livestock management software with
              mobile access launching soon.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Animal & Herd Records",
                "Health Scheduling",
                "Production Tracking",
                "Executive Dashboards",
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
        </div>
      </section>

      {/* KPI SECTION */}
      <section className="border-b border-amber-500/20 bg-[#06152a]/70 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          <KpiCard value="READY" label="Production Platform" />
          <KpiCard value="12+" label="Major Modules" />
          <KpiCard value="50+" label="Features" />
          <KpiCard value="MOBILE" label="Launching Soon" />
        </div>
      </section>

      {/* FARMOS IN ACTION PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-widest text-amber-400">
          FarmOS In Action
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-black">
          A real platform farmers can see, understand, and use.
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
          FarmOS is not just a concept. The desktop platform is production ready
          and built to help farms manage records, health, production, reports,
          and executive decisions from one organized system.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="overflow-hidden rounded-3xl border border-amber-500/25 bg-white/[0.04] p-3 shadow-2xl shadow-black/30">
            <img
              src="/screenshots/executive-dashboard.png"
              alt="FarmOS Executive Dashboard"
              className="w-full rounded-2xl border border-white/10"
            />
          </div>

          <div className="grid gap-6">
            <MiniScreenshot
              src="/screenshots/herd-register.png"
              title="Animal Records"
              text="Track herd records, IDs, status, and lifecycle information."
            />

            <MiniScreenshot
              src="/screenshots/health-scheduler.png"
              title="Health Scheduling"
              text="Manage treatments, vaccinations, and herd health activities."
            />
          </div>
        </div>

        <a
          href="/farmos"
          className="mt-8 inline-block rounded-xl border border-amber-500/40 px-6 py-4 font-black text-amber-300 hover:bg-amber-500/10"
        >
          View Full FarmOS Showcase
        </a>
      </section>

      {/* WHY */}
      <section className="border-y border-amber-500/20 bg-[#06152a]/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-black uppercase tracking-widest text-amber-400">
            Why We Built FarmOS
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black">
            Farming needs clear records, timely updates, and better visibility.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Many farmers struggle with the same problems: missing records,
            delayed updates, unclear responsibilities, and decisions made
            without reliable information. FarmOS was built to help solve those
            problems in a simple and practical way.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Visibility"
              text="Know what is happening on the farm without depending only on phone calls, memory, or handwritten notes."
            />

            <InfoCard
              title="Accountability"
              text="Track tasks, health records, production, staff activity, and daily operations with clearer responsibility."
            />

            <InfoCard
              title="Better Decisions"
              text="Use real farm records to reduce losses, improve productivity, and make decisions with more confidence."
            />
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-widest text-amber-400">
          Featured Product
        </p>

        <div className="mt-8 rounded-3xl border border-amber-500/25 bg-gradient-to-r from-[#071a33] to-[#020817] p-8 shadow-2xl shadow-black/30">
          <p className="text-sm font-black uppercase tracking-widest text-amber-400">
            Desktop Platform Production Ready
          </p>

          <h3 className="mt-4 text-3xl font-black">
            FarmOS Livestock Farm System
          </h3>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
            FarmOS is a production-ready desktop livestock management platform
            built to help farms manage animal records, health schedules,
            breeding, feed inventory, production, staff operations, reporting,
            backups, and business intelligence from one organized system. The
            mobile application is launching soon.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Desktop Platform Complete",
              "Animal & Herd Records",
              "Health & Production Management",
              "Feed Inventory Tracking",
              "Executive Dashboards",
              "Mobile App Launching Soon",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-amber-500/20 bg-white/[0.04] p-4 text-sm font-bold text-slate-200"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <a
            href="/farmos"
            className="mt-8 inline-block rounded-xl bg-amber-500 px-6 py-4 font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
          >
            Learn More About FarmOS
          </a>
        </div>
      </section>

      {/* PRODUCT ROADMAP */}
      <section className="border-y border-amber-500/20 bg-[#06152a]/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-black uppercase tracking-widest text-amber-400">
            Product Roadmap
          </p>

          <h2 className="mt-4 text-4xl font-black">
            FarmOS is growing into a family of agricultural systems.
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            FarmOS is built around the needs of different types of farms while
            sharing the same foundation: records, users, alerts, reports,
            dashboards, backups, and operational control.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <RoadmapCard title="Livestock" status="Desktop Ready" active />
            <RoadmapCard title="Mobile App" status="Launching Soon" />
            <RoadmapCard title="Apiary" status="Coming Soon" />
            <RoadmapCard title="Poultry" status="Planned" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-amber-500/20 bg-[#020817] px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-amber-500/25 bg-gradient-to-r from-[#071a33] to-[#020817] p-10 shadow-2xl shadow-black/30">
          <p className="text-sm font-black uppercase tracking-widest text-amber-400">
            Tavaro Group
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Technology should make farming clearer, not more complicated.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We built FarmOS to help farmers spend less time chasing information
            and more time growing stronger, more organized operations.
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

function MiniScreenshot({ src, title, text }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-amber-500/25 bg-white/[0.04] shadow-2xl shadow-black/30">
      <div className="bg-[#020817] p-3">
        <img
          src={src}
          alt={title}
          className="w-full rounded-2xl border border-white/10"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-black text-amber-400">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
      </div>
    </div>
  );
}

function KpiCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-amber-500/20 bg-white/[0.04] p-6 text-center shadow-xl shadow-black/20">
      <div className="gold-text text-4xl font-black">{value}</div>

      <div className="mt-3 text-sm font-black uppercase tracking-widest text-slate-300">
        {label}
      </div>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-amber-500/20 bg-white/[0.04] p-6 shadow-xl shadow-black/20">
      <h3 className="text-xl font-black text-amber-400">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function RoadmapCard({ title, status, active = false }) {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-xl shadow-black/20 ${
        active
          ? "border-amber-500/25 bg-amber-500/10"
          : "border-amber-500/20 bg-white/[0.04]"
      }`}
    >
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 text-slate-300">{status}</p>
    </div>
  );
}