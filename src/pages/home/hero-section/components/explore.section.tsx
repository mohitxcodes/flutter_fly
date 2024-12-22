import ContentWrapper from "@/common/components/ContentWrapper";

const images = [
  "https://via.placeholder.com/150/0000FF/FFFFFF?text=Widget+1",
  "https://via.placeholder.com/150/FF0000/FFFFFF?text=Widget+2",
  "https://via.placeholder.com/150/00FF00/FFFFFF?text=Widget+3",
  "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Widget+4",
  "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Widget+5",
  "https://via.placeholder.com/150/00FFFF/FFFFFF?text=Widget+6",
];

export default function ExploreSection() {
  return (
    <div className="relative bg-[#0B1120] p-8 min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-1/4 w-[300px] h-[200px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[250px] h-[200px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
        </div>
      </div>

      <ContentWrapper>
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient">
          Explore Flutter Widgets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-slate-700/50 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
              <img
                src={src}
                alt={`Widget ${index + 1}`}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="relative z-20 p-6">
                <h3 className="text-xl font-semibold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Widget {index + 1}
                </h3>
                <p className="text-gray-300">
                  Description of Widget {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-16 text-center">
          {/* Smoke effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
          <div className="absolute -bottom-4 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent" />

          <button className="relative z-10 px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300 ">
            Explore More Widgets
          </button>
        </div>
      </ContentWrapper>
    </div>
  );
}
