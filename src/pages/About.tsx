
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation();
  const { ref: internshipRef, isVisible: internshipVisible } = useScrollAnimation();

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20 relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
            About Me
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mx-auto rounded-full blur-[1px]" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Crafting digital experiences with code and creativity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Bio Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300">
                <p className="text-xl leading-relaxed text-gray-200">
                  I am a passionate technology enthusiast pursuing B.Tech in Information Technology at
                  <span className="text-blue-400 font-semibold"> VSB College</span>.
                  My journey involves deep diving into <span className="text-purple-400 font-semibold">Java, SQL</span>,
                  and orchestrating intelligent workflows with <span className="text-cyan-400 font-semibold">n8n</span>.
                </p>
                <p className="text-xl leading-relaxed text-gray-200 mt-4">
                  I build robust applications and automation solutions that solve real-world problems.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {["AI", "Automation", "n8n", "Flowise", "Java", "SQL", "Git", "React", "TypeScript"].map((tech, index) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                  className="px-4 py-2 bg-gray-800/50 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Interactive Sphere Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex justify-center perspective-1000"
          >
            <motion.div
              className="relative w-[400px] h-[400px] flex items-center justify-center transform-style-3d"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Main Tech Sphere */}
              <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.2)] overflow-hidden group">

                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/5 to-purple-600/5 group-hover:from-blue-400/10 group-hover:to-purple-600/10 transition-colors duration-500"></div>

                {/* Rotating Orbit System */}
                <div className="absolute inset-0 animate-spin-slow">
                  {/* Orbit Path 1 */}
                  <div className="absolute inset-4 rounded-full border border-blue-500/20 rotate-45 transform"></div>
                  {/* Orbit Path 2 */}
                  <div className="absolute inset-8 rounded-full border border-purple-500/20 -rotate-12 transform"></div>

                  {/* Orbiting Planets */}
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] blur-[1px]"></div>
                  <div className="absolute bottom-10 right-10 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] blur-[1px]"></div>
                  <div className="absolute top-1/2 left-0 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] blur-[1px]"></div>
                </div>

                {/* Central Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10"
                  >
                    <svg className="w-14 h-14 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Outer Floating Tech Badges */}
              <div className="absolute inset-0 animate-reverse-spin-slow pointer-events-none">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="px-3 py-1.5 rounded-lg bg-gray-900/80 border border-blue-500/30 backdrop-blur-md shadow-lg">
                    <span className="text-blue-300 text-xs font-bold tracking-wider">FULL STACK</span>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-10 transform -translate-y-1/2">
                  <div className="px-3 py-1.5 rounded-lg bg-gray-900/80 border border-purple-500/30 backdrop-blur-md shadow-lg">
                    <span className="text-purple-300 text-xs font-bold tracking-wider">AUTOMATION</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="px-3 py-1.5 rounded-lg bg-gray-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg">
                    <span className="text-cyan-300 text-xs font-bold tracking-wider">AI AGENTS</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          ref={educationRef}
          initial={{ y: 50, opacity: 0 }}
          animate={educationVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-blue-500/50"></div>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Education</h3>
            <div className="h-[1px] w-12 bg-blue-500/50"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={educationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-800/40 rounded-2xl p-8 border border-white/5 backdrop-blur-sm overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Internships Section */}
        <motion.div
          ref={internshipRef}
          initial={{ y: 50, opacity: 0 }}
          animate={internshipVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24 mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-green-500/50"></div>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Internships</h3>
            <div className="h-[1px] w-12 bg-green-500/50"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {internshipItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={internshipVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gray-800/40 rounded-2xl p-8 border border-white/5 backdrop-blur-sm overflow-hidden hover:border-green-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 bg-green-500/10 rounded-2xl shrink-0">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-green-200 transition-colors">{item.title}</h4>
                    <p className="text-lg text-gray-300 mb-3">{item.description}</p>
                    <p className="text-gray-400 text-sm border-l-2 border-green-500/30 pl-4">{item.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
