// src/app/about/page.tsx
import PageWrapper from "@/Components/PageWrapper";
import ProfileCard from "@/Components/ProfileCard";

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-6">Nosotros</h1>

        {/* Descripción */}
        <p className="text-lg max-w-2xl text-center text-gray-300 mb-12">
          En <span className="font-semibold text-blue-400">Bold Mind Works</span> 
          creemos en la unión entre creatividad, ingeniería y visión digital.
          Somos un equipo de desarrolladores que busca transformar ideas en
          soluciones tecnológicas con impacto real.
        </p>

        {/* Tarjetas del equipo */}
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
