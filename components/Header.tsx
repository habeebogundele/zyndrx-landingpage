import Logo from "@/components/Logo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#howitworks", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
];

export default function Header() {
  return (
    <header id="main-header" className="sticky top-0 z-50 bg-[#f8e6e6]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Logo />

        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 transition-colors hover:text-[#7e3fea]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#getstarted">
          <button className="hidden rounded-md bg-gray-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#7e3fea] md:block">
            Get Started
          </button>
        </a>
      </div>
    </header>
  );
}
