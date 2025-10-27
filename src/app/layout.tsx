import type { Metadata } from "next";
import "@/Styles/Global.css";

export const metadata: Metadata = {
  title: "Bold Mind Works",
  description: "Innovación digital y desarrollo web por Diego y Dyllan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
