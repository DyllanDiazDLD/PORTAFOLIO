import "@/app/projects/SCT ESP32/ESP32styles.css";
import SectionTitle from "@/Components/SectionTitle";
import TechBadge from "@/Components/TechBadge";

export default function ESP32ProjectPage() {
  return (
    <div className="esp32-container">
      <div className="project-header">
        <h1 className="text-3xl font-bold text-(--primary)">
          Proyecto Control de Tanque con ESP32
        </h1>
        <p className="text-(--text-muted)">
          Medición ultrasónica + Control bomba + Dashboard web
        </p>
      </div>

      <img src="/projects/esp32-cover.jpg" alt="ESP32 Project" className="project-img" />

      {/* Descripción */}
      <div className="project-card">
        <SectionTitle title="Descripción del Proyecto" />
        <p>
          Sistema IoT para control de nivel de tanque usando ESP32, sensor
          ultrasónico y relé. Muestra datos en pantalla TFT y app web.
        </p>
      </div>

      {/* Tecnologías */}
      <div className="project-card">
        <SectionTitle title="Tecnologías" />
        <TechBadge text="ESP32" />
        <TechBadge text="C++ / Arduino" />
        <TechBadge text="HTML / JS" />
        <TechBadge text="MQTT (opcional)" />
        <TechBadge text="TFT Display" />
        <TechBadge text="Sensor Ultrasónico JSN-SR04T" />
        <TechBadge text="Relay 5V" />
      </div>

      {/* GitHub */}
      <div className="project-card">
        <SectionTitle title="Repositorio" />
        <a
          href="https://github.com/DyllanDiazDLD/ESP32-Tank-Control"
          className="text-[var(--primary)] underline"
          target="_blank"
        >
          Ver en GitHub →
        </a>
      </div>
    </div>
  );
}
