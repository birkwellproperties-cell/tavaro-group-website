import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
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
              Terms and Conditions
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
                These Terms and Conditions govern your access to and use of the
                FarmOS platform and Tavaro Group website.
              </p>

              <LegalSection title="Service Description">
                FarmOS provides livestock management tools for animal records,
                health tracking, breeding, feed inventory, production,
                reporting, communication, and farm operations.
              </LegalSection>

              <LegalSection title="SMS Program Terms">
                By providing your mobile phone number and enabling SMS
                notifications, you agree to receive operational text messages
                from FarmOS. Message frequency varies. Message and data rates
                may apply. Reply STOP to opt out or HELP for assistance.
              </LegalSection>

              <LegalSection title="User Responsibilities">
                Users are responsible for maintaining accurate account
                information, protecting login credentials, and using the
                platform in compliance with applicable laws.
              </LegalSection>

              <LegalSection title="Availability">
                We strive to maintain reliable service availability, but we do
                not guarantee uninterrupted access. Maintenance, updates, or
                technical issues may affect access from time to time.
              </LegalSection>

              <LegalSection title="Limitation of Liability">
                Tavaro Group shall not be liable for indirect, incidental,
                special, consequential, or punitive damages arising from use of
                the platform.
              </LegalSection>

              <LegalSection title="Contact">
                Questions may be sent to info@tavarogroup.com.
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