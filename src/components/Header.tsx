import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gray-800"
          >
            Taishawn Williams
          </motion.div>
          <div className="flex space-x-4">
            <SocialLink href="https://github.com/importent" icon={<Github />} />
            <SocialLink href="https://www.linkedin.com/in/taishawn-w-5b450194/" icon={<Linkedin />} />
            <SocialLink href="mailto:Williamst0001@gmail.com" icon={<Mail />} />
            <SocialLink href="/resume.pdf" icon={<FileText />} />
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    {icon}
  </motion.a>
);