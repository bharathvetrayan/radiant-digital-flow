
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
                I have completed a B.Tech in Information Technology bachelor degree from 
                VSB College of Engineering and Technical Campus, Coimbatore. I am skilled in 
                Java, SQL, and AI automation using n8n. My focus is on building intelligent 
                automation solutions and developing robust applications.
              </p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {["AI", "Automation", "n8n", "Flowise", "Java", "SQL", "Git"].map((tech, index) => (
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
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Main Tech Sphere */}
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Inner Glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-600/30 animate-pulse"></div>
                
                {/* Rotating Tech Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-lg bg-blue-500/40 backdrop-blur-sm border border-blue-400/50 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-400 rounded-sm animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-lg bg-purple-500/40 backdrop-blur-sm border border-purple-400/50 flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-400 rounded-sm animate-pulse"></div>
                  </div>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-lg bg-cyan-500/40 backdrop-blur-sm border border-cyan-400/50 flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyan-400 rounded-sm animate-pulse"></div>
                  </div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-lg bg-green-500/40 backdrop-blur-sm border border-green-400/50 flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-400 rounded-sm animate-pulse"></div>
                  </div>
                </div>

                {/* Central Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center shadow-lg animate-pulse">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0">
                  <div className="absolute top-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-70"></div>
                  <div className="absolute top-12 right-12 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-8 right-8 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-sm border border-blue-400/40 flex items-center justify-center">
                  <span className="text-blue-300 font-bold text-sm">AI</span>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-sm border border-purple-400/40 flex items-center justify-center">
                  <span className="text-purple-300 font-bold text-xs">n8n</span>
                </div>
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 backdrop-blur-sm border border-cyan-400/40 flex items-center justify-center">
                  <span className="text-cyan-300 font-bold text-xs">code</span>
                </div>
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/30 to-green-600/30 backdrop-blur-sm border border-green-400/40 flex items-center justify-center">
                  <span className="text-green-300 font-bold text-xs">BOT</span>
                </div>
              </div>

              {/* Outer Glow Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-8 rounded-full border border-purple-500/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
              
              {/* Background Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-2xl -z-10"></div>
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
