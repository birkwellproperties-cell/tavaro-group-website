import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 inline-block rounded-full bg-emerald-500 px-4 py-2 text-sm font-black text-slate-950">
          Our Story
        </p>

        <h1 className="text-5xl font-black leading-tight">
          Built from real farming challenges.
        </h1>

        <p className="mt-8 text-xl leading-9 text-slate-300">
          Tavaro Group was not created just to build another software company.
          It started from real farming experience, real frustration, and the
          desire to make farm management easier for people facing the same
          challenges.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Like many people living and working abroad, I invested in farming back
          home in Africa with the hope of building something meaningful. But I
          quickly learned that farming is not easy, especially when you are not
          physically present every day.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Records were not always complete. Updates came late. Important
          decisions depended on phone calls, handwritten notes, memory, and
          trust. Small problems could become expensive problems before anyone
          fully understood what was happening.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          That experience showed me that many farmers share the same struggle.
          Whether someone is managing a few animals, a family farm, a commercial
          operation, or a farm from another country, they need clear records,
          timely information, accountability, and better visibility.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          FarmOS was created to help solve those problems. It is not software
          for the sake of software. It is a practical tool built around the real
          day-to-day needs of farmers, farm workers, managers, and owners.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Our goal is simple: help farmers spend less time chasing information
          and more time making confident decisions that improve productivity,
          reduce losses, and support long-term growth.
        </p>

        <div className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8">
          <h2 className="text-2xl font-black">Our Mission</h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            To build practical technology that gives farmers clarity,
            accountability, and confidence in managing their operations.
          </p>
        </div>
      </main>
    </div>
  );
}