
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
}

const educationData: Education[] = [
  {
    institution: "California State University, Fullerton",
    degree: "Master's degree, Computer Science",
    period: "August 2024 - May 2026",
    location: "Fullerton, California"
  },
  {
    institution: "Government College of Engineering Aurangabad",
    degree: "Bachelor's degree, Computer Science",
    period: "2016 - 2020",
    location: "Aurangabad, Maharashtra, India"
  }
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-muted/10">
      <div className="container">
        <h2 className="section-title">Education & <span className="text-primary">Qualifications</span></h2>
        <p className="section-subtitle">My academic journey in computer science</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="border-muted overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col h-full">
                  <div className="bg-primary p-6 text-white flex items-center">
                    <GraduationCap className="w-8 h-8 mr-4" />
                    <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  </div>
                  <div className="p-6 flex-1">
                    <h4 className="text-lg font-medium mb-2">{edu.degree}</h4>
                    <div className="text-muted-foreground space-y-2">
                      <p>{edu.period}</p>
                      {edu.location && <p>{edu.location}</p>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
