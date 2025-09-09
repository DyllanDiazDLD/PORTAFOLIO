// app/page.tsx
import Image from "next/image";
import { CalendarDays } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 text-white">
      {/* Banner principal */}
      <section className="relative max-w-full h-auto">
        <Image
          src="/banner.jpg" 
          alt="Banner DLD Services S.A.S"
          fill
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            DLD Services S.A.S
          </h1>
          <p className="text-lg text-gray-300">Innovación y tecnología a tu alcance</p>
        </div>
      </section>

      {/* Presentación personal */}
      <section className="flex flex-col items-center p-8">
        <h2 className="text-3xl font-semibold mt-6">Bienvenidos</h2>
        <p className="text-gray-300 text-center mt-2 mb-6 max-w-2xl">
          Somos <span className="font-bold">Diego Armando Aguazaco Criollo</span> 
          y <span className="font-bold">Dyllan Aiory Díaz Roa</span>, 
          cofundadores de <span className="font-bold">DLD Services S.A.S</span>.  
          Unimos la ingeniería y el desarrollo web para crear soluciones digitales e innovadoras.
        </p>

        {/* Fecha */}
        <div className="flex items-center space-x-2 text-gray-400 mb-6">
          <CalendarDays size={18} />
          <span>
            {new Date().toLocaleDateString("es-CO", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Botones */}
        <div className="flex space-x-4 mb-10">
          <a
            href="/projects"
            className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            Mis Proyectos
          </a>
          <a
            href="/contact"
            className="px-6 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
          >
            Contáctanos
          </a>
        </div>
      </section>

      {/* Fundadores */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-4xl w-full">
        {/* Diego */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Foto.jpeg" 
            alt="Foto de Diego Armando Aguazaco Criollo"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Diego Armando Aguazaco Criollo</h3>
          <p className="text-gray-400">Cofundador | Estrategia y Gestión</p>
        </div>

        {/* Dyllan */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/dyllan.jpg" 
            alt="Foto de Dyllan Aiory Díaz Roa"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Dyllan Aiory Díaz Roa</h3>
          <p className="text-gray-400">Cofundador | Ingeniería y Desarrollo Web</p>
        </div>
      </section>
    </main>
  );
}
