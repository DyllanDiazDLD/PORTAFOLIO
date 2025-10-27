// src/app/page.tsx
import PageWrapper from "@/Components/PageWrapper";
import Banner from "@/Components/banner";
import ProfileCard from "@/Components/ProfileCard";
import { CalendarDays } from "lucide-react";
import { formatDate } from "@/lib/formatDate";

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex flex-col items-center bg-gray-900 text-white min-h-screen p-6">
        <Banner />

        {/* Fecha actual */}
        <div className="flex items-center space-x-2 text-gray-400 mb-6">
          <CalendarDays size={18} />
          <span>{formatDate(new Date())}</span>
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
            href="/about"
            className="px-6 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
          >
            Nosotros
          </a>
        </div>

        {/* Tarjetas de desarrolladores */}
        <div className="flex flex-wrap gap-6 justify-center">
          <ProfileCard
            name="Dyllan Aiory Díaz Roa"
            role="Ingeniero Mecatrónico | Fullstack Dev"
            image="/dyllan.jpg"
          />
          <ProfileCard
            name="Diego Armando Aguazaco Criollo"
            role="Desarrollador | Backend & Sistemas"
            image="/Foto.jpg"
          />
        </div>
      </main>
    </PageWrapper>
  );
}
