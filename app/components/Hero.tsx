"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroAnimation = dynamic(() => import("./HeroAnimation"), { ssr: false });

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <HeroAnimation />

      <motion.div
        className="text-center z-10 max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="/jokanola-yusuff.jpg"
          alt="Jokanola Yusuff"
          className="w-36 h-36 rounded-full mx-auto mb-8 border-4 border-white"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 3, delay: 0.2, duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Yusuff Jokanola O.
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Software Engineer | AI/Robotics Enthusiast
        </motion.h2>
        <motion.a
          href="#about"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More <ArrowRight className="ml-2" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
