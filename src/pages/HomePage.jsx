import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-5xl">
          <p className="mb-4 inline-block rounded-full bg-emerald-500 px-4 py-2 text-sm font-black text-slate-950">
            Built From Real Farming Experience
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Farming is hard enough without chasing records and waiting for updates.
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">
            Tavaro Group was created from real farming challenges. After
            experiencing the difficulty of managing a farm from abroad, we began
            building practical systems that help farmers get better visibility,
            accountability, and confidence in their daily operations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/farmos"
              className="rounded-xl bg-emerald-500 px-6 py-4 font-black text-slate-950 hover:bg-emerald-400"
            >
              Explore FarmOS
            </a>

            <a
              href="/about"
              className="rounded-xl border border-white/20 px-6 py-4 font-black hover:bg-white/10"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black">Why We Built FarmOS</h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
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
        <h2 className="text-4xl font-black">Featured Product</h2>

        <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8">
          <p className="mb-3 text-sm font-black uppercase tracking-wider text-emerald-300">
            Desktop Platform Production Ready
          </p>

          <h3 className="text-3xl font-black">
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
                className="rounded-xl border border-white/10 bg-slate-950/70 p-4 text-sm font-bold text-slate-200"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <a
            href="/farmos"
            className="mt-8 inline-block rounded-xl bg-emerald-500 px-6 py-4 font-black text-slate-950 hover:bg-emerald-400"
          >
            Learn More About FarmOS
          </a>
        </div>
      </section>

      {/* PRODUCT ROADMAP */}
      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black">FarmOS Product Roadmap</h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            FarmOS is growing into a family of agricultural systems built around
            the needs of different types of farms.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <RoadmapCard title="Livestock" status="Desktop Ready" active />
            <RoadmapCard title="Mobile App" status="Launching Soon" />
            <RoadmapCard title="Apiary" status="Coming Soon" />
            <RoadmapCard title="Poultry" status="Planned" />
          </div>
        </div>
      </section>

      {/* MISSION CTA */}
      <section className="bg-emerald-500 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">
            Technology should make farming clearer, not more complicated.
          </h2>

          <p className="mt-6 max-w-3xl text-lg font-semibold">
            We built FarmOS to help farmers spend less time chasing information
            and more time growing stronger, more organized operations.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-slate-950 px-6 py-4 font-black text-white"
          >
            Contact Tavaro Group
          </a>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-black text-emerald-400">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function RoadmapCard({ title, status, active = false }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        active
          ? "border-emerald-400/20 bg-emerald-400/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 text-slate-300">{status}</p>
    </div>
  );
}