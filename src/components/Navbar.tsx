"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 max-sm:px-8 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/guitar-fundamentals">
              Guitar Fundamentals
            </HoveredLink>
            <HoveredLink href="/piano-for-beginners">
              Piano for Beginners
            </HoveredLink>
            <HoveredLink href="/vocal-techniques">Vocal Techniques</HoveredLink>
            <HoveredLink href="/music-theory">Music Theory</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contactUs">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
