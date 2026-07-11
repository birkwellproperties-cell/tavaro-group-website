import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <SEO
        title="Delete FarmOS Account | Tavaro Group"
        description="Request deletion of your FarmOS Livestock account and associated personal data."
      />

      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-amber-500/20 px-6 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(191,148,75,0.18),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(20,80,140,0.35),transparent_35%)]" />

          <div className="relative mx-auto max-w-4xl">
            <p className="inline-block rounded-full bg-amber-500 px-4 py-2 text-sm font-black uppercase tracking-wider text-slate-950">
              Account Support
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Delete Your FarmOS Account
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              FarmOS Livestock users may request deletion of their account and
              associated personal data.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="glass-card rounded-3xl p-8">
            <div className="space-y-8 text-lg leading-8 text-slate-300">
              <LegalSection title="How to Request Account Deletion">
                Send an email to{" "}
                <a
                  href="mailto:admin@tavarogroup.com"
                  className="font-bold text-amber-400 underline"
                >
                  admin@tavarogroup.com
                </a>{" "}
                from the email address associated with your FarmOS Livestock
                account.
              </LegalSection>

              <LegalSection title="Email Subject">
                Use the subject line:{" "}
                <strong className="text-white">
                  FarmOS Account Deletion Request
                </strong>
              </LegalSection>

              <LegalSection title="Information to Include">
                Include your full name, account email address, and farm or
                organization name, if applicable.
              </LegalSection>

              <LegalSection title="Data That May Be Deleted">
                User profile information, account access records, farm
                membership information, user preferences, and uploaded
                documents or images associated with the requesting account,
                where applicable.
              </LegalSection>

              <LegalSection title="Data That May Be Retained">
                Certain operational, audit, security, accounting, legal, or
                contractual records may be retained where required for fraud
                prevention, regulatory compliance, dispute resolution, or other
                legitimate business purposes.
              </LegalSection>

              <LegalSection title="Processing Time">
                Verified deletion requests are normally completed within 30
                days.
              </LegalSection>

              <LegalSection title="Contact">
                Tavaro Group LLC
                <br />
                Email:{" "}
                <a
                  href="mailto:admin@tavarogroup.com"
                  className="font-bold text-amber-400 underline"
                >
                  admin@tavarogroup.com
                </a>
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