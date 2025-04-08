
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "Carnot Technologies Private Limited",
    role: "Senior Android Engineer",
    period: "September 2022 - July 2024",
    duration: "(1 year 11 months)",
    location: "Mumbai, Maharashtra, India",
    achievements: [
      "Led a team of 2 developers in adopting Model View ViewModel Architecture for three projects, leading to a 9% reduction in development time, a 15% improvement in code quality, and an estimated cost saving of $1000/month.",
      "By converting the app into a Multi-Module project, we streamlined its structure, improved code maintainability, and facilitated independent testing, which achieved over 1 Million downloads on the Google Play Store.",
      "Enhanced user experience and application resilience by implementing offline-first functionality. Refined data models for efficient local storage and synchronized data with a backend server using WorkManager, ensuring seamless operation even in low-connectivity environments.",
      "Developed a unified internal SDK for themes and standard UI components, ensuring consistent design and branding across the company's apps."
    ]
  },
  {
    company: "Carnot Technologies Private Limited",
    role: "Android Engineer",
    period: "January 2021 - August 2022",
    duration: "(1 year 8 months)",
    location: "Mumbai, Maharashtra, India",
    achievements: [
      "Leveraged the Baseline Profile method to pre-compile critical app code paths, reducing average app startup time by 27%. This optimization minimized perceived load times, enhancing user experience and significantly boosting user engagement.",
      "Executed the seamless Integration of a third-party application, achieving a remarkable 90% reduction in development time, which allowed for the rapid deployment of new features and enhancements to existing products.",
      "Gradle Version Catalogs were introduced to simplify and standardize Dependency Management across a Multi-Module project. This approach centralized dependency definitions, ensuring consistent versioning and reducing maintenance overhead for 11 active modules, ultimately improving project scalability and developer efficiency.",
      "Successfully migrated the project from Java to Kotlin and from RxJava to Kotlin coroutines, resulting in cleaner, more concise, and more Kotlin-idiomatic code."
    ]
  },
  {
    company: "ElasticRun",
    role: "Software Engineer",
    period: "June 2020 - January 2021",
    duration: "(8 months)",
    location: "Pune, Maharashtra, India",
    achievements: [
      "Ensured smooth software operations by conducting thorough sanity testing and efficient software deployment, which contributed to overall system stability and enhanced customer satisfaction.",
      "Proactively addressed technical issues by effectively troubleshooting and managing support tickets, demonstrating strong problem-solving skills and a commitment to excellent customer service."
    ]
  },
  {
    company: "Freelance",
    role: "Reflexology Android App",
    period: "March 2020 - June 2020",
    duration: "(4 months)",
    location: "Aurangabad, Maharashtra, India",
    achievements: [
      "Full-Stack Developer specializing in building robust and scalable mobile applications.",
      "Successfully developed the Jin Reflexology app, a comprehensive health and wellness solution featuring a user-friendly interface and a robust backend infrastructure."
    ]
  },
  {
    company: "Freelance",
    role: "Yoga PWA Website",
    period: "February 2020 - March 2020",
    duration: "(2 months)",
    location: "India",
    achievements: [
      "Developed a Progressive Web App (PWA) yoga website using React.js to provide a seamless and engaging user experience.",
      "Implemented responsive design to ensure optimal performance across various devices and screen sizes.",
      "Utilized modern web technologies, including HTML5, CSS3, and JavaScript, to create a visually appealing and interactive interface.",
      "Integrated features such as yoga pose demonstrations, class schedules, and a community forum to enhance user engagement.",
      "Optimized the PWA for offline functionality, allowing users to access content even without an internet connection."
    ]
  },
  {
    company: "Freelance",
    role: "Civil Consulting Services Website",
    period: "February 2020",
    duration: "(1 month)",
    location: "Aurangabad, Maharashtra, India",
    achievements: [
      "Freelance React.js Developer with a focus on crafting compelling landing pages. Built a high-converting React.js landing page for a civil consultancy firm, incorporating SEO best practices and responsive design."
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-muted/10">
      <div className="container">
        <h2 className="section-title">Professional <span className="text-primary">Experience</span></h2>
        <p className="section-subtitle">A timeline of my professional journey in software engineering</p>
        
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: Experience;
  isFirst: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isFirst }) => {
  return (
    <Card className="mb-10 overflow-hidden border-muted">
      <div className="timeline-dot"></div>
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex flex-wrap justify-between gap-2">
            <h3 className="text-xl font-semibold">{experience.role}</h3>
          </div>
          <h4 className="text-lg font-medium text-primary">{experience.company}</h4>
          <div className="text-sm text-muted-foreground mt-1">
            <span>{experience.period} {experience.duration}</span>
            <span className="mx-2">•</span>
            <span>{experience.location}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {experience.achievements.map((achievement, i) => (
            <div key={i} className="flex">
              <div className="mr-2 mt-1 text-accent">•</div>
              <p>{achievement}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceSection;
