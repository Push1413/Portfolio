
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Code, Home, Tv } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Anime App",
      description: "MVVM Jetpack Compose App using Ktor and Koin.",
      image: "/lovable-uploads/1dcde3ec-f650-40f7-9acd-0d2e94735230.png",
      linkText: "Analyze the code",
      linkUrl: "#",
      icon: <Tv className="h-5 w-5" />
    },
    {
      id: 2,
      title: "LamaEstate Website",
      description: "A Real Estate Apartment MERN website.",
      image: "/lovable-uploads/1dcde3ec-f650-40f7-9acd-0d2e94735230.png",
      linkText: "Inspect the code",
      linkUrl: "#",
      icon: <Home className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Rick & Morty App",
      description: "Multi-module MVVM Jetpack Compose App.",
      image: "/lovable-uploads/1dcde3ec-f650-40f7-9acd-0d2e94735230.png",
      linkText: "Dive into the code",
      linkUrl: "#",
      icon: <Code className="h-5 w-5" />
    }
  ];

  return (
    <section id="projects" className="bg-muted/20">
      <div className="container">
        <h2 className="section-title text-center">Personal Projects</h2>
        <p className="section-subtitle text-center">Some of the projects I've worked on in my spare time</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain bg-white p-4"
                />
              </div>
              <CardHeader className="py-4">
                <div className="flex items-center gap-2">
                  {project.icon}
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </CardHeader>
              <CardContent className="py-2">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <a 
                  href={project.linkUrl} 
                  className="text-accent hover:underline inline-flex items-center gap-1"
                >
                  {project.linkText}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
