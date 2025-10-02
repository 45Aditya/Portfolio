import ProjectCard from "@/components/ProjectCard";
import streamifyImage from "@/assets/project-streamify.png";
import tasksImage from "@/assets/project-tasks.jpg";
import weatherImage from "@/assets/project-weather.jpg";
import blogImage from "@/assets/project-blog.jpg";
import cryptoImage from "@/assets/project-crypto.jpg";
import socialImage from "@/assets/project-social.jpg";

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
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: tasksImage,
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      githubLink: "https://github.com/johndoe/task-manager",
      liveLink: "https://taskapp-demo.com",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts for multiple cities with interactive charts and maps.",
      image: weatherImage,
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3", "JavaScript"],
      githubLink: "https://github.com/johndoe/weather-dashboard",
      liveLink: "https://weather-demo.com",
    },
    {
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, SEO optimization, and content management system for writers and bloggers.",
      image: blogImage,
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Vercel"],
      githubLink: "https://github.com/johndoe/blog-platform",
      liveLink: "https://blog-demo.com",
    },
    {
      title: "Cryptocurrency Tracker",
      description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.",
      image: cryptoImage,
      technologies: ["React", "Redux", "CoinGecko API", "Firebase", "Material-UI"],
      githubLink: "https://github.com/johndoe/crypto-tracker",
      liveLink: "https://crypto-demo.com",
    },
    {
      title: "Social Media App",
      description: "A full-featured social media application with posts, comments, likes, real-time messaging, and user profiles.",
      image: socialImage,
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
      githubLink: "https://github.com/johndoe/social-app",
      liveLink: "https://social-demo.com",
    },
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