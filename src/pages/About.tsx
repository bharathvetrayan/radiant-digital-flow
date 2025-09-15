
import { motion } from "framer-motion";

const About = () => {
  const educationItems = [
    {
      title: "B.Tech Information Technology",
      institution: "VSB College of Engineering and Technical Campus, Coimbatore",
      period: "2022 - 2026"
    },
    {
      title: "Higher Secondary Education",
      institution: "Paramveer Hi-Tech Matric Hr-Sec School, Dharmapuri",
      period: "2020 - 2022"
    }
  ];

  const internshipItems = [
    {
      title: "Anna University Internship - Networking",
      description: "Worked on networking projects and infrastructure",
      details: "Enhanced understanding of network architecture and protocols"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen pt-24 pb-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="text-xl leading-relaxed">
                I am an AI and Automation enthusiast studying Information Technology at 
                VSB College of Engineering and Technical Campus, Coimbatore. I specialize in 
                creating intelligent automation solutions using cutting-edge tools like n8n 
                and Flowise. My focus is on building AI-powered systems that streamline 
                workflows and solve complex problems through automation.
              </p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {["AI", "Automation", "n8n", "Flowise", "Java", "HTML", "CSS", "Git"].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-96 h-96">
              {/* AI Brain Visualization */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm overflow-hidden">
                
                {/* Neural Network Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <svg viewBox="0 0 300 300" className="w-full h-full">
                    {/* Nodes */}
                    <circle cx="75" cy="75" r="4" fill="#3b82f6" className="animate-pulse">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="225" cy="75" r="4" fill="#06b6d4" className="animate-pulse">
                      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="75" cy="150" r="4" fill="#8b5cf6" className="animate-pulse">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="150" cy="150" r="6" fill="#10b981" className="animate-pulse">
                      <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="225" cy="150" r="4" fill="#f59e0b" className="animate-pulse">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="75" cy="225" r="4" fill="#ef4444" className="animate-pulse">
                      <animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="225" cy="225" r="4" fill="#8b5cf6" className="animate-pulse">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.7s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Connections */}
                    <line x1="75" y1="75" x2="150" y2="150" stroke="#3b82f6" strokeWidth="1" opacity="0.4">
                      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="225" y1="75" x2="150" y2="150" stroke="#06b6d4" strokeWidth="1" opacity="0.4">
                      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="75" y1="150" x2="150" y2="150" stroke="#8b5cf6" strokeWidth="1" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.5s" repeatCount="indefinite" />
                    </line>
                    <line x1="225" y1="150" x2="150" y2="150" stroke="#f59e0b" strokeWidth="1" opacity="0.4">
                      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.8s" repeatCount="indefinite" />
                    </line>
                    <line x1="150" y1="150" x2="75" y2="225" stroke="#ef4444" strokeWidth="1" opacity="0.4">
                      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.2s" repeatCount="indefinite" />
                    </line>
                    <line x1="150" y1="150" x2="225" y2="225" stroke="#8b5cf6" strokeWidth="1" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.7s" repeatCount="indefinite" />
                    </line>
                  </svg>
                </div>

                {/* Central AI Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                </div>

                {/* Floating Tech Elements */}
                <div className="absolute top-4 left-4 text-blue-400 opacity-60">
                  <div className="text-sm font-mono animate-bounce">AI</div>
                </div>
                <div className="absolute top-4 right-4 text-cyan-400 opacity-60">
                  <div className="text-sm font-mono animate-bounce" style={{ animationDelay: '0.5s' }}>ML</div>
                </div>
                <div className="absolute bottom-4 left-4 text-purple-400 opacity-60">
                  <div className="text-sm font-mono animate-bounce" style={{ animationDelay: '1s' }}>API</div>
                </div>
                <div className="absolute bottom-4 right-4 text-green-400 opacity-60">
                  <div className="text-sm font-mono animate-bounce" style={{ animationDelay: '1.5s' }}>BOT</div>
                </div>
              </div>

              {/* Corner Tech Indicators */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-4 border-t-4 border-blue-400 rounded-tl-2xl"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-4 border-t-4 border-cyan-400 rounded-tr-2xl"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-4 border-b-4 border-purple-400 rounded-bl-2xl"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-4 border-b-4 border-green-400 rounded-br-2xl"></div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">Education</h3>
          <div className="space-y-8">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/70"
              >
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-blue-400 mb-2">{item.institution}</p>
                <p className="text-gray-300">{item.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">Internships</h3>
          <div className="space-y-8">
            {internshipItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)"
                }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-green-500/50 hover:bg-gray-800/70"
              >
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 mb-2">{item.description}</p>
                <p className="text-gray-400">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
