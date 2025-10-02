import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Mail, Phone, Calendar, Award, GraduationCap, Briefcase } from "lucide-react";
import myResume from "@/assets/Ujjwal_resume (3).pdf";

const Resume = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of 3 major web applications serving 10k+ users",
        "Improved application performance by 40% through code optimization",
        "Mentored 5 junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2021 - 2022",
      location: "New York, NY",
      description: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Optimized website loading speed by 35% through performance tuning",
        "Built reusable component library used across 15+ projects"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      period: "2020 - 2021",
      location: "Austin, TX",
      description: [
        "Built and maintained company website and internal tools",
        "Worked with REST APIs and integrated third-party services",
        "Participated in agile development process and daily standups",
        "Learned modern web development best practices and frameworks"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Graphic Era Hill University",
      period: "2022 - 2026",
      location: "Dehradun, Uttarakhand",
      gpa: "7.5"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "React Developer Certification"
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Download my full resume or view it below
          </p>
          <a href={myResume} download>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </a>

        </div>

        {/* Contact Info */}
        <Card className="bg-gradient-card border-border mb-8">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Ujjwal Dobliyal</CardTitle>
            <p className="text-lg text-muted-foreground">Full Stack Developer</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>45ujjwal@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 8433061450</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Dehradun, Uttarakhand</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-4 w-4" />
                <span>https://github.com/45Aditya</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="bg-gradient-card border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Briefcase className="h-5 w-5" />
              Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Experienced Full Stack Developer with expertise in building 
              scalable web applications. Proficient in frontend, backend, and cloud technologies. 
              Passionate about creating user-friendly interfaces and optimizing application performance. 
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        {/* <Card className="bg-gradient-card border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Briefcase className="h-5 w-5" />
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary/30 pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-primary">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="font-medium text-foreground mb-1">{exp.company}</p>
                <p className="text-muted-foreground mb-3 flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {exp.location}
                </p>
                <ul className="space-y-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card> */}

        {/* Education */}
        <Card className="bg-gradient-card border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <GraduationCap className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary/30 pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-primary">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="font-medium text-foreground mb-1">{edu.school}</p>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </span>
                  <span>GPA: {edu.gpa}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Certifications */}
        {/* <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Award className="h-5 w-5" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="p-3 text-center justify-center bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default Resume;