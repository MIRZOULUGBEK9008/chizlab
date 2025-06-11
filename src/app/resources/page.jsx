"use client";
import MaterialsSkleton from "@/components/loaders/MaterialsSkleton";
import MaterialCard from "@/components/MaterialCard";
import { Button } from "@/components/ui/button";
import { getData } from "@/requests";
import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function page() {
  const router = useRouter();
  const [resourceType, setRecourceType] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const searchParams =
  // const resourceType = searchParams.get("resourceType");

  useEffect(() => {
    if (window) {
      console.log(1);

      setRecourceType(
        new URL(window.location.href).searchParams.get("resourceType")
      );
    }
  }, []);

  console.log("resourceType: ", resourceType);

  useEffect(() => {
    if (resourceType) {
      setLoading(true);
      getData("/materials", { resourceType })
        .then((res) => {
          setData(res.data);
        })
        .catch(({ message }) => {
          toast.error(message);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    return () => {
      setRecourceType(null);
    };
  }, [resourceType]);

  function handleClick() {
    router.back();
  }

  return (
    <section className="py-10">
      <div className="base-container">
        <Button className="bg-expensive-green mb-10" onClick={handleClick}>
          <ArrowLeft />
          Orqaga
        </Button>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {!loading &&
            data.map((info, index) => {
              return (
                <li key={index}>
                  <MaterialCard info={info} />
                </li>
              );
            })}
        </ul>
        {loading && <MaterialsSkleton length={4} />}
      </div>
    </section>
  );
}
