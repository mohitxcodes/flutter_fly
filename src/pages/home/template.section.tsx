import ContentWrapper from "@/common/components/ContentWrapper";
import { motion } from "framer-motion";

export default function TemplateSection() {
  const templates = [
    {
      id: 1,
      title: "E-Commerce App",
      description:
        "A modern e-commerce template with cart functionality and payment integration",
      image: "/templates/ecommerce-template.png",
      category: "Mobile App",
      downloads: 1234,
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Complete social media management dashboard with analytics",
      image: "/templates/social-dashboard.png",
      category: "Web App",
      downloads: 856,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Clean and minimal portfolio template for creatives",
      image: "/templates/portfolio-template.png",
      category: "Website",
      downloads: 2341,
    },
  ];

  return (
    <section className="py-20 bg-[#0B1120] relative">
      {/* <BackgroundEffect /> */}

      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-sm font-medium tracking-wide backdrop-blur-sm border border-blue-500/30 shadow-lg shadow-blue-500/10">
            Ready-to-Use Templates
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block text-white">Premium</span>
            <span className="block mt-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Templates
            </span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Browse our collection of professionally designed templates ready for
            your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-slate-900/70 backdrop-blur border border-slate-700/50 rounded-2xl overflow-hidden">
                <div className="aspect-video w-full bg-slate-800/50 overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full backdrop-blur-sm">
                      {template.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {template.downloads} downloads
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {template.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {template.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-gray-300 rounded-lg transition-colors duration-200 backdrop-blur-sm">
                      Preview
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-0.5">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
}
