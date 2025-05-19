import { Skeleton } from "../ui/skeleton";

export default function DetailsSkleton() {
  return (
    <section className="py-10">
      <div className="base-container">
        <Skeleton className="w-[300px] h-14 mb-10"></Skeleton>
        <div className="flex flex-col md:flex-row gap-10">
          <Skeleton className="w-[400px] h-[500px] rounded-br-[100px]" />

          {/* Info  */}
          <div className="w-full max-w-xl">
            {/* Authors */}
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <strong className="font-medium text-xl">Mualliflar: </strong>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 3 }).map((_, index) => {
                    return <Skeleton className="w-28 h-6"></Skeleton>;
                  })}
                </div>
              </div>
            </div>
            {/* Extra info */}
            <div className="flex gap-3 flex-wrap mb-5">
              {Array.from({ length: 6 }).map(() => {
                return <Skeleton className="w-40 h-14"></Skeleton>;
              })}

              {/* Keywords */}
              <div className="inline-flex gap-2 mb-5">
                <span className="text-nowrap">Kalit so'zlar:</span>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 5 }).map((keyword) => {
                    return <Skeleton className="w-20 h-6"></Skeleton>;
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-5">
              {Array.from({ length: 3 }).map(() => {
                return <Skeleton className="w-full h-5"></Skeleton>;
              })}
            </div>
            <Skeleton className="w-28 h-9"></Skeleton>
          </div>
        </div>
      </div>
    </section>
  );
}
