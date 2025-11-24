
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThreeScene from "@/components/ThreeScene";

const Index = () => {
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/16euUgBKRKl0-qeaLhbHt_AkqqP2Eh5EX/view?usp=drive_link", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex items-center justify-center"
    >
      <ThreeScene />
      
      {/* Subtle floating orbs for enhancement */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 left-20 w-12 h-12 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-32 w-8 h-8 bg-gradient-to-r from-pink-400/30 to-cyan-400/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-32 w-6 h-6 bg-gradient-to-r from-emerald-400/40 to-blue-400/40 rounded-full blur-sm"
        />
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            Hi, I'm Bharath
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto max-w-md rounded-full shadow-lg shadow-purple-500/30"
          />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-light">
            Aspiring Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Passionate about creating innovative solutions through technology
            <br />
            <motion.span 
              className="text-cyan-400 font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Building the future, one line of code at a time
            </motion.span>
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center items-center mb-16"
        >
          <Button
            onClick={handleDownloadResume}
            className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 text-white px-10 py-5 text-lg rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/40 group border border-white/20"
          >
            <span className="relative z-10 font-medium">Download Resume</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex justify-center space-x-8"
        >
          {[
            { href: "https://github.com/bharathvetrayan", label: "GH", colors: "from-gray-500 to-gray-700" },
            { href: "https://www.linkedin.com/in/bharathvetrayan2004", label: "LI", colors: "from-blue-500 to-blue-700" },
            { href: "https://leetcode.com/u/bharathvetrayan/", label: "LC", colors: "from-yellow-500 to-orange-600" },
            { href: "https://www.instagram.com/_bharathvetrayan_/", label: "IG", colors: "from-pink-500 to-rose-600" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              className={`group relative overflow-hidden w-14 h-14 bg-gradient-to-r ${social.colors} rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl border border-white/20`}
              whileHover={{ y: -5, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-base relative z-10">{social.label}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-300 text-sm flex flex-col items-center"
        >
          <span className="mb-3 font-light">Scroll to explore</span>
          <div className="w-1 h-10 bg-gradient-to-b from-blue-400 via-purple-500 to-transparent rounded-full shadow-lg shadow-blue-400/50" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
