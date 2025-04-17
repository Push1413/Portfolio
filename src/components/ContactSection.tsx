import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted!");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-title text-center">Get in <span className="text-primary">Touch</span></h2>
        <p className="section-subtitle text-center">Let's connect and discuss how we can work together</p>
        
        <div className="grid grid-cols-3 gap-6">
          <Card className="border-muted bg-muted/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <a href="mailto:agnihotripush@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    agnihotripush@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-muted bg-muted/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/pushkaragnihotri" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/pushkaragnihotri
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-muted bg-muted/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Los Angeles Metropolitan Area
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
