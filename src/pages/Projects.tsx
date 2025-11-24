
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.05 });

  const projects = [
    {
      title: "Email Automation",
      description: "Streamlined email workflows with intelligent automation",
      tech: ["n8n", "Email API", "Automation"],
      category: "Automation",
      status: "Completed",
      impact: "500+ emails/day",
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "SQL AI Chatbot",
      description: "Natural language database queries with AI intelligence",
      tech: ["AI", "SQL", "NLP", "Chatbot"],
      category: "AI Development",
      status: "Active",
      impact: "95% accuracy",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Telegram Bot",
      description: "Smart automation for seamless user interactions",
      tech: ["n8n", "Telegram API", "Automation"],
      category: "Bot Development",
      status: "Completed",
      impact: "1000+ users",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "AI RAG Chat",
      description: "Context-aware conversations with enhanced AI",
      tech: ["Flowise", "RAG", "AI", "LLM"],
      category: "AI Development",
      status: "Completed",
      impact: "Context-aware",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Calorie Analyzer",
      description: "AI-powered food image analysis for health tracking",
      tech: ["AI", "Computer Vision", "n8n", "Web App"],
      category: "Computer Vision",
      status: "Live",
      impact: "Real-time analysis",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Web Scraper",
      description: "Intelligent data extraction with 24/7 monitoring",
      tech: ["n8n", "Lovable AI", "Web Scraping", "Automation"],
      category: "Data Processing",
      status: "Active",
      impact: "24/7 monitoring",
      color: "from-violet-400 to-purple-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            PROJECTS
          </h1>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Crafting intelligent solutions that transform workflows
          </p>
        </motion.div>

        {/* Modern Grid Layout */}
        <div className="relative">
          {/* Floating Cards */}
          <div ref={projectsRef} className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ 
                  y: 60,
                  opacity: 0,
                  scale: 0.9
                }}
                animate={projectsVisible ? { 
                  y: 0,
                  opacity: 1,
                  scale: 1
                } : {
                  y: 60,
                  opacity: 0,
                  scale: 0.9
                }}
                transition={{ 
                  duration: 0.6,
                  delay: projectsVisible ? 0.08 * index : 0,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/60 transition-all duration-300 overflow-hidden">
                  
                  {/* Status Indicator */}
                  <div className="absolute top-6 right-6">
                    <div className={`w-3 h-3 rounded-full ${
                      project.status === 'Live' ? 'bg-green-400 shadow-green-400/50' :
                      project.status === 'Active' ? 'bg-blue-400 shadow-blue-400/50' :
                      'bg-purple-400 shadow-purple-400/50'
                    } shadow-lg animate-pulse`}></div>
                  </div>

                  {/* Project Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-lg font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-xs font-medium border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-lg text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Impact */}
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-300 font-medium">{project.impact}</span>
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-500/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 font-medium">More projects in development</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
