"use client";

import { motion } from "framer-motion";
import Parallax from "./Parallax";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <Parallax offset={30}>
            <motion.p
              className="text-lg mb-6 text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm a software engineer with professional experience in frontend
              development for both web and mobile platforms, specializing in
              React.js and React Native with TypeScript. I am passionate about
              creating clean, intuitive, and user-friendly interfaces that
              deliver seamless user experiences. Additionally, I am driven by a
              passion for learning new technologies and continuously improving
              code quality. (Frontend heavy)
            </motion.p>
          </Parallax>
          <Parallax offset={30}>
            <motion.p
              className="text-lg mb-6 text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I have intermediate experience with Node.js, Expressjs, Mongodb,
              MySQL, enabling me to develop full-stack applications and gain a
              comprehensive understanding of the entire development process.
            </motion.p>
          </Parallax>
          <Parallax offset={30}>
            <motion.p
              className="text-lg text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Beyond my current role, I'm deeply fascinated by the fields of
              Artificial Intelligence and Robotics. In my free time, I actively
              explore and learn about Machine Learning and Deep Learning.
            </motion.p>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default About;
