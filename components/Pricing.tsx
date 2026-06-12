const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "3 active projects",
      "Basic task management",
      "Email support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₦12,000",
    period: "per user / month",
    description: "For growing teams that need full visibility",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Real-time dashboards",
      "Integrations & automations",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "Advanced security and control for large orgs",
    features: [
      "SSO & advanced security",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "Onboarding & training",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-2xl font-bold text-[#7e3fea]">Pricing</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">
          Simple plans that scale with your team
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
          Start free and upgrade when you are ready. No hidden fees, cancel anytime.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-[#7e3fea] bg-[#7e3fea] text-white shadow-xl scale-105"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3
                className={`text-lg font-bold ${
                  plan.highlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span
                    className={`ml-1 text-sm ${
                      plan.highlighted ? "text-purple-200" : "text-gray-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? "text-purple-100" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-sm ${
                      plan.highlighted ? "text-purple-50" : "text-gray-600"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                        plan.highlighted
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
                    plan.highlighted
                      ? "bg-white text-[#7e3fea] hover:bg-purple-50"
                      : "border border-[#7e3fea] bg-white text-[#7e3fea] hover:bg-[#7e3fea] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
