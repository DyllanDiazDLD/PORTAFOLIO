export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-xl font-bold mb-2 border-b border-[var(--border)] pb-1">
      {title}
    </h2>
  );
}
