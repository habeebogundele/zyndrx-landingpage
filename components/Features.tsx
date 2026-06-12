import Image from "next/image";

const features = [
  {
    icon: "/images/eye.svg",
    title: "Real-Time Visibility",
    description: "See progress as it happens across all tasks and projects",
    size: 32,
  },
  {
    icon: "/images/paper-stack-stationery.svg",
    title: "Unified Workflow",
    description:
      "All your tasks, files, updates and communication in one place",
    size: 32,
  },
  {
    icon: "/images/people.svg",
    title: "No More Confusion",
    description:
      "Everyone knows what to do, what's next and where things stand",
    size: 24,
  },
  {
    icon: "/images/calendar (1).svg",
    title: "Fewer Meetings",
    description: "Reduce unnecessary meetings and status update calls.",
    size: 24,
  },
  {
    icon: "/images/accountality.svg",
    title: "Better Accountability",
    description: "Clear ownership and responsibilities for every task",
    size: 24,
  },
  {
    icon: "/images/target.svg",
    title: "Predictable Delivery",
    description: "Track progress and deliver projects on time, every time.",
    size: 24,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-2xl font-bold text-[#7e3fea]">
          Features
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">
          Everything you need, in one place
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-100 bg-gray-50 p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={feature.icon}
                  alt=""
                  width={feature.size}
                  height={feature.size}
                />
              </div>
              <h3 className="font-bold text-[#7e3fea]">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
