
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Email Automation",
      description: "Automated email workflows and campaigns using n8n for streamlined communication and marketing processes.",
      tech: ["n8n", "Email API", "Automation"],
      category: "Automation",
      status: "Completed",
      impact: "500+ emails/day",
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "SQL AI Chatbot",
      description: "Intelligent chatbot that can query and analyze SQL databases using natural language processing.",
      tech: ["AI", "SQL", "NLP", "Chatbot"],
      category: "AI Development",
      status: "Active",
      impact: "95% accuracy",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Telegram Bot Automation",
      description: "Automated Telegram bot built with n8n for handling user interactions and automated responses.",
      tech: ["n8n", "Telegram API", "Automation"],
      category: "Bot Development",
      status: "Completed",
      impact: "1000+ users",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "AI RAG Chat Model",
      description: "Retrieval-Augmented Generation chat model created using Flowise for enhanced AI conversations.",
      tech: ["Flowise", "RAG", "AI", "LLM"],
      category: "AI Development",
      status: "Completed",
      impact: "Context-aware",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "AI Calories Analyzer",
      description: "Smart web application that analyzes food images to calculate calorie content with n8n integration.",
      tech: ["AI", "Computer Vision", "n8n", "Web App"],
      category: "Computer Vision",
      status: "Live",
      impact: "Real-time analysis",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Web Scraper Automation",
      description: "Intelligent web scraping solution built with n8n and Lovable AI for automated data extraction.",
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting intelligent automation solutions that transform complex workflows into seamless experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ 
                y: 100,
                opacity: 0,
                rotateX: 45
              }}
              animate={{ 
                y: 0,
                opacity: 1,
                rotateX: 0
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -20,
                rotateX: 5,
                rotateY: index % 2 === 0 ? 5 : -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d"
              }}
              className="group cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl overflow-hidden">
                
                {/* Floating Gradient Orb */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.color} rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <div className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-300 border border-green-500/40' :
                    project.status === 'Active' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' :
                    'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Project Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Impact Metric */}
                  <div className="flex items-center mb-6">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-green-300 text-sm font-medium">{project.impact}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 + techIndex * 0.1 }}
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm text-gray-300 rounded-xl text-sm font-medium border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytics Dashboard */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Project Analytics</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Projects", value: projects.length, color: "from-blue-400 to-cyan-400" },
              { label: "Live Projects", value: projects.filter(p => p.status === "Live").length, color: "from-green-400 to-emerald-400" },
              { label: "Active Development", value: projects.filter(p => p.status === "Active").length, color: "from-purple-400 to-pink-400" },
              { label: "Technologies", value: new Set(projects.flatMap(p => p.tech)).size, color: "from-orange-400 to-red-400" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className={`text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
