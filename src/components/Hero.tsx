
import { motion } from "framer-motion";
import { Github, Linkedin, Glasses } from "lucide-react";
// Mail
const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-white via-purple-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDExMCw5NSwyMzksMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"/>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-[#6E59A5] text-sm font-medium">
            Available
            {/* for Work */}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1A1F2C] via-[#6E59A5] to-[#9b87f5]">
            Dibya Jyoti Borah
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A problem solver , a software engineer and a love for building and breaking stuff.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          // className="flex items-center justify-center gap-6"
          className="mb-16 flex items-center justify-center gap-6"
        >
          <a 
            href="https://github.com/dibborah" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Github className="w-6 h-6 text-[#1A1F2C]" />
          </a>
          <a 
            href="https://www.linkedin.com/in/dib-borah"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Linkedin className="w-6 h-6 text-[#1A1F2C]" />
          </a>
          <a 
            // href="https://mail.google.com/"
            href="https://dibborah.github.io/dibborah-resume/"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* <Mail className="w-6 h-6 text-[#1A1F2C]" /> */}
            <Glasses className="w-6 h-6 text-[#1A1F2C]" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        // className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#projects"
          className="inline-block animate-bounce"
        >
          <div className="w-8 h-12 border-2 border-gray-400 rounded-full relative flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full absolute top-2 animate-pulse"></div>
          </div>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
