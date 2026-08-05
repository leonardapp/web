"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

const stories = [
  {
    id: 1,
    company: "Restaurant",
    owner: "Owner",
    rating: 5,
    story:
      "Customers love ordering through the QR menu. They can call a waiter, place orders, and monitor their bill in real time without waiting.",
  },
  {
    id: 2,
    company: "Quick Service Restaurant",
    owner: "Manager",
    rating: 5,
    story:
      "The kiosk has streamlined our ordering process. Every order reaches the kitchen instantly, improving speed and reducing staff workload.",
  },
  {
    id: 3,
    company: "Restaurant Group",
    owner: "Owner",
    rating: 5,
    story:
      "Automatic daily reports delivered by email help us monitor sales, revenue and operations across all our locations without logging into the dashboard.",
  },
];

export default function CustomerSuccess() {
  return (
    <section className="pt-8 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Desktop */}

        <div className="hidden md:grid grid-cols-3 gap-4">

          {stories.slice(0, 3).map((story) => (

            <div
              key={story.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-emerald-500 hover:shadow-md"
            >

              <div className="flex gap-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-sm leading-7 text-slate-600 text-center md:text-left">
                "{story.story}"
              </p>

              <div className="mt-6 border-t border-slate-200 pt-4 text-center md:text-left">

  <h3 className="font-medium text-slate-900">
    {story.company}
  </h3>

  <p className="mt-1 text-sm text-slate-500">
    {story.owner}
  </p>

</div>

            </div>

          ))}

        </div>

        {/* Mobile */}

        <div className="md:hidden">

          <div className="rounded-3xl border border-slate-200 bg-white p-8">

            <div className="flex gap-1 mb-5">

              {[...Array(stories[0].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  className="fill-amber-400 text-amber-400"
                />
              ))}

            </div>

            <p className="text-sm leading-8 text-slate-600">
              "{stories[0].story}"
            </p>

            <div className="mt-8 border-t border-slate-200 pt-5">

              <h3 className="font-medium">
                {stories[0].company}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {stories[0].owner}
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-12 text-center">

          <h3 className="text-xl font-medium">
            Share your experience
          </h3>

          <p className="mt-3 max-w-xl mx-auto text-slate-500">
            Have HOXXES helped your business? We'd love to hear your story.
          </p>

          <Link
  href="/share-story"
  className="group inline-flex items-center gap-2 mt-8 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:gap-3"
>
  Share Your Story

  <ArrowRight
    size={16}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

          <p className="mt-4 text-xs text-slate-400">
            Every story is reviewed before publication.
          </p>

        </div>

      </div>
    </section>
  );
}