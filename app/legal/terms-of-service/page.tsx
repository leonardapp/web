import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Hoxxes",
  description:
    "Terms of Service for the Hoxxes restaurant and retail management platform.",
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>

      <p className="text-gray-500 mb-10">
        Last Updated: June 2026
      </p>

      <div className="space-y-8 text-gray-700 leading-7">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. Acceptance of Terms
          </h2>

          <p>
            By accessing or using Hoxxes services, websites, applications,
            software, or related products, you agree to be bound by these
            Terms of Service.
          </p>

          <p className="mt-3">
            If you do not agree with these Terms, you must discontinue use
            of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. About Hoxxes
          </h2>

          <p>
            Hoxxes SHPK provides software solutions for restaurant,
            hospitality, retail, ordering, inventory management,
            analytics, and related business operations.
          </p>

          <p className="mt-3">
            Certain services may be delivered through technology partners,
            third-party infrastructure providers, and integrated services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. User Accounts
          </h2>

          <p>
            Users are responsible for maintaining the confidentiality of
            their login credentials.
          </p>

          <p className="mt-3">
            You are responsible for all activities that occur under your
            account.
          </p>

          <p className="mt-3">
            Hoxxes reserves the right to suspend or terminate accounts
            involved in unauthorized or abusive activity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Acceptable Use
          </h2>

          <p>You agree not to:</p>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Use the platform for unlawful activities.</li>
            <li>Attempt unauthorized access to systems or data.</li>
            <li>Interfere with platform security or performance.</li>
            <li>Distribute malware or harmful software.</li>
            <li>Reverse engineer, copy, or exploit the platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            5. Service Availability
          </h2>

          <p>
            Hoxxes strives to maintain continuous service availability,
            but uninterrupted operation cannot be guaranteed.
          </p>

          <p className="mt-3">
            Maintenance, updates, technical failures, internet outages,
            third-party provider interruptions, or force majeure events
            may temporarily affect service availability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            6. Customer Data
          </h2>

          <p>
            Customers retain ownership of their business data entered into
            the platform.
          </p>

          <p className="mt-3">
            Hoxxes may process customer data solely for the purpose of
            providing services, support, security, analytics, and legal
            compliance.
          </p>

          <p className="mt-3">
            Customers are responsible for ensuring that data entered into
            the platform complies with applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            7. Intellectual Property
          </h2>

          <p>
            The Hoxxes brand, logos, website content, documentation,
            software interfaces, and related materials are protected by
            intellectual property laws.
          </p>

          <p className="mt-3">
            Except where explicitly permitted, users may not copy,
            modify, distribute, sublicense, or create derivative works
            from Hoxxes services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            8. Third-Party Integrations
          </h2>

          <p>
            Hoxxes may integrate with third-party systems, payment
            providers, fiscal systems, delivery services, communication
            services, and other external platforms.
          </p>

          <p className="mt-3">
            Hoxxes is not responsible for interruptions, failures,
            security incidents, or changes caused by third-party services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            9. Fees and Payments
          </h2>

          <p>
            Certain services may require subscription fees, setup fees,
            implementation fees, support fees, or other charges.
          </p>

          <p className="mt-3">
            Fees are due according to the agreement established between
            Hoxxes and the customer.
          </p>

          <p className="mt-3">
            Failure to pay applicable fees may result in suspension or
            termination of services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            10. Limitation of Liability
          </h2>

          <p>
            To the maximum extent permitted by law, Hoxxes shall not be
            liable for indirect, incidental, special, consequential, or
            punitive damages arising from the use of the platform.
          </p>

          <p className="mt-3">
            This includes loss of revenue, business interruption, loss of
            profits, loss of data, or operational disruptions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            11. Disclaimer
          </h2>

          <p>
            Services are provided on an "as available" and "as is" basis.
          </p>

          <p className="mt-3">
            Hoxxes does not guarantee that services will be error-free,
            uninterrupted, or suitable for every specific business
            requirement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            12. Termination
          </h2>

          <p>
            Hoxxes may suspend or terminate services when users violate
            these Terms, fail to pay applicable fees, or engage in
            unlawful activities.
          </p>

          <p className="mt-3">
            Customers may discontinue services at any time according to
            their contractual arrangements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            13. Modifications
          </h2>

          <p>
            Hoxxes reserves the right to update these Terms of Service at
            any time.
          </p>

          <p className="mt-3">
            Updated versions will be published on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            14. Governing Law
          </h2>

          <p>
            These Terms shall be governed and interpreted in accordance
            with the laws of the Republic of Kosovo.
          </p>

          <p className="mt-3">
            Any disputes arising from these Terms shall be subject to the
            jurisdiction of the competent courts of Kosovo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            15. Contact Information
          </h2>

          <p>Hoxxes SHPK</p>
          <p>Prishtina, Kosovo</p>
          <p>Email: info@hoxxes.com</p>
        </section>
      </div>
    </main>
  );
}