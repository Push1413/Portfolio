
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              Pushkar Agnihotri
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Software Engineer | Android, Kotlin, Backend | AI & Cloud Enthusiast
            </h2>
            <div className="h-1 w-20 bg-accent"></div>
            <p className="text-lg max-w-2xl">
              A dedicated Software Engineer with 4+ years of experience in 
              Android development. With a passion for creating intuitive and 
              visually appealing applications, I leverage Kotlin to deliver high-performance mobile experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a href="#contact">
                  Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-white">
                <Download className="mr-2 h-4 w-4" /> Resume
              </Button>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="relative animate-fade-in">
              <div className="w-full aspect-square rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden p-1">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">PA</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-background border border-muted flex items-center justify-center">
                <span className="text-xl font-bold text-primary">&lt;/&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
