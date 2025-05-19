import { GlobalPatternImg } from "@/assets";

export default function Statistics() {
  return (
    <section className="py-16">
      <h2 className="mb-10 font-semibold text-center text-4xl">Statistika</h2>
      <div className="base-container">
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          {/* Adabiyotlar */}
          <div className="border border-black relative bg-white rounded-2xl overflow-hidden">
            <div className="flex flex-col items-center p-16 lg:pr-[100px]">
              <h3 className="text-4xl mb-5">Adabiyotlar</h3>
              <strong className="font-medium text-5xl">+100</strong>
            </div>
            <img
              className="absolute select-none hidden sm:inline-block pointer-events-none bottom-0 right-0"
              src={GlobalPatternImg.src}
              alt="Adabiyotlar"
            />
          </div>
          {/* Taqdimotlar */}
          <div className="border border-black relative bg-white rounded-2xl overflow-hidden">
            <div className="flex flex-col items-center p-16 lg:pl-[100px]">
              <h3 className="text-4xl mb-5">Taqdimotlar</h3>
              <strong className="font-medium text-5xl">+100</strong>
            </div>
            <img
              className="absolute select-none hidden sm:inline-block pointer-events-none bottom-0 right-0 lg:left-0 lg:rotate-90"
              src={GlobalPatternImg.src}
              alt="Taqdimotlar"
            />
          </div>
          {/* Maqolalar */}
          <div className="border border-black relative bg-white rounded-2xl overflow-hidden">
            <div className="flex flex-col items-center p-16 lg:pr-[100px]">
              <h3 className="text-4xl mb-5">Maqolalar</h3>
              <strong className="font-medium text-5xl">+100</strong>
            </div>
            <img
              className="absolute select-none hidden sm:inline-block pointer-events-none bottom-0 lg:top-0 right-0 lg:-rotate-90"
              src={GlobalPatternImg.src}
              alt="Maqolalar"
            />
          </div>
          {/* Videolar */}
          <div className="border border-black relative bg-white rounded-2xl overflow-hidden">
            <div className="flex flex-col items-center p-16 lg:pl-[100px]">
              <h3 className="text-4xl mb-5">Videolar</h3>
              <strong className="font-medium text-5xl">+100</strong>
            </div>
            <img
              className="absolute select-none hidden sm:inline-block pointer-events-none bottom-0 right-0 lg:top-0 lg:left-0 lg:rotate-180"
              src={GlobalPatternImg.src}
              alt="Videolar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
