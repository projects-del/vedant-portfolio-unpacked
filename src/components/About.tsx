import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                I'm Vedant Parikh
              </h3>
              <h4 className="text-xl font-semibold text-muted-foreground mb-6">
                Software Engineer
              </h4>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm <strong className="text-foreground">Vedant Parikh</strong>, a Software Engineer 
                based in India. Currently working at Genesis AI, I'm passionate about building robust 
                backend systems that make an impact.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Specialize in <strong className="text-foreground">Python Development</strong> with 
                    Django, Flask, and FastAPI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Build <strong className="text-foreground">Financial Data Extraction Systems</strong> and 
                    Automation Tools
                  </span>
                </li>
              </ul>

              <p className="text-xl font-medium text-foreground pt-4">
                Let's connect and create something amazing together!
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Vedant Parikh - Software Engineer"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 hero-gradient rounded-2xl opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;