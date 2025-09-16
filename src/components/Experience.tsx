const Experience = () => {
  const experiences = [
    {
      company: "Genesis Artificial Intelligence",
      companyUrl: "https://genesisai.com",
      position: "Software Engineer",
      duration: "September 2024 - Present",
      responsibilities: [
        "Engineered core financial data extraction logic using PyMuPDF and PyPDF2",
        "Built analyzer component for advanced computations and report generation",
        "Designed robust pipeline delivering insights in Excel and JSON formats"
      ]
    },
    {
      company: "Crest Data",
      companyUrl: "https://crestdata.com",
      position: "Software Engineer",
      duration: "November 2023 - August 2024",
      responsibilities: [
        "Developed SaaS-based SIEM Migration Tool for cross-platform migrations",
        "Built RESTful APIs with FastAPI and ReactJS frontend components",
        "Enhanced Google Chronicle Platform with UDM configuration automation"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "University Name",
      duration: "2019 - 2023",
      achievements: ["GATE CSE Qualified", "First Class with Distinction"]
    }
  ];

  const achievements = [
    {
      title: "GATE CSE Qualified",
      year: "2023",
      description: "Qualified Graduate Aptitude Test in Engineering for Computer Science"
    },
    {
      title: "First Class with Distinction",
      year: "2023",
      description: "Graduated with honors in Computer Engineering"
    },
    {
      title: "Hackathon Winner",
      year: "2022",
      description: "Won first place in university-level coding hackathon"
    }
  ];

  const certificates = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-CSA-2023-001"
    },
    {
      name: "Python for Data Science",
      issuer: "Coursera",
      year: "2022",
      credentialId: "COURSERA-PDS-2022"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      credentialId: "META-RDC-2023"
    }
  ];

  return (
    <section id="experience" className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Experience & Education</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-8">Work Experience</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground">{exp.position}</h4>
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-primary hover:underline inline-block"
                    >
                      {exp.company}
                    </a>
                    <p className="text-muted-foreground">{exp.duration}</p>
                    <ul className="space-y-2 mt-4">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-8">Education</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-lg font-semibold text-primary">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.duration}</p>
                    <ul className="space-y-2 mt-4">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements & Certificates */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-8">Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-foreground">{achievement.title}</h4>
                    <span className="text-sm text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-8">Certificates</h3>
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-foreground">{cert.name}</h4>
                    <span className="text-sm text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-primary font-semibold">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mt-1">ID: {cert.credentialId}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;