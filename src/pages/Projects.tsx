
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Email Automation",
      description: "Automated email workflows and campaigns using n8n for streamlined communication and marketing processes.",
      tech: ["n8n", "Email API", "Automation"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SQL AI Chatbot",
      description: "Intelligent chatbot that can query and analyze SQL databases using natural language processing.",
      tech: ["AI", "SQL", "NLP", "Chatbot"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Telegram Chatbot Automation",
      description: "Automated Telegram bot built with n8n for handling user interactions and automated responses.",
      tech: ["n8n", "Telegram API", "Automation"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI RAG Chat Model",
      description: "Retrieval-Augmented Generation chat model created using Flowise for enhanced AI conversations.",
      tech: ["Flowise", "RAG", "AI", "LLM"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Calories Analyzer",
      description: "Smart web application that analyzes food images to calculate calorie content with n8n integration.",
      tech: ["AI", "Computer Vision", "n8n", "Web App"],
      image: "/placeholder.svg",
      liveUrl: "https://hillcalories.netlify.app/",
      githubUrl: "https://github.com/bharathvetrayan/food-vision-grams.git"
    },
    {
      title: "Web Scraper Automation",
      description: "Intelligent web scraping solution built with n8n and Lovable AI for automated data extraction and processing.",
      tech: ["n8n", "Lovable AI", "Web Scraping", "Automation"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

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
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
