const stats = [
  { value: "10k+", label: "Teams onboarded" },
  { value: "40%", label: "Fewer status meetings" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "24/7", label: "Support available" },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-2xl font-bold text-[#7e3fea]">About Zyndrx</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Built for teams who want to move fast without losing alignment
            </h2>
            <p className="mt-4 text-gray-600">
              We started Zyndrx because modern teams deserve better than endless
              Slack threads, missed deadlines, and meetings that could have been
              a dashboard update. Our platform gives every stakeholder the clarity
              they need to do great work — together.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you are a startup shipping your first product or an
              enterprise coordinating across departments, Zyndrx keeps your
              workflows unified, accountable, and predictable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-purple-100 bg-[#f8e6e6]/50 p-6 text-center"
              >
                <p className="text-3xl font-bold text-[#7e3fea]">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
