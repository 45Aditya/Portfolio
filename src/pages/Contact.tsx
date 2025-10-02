import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";


const Contact = () => {

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      PUBLIC_KEY
    )
    .then(
      () => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        toast({
          title: "Failed to send",
          description: "Something went wrong. Please try again later.",
        });
        console.error(error);
      }
    );


    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MessageSquare className="h-5 w-5" />
                  Let's Talk
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">45ujjwal@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 8433061450</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Dehradun, Uttarakhand</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="https://github.com/45Aditya" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/ujjwal-dobliyal/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Send className="h-5 w-5" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-secondary/30 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary/30 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-secondary/30 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                    className="bg-secondary/30 border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;