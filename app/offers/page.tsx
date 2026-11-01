
import Button from "@/components/Button";
import Header from "@/components/Header";

export const metadata = {
  title: "Special Offer | HOXXES",
  description:
    "Buy a HOXXES self-service kiosk, get an Android Stick 8K free and enjoy an additional 10% online discount. November 2–8, 2026.",
};

const OFFER = {
  start: "November 2, 2026",
  end: "November 8, 2026",
  period: "November 2–8, 2026",
  hardwareUrl: "/hardware",
  contactPhone: "+38348106060",
  productImage: "https://hoxxes.app/images/kiosk.png",
};

const steps = [
  {
    number: "01",
    title: "Choose Your Kiosk",
    description:
      "Explore the available HOXXES self-service kiosk models.",
  },
  {
    number: "02",
    title: "Shop Online",
    description:
      "Purchase an eligible kiosk during the promotional period.",
  },
  {
    number: "03",
    title: "Enjoy Your Benefits",
    description:
      "Receive the eligible 10% online discount and complimentary Android Stick 8K according to the offer terms.",
  },
];

export default function OffersPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-gray-900">
      <Header />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071b08] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-br from-[#071b08] via-[#102c0b] to-[#28530d]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-[#88d21a]/20 blur-3xl sm:h-96 sm:w-96"
        />

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex max-w-full items-center justify-center rounded-full border border-[#88d21a]/40 bg-[#88d21a]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#b5f45d] sm:px-5 sm:text-xs sm:tracking-[0.2em]">
              HOXXES Special Offer
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:mt-8 sm:text-6xl lg:text-7xl">
              BUY A KIOSK.
              <span className="mt-2 block text-[#88d21a]">
                GET MORE.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-xl">
              Purchase a HOXXES self-service kiosk,
              get an Android Stick 8K FREE and enjoy
              an additional 10% online discount.
            </p>

            {/* CTA */}
            <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center">
              <div className="w-full sm:w-auto">
                <Button href={OFFER.hardwareUrl}>
                  Shop Hardware Online
                </Button>
              </div>

              <a
                href={`tel:${OFFER.contactPhone}`}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] sm:w-auto sm:px-7 sm:text-base"
              >
                Contact Sales
              </a>
            </div>

            {/* CAMPAIGN PERIOD */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 text-sm text-white/70">
              <span aria-hidden="true">📅</span>
              <span>
                Promotional period:{" "}
                <strong className="text-white">
                  {OFFER.period}
                </strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN OFFER */}
      <section
        aria-labelledby="offer-details-heading"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* PRODUCT */}
          <div className="relative mx-auto w-full max-w-xl">
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-[#88d21a]/15 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-xl sm:p-8 lg:p-10">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-6">
                <span className="rounded-full bg-[#88d21a]/15 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-[#477d0a] sm:px-4 sm:text-xs">
                  Self-Service Kiosk
                </span>

                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  HOXXES
                </span>
              </div>

              <div className="flex min-h-[260px] items-center justify-center sm:min-h-[420px]">
                <img
                  src={OFFER.productImage}
                  alt="HOXXES Self-Service Kiosk"
                  width={700}
                  height={900}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="mx-auto max-h-[340px] w-full object-contain sm:max-h-[500px] lg:max-h-[560px]"
                />
              </div>

              <div className="mt-4 border-t border-gray-100 pt-5 text-center sm:mt-6">
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  HOXXES Self-Service Kiosk
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Smart ordering for modern businesses.
                </p>
              </div>
            </div>
          </div>

          {/* OFFER DETAILS */}
          <div className="min-w-0">
            <div className="inline-flex rounded-full bg-[#88d21a]/15 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#477d0a] sm:text-sm">
              Limited-Time Promotion
            </div>

            <h2
              id="offer-details-heading"
              className="mt-5 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:mt-6 sm:text-5xl"
            >
              Buy the kiosk.
              <span className="mt-2 block text-[#65a914]">
                Get these benefits.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Upgrade your ordering experience with
              HOXXES and enjoy more value with your
              purchase.
            </p>

            {/* BENEFIT 1 */}
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-gray-200 p-4 sm:gap-4 sm:p-6">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#88d21a]/15 text-2xl sm:h-14 sm:w-14"
              >
                🎁
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#65a914] sm:text-xs">
                  Complimentary Gift
                </p>

                <h3 className="mt-1 text-xl font-black text-gray-900 sm:text-2xl">
                  Android Stick 8K
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Get an Android Stick 8K at no additional
                  cost for your Order Display System (ODS),
                  with the purchase of an eligible kiosk.
                </p>
              </div>
            </div>

            {/* BENEFIT 2 */}
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#88d21a]/40 bg-[#88d21a]/5 p-4 sm:gap-4 sm:p-6">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#88d21a]/20 text-2xl font-black text-[#477d0a] sm:h-14 sm:w-14"
              >
                %
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#65a914] sm:text-xs">
                  Online Exclusive
                </p>

                <h3 className="mt-1 text-3xl font-black text-gray-900 sm:text-4xl">
                  10% OFF
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Enjoy an additional 10% online discount
                  on eligible kiosk purchases through
                  the HOXXES Hardware store.
                </p>
              </div>
            </div>

            {/* VALIDITY */}
            <div className="mt-6 flex items-start gap-3 text-sm text-gray-500">
              <span aria-hidden="true" className="text-xl">
                📅
              </span>

              <div>
                <strong className="text-gray-900">
                  {OFFER.period}
                </strong>
                <span className="mt-1 block">
                  Promotional period
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7 w-full sm:w-auto">
              <Button href={OFFER.hardwareUrl}>
                Shop Now &amp; Save 10%
              </Button>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-gray-400">
              Offer applies to eligible kiosk models
              and purchases made during the promotional
              period. Discount eligibility, gift
              fulfillment and applicable terms must be
              confirmed at checkout.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#65a914] sm:text-sm sm:tracking-[0.2em]">
              Simple. Smart. Online.
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Get your offer in 3 steps.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7"
              >
                <span className="text-4xl font-black text-[#88d21a]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:mt-5 sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-9 w-full max-w-md text-center sm:mt-10 sm:max-w-none">
            <Button href={OFFER.hardwareUrl}>
              Explore HOXXES Hardware
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="overflow-hidden bg-[#071b08] px-4 py-14 text-center text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Ready to upgrade your business?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-base">
            Discover smarter ordering with HOXXES.
            Shop online during our promotional week.
          </p>

          <div className="mt-7">
            <Button href={OFFER.hardwareUrl}>
              Buy Your Kiosk Online
            </Button>
          </div>

          <p className="mt-8 text-xs text-white/50 sm:text-sm">
            HOXXES — Smart Ordering. Smarter Business.
          </p>
        </div>
      </section>
    </main>
  );
}
