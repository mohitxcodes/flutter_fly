import { motion } from "framer-motion";
import FeatureList from "./FeatureList";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-sm font-medium tracking-wide backdrop-blur-sm border border-blue-500/30 shadow-lg shadow-blue-500/10">
          Welcome to the Future of Flutter Development
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold">
          <span className="block text-white">Flutter Components</span>
          <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Reimagined
          </span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-400"
      >
        Elevate your Flutter applications with our meticulously crafted
        components. Built for performance, designed for impact, and engineered
        for scale.
      </motion.p>

      <HeroButtons />
      <FeatureList />
    </div>
  );
}
