"use client";

import { Code, Server, BotIcon as Robot, Brain } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    {
      icon: <Code size={40} />,
      title: "Frontend Development",
      skills: [
        "TypeScript",
        "React.js",
        "React Native",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      icon: <Server size={40} />,
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "MongoDB",
        "MySQL",
      ],
    },
    {
      icon: <Robot size={40} />,
      title: "AI & Robotics",
      skills: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing (Learning)",

        // "Robotics (Exploring)",
      ],
    },
    {
      icon: <Brain size={40} />,
      title: "Other Skills",
      skills: [
        "Git",
        "Agile Methodologies",
        "Problem Solving",
        "CI/CD (GitHub Actions)",
        "Testing (Jest, Cypress, Playwright)",
        "Deployment (AWS, Digital ocean, Docker)",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  icon,
  title,
  skills,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  index: number;
}) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, skillIndex) => (
        <motion.li
          key={skillIndex}
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.1 }}
          viewport={{ once: true }}
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          {skill}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default Skills;
