"use client";
import { Button } from "./ui/button";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import TestMode from "./TestMode";
import { useAppStore } from "@/lib/zustand";
import { LogoBlackImg } from "@/assets";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchMaterials from "./SearchMaterials";

function Header() {
  const { mobileNavbar, setMobileNavbar } = useAppStore();
  function handleClick() {
    setMobileNavbar();
  }

  return (
    <div>
      <TestMode />
      <header
        className={`lg:py-5 py-3 relative transition-colors duration-300 z-50 bg-white sm:bg-transparent border-b ${
          mobileNavbar ? "border-b-slate-200" : "border-transparent"
        }`}
      >
        <div className="base-container flex items-center justify-between gap-10">
          <Link className="hover:opacity-80" tabIndex="-1" href="/">
            <img
              className="w-[221px] h-[52px]"
              src={LogoBlackImg.src}
              alt="Chizlab logo"
            />
          </Link>

          <SearchMaterials />

          <Button
            onClick={handleClick}
            className="sm:hidden"
            size="icon"
            variant="outline"
          >
            {mobileNavbar ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
