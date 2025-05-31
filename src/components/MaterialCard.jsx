"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import ImageWithFallback from "./ImageWithFallback";
import { useRouter } from "next/navigation";

export default function MaterialCard({ info }) {
  const router = useRouter();
  const { cover, title, summary, resourceType, isNew, id } = info;
  function handleClick() {
    router.push(`/${id}`);
  }
  return (
    <Card onClick={handleClick} className="overflow-hidden cursor-pointer">
      <figure className="bg-primary-foreground relative">
        <ImageWithFallback
          className="object-contain w-full h-auto block" 
          alt={title}
          width={230}
          height={325}
          src={cover}
        />
        {isNew && (
          <span
            className={
              "absolute bottom-1 left-1 bg-yellow rounded-sm text-xs px-1 font-medium"
            }
          >
            Yangi
          </span>
        )}
      </figure>
      <CardHeader>
        <Badge className={"w-min text-nowrap mb-3"} variant={"outline"}>
          {resourceType}
        </Badge>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{summary}</CardDescription>
      </CardHeader>
    </Card>
  );
}
