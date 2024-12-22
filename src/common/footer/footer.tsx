import { motion } from "framer-motion";
import ContentWrapper from "../components/ContentWrapper";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
        </div>
      </div>

      <ContentWrapper>
        <div className="py-12 border-t border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-white">Flutter UI Kit</h3>
              <p className="text-slate-400 text-sm">
                Beautiful and customizable Flutter UI components to speed up
                your development
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-white font-medium">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Components
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Examples
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-white font-medium">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-white font-medium">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    License
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <p className="text-center text-sm text-slate-400">
              © {new Date().getFullYear()} Flutter UI Kit. All rights reserved.
            </p>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
}
