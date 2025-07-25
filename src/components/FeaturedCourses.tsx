"use client";

import Link from "next/link";
import React, { use } from "react";
import courseData from "@/data/music_instruments.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
        {featuredCourses.map((course: Course) => (
          <div key={course.id}>
            <BackgroundGradient>
              <div className="p-6 bg-gray-800 rounded-3xl text-center">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-400">{course.description}</p>

                <div className="mt-6 flex justify-around text-neutral-400">
                  <span>${course.price}</span>
                  <span>{course.instructor}</span>
                </div>

                <Link href={`/courses/${course.slug}`}>
                  <button className="mt-6 text-white bg-teal-600 border-0 py-2 px-4 focus:outline-none hover:bg-teal-700 rounded text-sm cursor-pointer">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <Link href="/courses">
          <button className="text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg cursor-pointer">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
