const Experience = () => {
  const experiences = [
    {
      company: "Genesis AI",
      position: "Software Engineer",
      duration: "2023 - Present",
      location: "India",
      responsibilities: [
        "Developed and maintained scalable Python backend systems",
        "Built financial data extraction and automation tools",
        "Implemented NLP solutions for document processing",
        "Collaborated with cross-functional teams to deliver high-quality software"
      ]
    },
    {
      company: "Tech Solutions Inc",
      position: "Python Developer Intern",
      duration: "2022 - 2023",
      location: "India", 
      responsibilities: [
        "Developed web applications using Django and Flask",
        "Worked on data analysis projects using Pandas and NumPy",
        "Implemented REST APIs and database optimization",
        "Participated in code reviews and agile development processes"
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

  return (
    <section id="experience" className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Experience & Education</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Work Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-4">
                <div className="border-l-4 border-primary pl-6 space-y-2">
                  <h4 className="text-xl font-bold">{exp.position}</h4>
                  <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.duration} • {exp.location}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="space-y-4">
                <div className="border-l-4 border-primary pl-6 space-y-2">
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-lg font-semibold text-primary">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.duration}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
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
    </section>
  );
};

export default Experience;