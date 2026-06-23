"use client";

import { getAppUrl } from "@/lib/config/site";

export default function GetStarted() {
  return (
    <section id="getstarted" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-[#7e3fea] px-8 py-16 text-center text-white shadow-xl">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to bring clarity to your team?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-purple-100">
          Join thousands of teams using Zyndrx to unify workflows, reduce
          confusion, and deliver projects on time.
        </p>

        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={getAppUrl()}
            className="rounded-full bg-white px-6 py-3 font-medium text-[#7e3fea] transition-colors hover:bg-purple-50"
          >
            Get Started Free
          </a>
        </div>

        <p className="mt-4 text-sm text-purple-200">
          No credit card required · Free plan available · Cancel anytime
        </p>
      </div>
    </section>
  );
}
