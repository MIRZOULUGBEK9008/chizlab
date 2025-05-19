"use client";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { useAppStore } from "@/lib/zustand";

const links = [
  { text: "Chizmachilik", path: "/" },
  { text: "Mualliflar", path: "/" },
  { text: "Biz haqimizda", path: "/" },
];

export function Desktop() {
  return (
    <nav className="hidden base-container sm:block pt-5 mb-10">
      <ul className="flex justify-between flex-wrap">
        {links.map(({ path, text }, index) => {
          return (
            <li key={index}>
              <Link className={buttonVariants({ variant: "link" })} href={path}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export function Mobile() {
  const { mobileNavbar } = useAppStore();
  return (
    <div
      className={`sm:hidden duration-500 absolute w-full top-24 z-40 bg-primary-foreground p-5 transition-transform ${
        mobileNavbar ? "translate-y-[-18px]" : "-translate-y-[calc(100%+18px)]"
      }`}
    >
      <nav className="base-container mb-10">
        <ul className="grid grid-cols-2 w-full">
          {links.map(({ path, text }, index) => {
            return (
              <li className="w-full" key={index}>
                <Link
                  className={`${buttonVariants({
                    variant: "ghost",
                  })} w-full`}
                  href={path}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
