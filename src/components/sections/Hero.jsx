import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { GlobalPatternImg } from "@/assets";

export default function Hero() {
  return (
    <div className="py-16">
      <div className="base-container">
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          {/* Adabiyotlar */}
          <div className="border border-black relative bg-white rounded-2xl lg:rounded-br-[70px] overflow-hidden">
            <div className="flex flex-col items-center relative p-14 lg:pr-[100px]">
              <h2 className="font-medium text-4xl mb-0 uppercase">
                Adabiyotlar
              </h2>
              <Link
                className={`${buttonVariants({
                  variant: "ghost",
                })} before:absolute before:inset-0`}
                href={
                  "/resources?resourceType=O'quv qo'llanma|Darslik|Monografiya"
                }
              >
                Ro'yhati
                <ArrowRight />
              </Link>
            </div>
            <img
              className="absolute select-none hidden sm:inline-block pointer-events-none bottom-0 right-0"
              src={GlobalPatternImg.src}
              alt="Adabiyotlar"
            />
          </div>
          {/* Taqdimotlar */}
          <div className="border border-black relative bg-white rounded-2xl lg:rounded-bl-[70px] overflow-hidden">
            <div className="flex flex-col items-center relative p-14 lg:pl-[100px]">
              <h2 className="font-medium text-4xl mb-0 uppercase">
                Taqdimotlar
              </h2>
              <Link
                className={`${buttonVariants({
                  variant: "ghost",
                })} before:absolute before:inset-0`}
                href={"/resources?resourceType=Taqdimot"}
              >
                Ro'yhati
                <ArrowRight />
              </Link>
            </div>
            <img
              className="absolute select-none hidden sm:inline-block pointer-events-none bottom-0 right-0 lg:left-0 lg:rotate-90"
              src={GlobalPatternImg.src}
              alt="Taqdimotlar"
            />
          </div>
          {/* Maqolalar */}
          <div className="border border-black relative bg-white rounded-2xl lg:rounded-tr-[70px] overflow-hidden">
            <div className="flex flex-col items-center relative p-14 lg:pr-[100px]">
              <h2 className="font-medium text-4xl mb-0 uppercase">Maqolalar</h2>
              <Link
                className={`${buttonVariants({
                  variant: "ghost",
                })} before:absolute before:inset-0`}
                href={"/resources?resourceType=Taqdimot|Tezis"}
              >
                Ro'yhati
                <ArrowRight />
              </Link>
            </div>
            <img
              className="absolute select-none hidden sm:inline-block pointer-events-none bottom-0 right-0 lg:top-0 lg:right-0 lg:-rotate-90"
              src={GlobalPatternImg.src}
              alt="Maqolalar"
            />
          </div>
          {/* Videolar */}
          <div className="border border-black relative bg-white rounded-2xl lg:rounded-tl-[70px] overflow-hidden">
            <div className="flex flex-col items-center relative p-14 lg:pl-[100px]">
              <h2 className="font-medium text-4xl mb-0 uppercase">Videolar</h2>
              <Link
                className={`${buttonVariants({
                  variant: "ghost",
                })} before:absolute before:inset-0`}
                href={"/resources?resourceType=Video"}
              >
                Ro'yhati
                <ArrowRight />
              </Link>
            </div>
            <img
              className="absolute select-none hidden sm:inline-block pointer-events-none bottom-0 right-0 lg:top-0 lg:left-0 lg:rotate-180"
              src={GlobalPatternImg.src}
              alt="Videolar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
