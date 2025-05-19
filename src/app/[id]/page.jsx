import DetailsSkleton from "@/components/loaders/DetailsSkleton";
import Details from "@/components/sections/Details";
import { Suspense } from "react";

export default function page({ params }) {
  return (
    <>
      <Suspense fallback={<DetailsSkleton />}>
        <Details params={params} />
      </Suspense>
    </>
  );
}
