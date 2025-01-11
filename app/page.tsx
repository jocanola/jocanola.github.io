import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <ErrorBoundary fallback={<div className="h-screen flex items-center justify-center">Something went wrong in the hero section.</div>}>
        <Hero />
      </ErrorBoundary>
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}

