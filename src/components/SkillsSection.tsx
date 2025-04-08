
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Kotlin", "Java", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    name: "Android Development",
    skills: ["Android SDK", "Jetpack Compose", "MVVM Architecture", "Multi-Module Projects", "WorkManager", "Room Database", "Material Design"]
  },
  {
    name: "Tools & Technologies",
    skills: ["Git", "REST APIs", "Gradle", "Firebase", "Kotlin Coroutines", "RxJava", "Koin", "Dagger/Hilt"]
  },
  {
    name: "Highlighted Skills",
    skills: ["Pagination", "Jetpack Compose"]
  },
  {
    name: "Languages",
    skills: ["English (Professional Working)", "Marathi (Native)", "Hindi (Professional Working)"]
  }
];

const certifications = [
  "Generative AI Overview for Project Managers",
  "Basics of Disciplined Agile",
  "The Basics of Scrum",
  "AWS Knowledge: Serverless",
  "Google Cloud Computing Foundations Certificate"
];

const awards = [
  "2nd Rank in Microsoft Hackathon 2.0 in 2018",
  "Winner of Smart India Hackathon 2019"
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="section-title">Skills & <span className="text-primary">Achievements</span></h2>
        <p className="section-subtitle">Technical expertise and professional recognition</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillsData.map((category, index) => (
            <Card key={index} className="border-muted bg-muted/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-muted bg-muted/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-muted bg-muted/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Awards & Honors</h3>
              <ul className="space-y-2">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
