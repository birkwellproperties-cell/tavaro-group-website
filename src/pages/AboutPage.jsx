import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-amber-500/20 px-6 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(191,148,75,0.18),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(20,80,140,0.35),transparent_35%)]" />

          <div className="relative mx-auto max-w-5xl">
            <p className="inline-block rounded-full bg-amber-500 px-4 py-2 text-sm font-black uppercase tracking-wider text-slate-950">
              Our Story
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Built from real farming challenges.
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-300">
              Tavaro Group was not created just to build another software
              company. It started from real farming experience, real
              frustration, and the desire to make farm management easier for
              people facing the same challenges.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              Like many people living and working abroad, I invested in farming
              in Africa with the hope of building something meaningful.
              But I quickly learned that farming is not easy, especially when you
              are not physically present every day.
            </p>

            <p>
              Records were not always complete. Updates came late. Important
              decisions depended on phone calls, handwritten notes, memory, and
              trust. Small problems could become expensive problems before
              anyone fully understood what was happening.
            </p>

            <p>
              That experience showed me that many farmers share the same
              struggle. Whether someone is managing a few animals, a family
              farm, a commercial operation, or a farm from another country, they
              need clear records, timely information, accountability, and better
              visibility.
            </p>

            <p>
              FarmOS was created to help solve those problems. It is not software
              for the sake of software. It is a practical tool built around the
              real day-to-day needs of farmers, farm workers, managers, and
              owners.
            </p>

            <p>
              Our goal is simple: help farmers spend less time chasing
              information and more time making confident decisions that improve
              productivity, reduce losses, and support long-term growth.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-amber-500/25 bg-gradient-to-r from-[#071a33] to-[#020817] p-8 shadow-2xl shadow-black/30">
            <p className="text-sm font-black uppercase tracking-widest text-amber-400">
              Our Mission
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Practical technology for clearer farm management.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              To build practical technology that gives farmers clarity,
              accountability, and confidence in managing their operations.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}