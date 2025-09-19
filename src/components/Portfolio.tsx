import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Hero3DBackground from './Hero3DBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
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
import santhoshHero from '@/assets/santhosh-hero.jpg';
import santhoshAbout from '@/assets/santhosh-about.jpg';
import santhoshHeroNew from '@/assets/santhosh-hero-new.jpg';
import attendanceSoftware from '@/assets/attendance-monitoring-new.jpg';
import turfBookingSystem from '@/assets/turf-booking-new.jpg';
import posterDesigns from '@/assets/poster-designs-new.jpg';

const Portfolio = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showInstagramQR, setShowInstagramQR] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_jlko9n6',
        'template_8z1dyke',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Santhosh'
        },
        'Bh7fa55ZgOSbL3FnB'
      );

      toast({
        title: "Success!",
        description: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const [showAllProjects, setShowAllProjects] = useState(false);
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
      description: 'Python-based attendance tracking system with data analysis and reporting.',
      image: attendanceSoftware,
      tech: ['Python', 'SQLite', 'Tkinter'],
      category: 'Software Development'
    },
    {
      title: 'Turf Booking System',
      description: 'Responsive web app for sports turf reservations and booking management.',
      image: turfBookingSystem,
      tech: ['React', 'Node.js', 'MongoDB'],
      category: 'Web Development'
    },
    {
      title: 'Poster Design Showcase',
      description: 'Creative poster gallery for college and community events.',
      image: posterDesigns,
      tech: ['Photoshop', 'Illustrator', 'Canva'],
      category: 'Graphic Design'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack online shopping platform with payment integration.',
      image: santhoshProfile,
      tech: ['React', 'Express', 'PostgreSQL'],
      category: 'Web Development'
    },
    {
      title: 'Mobile App Design',
      description: 'UI/UX design for fitness tracking mobile application.',
      image: santhoshProfile,
      tech: ['Figma', 'UI Design', 'Prototyping'],
      category: 'UI/UX Design'
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
        {/* 3D Interactive Background */}
        <Hero3DBackground />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-transparent"></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/15 rotate-45 blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-10 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
            <div className="text-white space-y-8 animate-fade-up lg:text-center lg:flex lg:flex-col lg:justify-center">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for Freelance Work
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent relative">
                    Santhosh
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white/80 to-transparent rounded-full"></div>
                  </span>
                </h1>
                <div className="relative">
                  <h2 className="text-2xl lg:text-4xl font-medium text-white/90 leading-relaxed">
                    Full Stack Developer &{' '}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent font-semibold">
                        Creative Designer
                      </span>
                    </span>
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-light max-w-xl">
                Crafting digital experiences that blend{' '}
                <span className="text-white font-medium">Full Stack Developer with expertise in building scalable web applications using modern front-end and back-end technologies</span> with{' '}
                <span className="text-white font-medium">stunning visual design</span>.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'Python', 'MongoDB', 'UI/UX'].map((tech) => (
                  <div key={tech} className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium hover:bg-white/20 transition-smooth cursor-pointer">
                    {tech}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="glass" 
                  size="xl" 
                  onClick={() => scrollToSection('projects')}
                  className="group bg-white/15 hover:bg-white/25 border-white/30 shadow-glow"
                >
                  <span>Explore My Work</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-smooth" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  onClick={() => scrollToSection('contact')}
                  className="border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                >
                  <Mail size={18} />
                  Get In Touch
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">8.54</div>
                  <div className="text-xs text-white/70">CGPA</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-xs text-white/70">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Hero Image with Modern Effects */}
            <div className="relative animate-scale-in lg:justify-self-end flex justify-center">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full rotate-12 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tl from-primary/30 to-transparent rounded-full -rotate-12 blur-lg"></div>
              
              {/* Main Image Container - Circular Design */}
              <div className="relative group w-96 h-96">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
                
                {/* Border Ring */}
                <div className="absolute inset-2 bg-gradient-to-br from-white via-white/90 to-white/80 rounded-full p-1 shadow-2xl">
                  {/* Inner Shadow Ring */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full p-1">
                    <img 
                      src={santhoshHeroNew} 
                      alt="Santhosh T - Full Stack Developer" 
                      className="w-full h-full object-cover rounded-full shadow-inner animate-float"
                    />
                  </div>
                </div>
                
                {/* Floating Info Cards */}
                <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-card animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="text-sm font-medium text-gray-800">Currently Available</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-primary/90 backdrop-blur-md rounded-2xl p-3 shadow-card animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2 text-white">
                    <Code size={16} />
                    <div className="text-sm font-medium">Full Stack Dev</div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] pointer-events-none">
                <div className="absolute inset-0 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute inset-4 border border-white/5 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-primary/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="text-xs uppercase tracking-wider">Scroll Down</div>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 animate-fade-up text-center">
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
              <Button 
                variant="cta" 
                size="lg" 
                className="group"
                onClick={() => {
                  // First open in new tab for preview
                  window.open('/santhosh-resume-latest.jpg', '_blank');
                }}
              >
                <Download size={18} />
                Download Resume
                <ChevronRight className="group-hover:translate-x-1 transition-smooth" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Skills Overview</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical capabilities and expertise levels
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
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* My Skills Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">My Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to create amazing digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              return (
                <Card key={index} className="bg-card-gradient shadow-card hover:shadow-elegant transition-smooth animate-scale-in">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{skill.category}</h3>
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

      {/* Services Section - Compact */}
      <section id="services" className="py-12 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">My Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive solutions for your digital needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-card hover:shadow-elegant transition-smooth group animate-scale-in">
                  <CardContent className="p-4 text-center">
                    <div className="mb-4">
                      <div className="inline-flex p-3 bg-hero-gradient rounded-2xl shadow-glow group-hover:scale-110 transition-bounce">
                        <IconComponent className="text-white" size={24} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-3 text-sm line-clamp-2">{service.description}</p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center gap-1">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              My <span className="text-primary">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How I bring your ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your requirements and goals"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Creating detailed project roadmap and timeline"
              },
              {
                step: "03",
                title: "Development", 
                description: "Building your solution with best practices"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Testing, optimization, and final delivery"
              }
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Consolidated */}
      <section id="projects" className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">My Portfolio</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Showcasing my completed projects and professional work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllProjects ? projects : projects.slice(0, 3)).map((project, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-smooth group animate-scale-in overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs px-2 py-1">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    View Details
                    <ExternalLink className="ml-2" size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {projects.length > 3 && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-6"
              >
                {showAllProjects ? 'Show Less' : `View All Projects (${projects.length})`}
                <ChevronRight className={`ml-2 transition-transform ${showAllProjects ? 'rotate-90' : ''}`} size={16} />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Projects Showcase */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Featured Projects</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Detailed Project 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Showcase</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dive deep into my most impactful projects, exploring the technologies, features, and solutions that drive real-world results.
            </p>
          </div>

          <div className="space-y-24">
            {/* Attendance Monitoring Software */}
            <div className="group">
              <Card className="bg-gradient-to-br from-card to-card/50 shadow-elegant hover:shadow-2xl transition-all duration-500 overflow-hidden border-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 flex items-center justify-center min-h-[400px]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
                    
                    {/* Mock Dashboard Interface */}
                    <div className="relative w-full max-w-lg">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-white text-lg font-semibold">Attendance Dashboard</h3>
                          <div className="flex gap-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                            <div className="text-2xl font-bold text-white">94.7%</div>
                            <div className="text-xs text-white/70">Overall Attendance</div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                            <div className="text-2xl font-bold text-white">1,247</div>
                            <div className="text-xs text-white/70">Active Students</div>
                          </div>
                        </div>

                        {/* Chart Visualization */}
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-end gap-2 h-16">
                            {[60, 80, 45, 95, 70, 85, 90].map((height, index) => (
                              <div 
                                key={index}
                                className="bg-gradient-to-t from-blue-400 to-cyan-300 rounded-sm flex-1 animate-pulse"
                                style={{ 
                                  height: `${height}%`,
                                  animationDelay: `${index * 0.2}s`
                                }}
                              ></div>
                            ))}
                          </div>
                          <div className="text-xs text-white/60 mt-2">Weekly Attendance Trends</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md rounded-full p-3 animate-float">
                      <Database className="text-white" size={20} />
                    </div>
                    <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md rounded-full p-3 animate-float" style={{ animationDelay: '1s' }}>
                      <Monitor className="text-white" size={20} />
                    </div>
                  </div>

                  {/* Project Details */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <Badge className="mb-3 bg-violet-100 text-violet-700 border-violet-200">Software Development</Badge>
                        <h3 className="text-3xl font-bold text-foreground mb-4">Attendance Monitoring Software</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          A comprehensive Python-based attendance tracking system designed for educational institutions. 
                          Features real-time monitoring, automated report generation, and advanced data analytics to 
                          streamline attendance management processes.
                        </p>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            'Real-time attendance tracking',
                            'Automated report generation', 
                            'Student data management',
                            'Export functionality (PDF/Excel)',
                            'Advanced analytics dashboard',
                            'Multi-class support'
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {['Python', 'SQLite', 'Tkinter', 'Pandas', 'Matplotlib', 'Data Analysis'].map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-muted/50 hover:bg-muted transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                        <h4 className="font-semibold text-foreground mb-3">Project Impact</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-xl font-bold text-primary">95%</div>
                            <div className="text-xs text-muted-foreground">Time Saved</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-primary">1000+</div>
                            <div className="text-xs text-muted-foreground">Students Managed</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-primary">24/7</div>
                            <div className="text-xs text-muted-foreground">System Uptime</div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <Button className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg">
                          <ExternalLink className="group-hover:scale-110 transition-transform" size={16} />
                          View Project
                        </Button>
                        <Button variant="outline" className="group">
                          <Github className="group-hover:scale-110 transition-transform" size={16} />
                          Source Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* Turf Booking System */}
            <div className="group">
              <Card className="bg-gradient-to-bl from-card to-card/50 shadow-elegant hover:shadow-2xl transition-all duration-500 overflow-hidden border-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Details - Left Side for Variety */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                    <div className="space-y-6">
                      <div>
                        <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">Web Development</Badge>
                        <h3 className="text-3xl font-bold text-foreground mb-4">Turf Booking System</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          A modern, responsive web application for sports turf reservations and booking management. 
                          Built with the MERN stack, it provides seamless booking experiences, real-time availability 
                          updates, and comprehensive management tools for facility owners.
                        </p>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            'Real-time booking system',
                            'Payment gateway integration',
                            'User authentication & profiles',
                            'Booking history & receipts',
                            'Admin dashboard',
                            'Mobile-responsive design'
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Stripe API', 'Tailwind CSS'].map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-muted/50 hover:bg-muted transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                        <h4 className="font-semibold text-foreground mb-3">Project Impact</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-xl font-bold text-emerald-600">500+</div>
                            <div className="text-xs text-muted-foreground">Bookings/Month</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-emerald-600">98%</div>
                            <div className="text-xs text-muted-foreground">User Satisfaction</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-emerald-600">24/7</div>
                            <div className="text-xs text-muted-foreground">Online Availability</div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <Button className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg">
                          <ExternalLink className="group-hover:scale-110 transition-transform" size={16} />
                          View Project
                        </Button>
                        <Button variant="outline" className="group">
                          <Github className="group-hover:scale-110 transition-transform" size={16} />
                          Source Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>

                  {/* Project Visualization - Right Side */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 p-8 flex items-center justify-center min-h-[400px] order-1 lg:order-2">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
                    
                    {/* Mock Booking Interface */}
                    <div className="relative w-full max-w-lg">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-white text-lg font-semibold">Turf Booking</h3>
                          <div className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-medium">
                            Available
                          </div>
                        </div>

                        {/* Booking Slots */}
                        <div className="space-y-3 mb-6">
                          {[
                            { time: '06:00 - 07:00', status: 'available', price: '₹500' },
                            { time: '07:00 - 08:00', status: 'booked', price: '₹500' },
                            { time: '08:00 - 09:00', status: 'available', price: '₹600' },
                            { time: '09:00 - 10:00', status: 'available', price: '₹600' }
                          ].map((slot, index) => (
                            <div key={index} className={`flex items-center justify-between p-3 rounded-lg border ${
                              slot.status === 'available' 
                                ? 'bg-white/10 border-white/20 text-white' 
                                : 'bg-red-500/20 border-red-400/30 text-red-200'
                            }`}>
                              <span className="text-sm font-medium">{slot.time}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-sm">{slot.price}</span>
                                <div className={`w-2 h-2 rounded-full ${
                                  slot.status === 'available' ? 'bg-green-400' : 'bg-red-400'
                                }`}></div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/10 rounded-lg p-3 border border-white/20 text-center">
                            <div className="text-lg font-bold text-white">12</div>
                            <div className="text-xs text-white/70">Available Slots</div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3 border border-white/20 text-center">
                            <div className="text-lg font-bold text-white">₹7,200</div>
                            <div className="text-xs text-white/70">Today's Revenue</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md rounded-full p-3 animate-float">
                      <Code className="text-white" size={20} />
                    </div>
                    <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-full p-3 animate-float" style={{ animationDelay: '1s' }}>
                      <Monitor className="text-white" size={20} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">Interested in Similar Solutions?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help you build custom software solutions tailored to your specific needs and requirements.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-primary to-secondary hover:shadow-lg"
              >
                Start Your Project
                <ChevronRight className="group-hover:translate-x-1 transition-smooth" size={18} />
              </Button>
            </div>
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
                    href="https://linkedin.com/in/santhosh-t-6325412a3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-smooth group"
                  >
                    <Linkedin className="group-hover:scale-110 transition-smooth" size={24} />
                  </a>
                  <button 
                    onClick={() => setShowInstagramQR(true)}
                    className="p-3 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-smooth group"
                  >
                    <Instagram className="group-hover:scale-110 transition-smooth" size={24} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message" 
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="glass" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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

      {/* Instagram QR Code Modal */}
      <Dialog open={showInstagramQR} onOpenChange={setShowInstagramQR}>
        <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-md border border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-center text-primary font-bold">
              Follow me on Instagram
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="bg-white p-4 rounded-2xl shadow-elegant">
              <img 
                src="/lovable-uploads/31378304-01a2-4b76-be9c-b5cda758605e.png" 
                alt="Instagram QR Code for @__santhosh.xzx___" 
                className="w-64 h-64 object-contain"
              />
            </div>
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">Scan this QR code to follow me</p>
              <p className="font-semibold text-primary">@__santhosh.xzx___</p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => {
                  window.open('https://www.instagram.com/__santhosh.xzx___?igsh=OHFhYWZwMnR2Z3Zz', '_blank');
                  setShowInstagramQR(false);
                }}
                className="flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Open Instagram
              </Button>
              <Button 
                variant="default"
                onClick={() => setShowInstagramQR(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;