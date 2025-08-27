export default function CareerHero() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-12 w-full">
      <h1
        className="text-5xl md:text-6xl font-bold text-white text-center leading-tight drop-shadow-xl"
        style={{
          textShadow: "0 2px 16px rgba(0,0,0,0.18)",
          letterSpacing: "0.01em",
        }}
      >
        Start your Healthcare  <br /> journey Today.
      </h1>
      <div className="w-24 h-1 bg-white/70 rounded-full mt-6" />
    </div>
  );
}