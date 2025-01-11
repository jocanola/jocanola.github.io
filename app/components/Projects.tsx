'use client'

import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projectsData = [
    {
      title: "React Native Mobile App",
      description: "A cross-platform mobile application built with React Native and TypeScript, featuring real-time data synchronization and offline support.",
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://project1demo.com"
    },
    {
      title: "AI-Powered Web Dashboard",
      description: "A web dashboard that utilizes machine learning algorithms to provide predictive analytics and data visualization for business intelligence.",
      technologies: ['React.js', 'Python', 'TensorFlow', 'D3.js'],
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2demo.com"
    },
    {
      title: "Node.js Backend API",
      description: "A scalable RESTful API built with Node.js and Express, featuring authentication, rate limiting, and integration with multiple databases.",
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      githubLink: "https://github.com/yourusername/project3"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubLink, 
  liveLink,
  index
}: { 
  title: string, 
  description: string, 
  technologies: string[], 
  githubLink: string, 
  liveLink?: string,
  index: number
}) => (
  <motion.div 
    className="bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl relative overflow-hidden group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
      initial={false}
      animate={{ scale: [1, 1.5, 1.5, 1, 1], rotate: [0, 0, 270, 270, 0] }}
      transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }}
    />
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="mb-4">
      {technologies.map((tech, techIndex) => (
        <motion.span 
          key={techIndex} 
          className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.1) }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
    <div className="flex space-x-4">
      <motion.a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:text-blue-400 transition duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Github size={24} />
      </motion.a>
      {liveLink && (
        <motion.a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:text-blue-400 transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ExternalLink size={24} />
        </motion.a>
      )}
    </div>
  </motion.div>
)

export default Projects

