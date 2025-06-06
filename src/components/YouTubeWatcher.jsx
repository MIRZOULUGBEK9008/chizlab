"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "./ui/button";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function YouTubeWatcher({ title, summary, source }) {
  const [loading, setLoading] = useState(true);
  return (
    <Dialog>
      <DialogTrigger
        className={`${buttonVariants({
          variant: "default",
        })} !bg-expensive-green`}
      >
        Ko'rish
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{summary}</DialogDescription>
        </DialogHeader>
        <div className="relative">
          <iframe
            className="w-full h-[280px]"
            onLoad={() => setLoading(false)}
            src={source}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrer-policy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {loading && (
            <Skeleton className="w-full h-[280px] absolute top-0 z-50" />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
