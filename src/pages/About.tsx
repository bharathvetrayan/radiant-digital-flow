
import { motion } from "framer-motion";

const About = () => {
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
                I am an Information Technology student at VSB College of Engineering 
                and Technical Campus, Coimbatore. My passion lies in software development 
                and creating innovative solutions. I have a strong foundation in programming 
                languages and front-end development, constantly seeking to expand my knowledge 
                and skills in the tech industry.
              </p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {["Java", "HTML", "CSS", "Dart", "C", "Git"].map((tech, index) => (
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
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-blue-500/30 flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  B
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
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-2">B.Tech Information Technology</h4>
              <p className="text-blue-400 mb-2">VSB College of Engineering and Technical Campus, Coimbatore</p>
              <p className="text-gray-300">2022 - 2026</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-2">Higher Secondary Education</h4>
              <p className="text-blue-400 mb-2">Paramveer Hi-Tech Matric Hr-Sec School, Dharmapuri</p>
              <p className="text-gray-300">2020 - 2022</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">Internships and Workshops</h3>
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-2">Front-End Development Workshop</h4>
              <p className="text-gray-300 mb-2">Gained practical experience about web development</p>
              <p className="text-gray-400">Learn about technologies like HTML, CSS, JavaScript</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-2">Anna University Internship - Networking</h4>
              <p className="text-gray-300 mb-2">Worked on networking projects</p>
              <p className="text-gray-400">Enhanced understanding of network architecture</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
