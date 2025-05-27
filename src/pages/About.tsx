
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
                Hi! I'm Bharath, a passionate full-stack developer who loves creating 
                innovative digital experiences. With a strong foundation in modern web 
                technologies, I specialize in building responsive, user-centric applications 
                that solve real-world problems.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey in tech started with curiosity about how things work under the hood. 
                Today, I combine creativity with technical expertise to craft solutions that 
                are not only functional but also visually stunning and intuitive to use.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I believe in continuous learning and staying ahead of the curve in this 
                ever-evolving field.
              </p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {["React", "Node.js", "TypeScript", "Python", "AWS"].map((tech, index) => (
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
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { title: "Projects Completed", value: "25+", icon: "🚀" },
            { title: "Technologies Mastered", value: "15+", icon: "⚡" },
            { title: "Years of Experience", value: "3+", icon: "🎯" },
          ].map((stat, index) => (
            <div
              key={stat.title}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.title}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
