// src/components/ProfileCard.tsx
import Image from "next/image";

type ProfileCardProps = {
  name: string;
  role: string;
  image: string;
};

export default function ProfileCard({ name, role, image }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg">
      <Image
        src={image}
        alt={`Foto de ${name}`}
        width={150}
        height={150}
        className="rounded-full border-4 border-blue-500"
      />
      <h2 className="mt-4 text-xl font-semibold">{name}</h2>
      <p className="text-gray-400 text-center">{role}</p>
    </div>
  );
}
