import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, Mail, Eye } from 'lucide-react';
import developerAvatar from '@/assets/developer-avatar.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                Hi, I'm <span className="text-primary">Vedant Parikh</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Software Engineer | Python Developer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Computer Engineering Graduate building scalable Python solutions with expertise in 
                AI/ML, NLP, and backend development. GATE CSE qualified with a passion for creating 
                innovative data-driven applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gap-2"
                asChild
              >
                <a 
                  href="/resume.pdf" 
                  download="Vedant_Parikh_Resume.pdf"
                  className="inline-flex items-center justify-center"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    See Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full h-[80vh] p-0 flex flex-col">
                  <DialogHeader className="px-6 py-4 border-b">
                    <DialogTitle>Vedant Parikh - Resume</DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 p-4">
                    <iframe
                      src="/resume.pdf"
                      className="w-full h-full border-0 rounded-md"
                      title="Vedant Parikh Resume"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-primary-dark p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img 
                    src={developerAvatar} 
                    alt="AI Python Developer" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute inset-0 hero-gradient rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;