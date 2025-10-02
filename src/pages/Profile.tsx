import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Code2, Trophy, Star, GitBranch } from "lucide-react";

const Profile = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "Docker", "AWS", "Git", "Tailwind CSS", "Next.js", "C++"
  ];

  const achievements = [
    { title: "LeetCode Problems Solved", count: "450+", icon: Code2 },
    { title: "GitHub Repositories", count: "25", icon: GitBranch },
    { title: "LinkedIn Connections", count: "500+", icon: Linkedin },
    { title: "Years of Experience", count: "3+", icon: Trophy },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Profile</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with me across different platforms and explore my coding journey.
          </p>
        </div>

        {/* Profile Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-gradient-card border-border card-hover">
            <CardHeader className="text-center">
              <Github className="h-12 w-12 mx-auto mb-4 text-primary glow-effect" />
              <CardTitle className="text-primary">GitHub</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Check out my repositories and contributions
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://github.com/45Aditya" target="_blank" rel="noopener noreferrer">
                  Visit GitHub
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border card-hover">
            <CardHeader className="text-center">
              <Code2 className="h-12 w-12 mx-auto mb-4 text-primary glow-effect" />
              <CardTitle className="text-primary">LeetCode</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Follow my problem-solving journey
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://leetcode.com/u/Topdown_DP/" target="_blank" rel="noopener noreferrer">
                  Visit LeetCode
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border card-hover">
            <CardHeader className="text-center">
              <Linkedin className="h-12 w-12 mx-auto mb-4 text-primary glow-effect" />
              <CardTitle className="text-primary">LinkedIn</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Connect with me professionally
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://www.linkedin.com/in/ujjwal-dobliyal/" target="_blank" rel="noopener noreferrer">
                  Visit LinkedIn
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
            Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-card border-border text-center card-hover">
                <CardContent className="p-6">
                  <achievement.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-primary mb-1">
                    {achievement.count}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        {/* <div>
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
            Recent Activity
          </h2>
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Solved "Two Sum" problem on LeetCode</span>
                  <span className="text-muted-foreground text-sm ml-auto">2 days ago</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <GitBranch className="h-5 w-5 text-primary" />
                  <span>Pushed 3 commits to e-commerce-platform</span>
                  <span className="text-muted-foreground text-sm ml-auto">3 days ago</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <Code2 className="h-5 w-5 text-accent" />
                  <span>Started new project: React Native Todo App</span>
                  <span className="text-muted-foreground text-sm ml-auto">1 week ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;