import { getDataById } from "@/requests";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Badge } from "../ui/badge";
import ImageWithFallback from "../ImageWithFallback";
import Link from "next/link";

export default async function Details({ params }) {
  try {
    const { id } = await params;
    const {
      title,
      cover,
      authors,
      resourceType,
      publishedAt,
      language,
      country,
      volume,
      keywords,
      summary,
      isNew,
      source,
    } = await getDataById("/materials/", id);

    return (
      <section className="py-10">
        <div className="base-container">
          <Link
            className={`${buttonVariants({
              variant: "ghost",
            })} min-w-5 text-2xl lg:text-4xl p-4 font-medium h-min mb-10 cursor-pointer`}
            href={"/"}
          >
            <ArrowLeft />
            <span className="text-2xl lg:text-4xl break-words whitespace-normal w-full">
              {title}
            </span>
          </Link>
          <div className="flex flex-col md:flex-row gap-10">
            <ImageWithFallback
              className="rounded-br-[100px] w-[400px] h-[500px]"
              width={400}
              height={500}
              alt={title}
              src={cover}
            />

            {/* Info  */}
            <div className="w-full max-w-xl">
              {/* Authors */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <strong className="font-medium text-xl">Mualliflar: </strong>
                  <div className="flex flex-wrap gap-2">
                    {authors.map((author) => {
                      return <p>{author}</p>;
                    })}
                  </div>
                </div>
              </div>

              {/* Extra info */}
              <div className="flex gap-3 flex-wrap mb-5">
                <span className="rounded-md bg-white px-2 py-1 inline-flex flex-col">
                  Resurs turi:
                  <strong className="font-medium">{resourceType}</strong>
                </span>
                <span className="rounded-md bg-white px-2 py-1 inline-flex flex-col">
                  Resurs tili:
                  <strong className="font-medium capitalize">{language}</strong>
                </span>
                <span className="rounded-md bg-white px-2 py-1 inline-flex flex-col">
                  Nashr yili:
                  <strong className="font-medium">{publishedAt}</strong>
                </span>
                <span className="rounded-md bg-white px-2 py-1 inline-flex flex-col">
                  Davlat:
                  <strong className="font-medium">{country}</strong>
                </span>
                <span className="rounded-md bg-white px-2 py-1 inline-flex flex-col">
                  Sahifalar soni:
                  <strong className="font-medium">{volume}</strong>
                </span>

                {/* Keywords */}
                <div className="inline-flex gap-2 mb-5">
                  <span className="text-nowrap">Kalit so'zlar:</span>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword) => {
                      return (
                        <Badge
                          className="font-medium bg-white"
                          variant="outline"
                        >
                          {keyword}
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                {isNew && (
                  <div className="inline-flex items-center gap-2 mb-5">
                    Holati:
                    <span
                      className={"bg-yellow rounded-sm px-2 py-1 font-medium"}
                    >
                      Yangi
                    </span>
                  </div>
                )}
              </div>

              <p className="text-lg font-medium mb-5">{summary}</p>
              <a
                className={`${buttonVariants({
                  variant: "default",
                })} !bg-expensive-green`}
                href={source}
                target="_blank"
              >
                Yuklab olish
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  } catch {
    return (
      <div className="base-container py-10">
        <Badge className="text-lg" variant="destructive">
          Xatolik bo'ldi, sahifani yangilab ko'ring.
        </Badge>
      </div>
    );
  }
}
