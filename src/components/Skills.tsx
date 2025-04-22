
import { motion } from "framer-motion";

const skills = [
  "ReactJS",
  "JavaScript",
  "Python",
  "HTML & CSS",
  "React Native",
  "NextJS",
  "TypeScript",
  "Git",
  "React Query",
  "React Hook Form",
  "Zustand",
  "Tailwind",
  // "Node.js",
  // "REST APIs",
  // "MongoDB",
  // "PostgreSQL"
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-white relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1A1F2C] via-[#6E59A5] to-[#9b87f5] mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I've mastered along my journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="relative bg-white p-6 rounded-xl border border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-[#6E59A5] font-medium text-lg block text-center">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
