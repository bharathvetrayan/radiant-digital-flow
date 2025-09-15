
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Email Automation",
      description: "Automated email workflows and campaigns using n8n for streamlined communication and marketing processes.",
      tech: ["n8n", "Email API", "Automation"],
      category: "Automation",
      status: "Completed",
      features: ["Multi-step workflows", "Automated responses", "Campaign tracking"]
    },
    {
      title: "SQL AI Chatbot",
      description: "Intelligent chatbot that can query and analyze SQL databases using natural language processing.",
      tech: ["AI", "SQL", "NLP", "Chatbot"],
      category: "AI Development",
      status: "Active",
      features: ["Natural language queries", "Database integration", "Real-time analysis"]
    },
    {
      title: "Telegram Chatbot Automation",
      description: "Automated Telegram bot built with n8n for handling user interactions and automated responses.",
      tech: ["n8n", "Telegram API", "Automation"],
      category: "Bot Development",
      status: "Completed",
      features: ["Command handling", "Automated replies", "User management"]
    },
    {
      title: "AI RAG Chat Model",
      description: "Retrieval-Augmented Generation chat model created using Flowise for enhanced AI conversations.",
      tech: ["Flowise", "RAG", "AI", "LLM"],
      category: "AI Development",
      status: "Completed",
      features: ["Context-aware responses", "Document retrieval", "Multi-modal support"]
    },
    {
      title: "AI Calories Analyzer",
      description: "Smart web application that analyzes food images to calculate calorie content with n8n integration.",
      tech: ["AI", "Computer Vision", "n8n", "Web App"],
      category: "Computer Vision",
      status: "Live",
      features: ["Image recognition", "Nutritional analysis", "Health tracking"]
    },
    {
      title: "Web Scraper Automation",
      description: "Intelligent web scraping solution built with n8n and Lovable AI for automated data extraction and processing.",
      tech: ["n8n", "Lovable AI", "Web Scraping", "Automation"],
      category: "Data Processing",
      status: "Active",
      features: ["Dynamic content extraction", "Data transformation", "Scheduled processing"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "text-green-400 bg-green-400/20 border-green-400/40";
      case "Active":
        return "text-blue-400 bg-blue-400/20 border-blue-400/40";
      case "Completed":
        return "text-purple-400 bg-purple-400/20 border-purple-400/40";
      default:
        return "text-gray-400 bg-gray-400/20 border-gray-400/40";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI Development":
        return "from-blue-500 to-cyan-500";
      case "Automation":
        return "from-purple-500 to-pink-500";
      case "Bot Development":
        return "from-green-500 to-teal-500";
      case "Computer Vision":
        return "from-orange-500 to-red-500";
      case "Data Processing":
        return "from-indigo-500 to-purple-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen pt-24 pb-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-4" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my portfolio of AI-powered automation solutions and intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                y: -5,
                scale: 1.02
              }}
              className="relative bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 group"
            >
              {/* Project Header */}
              <div className={`relative h-20 bg-gradient-to-r ${getCategoryColor(project.category)} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-6">
                  <span className="text-white/90 text-sm font-medium">{project.category}</span>
                </div>
                <div className="absolute top-4 right-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{projects.length}</div>
              <div className="text-gray-300 text-sm uppercase tracking-wide">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {projects.filter(p => p.status === "Live").length}
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wide">Live Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {projects.filter(p => p.status === "Completed").length}
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wide">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {new Set(projects.flatMap(p => p.tech)).size}
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wide">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
