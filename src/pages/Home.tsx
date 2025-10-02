import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = [
    { category: "Frontend", items: "React, TypeScript, Tailwind CSS" },
    { category: "Backend", items: "Node.js, Python, PostgreSQL" },
    { category: "Tools", items: "Docker, AWS, Git, Figma" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text glow-effect">Ujjwal Dobliyal</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Backend Developer | Final Year CS Student | Building scalable web applications
          </p>


          {/* Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="p-6 bg-card rounded-xl shadow-card hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {skill.category}
                </h3>
                <p className="text-muted-foreground">{skill.items}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Link to="/projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/45Aditya"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ujjwal-dobliyal/"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:45ujjwal@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
