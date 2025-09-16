const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "C/C++", "JavaScript", "Django", "FastAPI", "Flask"]
    },
    {
      title: "Data & Analytics", 
      skills: ["Pandas", "NumPy", "NLP (spaCy)", "OCR (Tesseract)"]
    },
    {
      title: "Infrastructure & Tools",
      skills: ["AWS", "Docker", "SQL/NoSQL", "MongoDB", "Git", "Nginx", "Postman", "Jira"]
    }
  ];

  return (
    <section id="skills" className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-bold text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="skill-badge transition-transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;