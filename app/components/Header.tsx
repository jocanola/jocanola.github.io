"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Jocanola
        </motion.a>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <motion.button
          className="md:hidden text-white"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-gray-800 absolute w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col p-4 space-y-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              <MobileNavLink href="#about" onClick={toggleMenu}>
                About
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={toggleMenu}>
                Skills
              </MobileNavLink>
              <MobileNavLink href="#projects" onClick={toggleMenu}>
                Projects
              </MobileNavLink>
              <MobileNavLink href="#blog" onClick={toggleMenu}>
                Blog
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={toggleMenu}>
                Contact
              </MobileNavLink>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-white transition duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-white transition duration-300 text-lg"
    onClick={onClick}
    variants={{
      open: { opacity: 1, y: 0 },
      closed: { opacity: 0, y: 20 },
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export default Header;
