import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Hoxxes",
  description:
    "Cookie Policy for the Hoxxes restaurant and retail management platform.",
};

export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>

      <p className="text-gray-500 mb-10">
        Last Updated: June 2026
      </p>

      <div className="space-y-8 text-gray-700 leading-7">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. What Are Cookies?
          </h2>

          <p>
            Cookies are small text files stored on your device when you visit
            a website. They help websites function properly, improve user
            experience, and provide information about how visitors interact
            with the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. How Hoxxes Uses Cookies
          </h2>

          <p>
            Hoxxes uses cookies and similar technologies to:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Ensure website functionality.</li>
            <li>Maintain user sessions.</li>
            <li>Improve website performance.</li>
            <li>Analyze visitor behavior and usage trends.</li>
            <li>Enhance user experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Types of Cookies We Use
          </h2>

          <h3 className="text-xl font-medium mb-2">
            Essential Cookies
          </h3>

          <p>
            These cookies are necessary for the website to function properly
            and cannot be disabled through our systems.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-2">
            Analytics Cookies
          </h3>

          <p>
            We use Google Analytics to collect information about how visitors
            use our website. These cookies help us understand:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Pages visited.</li>
            <li>Time spent on pages.</li>
            <li>Traffic sources.</li>
            <li>General geographic regions.</li>
            <li>Device and browser information.</li>
          </ul>

          <p className="mt-3">
            The information collected is aggregated and does not directly
            identify individual users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Third-Party Cookies
          </h2>

          <p>
            Some cookies may be placed by third-party service providers,
            including analytics and infrastructure providers.
          </p>

          <p className="mt-3">
            These providers may use cookies according to their own privacy
            policies and terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            5. Managing Cookies
          </h2>

          <p>
            Most web browsers allow you to control and manage cookies through
            browser settings.
          </p>

          <p className="mt-3">
            You may:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Delete existing cookies.</li>
            <li>Block future cookies.</li>
            <li>Receive notifications before cookies are stored.</li>
          </ul>

          <p className="mt-3">
            Please note that disabling certain cookies may affect website
            functionality and user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            6. Changes to This Cookie Policy
          </h2>

          <p>
            Hoxxes may update this Cookie Policy from time to time.
          </p>

          <p className="mt-3">
            Any changes will be published on this page together with the
            updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            7. Contact Us
          </h2>

          <p>Hoxxes SHPK</p>
          <p>Prishtina, Kosovo</p>
          <p>Email: info@hoxxes.com</p>
        </section>
      </div>
    </main>
  );
}