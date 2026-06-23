import Image from "next/image";
import { getAppUrl } from "@/lib/config/site";

export default function Hero() {
  return (
    <section className="showcase mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-8">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center">
        <div className="flex flex-col text-center md:w-1/2 md:text-left">
          <span className="mb-3 inline-block w-fit rounded-full bg-[#7e3fea] px-3 py-1 text-sm text-white md:hidden">
            Unity for modern teams
          </span>
          <span className="mb-3 hidden w-fit rounded-full bg-gray-300 px-3 py-1 text-sm text-gray-700 md:inline-block">
            Unity for modern teams
          </span>

          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            Unity for Teams.{" "}
            <span className="text-[#7e3fea]">Clarity</span> in Every Workflow
          </h1>

          <p className="mt-4 max-w-lg text-gray-600 md:text-lg">
            Zyndrx unifies your team, streamlines workflows, and ensures clarity
            and predictable delivery across all project stages.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a href={getAppUrl()}>
              <button className="flex items-center gap-2 rounded-full border border-[#7e3fea] bg-white px-6 py-3 font-medium text-[#7e3fea] transition-colors hover:bg-[#7e3fea] hover:text-white">
                Get Started
                <Image
                  src="/images/right-arrow (1).svg"
                  alt=""
                  width={20}
                  height={20}
                  className="inline"
                />
              </button>
            </a>
            <button className="hidden items-center gap-2 rounded-full border border-[#7e3fea] bg-[#7e3fea] px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#7e3fea] sm:flex">
              <Image
                src="/images/video.svg"
                alt=""
                width={24}
                height={24}
                className="inline"
              />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="showcase-image hidden md:block md:w-1/2">
          <Image
            src="/images/showcase.png"
            alt="Zyndrx dashboard showcase"
            width={900}
            height={675}
            priority
            className="mr-5 h-auto w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
