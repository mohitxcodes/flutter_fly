export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-full">
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />

        {/* Code matrix background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_90%_60%_at_50%_0%,black,transparent)]" />

        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_500px_at_50%_200px,#3B82F6,transparent)]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>
    </div>
  );
}
