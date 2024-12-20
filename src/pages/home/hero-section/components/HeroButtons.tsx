import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
    >
      <a
        href="#"
        className="group flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/25"
      >
        <span>Get Started</span>
        <svg
          className="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="#"
        className="group flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl text-white bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700 transform hover:scale-105 transition-all duration-200"
      >
        <span>View Docs</span>
        <svg
          className="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      </a>
    </motion.div>
  );
}
