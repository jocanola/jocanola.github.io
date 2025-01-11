import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yusuff Jokanola Olatunji - Software Engineer & AI Enthusiast",
  description:
    "I'm a software engineer with professional experience in frontend development for both web and mobile platforms, specializing in React.js and React Native with TypeScript. I am passionate about creating clean, intuitive, and user-friendly interfaces that deliver seamless user experiences. Additionally, I am driven by a passion for learning new technologies and continuously improving code quality. (Frontend heavy). I have intermediate experience with Node.js, Expressjs, Mongodb, MySQL, enabling me to develop full-stack applications and gain a comprehensive understanding of the entire development process. Beyond my current role, I'm deeply fascinated by the fields of Artificial Intelligence and Robotics. In my free time, I actively explore and learn about Machine Learning and Deep Learning.",
  image: "/jokanola-yusuff.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jokanola.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jokanola" />
        <meta name="twitter:creator" content="@jokanola" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
