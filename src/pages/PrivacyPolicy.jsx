import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <SEO
        title="Privacy Policy | Tavaro Group"
        description="Privacy Policy for Tavaro Group LLC and the FarmOS Livestock mobile and web applications."
      />

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
              Effective Date: July 11, 2026
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="glass-card rounded-3xl p-8">
            <div className="space-y-8 text-lg leading-8 text-slate-300">
              <p>
                Tavaro Group LLC respects your privacy. This Privacy Policy
                explains how we collect, use, store, protect, and disclose
                information when you use the Tavaro Group website, contact
                forms, and the FarmOS Livestock mobile and web applications.
              </p>

              <LegalSection title="FarmOS Livestock">
                FarmOS Livestock is a livestock and farm-management platform
                designed to help authorized users manage animal records, herd
                health, breeding, production, inventory, assets, workflows,
                financial records, staff operations, reports, and related farm
                activities.
              </LegalSection>

              <LegalSection title="Information We Collect">
                We may collect account and profile information such as your
                name, email address, phone number, password-protected account
                credentials, role, organization, farm name, and communication
                preferences.
              </LegalSection>

              <LegalSection title="Farm and Operational Data">
                FarmOS Livestock may store information entered by authorized
                users, including animal records, identification details,
                movements, breeding records, birth records, health records,
                treatments, medications, production records, feed records,
                inventory, expenses, sales, tasks, schedules, work orders,
                reports, staff records, and other operational information.
              </LegalSection>

              <LegalSection title="Photos, Documents, and Files">
                Users may choose to upload animal photos, farm images,
                documents, reports, receipts, attachments, and other files.
                These files are collected only when a user chooses to upload
                them or uses a supported camera or file-selection feature.
              </LegalSection>

              <LegalSection title="Device and Technical Information">
                We may collect limited technical information needed to operate,
                secure, and improve the service, including device type,
                operating-system information, application version, diagnostic
                events, error information, login activity, and push
                notification tokens.
              </LegalSection>

              <LegalSection title="How We Use Information">
                We use information to:
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>create and manage user accounts;</li>
                  <li>authenticate users and protect account access;</li>
                  <li>provide and synchronize FarmOS Livestock services;</li>
                  <li>display farm records, reports, and operational insights;</li>
                  <li>send requested alerts and operational notifications;</li>
                  <li>provide technical support and respond to inquiries;</li>
                  <li>maintain security, prevent abuse, and investigate errors;</li>
                  <li>improve application reliability and performance; and</li>
                  <li>meet legal, accounting, and contractual obligations.</li>
                </ul>
              </LegalSection>

              <LegalSection title="Communications">
                When enabled by the user or organization, FarmOS Livestock may
                send operational communications by email, push notification,
                SMS, or WhatsApp. These may include animal-health alerts,
                breeding reminders, task assignments, inventory warnings,
                maintenance reminders, and other farm-management notices.
              </LegalSection>

              <LegalSection title="SMS and WhatsApp">
                Message and data rates may apply. SMS recipients may reply STOP
                to opt out or HELP for assistance where supported. Disabling a
                communication channel may prevent delivery through that
                channel, but essential in-app notices may remain available.
              </LegalSection>

              <LegalSection title="Service Providers">
                We use trusted service providers to operate FarmOS Livestock.
                These may include:
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Supabase for authentication, databases, and storage;</li>
                  <li>
                    Firebase Cloud Messaging for Android push notifications;
                  </li>
                  <li>Vercel for application hosting and server functions;</li>
                  <li>Twilio for optional SMS and WhatsApp communications;</li>
                  <li>Resend for transactional email delivery; and</li>
                  <li>
                    Stripe for subscription and payment processing, where
                    enabled.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection title="Payments">
                When payment features are enabled, payments may be processed by
                a third-party payment provider such as Stripe. Tavaro Group LLC
                does not intend to store complete payment-card numbers in
                FarmOS Livestock. Payment providers process payment information
                according to their own privacy and security practices.
              </LegalSection>

              <LegalSection title="Data Sharing">
                We do not sell personal information. Information may be
                disclosed to service providers that process data on our behalf,
                to authorized members of the same farm or organization, when
                required by law, or when necessary to protect users, Tavaro
                Group LLC, or the security of the service.
              </LegalSection>

              <LegalSection title="Data Security">
                We use reasonable administrative, technical, and organizational
                safeguards, including HTTPS/TLS encryption in transit, managed
                cloud infrastructure, authenticated access, and role-based
                permissions. No method of storage or transmission is completely
                secure, and absolute security cannot be guaranteed.
              </LegalSection>

              <LegalSection title="Data Retention">
                Information is retained for as long as reasonably necessary to
                provide the service, maintain records, satisfy legal or
                contractual requirements, resolve disputes, prevent fraud, and
                enforce agreements. Retention periods may vary according to the
                type of information and the requirements of the applicable farm
                or organization.
              </LegalSection>

              <LegalSection title="Account and Data Deletion">
                Users may request deletion of their FarmOS Livestock account and
                associated personal data. Verified requests are normally
                processed within 30 days. Certain audit, security, accounting,
                legal, or contractual records may be retained where reasonably
                required.
                <span className="mt-3 block">
                  Visit the{" "}
                  <a
                    href="/delete-account"
                    className="font-bold text-amber-400 underline"
                  >
                    FarmOS Account Deletion page
                  </a>{" "}
                  for instructions.
                </span>
              </LegalSection>

              <LegalSection title="Your Rights">
                Depending on your location, you may have the right to request
                access to personal information, correction of inaccurate
                information, deletion, restriction of processing, or
                information about how your data is handled. Tavaro Group LLC
                may need to verify your identity before completing a request.
              </LegalSection>

              <LegalSection title="Children's Privacy">
                FarmOS Livestock is intended for adult farm owners, managers,
                staff members, veterinarians, and other authorized business
                users. It is not directed to children under 18.
              </LegalSection>

              <LegalSection title="International Processing">
                Information may be processed or stored in countries other than
                the country where a user is located. Where applicable, we use
                service providers and safeguards intended to protect
                information during such processing.
              </LegalSection>

              <LegalSection title="Changes to This Policy">
                We may update this Privacy Policy to reflect product, legal,
                security, or operational changes. The effective date shown at
                the top of this page will be updated when material revisions
                are published.
              </LegalSection>

              <LegalSection title="Contact">
                For privacy questions, account requests, or data-related
                inquiries, contact:
                <span className="mt-3 block font-bold text-white">
                  Tavaro Group LLC
                </span>
                <span className="block">
                  Email:{" "}
                  <a
                    href="mailto:admin@tavarogroup.com"
                    className="font-bold text-amber-400 underline"
                  >
                    admin@tavarogroup.com
                  </a>
                </span>
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
      <div className="mt-3">{children}</div>
    </section>
  );
}