import { ChevronLeft, ChevronRight, Trophy, Award, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const timelineItems = [
    {
      type: "work",
      title: "Software Engineer",
      organization: "Genesis Artificial Intelligence",
      organizationUrl: "https://genesisai.com",
      duration: "September 2024 - Present",
      responsibilities: [
        "Engineered core financial data extraction logic using PyMuPDF and PyPDF2",
        "Built analyzer component for advanced computations and report generation",
        "Designed robust pipeline delivering insights in Excel and JSON formats"
      ]
    },
    {
      type: "work",
      title: "Software Engineer",
      organization: "Crest Data",
      organizationUrl: "https://crestdata.com",
      duration: "November 2023 - August 2024",
      responsibilities: [
        "Developed SaaS-based SIEM Migration Tool for cross-platform migrations",
        "Built RESTful APIs with FastAPI and ReactJS frontend components",
        "Enhanced Google Chronicle Platform with UDM configuration automation"
      ]
    },
    {
      type: "work",
      title: "Software Engineer Intern",
      organization: "TenUp Software Services",
      organizationUrl: "https://tenup.com",
      duration: "May 2023 - July 2023",
      responsibilities: [
        "Implemented spaCy NLP models for automated resume parsing",
        "Deployed scalable RESTful APIs on Nginx Web Server",
        "Enabled real-time integration with HR systems"
      ]
    },
    {
      type: "education",
      title: "B.Tech Computer Engineering",
      organization: "Dharamsingh Desai University, Nadiad",
      organizationUrl: "https://ddu.ac.in",
      duration: "2020 - 2024",
      responsibilities: [
        "CGPA: 8.35/10.0"
      ]
    }
  ];

  const achievementsAndCertificates = [
    {
      type: "achievement",
      icon: Trophy,
      title: "Global Rank 60",
      subtitle: "CodeChef August Long Challenge 2022",
      category: "Competition"
    },
    {
      type: "certificate",
      icon: Award,
      title: "AWS Certified Solutions Architect",
      subtitle: "Amazon Web Services - 2023",
      category: "Certification"
    },
    {
      type: "achievement",
      icon: Trophy,
      title: "GATE CSE Qualified",
      subtitle: "Graduate Aptitude Test in Engineering 2023",
      category: "Achievement"
    },
    {
      type: "certificate",
      icon: Award,
      title: "Python for Data Science",
      subtitle: "Coursera - 2022",
      category: "Certification"
    },
    {
      type: "certificate",
      icon: Award,
      title: "React Developer Certification",
      subtitle: "Meta - 2023",
      category: "Certification"
    },
    {
      type: "achievement",
      icon: GraduationCap,
      title: "First Class with Distinction",
      subtitle: "Computer Engineering Degree",
      category: "Achievement"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= achievementsAndCertificates.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? Math.max(0, achievementsAndCertificates.length - 3) : prev - 1
    );
  };

  return (
    <section id="experience" className="py-20 section-padding">
      <div className="container-max">
        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Experience & Education</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {timelineItems.map((item, index) => (
                <div key={index} className="relative pl-20 pb-12 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <a 
                        href={item.organizationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-primary hover:underline inline-block"
                      >
                        {item.organization}
                      </a>
                      <p className="text-muted-foreground">{item.duration}</p>
                      <ul className="space-y-2 mt-4">
                        {item.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements & Certificates */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Achievements & Certifications</h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background border border-border rounded-full p-2 hover:bg-accent transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background border border-border rounded-full p-2 hover:bg-accent transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Cards container */}
            <div className="overflow-hidden px-16">
              <div 
                className="flex transition-transform duration-300 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`
                }}
              >
                {achievementsAndCertificates.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 w-80 bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow text-center"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="mb-2">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.max(1, achievementsAndCertificates.length - 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-border'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;