import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <Card className="bg-gradient-card border-border overflow-hidden group card-hover">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-secondary/50 hover:bg-secondary"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-gradient-primary hover:opacity-90"
            asChild
          >
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;