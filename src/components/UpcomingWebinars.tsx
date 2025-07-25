"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];
  return (
    <div className="py-12 bg-gray-900 px-6">
      <div className="text-center">
        <h2 className=" font-semibold text-teal-600 tracking-wide text-base">
          FEATURED COURSES
        </h2>
        <p className="text-white mt-6 text-3xl  font-extrabold sm:text-4xl leading-8">
          Learn with the best
        </p>
      </div>
      <div>
        <HoverEffect
          items={featuredWebinars.map((webinars) => {
            return {
              title: webinars.title,
              description: webinars.description,
              link: `/courses/${webinars.slug}`,
            };
          })}
        />
      </div>
      <div className="mt-10 text-center">
        <Link href="/courses">
          <button className="text-white bg-teal-600 border-0 py-2 px-4 focus:outline-none hover:bg-teal-700 rounded text-sm cursor-pointer">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
