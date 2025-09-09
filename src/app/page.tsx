// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-8">
      {/* Foto de perfil */}
      <div className="mb-6">
        <Image
          src="/avatar.jpg" // coloca tu foto en /public/avatar.jpg
          alt="Foto de Dyllan"
          width={150}
          height={150}
          className="rounded-full border-4 border-blue-500 shadow-lg"
        />
      </div>

      {/* Nombre y título */}
      <h1 className="text-4xl font-bold mb-2">Dyllan Díaz</h1>
      <p className="text-lg text-gray-300 mb-6">
        Ingeniero Mecatrónico | Desarrollador Web Fullstack
      </p>

      {/* Botones */}
      <div className="flex space-x-4">
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
          Contáctame
        </a>
      </div>
    </main>
  );
}
