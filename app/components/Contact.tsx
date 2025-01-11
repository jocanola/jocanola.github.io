"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always open to new opportunities and collaborations. Whether you
            have a question or just want to say hi, feel free to reach out!
          </motion.p>
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactLink
              href="mailto:jokanola.it@gmail.com"
              icon={<Mail size={24} />}
            />
            <ContactLink
              href="https://www.linkedin.com/in/jokanolayusuff/"
              icon={<Linkedin size={24} />}
            />
            <ContactLink
              href="https://github.com/jocanola"
              icon={<Github size={24} />}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800 p-4 rounded-full text-blue-500 hover:text-blue-400 transition duration-300"
    whileHover={{ scale: 1.2, rotate: 360 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default Contact;
