export default function BackgroundEffect() {
  return (
    <div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_90%_60%_at_50%_0%,black,transparent)]" />
        </div>
      </div>
    </div>
  );
}
