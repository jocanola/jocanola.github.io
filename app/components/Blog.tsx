'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface BlogPost {
  title: string
  description: string
  url: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with React and TypeScript",
    description: "A beginner's guide to setting up a React project with TypeScript and best practices.",
    url: "https://yourblog.com/react-typescript-guide",
    date: "2023-05-15"
  },
  {
    title: "Exploring the World of AI: A Developer's Perspective",
    description: "My journey into AI and machine learning, and how it's shaping the future of software development.",
    url: "https://yourblog.com/ai-developer-perspective",
    date: "2023-06-22"
  },
  {
    title: "Building Scalable Node.js Applications",
    description: "Tips and tricks for creating robust and scalable backend services with Node.js.",
    url: "https://yourblog.com/scalable-nodejs-apps",
    date: "2023-07-10"
  }
]

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link 
            href="https://yourblog.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const BlogCard = ({ post, index }: { post: BlogPost, index: number }) => (
  <motion.div 
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <Link href={post.url} target="_blank" rel="noopener noreferrer">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
        <p className="text-gray-400 mb-4">{post.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{post.date}</span>
          <span className="text-blue-500 hover:text-blue-400">Read More →</span>
        </div>
      </div>
    </Link>
  </motion.div>
)

export default Blog

