import Image from "next/image";
import Link from "next/link";

export const LOGO_URL =
  "https://app.zyndrx.soothetechnologies.com/assets/images/logomark-on-dark.png";

interface LogoProps {
  showText?: boolean;
  size?: number;
  href?: string;
}

export default function Logo({
  showText = true,
  size = 36,
  href = "/",
}: LogoProps) {
  const content = (
    <>
      <div className="flex items-center justify-center rounded-lg bg-[#1a1033] p-1.5">
        <Image
          src={LOGO_URL}
          alt="Zyndrx logo"
          width={size}
          height={size}
          className="h-auto w-auto"
          priority
        />
      </div>
      {showText && (
        <span className="text-xl font-bold text-gray-900">Zyndrx</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center gap-2">
        {content}
      </Link>
    );
  }

  return <div className="flex items-center gap-2">{content}</div>;
}
