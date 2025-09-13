
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-blue-500/30 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    B
                  </div>
                  <div className="text-xs text-blue-400 font-semibold tracking-widest">
                    AI • AUTOMATION
                  </div>
                </div>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
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
