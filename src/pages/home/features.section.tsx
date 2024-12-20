import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: "📱",
      title: "Ready-to-Use Widgets",
      description:
        "Extensive collection of pre-built Flutter widgets that you can copy and paste directly into your projects",
    },
    {
      icon: "🎨",
      title: "Beautiful UI Screens",
      description:
        "Professionally designed screen templates for common app scenarios like social feeds, e-commerce, and profiles",
    },
    {
      icon: "⚡",
      title: "Rapid Development",
      description:
        "Speed up your Flutter app development with our production-ready components and layouts",
    },
    {
      icon: "🔧",
      title: "Customizable Code",
      description:
        "Clean, well-structured Dart code that you can easily customize to match your app's needs",
    },
    {
      icon: "📚",
      title: "Detailed Documentation",
      description:
        "Comprehensive documentation with usage examples and best practices for each component",
    },
    {
      icon: "🎯",
      title: "Cross-Platform Ready",
      description:
        "All widgets and screens are optimized for both iOS and Android platforms",
    },
  ];

  return (
    <section className="py-20 bg-[#0B1120] relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_90%_60%_at_50%_0%,black,transparent)]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-sm font-medium tracking-wide backdrop-blur-sm border border-blue-500/30 shadow-lg shadow-blue-500/10">
            Why Choose Us
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block text-white">Powerful Features for</span>
            <span className="block mt-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Flutter Developers
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group p-6 bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl hover:bg-slate-800/50 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
