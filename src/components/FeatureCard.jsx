export default function FeatureCard({ title, description }) {
  return (
    <div className="rounded-xl bg-white shadow-sm ring-1 ring-black/5 p-6">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
    </div>
  );
}