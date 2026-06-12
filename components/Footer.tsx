import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#howitworks" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-white px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7e3fea] text-base font-bold text-white">
                Z
              </span>
              <span className="text-lg font-bold text-gray-900">Zyndrx</span>
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              Unity for teams. Clarity in every workflow.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900">{category}</h4>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-[#7e3fea]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Zyndrx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
