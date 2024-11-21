import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'CUAS',
    description: 'A TAK platform plugin built with Java, Kotlin, C# and more',
    image: 'https://hackaday.com/wp-content/uploads/2022/08/atak-eud.jpg?w=800',
    tags: ['React', 'Java', 'Kotlin', 'PHP', 'HTML' , 'CSS', 'Ruby', 'C++', 'C#'],
    github: 'https://tak.gov/products',
    live: 'https://example.com'
  },
  {
    title: 'Autonomous Drone',
    description: 'Drone built and programmed from scratch for flight and recon utilizing Python and C++',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9tPC8P2JJM6nRFp_ztXbXyscfe4cZRftDVw&s',
    tags: ['Python', 'C++'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task management system with real-time updates',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    tags: ['React', 'Firebase', 'Material-UI', 'PWA'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-lg overflow-hidden"
  >
    <div className="relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full text-gray-900 hover:text-blue-600"
        >
          <Github className="w-6 h-6" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full text-gray-900 hover:text-blue-600"
        >
          <ExternalLink className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string, tagIndex: number) => (
          <span
            key={tagIndex}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);