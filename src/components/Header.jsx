"use client";
import { Button, buttonVariants } from "./ui/button";
import {
  ChatBubbleIcon,
  Cross1Icon,
  DashIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { useAppStore } from "@/lib/zustand";
import { LogoBlackImg } from "@/assets";
import Link from "next/link";
import { useEffect } from "react";
import SearchMaterials from "./SearchMaterials";
import { toast } from "sonner";

function Header() {
  const { mobileNavbar, setMobileNavbar } = useAppStore();
  function handleClick() {
    setMobileNavbar();
  }

  // CTA
  useEffect(() => {
    const id = setTimeout(() => {
      toast(
        <div className="flex flex-col">
          <h3 className="font-medium text-base">Fikr qoldiring!</h3>
          <p className="text-muted-foreground mb-3">
            chizlab.uz haqida qoldirilgan har bir fikr biz uchun qadrli
          </p>
          <a
            className={`${buttonVariants({
              variant: "default",
            })} !bg-expensive-green ml-auto`}
            href="https://forms.gle/C9onVT5n25aic9i38"
            target="_blank"
          >
            <ChatBubbleIcon />
            Fikr qoldirish
          </a>
        </div>,
        {
          closeButton: true,
          duration: 10000,
          position: "bottom-right",
          className: "!w-[400px] cta-notification",
        }
      );
    }, 7000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <div>
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
