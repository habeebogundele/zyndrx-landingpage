import {
  formatPlanFeatures,
  formatPlanInterval,
  formatPlanPrice,
  getPlanCta,
  getSubscriptionPlans,
  isHighlightedPlan,
} from "@/lib/api/subscriptions";

export default async function Pricing() {
  const plans = await getSubscriptionPlans();

  return (
    <section id="pricing" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-2xl font-bold text-[#7e3fea]">Pricing</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">
          Simple plans that scale with your team
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
          Start free and upgrade when you are ready. No hidden fees, cancel
          anytime.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan) => {
              const highlighted = isHighlightedPlan(plan);
              const featureList = formatPlanFeatures(plan.features);

              return (
                <div
                  key={plan._id}
                  className={`flex flex-col rounded-2xl border p-6 ${
                    highlighted
                      ? "border-[#7e3fea] bg-[#7e3fea] text-white shadow-xl xl:scale-105"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold ${
                      highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">
                      {formatPlanPrice(plan.price, plan.currency)}
                    </span>
                    <span
                      className={`ml-1 text-sm ${
                        highlighted ? "text-purple-200" : "text-gray-500"
                      }`}
                    >
                      {formatPlanInterval(plan.interval)}
                    </span>
                  </div>
                  <p
                    className={`mt-2 text-sm ${
                      highlighted ? "text-purple-100" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {featureList.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2 text-sm ${
                          highlighted ? "text-purple-50" : "text-gray-600"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                            highlighted
                              ? "bg-white/20 text-white"
                              : "bg-[#7e3fea]/10 text-[#7e3fea]"
                          }`}
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href="#getstarted" className="mt-8 block">
                    <button
                      className={`w-full rounded-full py-3 font-medium transition-colors ${
                        highlighted
                          ? "bg-white text-[#7e3fea] hover:bg-purple-50"
                          : "border border-[#7e3fea] bg-white text-[#7e3fea] hover:bg-[#7e3fea] hover:text-white"
                      }`}
                    >
                      {getPlanCta(plan)}
                    </button>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
