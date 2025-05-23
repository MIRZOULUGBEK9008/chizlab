import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Desktop, Mobile } from "@/components/Navbars";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const gilroyFont = localFont({
  src: [
    {
      path: "../assets/fonts/Gilroy-Black.woff",
      weight: "900",
    },
    {
      path: "../assets/fonts/Gilroy-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../assets/fonts/Gilroy-Medium.woff",
      weight: "500",
    },
    {
      path: "../assets/fonts/Gilroy-Regular.woff",
      weight: "400",
    },
    {
      path: "../assets/fonts/Gilroy-Light.woff",
      weight: "300",
    },
    {
      path: "../assets/fonts/Gilroy-Thin.woff",
      weight: "100",
    },
  ],
});

export const metadata = {
  title: "Bosh sahifa",
  description:
    "Chizmachilik va dizayn sohasidagi O'zbekistondagi ilk platforma.",

  openGraph: {
    title: "Chizlab loyihasi",
    description:
      "Chizmachilik va dizayn sohasidagi O'zbekistondagi ilk platforma",
    url: "https://chizlab.vercel.app",
    type: "website",
    images: [
      {
        url: "https://json-api.uz/uploads/file-1734173986799.png",
        width: 1200,
        height: 630,
        alt: "chizlab.uz",
      },
    ],
  },

  alternates: {
    canonical: "https://www.chizlab.uz",
  },
};

export default function layout({ children }) {
  return (
    <html className="h-full" lang="uz">
      <head></head>
      <body
        className={`${gilroyFont.className} antialiased flex flex-col h-full bg-body bg-cover`}
      >
        <Header />
        <Desktop />
        <Mobile />
        <main className="grow">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
