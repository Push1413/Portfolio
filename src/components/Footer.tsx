
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/20 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Pushkar<span className="text-primary">.dev</span>
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Software Engineer specializing in Android development with a passion for creating 
              intuitive and high-performance mobile applications.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="mailto:agnihotripush@gmail.com"
                className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pushkaragnihotri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#"
                className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Pushkar Agnihotri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
