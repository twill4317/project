import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Coffee } from 'lucide-react';

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mb-8"
          >
            <img
              src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/465180889_8991619560870235_7518598286784236222_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=J-g_7QmLAV8Q7kNvgHehkoN&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=AhRPZxe2vYr9bjwioyuO0Nj&oh=00_AYDyKi50qwJqtstAUuYqeD8wzB47x7ic8nG35ERdbNHUxg&oe=67453A9C"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto shadow-xl"
            />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            Taishawn Williams
          </motion.h1>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-2xl text-gray-600 mb-8"
          >
            Senior Software Engineer
          </motion.h2>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-8 mb-12"
          >
            <Stat icon={<Code2 className="w-6 h-6" />} label="Projects" value="50+" />
            <Stat icon={<Coffee className="w-6 h-6" />} label="Coffee Cups" value="1000+" />
            <Stat icon={<Rocket className="w-6 h-6" />} label="Deployments" value="100+" />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center space-x-4"
          >
            <Button primary>View Projects</Button>
            <Button>Contact Me</Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Stat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="text-center"
  >
    <div className="flex justify-center text-blue-600 mb-2">{icon}</div>
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </motion.div>
);

const Button = ({ children, primary }: { children: React.ReactNode; primary?: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 rounded-lg font-medium ${
      primary
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200'
    } transition-colors`}
  >
    {children}
  </motion.button>
);