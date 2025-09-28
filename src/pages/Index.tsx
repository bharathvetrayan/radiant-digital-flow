
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThreeScene from "@/components/ThreeScene";

const Index = () => {
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1mqGVuzRRMykZonsSkFtgiw7cjw1vyx6X/view?usp=sharing", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen overflow-hidden"
    >
      <ThreeScene />
      
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-32 h-32 border border-blue-500/30 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform rotate-45"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-40 w-20 h-20 border-2 border-cyan-400/40 rounded-lg"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Glassmorphic Card */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 mb-8 shadow-2xl"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                Hi, I'm Bharath
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-10"
            >
              <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-light">
                Aspiring Engineer
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Passionate about creating innovative solutions through technology
                <br />
                <span className="text-cyan-400">Building the future, one line of code at a time</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <Button
                onClick={handleDownloadResume}
                className="relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 text-white px-12 py-6 text-lg rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 group"
              >
                <span className="relative z-10">Download Resume</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex justify-center space-x-6"
            >
              {[
                { href: "https://github.com", label: "GH", colors: "from-gray-500 to-gray-700", hover: "hover:shadow-gray-500/50" },
                { href: "https://www.linkedin.com/in/bharathvetrayan2004", label: "LI", colors: "from-blue-500 to-blue-700", hover: "hover:shadow-blue-500/50" },
                { href: "https://leetcode.com/u/bharathvetrayan/", label: "LC", colors: "from-yellow-500 to-orange-600", hover: "hover:shadow-yellow-500/50" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  className={`group relative overflow-hidden w-16 h-16 bg-gradient-to-r ${social.colors} rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${social.hover} border border-white/20`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-bold text-lg relative z-10">{social.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Completed", icon: "💼" },
              { number: "2+", label: "Years Experience", icon: "⚡" },
              { number: "∞", label: "Lines of Code", icon: "🚀" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.2 }}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-300 text-sm mb-4 font-light">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-cyan-400/60 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
