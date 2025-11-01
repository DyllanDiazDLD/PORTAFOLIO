// app/projects/page.tsx
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PageWrapper from "@/Components/PageWrapper";

export default function ProjectsPage() {

  const projects = [
    {
      title: "Sistema de Control de Temperatura con ESP32",
      description:
        "Proyecto IoT con visualización en servidor web local y control en tiempo real.",
      link: "#",
    },
    {
      title: "Medidor de Nivel de Tanque",
      description:
        "Sistema con sensor ultrasónico y caudalímetro, controlado desde web y app móvil.",
      link: "#",
    },
    {
      title: "Portafolio Web con Next.js",
      description:
        "Página personal responsive desarrollada en React y Next.js para mostrar proyectos.",
      link: "#",
    },
  ];


  return (
    <PageWrapper>
    <main className="min-h-screen bg-gray-900 text-white p-8">
      {/* Botón de regreso */}
      <Link
        href="/"
        className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
      >
        <ArrowLeft size={18} className="mr-2" />
        Volver al inicio
      </Link>

      <h1 className="text-3xl font-bold mb-8">Mis Proyectos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Ver más →
            </a>
          </div>
        ))}
      </div>
    </main>
</PageWrapper>
  );
}

