import Button from "@/components/Button";
import Header from "@/components/Header";

const OFFER_DEADLINE = "2026-06-30";

function isOfferActive() {
  return new Date(OFFER_DEADLINE).getTime() > new Date().getTime();
}
export const metadata = {
  title: "Offers | HOXXES",
  description:
    "Limited-time offers on HOXXES software, self-service kiosks and business solutions.",
};

export default function OffersPage() {
   const offerActive = isOfferActive();
  if (!offerActive) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent">
      <Header />

      <section className="flex min-h-[70vh] items-center justify-center px-6 text-center">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
            HOXXES Offers
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            No Active Offers
          </h1>

          <p className="mt-5 max-w-xl text-slate-500">
            There are currently no active promotions.
            Check back soon for future offers.
          </p>

          <div className="mt-8">
            <Button href="/contact-sales">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      {/* Hero */}
<section className="relative overflow-hidden border-b border-gray-100 pt-16">
  <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">

    <div className="max-w-4xl mx-auto text-center">

      <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold tracking-wide text-green-700">
        LIMITED OFFER
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-[56px]">
        Special Offers for
        <span className="block mt-2 text-emerald-600">
          Modern Business Operations
        </span>
      </h1>

      <p className="mt-6 text-base text-gray-600 sm:text-lg">
        Explore limited-time offers on self-service kiosks, enterprise hardware
        and innovative display solutions designed for modern business operations.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button href="/request-demo?type=proforma&offer=kiosk-bundle">
          Request Proforma Invoice
        </Button>

        <a
          href="tel:+38348106060"
          className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-50"
        >
          Call Sales
        </a>
      </div>

    </div>

  </div>
</section>

        {/* Main Offer */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="p-6 sm:p-8 lg:p-14">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                Offer Ends June 30
              </div>

              <h2 className="mt-8 text-3xl font-bold text-gray-900 sm:text-4xl">
  2 Self-Service Kiosks
</h2>

<div className="mt-4 text-4xl font-bold text-emerald-600">
  €2,118 + VAT
</div>

              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                Receive 2 wall-mounted self-service kiosks and enjoy
                12 months of HOXXES software at no additional cost.
              </p>

              <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-green-700">
                  Included
                </p>

                <h3 className="mt-2 text-xl font-bold text-green-700 sm:text-2xl">
                  12 Months FREE Subscription
                </h3>

                <p className="mt-2 text-sm text-green-700">
                  Save on software costs during your first year.
                </p>
              </div>

              {/* Benefits */}
<div className="mt-10">
  <h4 className="text-lg font-semibold text-gray-900">
    Why This Offer
  </h4>

  <div className="mt-6 grid gap-4 sm:grid-cols-2">
    <div className="rounded-2xl border border-gray-200 p-5 font-medium text-gray-800">
      ✓ Reduce Waiting Lines
    </div>

    <div className="rounded-2xl border border-gray-200 p-5 font-medium text-gray-800">
      ✓ Increase Order Volume
    </div>

    <div className="rounded-2xl border border-gray-200 p-5 font-medium text-gray-800">
      ✓ Improve Customer Experience
    </div>

    <div className="rounded-2xl border border-gray-200 p-5 font-medium text-gray-800">
      ✓ Fully Integrated with POS & Kitchen
    </div>
  </div>
</div>

              {/* Included */}
              <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  What's Included
                </h4>

                <ul className="mt-4 space-y-3 text-gray-700">
                  <li>• 2 Wall-Mounted Self-Service Kiosks</li>
                  <li>• HOXXES Software License</li>
                  <li>• POS Integration</li>
                  <li>• Kitchen Display Integration</li>
                  <li>• Installation & Configuration</li>
                  <li>• Delivery Scheduled for July</li>
                </ul>
              </div>

              {/* Deadline */}
              <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-6">
                <p className="text-sm uppercase tracking-widest text-red-700">
                  Only Available Until June 30
                </p>

                <div className="mt-2 text-3xl font-bold text-gray-900">
                  June 30
                </div>

                <p className="mt-2 text-gray-700">
                  Offer valid only for payments completed before June 30.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/request-demo?type=proforma&offer=kiosk-bundle">
  Request Proforma Invoice
</Button>

                <a
              href="tel:+38348106060"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-50"
            >
              Call Sales
            </a>
              </div>
            </div>

            {/* Right */}
<div className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50 p-6 sm:p-10">
  <img
    src="https://hoxxes.app/images/kiosk.svg"
    alt="HOXXES Self-Service Kiosk"
    className="w-full max-w-[500px] lg:max-w-[650px] object-contain"
  />
</div>

          </div>
        </div>
      </section>
      {/* Holobox Offer */}
<section className="mx-auto max-w-7xl px-6 pb-16">
  <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
    <div className="grid grid-cols-1 lg:grid-cols-2">

      {/* Left */}
      <div className="p-6 sm:p-8 lg:p-14">

        <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
          40% OFF • LIMITED OFFER
        </div>

        <div className="mt-6 flex items-center gap-3">
          <span className="text-2xl text-slate-400 line-through">
            €10,000 + VAT
          </span>

          <span className="text-4xl font-bold text-emerald-600">
            €6,000 + VAT
          </span>
        </div>

        <p className="mt-2 text-sm font-medium text-emerald-600">
          Save €4,000 • 40% OFF
        </p>

        <h2 className="mt-8 text-3xl font-bold text-gray-900 sm:text-4xl">
          Holobox 86" Transparent Display
        </h2>

        <p className="mt-4 text-base text-gray-600 sm:text-lg">
          Premium transparent display designed for product showcases,
          exhibitions, retail environments and immersive brand experiences.
        </p>

        {/* Specifications */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h4 className="text-lg font-semibold text-gray-900">
            Specifications
          </h4>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• Display: 86" Transparent LCD</li>
            <li>• Resolution: 4K UHD (3840 × 2160)</li>
            <li>• Dimensions: 208.2 × 124.3 × 60 cm</li>
            <li>• Power: 220V</li>
          </ul>
        </div>

        {/* Included */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h4 className="text-lg font-semibold text-gray-900">
            What's Included
          </h4>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• 86" Transparent Display</li>
            <li>• Integrated Mini PC</li>
            <li>• Content Management Software</li>
            <li>• Remote Content Updates</li>
            <li>• 1 Year Technical Warranty</li>
          </ul>
        </div>

        {/* Unique */}
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-amber-700">
            Unique in Kosovo
          </p>

          <h3 className="mt-2 text-xl font-bold text-amber-700 sm:text-2xl">
            The Only Holobox Available in Kosovo
          </h3>

          <p className="mt-2 text-sm text-amber-700">
            Demo unit in excellent condition with 1 year technical warranty.
          </p>
        </div>

        {/* Deadline */}
        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <p className="text-sm uppercase tracking-widest text-red-700">
            Offer Ends June 30
          </p>

          <div className="mt-2 text-3xl font-bold text-gray-900">
            June 30
          </div>

          <p className="mt-2 text-gray-700">
            Former showroom price €10,000 + VAT. Available now for only
            €6,000 + VAT until June 30.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact-sales">
            Request Offer
          </Button>

          <a
            href="tel:+38348106060"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-50"
          >
            Call Sales
          </a>
        </div>

      </div>

      {/* Right */}
      <div className="flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-50 to-amber-50 p-6 sm:p-10">

        {/* Real Product Photo */}
        <a
  href="https://hoxxes.app/images/holo-dimensions.png"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://hoxxes.app/images/holo-dimensions.png"
    alt="Holobox Dimensions"
    className="w-full max-w-[650px] object-contain cursor-zoom-in transition hover:scale-[1.02]"
  />
</a>
<p className="text-xs text-center text-slate-500">
  Click to enlarge
</p>

        {/* Technical Drawing */}
        <div className="w-full max-w-[500px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <img
            src="https://hoxxes.app/images/holo.png"
            alt="Holobox Technical Dimensions"
            className="w-full object-contain"
          />
        </div>

      </div>

    </div>
  </div>
</section>

      {/* Contact */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
  Reserve Before June 30
</h2>

<p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
  Limited-time offers available while stock and promotional inventory last.
</p>

        
          <div className="mt-10">
            <Button href="/contact-sales">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}