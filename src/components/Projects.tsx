import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "ChitChat - RealTime Chat Application",
      description: "A secure and scalable realtime chat application built using Node.js, Socket.IO, Express, and JWT for backend authentication. Features user login/sign up with profile picture, live messaging, image sharing, and realtime online user tracking with seamless websocket communication.",
      technologies: ["Node.js", "Socket.IO", "Express", "JWT", "HTML", "Tailwind CSS", "JavaScript", "Axios"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "PDF Question Answering System",
      description: "An intelligent document processing system that extracts information from PDFs and provides accurate answers to user queries using advanced NLP techniques and machine learning algorithms.",
      technologies: ["Python", "NLP", "PyPDF2", "spaCy", "Flask", "Machine Learning"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Financial Data Extraction Tool",
      description: "Automated system for extracting and processing financial data from various sources, featuring OCR capabilities, data validation, and integration with multiple financial APIs.",
      technologies: ["Python", "Tesseract OCR", "Pandas", "FastAPI", "MongoDB", "AWS"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="skill-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;