"use client";
import { Abdurazzoq, Islam, Mutabarxon } from "@/assets/avatars";
import Durdona from "@/assets/avatars/durdona.jpg";
import {
  BehanceIcon,
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SiteIcon,
  TelegramIcon,
} from "@/assets/icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tooltip, TooltipProvider } from "../ui/tooltip";
import { TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { CardlPatternImg } from "@/assets";
import Motion from "../Motion";

const founderList = [
  {
    fullName: "Mo‘tabarxon Turdaliyeva",
    position: "G‘oya muallifi & dizayner",
    info: ["FarDu, Najot Ta'lim", "Grafik dizayner"],
    avatar: Mutabarxon,
    socials: [
      {
        text: "Telegram",
        icon: <Icon icon={TelegramIcon} />,
        url: "",
      },
      {
        text: "Instagram",
        icon: <Icon icon={InstagramIcon} />,
        url: "",
      },
      {
        text: "Behance",
        icon: <Icon icon={BehanceIcon} />,
        url: "",
      },
      {
        text: "Email",
        icon: <Icon icon={EmailIcon} />,
        url: "",
      },
    ],
  },
  {
    fullName: "Mirzo Ulug‘bek Xudoyberdiyev",
    position: "Bosh dasturchi",
    info: ["Najot Ta'lim", "Frontend dasturchi"],
    avatar: null,
    socials: [
      {
        text: "Telegram",
        icon: <Icon icon={TelegramIcon} />,
        url: "",
      },
      {
        text: "GitHub",
        icon: <Icon icon={GitHubIcon} />,
        url: "",
      },
    ],
  },
  {
    fullName: "Islom Ismoilov",
    position: "Art director",
    info: ["Najot Ta'lim", "Grafik dizayner"],
    avatar: Islam,
    socials: [
      {
        text: "Telegram",
        icon: <Icon icon={TelegramIcon} />,
        url: "",
      },
      {
        text: "Instagram",
        icon: <Icon icon={InstagramIcon} />,
        url: "",
      },
      {
        text: "Behance",
        icon: <Icon icon={BehanceIcon} />,
        url: "",
      },
      {
        text: "Email",
        icon: <Icon icon={EmailIcon} />,
        url: "",
      },
    ],
  },
  {
    fullName: "Abdurazzoq Abdusalomov",
    position: "Backend dasturchi",
    info: ["Najot Ta'lim", "Backend dasturchi"],
    avatar: Abdurazzoq,
    socials: [
      {
        text: "Telegram",
        icon: <Icon icon={TelegramIcon} />,
        url: "",
      },
      {
        text: "GitHub",
        icon: <Icon icon={GitHubIcon} />,
        url: "",
      },
      {
        text: "LinkedIn",
        icon: <Icon icon={LinkedInIcon} />,
        url: "",
      },
      {
        text: "Email",
        icon: <Icon icon={EmailIcon} />,
        url: "",
      },
    ],
  },
  {
    fullName: "Oyatillo Toshtemirov",
    position: "Frontend dasturchi",
    info: ["Najot Ta'lim", "Frontend dasturchi"],
    avatar: null,
    socials: [
      {
        text: "Telegram",
        icon: <Icon icon={TelegramIcon} />,
        url: "",
      },
      {
        text: "GitHub",
        icon: <Icon icon={GitHubIcon} />,
        url: "",
      },
      {
        text: "Sayt",
        icon: <Icon icon={SiteIcon} />,
        url: "",
      },
      {
        text: "Email",
        icon: <Icon icon={EmailIcon} />,
        url: "",
      },
    ],
  },
  {
    fullName: "Durdonaxon Mo‘ydinjonova",
    position: "Frontend dasturchi",
    info: ["FDTU, Najot Ta'lim", "Frontend dasturchi"],
    avatar: Durdona,
    socials: [
      {
        text: "Telegram",
        icon: <Icon icon={TelegramIcon} />,
        url: "",
      },
      {
        text: "GitHub",
        icon: <Icon icon={GitHubIcon} />,
        url: "",
      },
      {
        text: "Sayt",
        icon: <Icon icon={SiteIcon} />,
        url: "",
      },
      {
        text: "Email",
        icon: <Icon icon={EmailIcon} />,
        url: "",
      },
    ],
  },
];

function Icon({ icon }) {
  return <img src={icon.src} alt="Icon" width={17} height={17} />;
}

export default function Founders() {
  return (
    <section className="py-24">
      <div className="base-container">
        <h2 className="mb-10 font-semibold text-center text-4xl">
          Sayt ijodkorlari
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {founderList.map(
            ({ fullName, avatar, position, info, socials }, index) => {
              return (
                <Motion
                  type="li"
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  key={index}
                  className="border border-black bg-white rounded-[85px] p-10 relative overflow-hidden"
                >
                  <img
                    className="absolute bottom-0 right-0 rotate-180 select-none pointer-events-none"
                    src={CardlPatternImg.src}
                    aria-hidden={true}
                  />
                  <div className="flex md:items-center flex-col md:flex-row  justify-between gap-5 mb-5">
                    <h3 className="text-2xl font-medium">{fullName}</h3>
                    <Avatar className="w-[100px] h-[100px] -order-1">
                      <AvatarImage src={avatar && avatar.src} />
                      <AvatarFallback className="text-3xl font-medium">
                        {fullName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <p className="text-lg mb-10">{position}</p>

                  {/* Info  */}
                  <div className="flex flex-col gap-1 mb-20">
                    {info.map((text, index) => {
                      return (
                        <p className="before:content-['-']" key={index}>
                          {text}
                        </p>
                      );
                    })}
                  </div>

                  {/* Socials  */}
                  <div className="flex gap-3">
                    {socials.map(({ text, icon, url }, index) => {
                      return (
                        <TooltipProvider key={index} delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger
                              className="focus:outline-none"
                              onClick={() => {
                                window.open(url, { target: "blank" });
                              }}
                            >
                              {icon}
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{text}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                </Motion>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
}
