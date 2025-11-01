export default function TechBadge({ text }: { text: string }) {
  return (
    <span className="px-2 py-1 text-sm rounded bg-[var(--secondary)]/20 text-[var(--primary)] mr-2 mb-2 inline-block">
      {text}
    </span>
  );
}
