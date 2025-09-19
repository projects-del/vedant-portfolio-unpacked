// import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
        </div>

        <div className="flex justify-center">
          <div className="text-center space-y-6 max-w-3xl">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                I'm Aarya Mehta
              </h3>
              <h4 className="text-xl font-semibold text-muted-foreground mb-6">
                AI/ML Engineer
              </h4>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm <strong className="text-foreground">Aarya Mehta</strong>, AI/ML Engineer 
                based in India. Currently working at Genesis AI, I'm passionate about building robust 
                backend systems that make an impact.
              </p>
              
              <ul className="space-y-4 text-left max-w-2xl">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Specialize in Python Development, Machine Learning, and AI/ML-powered applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Build Data Analytics Tools, Automation Systems and Intelligent Applications
                  </span>
                </li>
              </ul>

              <p className="text-xl font-medium text-foreground pt-4">
                Let's connect and create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;