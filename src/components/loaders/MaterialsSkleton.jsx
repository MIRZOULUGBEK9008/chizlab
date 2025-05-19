import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function MaterialsSkleton({ length = 4 }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10">
      {Array.from({ length }, (_, index) => {
        return (
          <li key={index}>
            <Card className="overflow-hidden">
              <Skeleton className="lg:h-96 h-80 w-full" />
              <CardHeader>
                <Skeleton className="h-3 w-full mb-5" />
                <Skeleton className="h-2 w-full mb-2" />
                <Skeleton className="h-2 w-full mb-2" />
                <Skeleton className="h-2 w-full mb-2" />
                <Skeleton className="h-2 w-full" />
              </CardHeader>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
