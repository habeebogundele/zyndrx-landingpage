const steps = [
  {
    step: "01",
    title: "Connect Your Team",
    description:
      "Invite teammates and link your existing tools. Zyndrx brings everyone into a single shared workspace in minutes.",
  },
  {
    step: "02",
    title: "Organize Workflows",
    description:
      "Create projects, assign tasks, and define clear ownership. Every update lives in one place so nothing gets lost.",
  },
  {
    step: "03",
    title: "Track Progress Live",
    description:
      "Monitor status in real time with dashboards and activity feeds. Spot blockers early and keep delivery on schedule.",
  },
  {
    step: "04",
    title: "Deliver with Confidence",
    description:
      "Ship on time with predictable timelines, fewer meetings, and full visibility from kickoff to launch.",
  },
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-2xl font-bold text-[#7e3fea]">
          How It Works
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">
          From chaos to clarity in four steps
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Zyndrx is built to get your team aligned fast — no steep learning curve,
          no scattered tools.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-xl border border-purple-100 bg-white p-6 shadow-sm"
            >
              <span className="text-4xl font-bold text-[#7e3fea]/20">
                {item.step}
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
