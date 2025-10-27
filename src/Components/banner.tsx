// src/components/Banner.tsx
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-64 md:h-96 mb-6">
      <Image
        src="/banner.jpg"
        alt="Banner Bold Mind Works"
        fill
        priority
        className="object-cover rounded-lg shadow-md"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Bold Mind Work
        </h1>
        <h1 className="text-3xl md:text-5xl font-light text-white drop-shadow-lg mt-4">
          Innovación digital y desarrollo web
        </h1>
      </div>
    </div>
  );
}
