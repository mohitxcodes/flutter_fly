import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodePreview() {
  const flutterCode = `
      // A beautiful Flutter widget
      Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [Colors.blue, Colors.purple],
          ),
        ),
        child: Center(
          child: Text(
            'Welcome to FlutterFly!',
            style: TextStyle(
              fontSize: 24,
              color: Colors.white,
            ),
          ),
        ),
      )`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl" />
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="rounded-2xl bg-slate-900/70 backdrop-blur border border-slate-700/50 p-4 overflow-hidden shadow-xl shadow-blue-500/10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <SyntaxHighlighter
            language="dart"
            style={atomDark}
            customStyle={{
              background: "transparent",
              padding: "1rem",
              margin: 0,
              borderRadius: "0.5rem",
            }}
          >
            {flutterCode}
          </SyntaxHighlighter>
        </div>
      </motion.div>
    </motion.div>
  );
}
