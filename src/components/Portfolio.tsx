import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Code, 
  Palette, 
  Database, 
  Monitor, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram,
  ExternalLink,
  Download,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import santhoshProfile from '@/assets/santhosh-profile.jpg';
import webDevHero from '@/assets/web-development-hero.jpg';
import attendanceSoftware from '@/assets/attendance-software.jpg';
import turfBookingSystem from '@/assets/turf-booking-system.jpg';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    { 
      category: 'Web Development', 
      percentage: 80, 
      icon: Code,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express']
    },
    { 
      category: 'Graphic Design', 
      percentage: 75, 
      icon: Palette,
      skills: ['Photoshop', 'Poster Design', 'Brochures', 'UI/UX', 'Brand Identity']
    },
    { 
      category: 'Backend & Database', 
      percentage: 70, 
      icon: Database,
      skills: ['Python', 'MySQL', 'MongoDB', 'API Development', 'Server Management']
    },
    { 
      category: 'Tools & Software', 
      percentage: 85, 
      icon: Monitor,
      skills: ['VS Code', 'Git', 'Figma', 'Adobe Photoshop', 'Canva']
    }
  ];

  const services = [
    {
      title: 'Responsive Web Development',
      description: 'Frontend & Backend using MERN stack',
      icon: Code,
      features: ['React Applications', 'Node.js Backend', 'Database Integration', 'API Development']
    },
    {
      title: 'Graphic Design',
      description: 'Posters, Brochures, Brand Identity',
      icon: Palette,
      features: ['Poster Design', 'Brand Identity', 'Digital Graphics', 'Print Design']
    },
    {
      title: 'UI/UX Design',
      description: 'Prototyping and interfaces using Figma',
      icon: Monitor,
      features: ['Wireframing', 'Prototyping', 'User Research', 'Interface Design']
    },
    {
      title: 'Custom Software Solutions',
      description: 'Python applications with database integration',
      icon: Database,
      features: ['Desktop Applications', 'Data Analysis', 'Automation', 'Database Design']
    }
  ];

  const projects = [
    {
      title: 'Attendance Monitoring Software',
      description: 'Python + SQLite + Tkinter – Built to track and report student attendance effectively. Used for data analysis and educational institution reporting.',
      image: attendanceSoftware,
      tech: ['Python', 'SQLite', 'Tkinter', 'Data Analysis'],
      category: 'Software Development'
    },
    {
      title: 'Turf Booking System Website',
      description: 'Responsive web app to manage bookings and user flow for sports turf reservations.',
      image: turfBookingSystem,
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Web Development'
    },
    {
      title: 'Poster Design Showcase',
      description: 'Gallery of posters created for college and local community events.',
      image: santhoshProfile, // Placeholder - can be updated with actual poster gallery
      tech: ['Photoshop', 'Illustrator', 'Canva', 'Design'],
      category: 'Graphic Design'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-primary">
              Santhosh T
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-smooth">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-smooth">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-smooth">Skills</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-smooth">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-smooth">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-smooth">Contact</button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border shadow-card animate-fade-up">
              <div className="px-4 py-4 space-y-4">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left text-foreground hover:text-primary transition-smooth">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-foreground hover:text-primary transition-smooth">About</button>
                <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-foreground hover:text-primary transition-smooth">Skills</button>
                <button onClick={() => scrollToSection('services')} className="block w-full text-left text-foreground hover:text-primary transition-smooth">Services</button>
                <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-foreground hover:text-primary transition-smooth">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-foreground hover:text-primary transition-smooth">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-up">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-white">Santhosh</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light mb-6 text-white/90">
                Full Stack Developer & Designer
              </h2>
              <p className="text-lg lg:text-xl mb-8 text-white/80 leading-relaxed">
                Crafting responsive websites & impactful designs with passion and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="glass" 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="group"
                >
                  View My Work
                  <ChevronRight className="group-hover:translate-x-1 transition-smooth" size={18} />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="border-white/30 text-white hover:bg-white hover:text-primary"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src={webDevHero} 
                alt="Web Development Workspace" 
                className="rounded-2xl shadow-elegant animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={santhoshProfile} 
                alt="Santhosh T - Full Stack Developer" 
                className="rounded-2xl shadow-card w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <strong>Santhosh T</strong>, a passionate Full Stack Web Developer and Graphic Designer currently pursuing my B.Tech in Information Technology at Mahendra Institute of Technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a current CGPA of <strong>8.54</strong>, I actively participate in tech symposiums and engage with design and development communities. I'm dedicated to creating innovative solutions that blend functionality with beautiful design.
              </p>
              <div className="bg-card-gradient p-6 rounded-xl shadow-card">
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Currently pursuing B.Tech in Information Technology at Mahendra Institute of Technology (3rd year) with a CGPA of 8.54.
                </p>
              </div>
              <Button variant="cta" size="lg" className="group">
                <Download size={18} />
                Download Resume
                <ChevronRight className="group-hover:translate-x-1 transition-smooth" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and design capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card key={index} className="bg-card-gradient shadow-card hover:shadow-elegant transition-smooth animate-scale-in">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{skill.category}</h3>
                        <p className="text-muted-foreground">{skill.percentage}% Proficiency</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="bg-secondary rounded-full h-3 mb-2">
                        <div 
                          className="bg-hero-gradient h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-accent/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">My Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for your digital needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-card hover:shadow-elegant transition-smooth group animate-scale-in">
                  <CardContent className="p-6 text-center">
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-hero-gradient rounded-2xl shadow-glow group-hover:scale-110 transition-bounce">
                        <IconComponent className="text-white" size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work and creative solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-smooth group animate-scale-in overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="group w-full">
                    View Details
                    <ExternalLink className="group-hover:translate-x-1 transition-smooth" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-hero-gradient relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:santhosh25995@gmail.com" className="text-white/80 hover:text-white transition-smooth">
                      santhosh25995@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+918825940502" className="text-white/80 hover:text-white transition-smooth">
                      +91 88259 40502
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-white/80">Karur, Tamil Nadu</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Connect With Me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/santhosh123san" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-smooth group"
                  >
                    <Github className="group-hover:scale-110 transition-smooth" size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/santhosh-kumar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-smooth group"
                  >
                    <Linkedin className="group-hover:scale-110 transition-smooth" size={24} />
                  </a>
                  <a 
                    href="https://instagram.com/santhosh.xzx_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-smooth group"
                  >
                    <Instagram className="group-hover:scale-110 transition-smooth" size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <Button variant="glass" size="lg" className="w-full group">
                    Send Message
                    <ChevronRight className="group-hover:translate-x-1 transition-smooth" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Santhosh T. All rights reserved.
            </div>
            <div className="text-muted-foreground">
              Crafted with ❤️ using React & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;