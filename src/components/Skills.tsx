import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Postman'] }
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600">My technical toolkit</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <SkillCard key={index} skillGroup={skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skillGroup, index }: { skillGroup: any; index: number }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-lg p-6"
  >
    <h3 className="text-xl font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
    <div className="space-y-3">
      {skillGroup.items.map((skill: string, skillIndex: number) => (
        <motion.div
          key={skillIndex}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-full h-2 overflow-hidden"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '85%' }}
            transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-blue-600 h-full rounded-full"
          />
        </motion.div>
      ))}
      <div className="mt-4 space-y-2">
        {skillGroup.items.map((skill: string, skillIndex: number) => (
          <div key={skillIndex} className="text-gray-600">
            {skill}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);