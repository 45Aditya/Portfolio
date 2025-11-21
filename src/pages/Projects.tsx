import ProjectCard from "@/components/ProjectCard";
import streamifyImage from "@/assets/project-streamify.png";
import resumeAnalyzer from '@/assets/project-resumeAnalyzer.png';
import authenticationImage from '@/assets/project-authentication.png';

const Projects = () => {
  const projects = [
    {
      title: "Streamify - Fullstack Chat and Video calling App",
      description: "A full-stack chat application powered by Stream for real-time messaging and video calls. Features include user authentication, secure backend integration, and a modern React frontend.",
      image: streamifyImage,
      technologies: ["React", "Node.js", "MongoDB", "Stream", "Tailwind CSS"],
      githubLink: "https://github.com/45Aditya/Streamify",
      liveLink: "https://streamify-ynfz.onrender.com/login",
    },
    {
      title: "Ai Resume Analyzer",
      description: "AI-powered Resume Analyzer with React, React Router, and Puter.js! Implement seamless auth, upload and store resumes, and match candidates to jobs using smart AI evaluations. Get custom feedback and ATS scores tailored to each listing—all wrapped in a clean, reusable UI.",
      image: resumeAnalyzer,
      technologies: ["React", "TypeScript", "Puter Js", "Tailwind CSS", "Zustand"],
      githubLink: "https://github.com/45Aditya/ai_resume_analyzer",
      liveLink: "https://ai-resume-analyzer-delta-gules.vercel.app/",
    },
    {
      title: "User Authentication System",
      description: "A comprehensive, production-ready authentication system built with modern web technologies. This project demonstrates a complete end-to-end implementation of user authentication, from backend API endpoints to a polished frontend interface.",
      image: authenticationImage,
      technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Mailtrap", "Node.js"],
      githubLink: "https://github.com/45Aditya/user-auth-system",
      liveLink: "https://github.com/45Aditya/user-auth-system",
    },
    // {
    //   title: "Blog Platform",
    //   description: "A modern blog platform with markdown support, SEO optimization, and content management system for writers and bloggers.",
    //   image: blogImage,
    //   technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Vercel"],
    //   githubLink: "https://github.com/johndoe/blog-platform",
    //   liveLink: "https://blog-demo.com",
    // },
    // {
    //   title: "Cryptocurrency Tracker",
    //   description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.",
    //   image: cryptoImage,
    //   technologies: ["React", "Redux", "CoinGecko API", "Firebase", "Material-UI"],
    //   githubLink: "https://github.com/johndoe/crypto-tracker",
    //   liveLink: "https://crypto-demo.com",
    // },
    // {
    //   title: "Social Media App",
    //   description: "A full-featured social media application with posts, comments, likes, real-time messaging, and user profiles.",
    //   image: socialImage,
    //   technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    //   githubLink: "https://github.com/johndoe/social-app",
    //   liveLink: "https://social-demo.com",
    // },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents 
            a unique challenge and learning opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/45Aditya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors font-medium"
          >
            Visit my GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;