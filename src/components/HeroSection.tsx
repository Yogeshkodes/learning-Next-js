import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden mx-auto  md:py-0 md:h-[40rem] rounded-md">
      <Spotlight
        fill="white"
        className="-top-10 -left-5 md:left-60 md:-top-20"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>

        <p className="mt-4 text-neutral-300 max-w-lg mx-auto font-normal text-base ">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re a beginner or looking to refine
          your skills, join us to unlock your true potential.
        </p>

        <div className="mt-8">
          <Link href="/courses">
            <Button className="bg-black">Explore courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
