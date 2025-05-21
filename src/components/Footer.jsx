import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { LogoWhiteImg, WhitePatternImg } from "@/assets";
const contact = [
  {
    text: "Telefon",
    path: "/",
  },
  {
    text: "Email",
    path: "/",
  },
  {
    text: "Manzil",
    path: "/",
  },
];

const sections = [
  {
    text: "Chizmachilik",
    path: "/",
  },
];

const resources = [
  {
    text: "Kitoblar",
    path: "/",
  },
  {
    text: "Maqolalar",
    path: "/",
  },
  {
    text: "Taqdimotlar",
    path: "/",
  },
  {
    text: "Videolar",
    path: "/",
  },
];

function Footer() {
  return (
    <footer className="relative bg-expensive-green text-primary-foreground py-5 lg:py-10">
      <img
        src={WhitePatternImg.src}
        alt="icon"
        className="bottom-0 right-0 absolute max-w-[190px] max-h-[190px] aspect-square"
      />
      <div className="base-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center justify-items-start sm:items-start grid-rows-4 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4">
        <div className="flex flex-col row-start-4 sm:row-start-3 md:row-start-2 lg:row-start-1">
          <h2 className="mb-5 font-medium text-2xl">Bog'lanish</h2>
          <ul className="flex flex-col">
            {contact.map(({ text, path }) => {
              return (
                <li key={text}>
                  <Link
                    className={`${buttonVariants({
                      variant: "link",
                    })} text-white !p-0 focus-visible:ring-white`}
                    href={path}
                    target="_blank"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col row-start-3 sm:row-start-2 lg:row-start-1">
          <h2 className="mb-5 font-medium text-2xl">Bo'limlar</h2>
          <ul className="flex flex-col">
            {sections.map(({ text, path }) => {
              return (
                <li key={text}>
                  <Link
                    className={`${buttonVariants({
                      variant: "link",
                    })} text-primary-foreground !p-0 focus-visible:ring-white`}
                    href={path}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col row-start-2 lg:row-start-1">
          <h2 className="mb-5 font-medium text-2xl">Resurslar</h2>
          <ul className="flex flex-col">
            {resources.map(({ text, path }) => {
              return (
                <li key={text}>
                  <Link
                    className={`${buttonVariants({
                      variant: "link",
                    })} text-white !p-0 focus-visible:ring-white`}
                    href={path}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col row-start-1">
          <Link className="hover:opacity-80 mb-5" href="/" tabIndex="-1">
            <img
              className="w-[221px] h-[52px]"
              src={LogoWhiteImg.src}
              alt="Chizlab logo"
            />
          </Link>
          <p className="mb-5">
            Chizmachilik va dizayn sohasidagi O'zbekistondagi ilk platforma
          </p>
          <p className="text-slate-400">
            chizlab.uz {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
