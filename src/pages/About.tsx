
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
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Outer glow rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-15 animate-pulse" style={{animationDelay: '1s'}} />
              
              {/* Main logo container */}
              <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-full border-2 border-blue-500/40 flex items-center justify-center overflow-hidden shadow-2xl">
                
                {/* Hexagonal pattern background */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                      <pattern id="hexPattern" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
                        <polygon points="20,5 30,15 30,25 20,35 10,25 10,15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-400"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexPattern)"/>
                  </svg>
                </div>

                {/* Circuit board lines */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" className="absolute inset-0">
                    <path d="M60,40 L120,40 L120,80 L180,80" stroke="currentColor" strokeWidth="1" className="text-cyan-400" fill="none"/>
                    <path d="M200,120 L160,120 L160,160 L120,160" stroke="currentColor" strokeWidth="1" className="text-blue-400" fill="none"/>
                    <path d="M80,200 L80,240 L140,240 L140,200" stroke="currentColor" strokeWidth="1" className="text-purple-400" fill="none"/>
                    <circle cx="120" cy="40" r="3" className="fill-cyan-400"/>
                    <circle cx="180" cy="80" r="3" className="fill-blue-400"/>
                    <circle cx="120" cy="160" r="3" className="fill-purple-400"/>
                    <circle cx="140" cy="240" r="3" className="fill-green-400"/>
                  </svg>
                </div>

                {/* Neural network nodes */}
                <div className="absolute inset-0 opacity-25">
                  <div className="absolute top-12 left-16 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                  <div className="absolute bottom-16 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                  <div className="absolute bottom-12 right-16 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
                  <div className="absolute top-1/2 left-8 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
                  <div className="absolute top-1/2 right-8 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '2.5s'}} />
                  
                  {/* Connection lines between nodes */}
                  <svg className="absolute inset-0 w-full h-full" style={{pointerEvents: 'none'}}>
                    <line x1="64" y1="48" x2="240" y2="80" stroke="url(#nodeGradient)" strokeWidth="0.5" opacity="0.3"/>
                    <line x1="240" y1="80" x2="80" y2="256" stroke="url(#nodeGradient)" strokeWidth="0.5" opacity="0.3"/>
                    <line x1="80" y1="256" x2="256" y2="256" stroke="url(#nodeGradient)" strokeWidth="0.5" opacity="0.3"/>
                    <defs>
                      <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Central profile photo */}
                <div className="relative z-20 flex flex-col items-center">
                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Clean, clear photo display */}
                    <img 
                      src="/src/assets/profile-photo.jpg" 
                      alt="Bharath Kumar - AI & Automation Enthusiast" 
                      className="w-full h-full object-cover object-center brightness-110 contrast-105"
                    />
                    {/* Subtle tech border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-400/40 to-purple-600/40 pointer-events-none" />
                    {/* Corner accents for tech look */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400 rounded-tl-lg" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400 rounded-tr-lg" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400 rounded-bl-lg" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-400 rounded-br-lg" />
                  </div>
                </div>

                {/* Rotating outer ring */}
                <div className="absolute inset-2 border border-blue-400/20 rounded-full">
                  <div className="absolute inset-0 border-l-2 border-t-2 border-blue-400/40 rounded-full animate-spin" style={{animationDuration: '20s'}} />
                </div>
                
                {/* Inner rotating ring */}
                <div className="absolute inset-8 border border-purple-400/20 rounded-full">
                  <div className="absolute inset-0 border-r-2 border-b-2 border-purple-400/40 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
                </div>
              </div>
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
