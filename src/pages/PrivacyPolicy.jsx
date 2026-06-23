import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-amber-500/20 px-6 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(191,148,75,0.18),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(20,80,140,0.35),transparent_35%)]" />

          <div className="relative mx-auto max-w-4xl">
            <p className="inline-block rounded-full bg-amber-500 px-4 py-2 text-sm font-black uppercase tracking-wider text-slate-950">
              Legal
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Privacy Policy
            </h1>

            <p className="mt-6 text-slate-400">
              Effective Date: June 21, 2026
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="glass-card rounded-3xl p-8">
            <div className="space-y-8 text-lg leading-8 text-slate-300">
              <p>
                Tavaro Group respects your privacy. This Privacy Policy explains
                how we collect, use, and protect information submitted through
                our website, contact forms, and FarmOS-related services.
              </p>

              <LegalSection title="Information We Collect">
                We may collect your name, email address, phone number, farm or
                company name, country, product interest, and message when you
                contact us or request information.
              </LegalSection>

              <LegalSection title="How We Use Information">
                We use submitted information to respond to inquiries, provide
                product updates, manage demo requests, support early access
                programs, and improve our services.
              </LegalSection>

              <LegalSection title="SMS Communications">
                If you provide a phone number and opt into SMS notifications,
                you may receive operational messages related to FarmOS. Message
                and data rates may apply. You may reply STOP to opt out or HELP
                for assistance.
              </LegalSection>

              <LegalSection title="Contact">
                For privacy questions, contact us at info@tavarogroup.com.
              </LegalSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function LegalSection({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-black text-amber-400">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}