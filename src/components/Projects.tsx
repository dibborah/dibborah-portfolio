
import { motion } from "framer-motion";
import { Link } from "lucide-react";
// Github

const projects = [
  {
    title: "Food Ordering Website",
    description: "Streamlined order management system for businesses.",
    link: "https://dibborah.fun.bingecrave.com/",
    github: "#",
    // tech: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"]
    tech: ["React", "TypeScript", "TailwindCSS", "react-hook-form", "zod"]
  },
  {
    title: "Social Media Platform",
    description: "A full-stack social media platform with interactive features. Feel its UI",
    link: "https://dibborah.fun.vibegram.site/",
    github: "#",
    // tech: ["React", "Node.js", "MongoDB", "WebSocket", "Redux"]
    tech: ["React","TypeScript", "Redux", "react-hook-form", "zod"]
  },
  {
    title: "E-commerce Website",
    description: "Includes product search, filtering & sorting shopping cart functionality.",
    link: "https://dibborah.fun.luxuryview.site/",
    github: "#",
    // tech: ["React", "Node.js", "Stripe", "Redux"]
    tech: ["React", "TypeScript", "TailwindCSS", "react-hook-form", "zod"]
  },
  {
    title: "Desi Netflix",
    description: "Find all your favourite movies in one place. Change tabs and navigate. Search a movie and view its details and even its trailer",
    link: "https://movie-793bc.web.app/",
    github: "#",
    // tech: ["React", "Node.js", "Stripe", "Redux"]
    tech: ["React", "material-ui", "react-router-dom"]
  },
  {
    title: "Recycling Website",
    description: "Modern recycling site which is easy and rewarding. Schedule a pickup, and our team will collect your scrap materials and pay you on the spot.",
    link: "https://dibborah.fun.recycleking.site/",
    github: "#",
    // tech: ["React", "Node.js", "Stripe", "Redux"]
    tech: ["React", "TypeScript", "TailwindCSS", "react-hook-form", "zod"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-white via-purple-50 to-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1A1F2C] via-[#6E59A5] to-[#9b87f5] mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white backdrop-blur-sm bg-opacity-70 p-8 rounded-xl border border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <a href={project.link} className="cursor-pointer">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold text-[#1A1F2C] mb-4 group-hover:text-[#6E59A5] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-sm px-3 py-1 bg-purple-50 text-[#6E59A5] rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-[#6E59A5] hover:text-[#9b87f5] transition-colors"
                        >
                          <Link className="w-4 h-4 mr-1" />
                          Live Demo
                        </a>
                        {/* <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-[#6E59A5] hover:text-[#9b87f5] transition-colors"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a> */}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
