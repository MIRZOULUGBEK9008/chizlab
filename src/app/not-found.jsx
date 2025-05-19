import { NotFound404Img } from "@/assets";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-full flex items-center">
      <Image
        width={1440}
        height={400}
        className="w-full inline-block object-cover object-center"
        src={NotFound404Img.src}
        alt="404"
      />
    </div>
  );
}
