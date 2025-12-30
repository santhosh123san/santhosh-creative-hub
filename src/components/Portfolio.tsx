import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Hero3DBackground from './Hero3DBackground';
import TiltCard from './TiltCard';
import NeonBadge from './NeonBadge';
import GlowButton from './GlowButton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  ChevronRight,
  BarChart3,
  PieChart,
  TrendingUp,
  FileSpreadsheet,
  LineChart,
  Table2,
  BrainCircuit,
  Binary,
  Sparkles,
  Zap,
  Target,
  Rocket,
  GraduationCap,
  Calendar,
  Award,
  BookOpen
} from 'lucide-react';
import santhoshProfile from '@/assets/santhosh-profile.jpg';
import santhoshHeroNew from '@/assets/santhosh-hero-new.jpg';
import attendanceSoftware from '@/assets/attendance-monitoring-new.jpg';
import posterDesigns from '@/assets/poster-designs-new.jpg';

const Portfolio = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const skills = [
    { 
      category: 'Web Development', 
      percentage: 70, 
      icon: Code,
      color: 'cyan' as const,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Responsive Design']
    },
    { 
      category: 'Python', 
      percentage: 75, 
      icon: Code,
      color: 'purple' as const,
      skills: ['Pandas', 'NumPy', 'Tkinter', 'Matplotlib', 'Jupyter Notebooks', 'Automation']
    },
    { 
      category: 'Excel & Power BI', 
      percentage: 85, 
      icon: Monitor,
      color: 'pink' as const,
      skills: ['Data Cleaning', 'Pivot Tables', 'VLOOKUP', 'Dashboards', 'DAX', 'Visualizations']
    },
    { 
      category: 'SQL & Database', 
      percentage: 60, 
      icon: Database,
      color: 'green' as const,
      skills: ['Queries', 'Joins', 'Database Design', 'MySQL', 'SQLite', 'Data Extraction']
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications',
      icon: Code,
      color: 'cyan' as const,
      features: ['Frontend Development', 'Backend Integration', 'Responsive Design', 'API Development']
    },
    {
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights',
      icon: Monitor,
      color: 'purple' as const,
      features: ['Data Cleaning', 'Statistical Analysis', 'Trend Identification', 'Report Generation']
    },
    {
      title: 'Python Development',
      description: 'Desktop apps and automation scripts',
      icon: Binary,
      color: 'pink' as const,
      features: ['GUI Applications', 'Data Processing', 'Automation Scripts', 'Analytics Tools']
    },
    {
      title: 'Database Management',
      description: 'SQL queries and data architecture',
      icon: Database,
      color: 'green' as const,
      features: ['SQL Queries', 'Data Extraction', 'Database Design', 'Data Integration']
    }
  ];

  const projects = [
    {
      title: 'Turf Booking System',
      description: 'A full-stack web application for booking sports turfs with user authentication and payment integration.',
      image: posterDesigns,
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL'],
      category: 'Web Development',
      color: 'cyan' as const
    },
    {
      title: 'Attendance Monitoring System',
      description: 'A desktop application for tracking and managing attendance records with an intuitive GUI interface.',
      image: attendanceSoftware,
      tech: ['Python', 'Tkinter', 'SQLite', 'GUI Development'],
      category: 'Desktop Application',
      color: 'purple' as const
    },
    {
      title: 'Voice-Recognition Data Update System',
      description: 'Innovative system that captures voice input data, cleans and processes it, and visualizes results with interactive charts.',
      image: attendanceSoftware,
      tech: ['Python', 'Speech Recognition', 'Data Visualization', 'Excel'],
      category: 'Data Analytics',
      color: 'pink' as const
    },
    {
      title: 'Sales Data Analysis Dashboard',
      description: 'Comprehensive sales analysis with trend identification, KPI tracking, and actionable business insights.',
      image: santhoshProfile,
      tech: ['Excel', 'Power BI', 'Pivot Tables', 'Charts'],
      category: 'Data Analytics',
      color: 'green' as const
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background noise-overlay">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-primary text-neon-glow">
              Santhosh T
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="text-foreground/80 hover:text-primary transition-smooth relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            <button 
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 glass-dark border-b border-border animate-fade-up">
              <div className="px-4 py-4 space-y-4">
                {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())} 
                    className="block w-full text-left text-foreground/80 hover:text-primary transition-smooth"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden bg-hero-gradient">
        {/* 3D Interactive Background */}
        <Hero3DBackground />
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern" />
        
        {/* Floating Neon Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-neon-pink/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 right-10 w-28 h-28 bg-neon-green/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          {/* Floating Icons */}
          <div className="absolute top-32 left-[15%] text-neon-cyan/30 animate-float" style={{ animationDelay: '0.5s' }}>
            <BarChart3 size={40} />
          </div>
          <div className="absolute top-[60%] left-[8%] text-neon-purple/30 animate-float" style={{ animationDelay: '1.5s' }}>
            <PieChart size={32} />
          </div>
          <div className="absolute top-[25%] right-[15%] text-neon-pink/30 animate-float" style={{ animationDelay: '2.5s' }}>
            <Database size={36} />
          </div>
          <div className="absolute bottom-[30%] right-[10%] text-neon-green/30 animate-float" style={{ animationDelay: '3s' }}>
            <TrendingUp size={34} />
          </div>
        </div>

        {/* Scan Line Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent animate-scan-line" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
            <div className="text-foreground space-y-8 animate-fade-up lg:text-center lg:flex lg:flex-col lg:justify-center">
              {/* Status Badge */}
              <div className="flex justify-center lg:justify-center">
                <NeonBadge color="cyan" animated>
                  <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse" />
                  Full Stack Developer & Data Analyst
                </NeonBadge>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                    Santhosh
                  </span>
                </h1>
                <div className="relative">
                  <h2 className="text-2xl lg:text-4xl font-medium text-foreground/80 leading-relaxed">
                    <span className="text-neon-cyan text-neon-glow font-semibold">
                      Full Stack Developer
                    </span>{' '}
                    &{' '}
                    <span className="text-neon-purple text-neon-purple-glow font-semibold">
                      Data Analyst
                    </span>
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-xl mx-auto lg:mx-auto">
                I am an IT student passionate about{' '}
                <span className="text-neon-cyan">Web Development</span> and{' '}
                <span className="text-neon-purple">Data Analytics</span>, building solutions that combine both worlds.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { name: 'HTML/CSS/JS', color: 'cyan' as const },
                  { name: 'Python', color: 'purple' as const },
                  { name: 'Excel', color: 'pink' as const },
                  { name: 'SQL', color: 'green' as const },
                  { name: 'Power BI', color: 'cyan' as const }
                ].map((tech) => (
                  <NeonBadge key={tech.name} color={tech.color}>
                    {tech.name}
                  </NeonBadge>
                ))}
              </div>

              {/* Tagline */}
              <p className="text-lg text-muted-foreground italic">
                "Building web solutions & turning data into insights."
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <GlowButton 
                  variant="primary" 
                  size="lg" 
                  glowColor="cyan"
                  onClick={() => scrollToSection('projects')}
                >
                  <Sparkles size={20} />
                  Explore My Work
                  <ChevronRight size={20} />
                </GlowButton>
                <GlowButton 
                  variant="outline" 
                  size="lg" 
                  glowColor="purple"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail size={18} />
                  Get In Touch
                </GlowButton>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-8 justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-cyan text-neon-glow">8.54</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-purple text-neon-purple-glow">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scale-in lg:justify-self-end flex justify-center">
              <TiltCard className="w-80 h-80 lg:w-96 lg:h-96" glowColor="cyan" intensity={10}>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sky-400/60 shadow-[0_0_40px_rgba(56,189,248,0.4)]">
                  {/* Glowing border animation */}
                  <div className="absolute inset-0 rounded-full border-4 border-sky-400 animate-neon-pulse" />
                  
                  <img 
                    src={santhoshHeroNew} 
                    alt="Santhosh T - Full Stack Developer & Data Analyst" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent rounded-full" />
                </div>
              </TiltCard>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 glass rounded-xl p-3 border border-neon-green/30 animate-float shadow-neon-cyan" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-sm text-foreground">Available</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-3 border border-neon-purple/30 animate-float shadow-neon-purple" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2 text-neon-purple">
                  <Code size={16} />
                  <span className="text-sm">Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-wider">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-neon-cyan/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-section-gradient relative">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 animate-fade-up text-center">
              <NeonBadge color="purple">About Me</NeonBadge>
              <h2 className="text-4xl font-bold text-foreground">
                Who is <span className="text-neon-cyan text-neon-glow">Santhosh</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-neon-purple">Santhosh T</span>, an IT student passionate about both <span className="text-neon-cyan">Web Development</span> and <span className="text-neon-pink">Data Analytics</span>. I build full-stack applications and transform data into meaningful insights.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Education', content: '3rd year B.Tech IT student at Mahendra Institute of Technology, graduating in 2027.', icon: Target, color: 'cyan' as const },
                  { title: 'Experience', content: 'Internship experience with focus on Excel, Python, and web development fundamentals.', icon: Zap, color: 'purple' as const },
                  { title: 'Career Goal', content: 'Becoming a versatile Full Stack Developer with strong Data Analytics capabilities.', icon: Rocket, color: 'pink' as const },
                ].map((item, index) => (
                  <TiltCard key={index} glowColor={item.color}>
                    <Card className="bg-card-gradient border-border/50 h-full">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-lg bg-neon-${item.color}/10 flex items-center justify-center mb-4 mx-auto`}>
                          <item.icon className={`text-neon-${item.color}`} size={24} />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.content}</p>
                      </CardContent>
                    </Card>
                  </TiltCard>
                ))}
              </div>

              <GlowButton 
                variant="primary" 
                size="lg" 
                glowColor="cyan"
                onClick={() => window.open('/santhosh-resume.pdf', '_blank')}
              >
                <Download size={18} />
                Download Resume
                <ChevronRight size={18} />
              </GlowButton>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        
        {/* Floating Icons */}
        <div className="absolute top-10 left-10 text-neon-purple/10">
          <GraduationCap size={120} />
        </div>
        <div className="absolute bottom-10 right-10 text-neon-cyan/10">
          <BookOpen size={100} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <NeonBadge color="purple">Education</NeonBadge>
            <h2 className="text-4xl font-bold text-foreground mt-4 mb-4">
              Academic <span className="text-neon-purple text-neon-purple-glow">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My educational background and academic achievements
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink rounded-full hidden md:block" />
            
            {[
              {
                degree: 'B.Tech - Information Technology',
                institution: 'Mahendra Institute of Technology',
                duration: '2023 – 2027',
                score: 'CGPA: 8.53',
                status: 'Current',
                description: 'Focus on data analytics and aim to become a data scientist',
                color: 'cyan' as const,
                icon: GraduationCap
              },
              {
                degree: 'HSC (Higher Secondary Certificate)',
                institution: 'Government Higher Secondary School, Periyakulathupalayam, Karur',
                duration: '2022 – 2023',
                score: '89%',
                status: null,
                description: 'Strong foundation in mathematics and computer science',
                color: 'purple' as const,
                icon: BookOpen
              },
              {
                degree: 'SSLC (Secondary School Leaving Certificate)',
                institution: 'Government Higher Secondary School, Vangappalyam',
                duration: '2020 – 2021',
                score: '90%',
                status: null,
                description: 'Top performer',
                color: 'pink' as const,
                icon: Award
              }
            ].map((edu, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                  <div className={`w-5 h-5 rounded-full bg-neon-${edu.color} shadow-neon-${edu.color} z-10 animate-pulse`} />
                </div>
                
                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <TiltCard glowColor={edu.color} className="animate-fade-up">
                    <Card className={`bg-card-gradient border-border/50 overflow-hidden hover:border-neon-${edu.color}/30 transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} flex-col sm:flex-row`}>
                          {/* Icon */}
                          <div className={`p-4 rounded-xl bg-neon-${edu.color}/10 shadow-neon-${edu.color} shrink-0`}>
                            <edu.icon className={`text-neon-${edu.color}`} size={28} />
                          </div>
                          
                          <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                            {/* Status Badge */}
                            {edu.status && (
                              <div className={`mb-2 ${index % 2 === 0 ? 'md:flex md:justify-end' : ''}`}>
                                <NeonBadge color="green" animated>
                                  <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse" />
                                  {edu.status}
                                </NeonBadge>
                              </div>
                            )}
                            
                            {/* Degree */}
                            <h3 className={`text-xl font-bold text-foreground mb-2`}>
                              {edu.degree}
                            </h3>
                            
                            {/* Institution */}
                            <div className={`flex items-center gap-2 text-muted-foreground mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                              <MapPin size={14} className={`text-neon-${edu.color}`} />
                              <span className="text-sm">{edu.institution}</span>
                            </div>
                            
                            {/* Duration & Score */}
                            <div className={`flex items-center gap-4 mb-3 flex-wrap ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar size={14} className={`text-neon-${edu.color}`} />
                                <span className="text-sm">{edu.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Award size={14} className={`text-neon-${edu.color}`} />
                                <span className={`text-sm font-semibold text-neon-${edu.color}`}>{edu.score}</span>
                              </div>
                            </div>
                            
                            {/* Description */}
                            <p className="text-muted-foreground text-sm">
                              {edu.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-section-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        
        {/* Floating Icons */}
        <div className="absolute top-10 right-10 text-neon-cyan/10">
          <BarChart3 size={120} />
        </div>
        <div className="absolute bottom-10 left-10 text-neon-purple/10">
          <PieChart size={100} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <NeonBadge color="cyan">Skills</NeonBadge>
            <h2 className="text-4xl font-bold text-foreground mt-4 mb-4">
              Technical <span className="text-neon-cyan text-neon-glow">Proficiency</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my web development and data analytics capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <TiltCard key={index} glowColor={skill.color}>
                  <Card className="bg-card-gradient border-border/50 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-xl bg-neon-${skill.color}/10 shadow-neon-${skill.color}`}>
                          <IconComponent className={`text-neon-${skill.color}`} size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{skill.category}</h3>
                          <p className="text-muted-foreground">{skill.percentage}% Proficiency</p>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="bg-muted rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r from-neon-${skill.color} to-neon-${skill.color}/50 transition-all duration-1000 shadow-neon-${skill.color}`}
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {skill.skills.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className={`bg-neon-${skill.color}/10 text-neon-${skill.color} border border-neon-${skill.color}/20`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-section-gradient relative">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <NeonBadge color="purple">Services</NeonBadge>
            <h2 className="text-4xl font-bold text-foreground mt-4 mb-4">
              Areas of <span className="text-neon-purple text-neon-purple-glow">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Web development and data analysis skills I bring to the table
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <TiltCard key={index} glowColor={service.color}>
                  <Card className="bg-card-gradient border-border/50 h-full group hover:border-neon-cyan/30 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-neon-${service.color}/10 flex items-center justify-center mx-auto mb-4 group-hover:shadow-neon-${service.color} transition-all duration-300`}>
                        <IconComponent className={`text-neon-${service.color}`} size={28} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.slice(0, 2).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                            <div className={`w-1.5 h-1.5 bg-neon-${service.color} rounded-full`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <NeonBadge color="pink">Process</NeonBadge>
            <h2 className="text-4xl font-bold text-foreground mt-4 mb-4">
              My <span className="text-neon-pink text-neon-pink-glow">Workflow</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How I bring your ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals", color: 'cyan' as const },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline", color: 'purple' as const },
              { step: "03", title: "Development", description: "Building your solution with best practices", color: 'pink' as const },
              { step: "04", title: "Delivery", description: "Testing, optimization, and final delivery", color: 'green' as const }
            ].map((process, index) => (
              <div key={index} className="text-center group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-neon-${process.color}/10 border-2 border-neon-${process.color}/30 flex items-center justify-center mx-auto group-hover:shadow-neon-${process.color} transition-all duration-300`}>
                    <span className={`text-neon-${process.color} font-bold text-2xl`}>{process.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-section-gradient relative">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <NeonBadge color="cyan">Portfolio</NeonBadge>
            <h2 className="text-4xl font-bold text-foreground mt-4 mb-4">
              Featured <span className="text-neon-cyan text-neon-glow">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Showcasing my completed projects and professional work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllProjects ? projects : projects.slice(0, 3)).map((project, index) => (
              <TiltCard key={index} glowColor={project.color}>
                <Card className="bg-card-gradient border-border/50 overflow-hidden group h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <NeonBadge color={project.color}>{project.category}</NeonBadge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className={`bg-neon-${project.color}/10 text-neon-${project.color} border border-neon-${project.color}/20 text-xs`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <GlowButton variant="outline" size="sm" glowColor={project.color} className="w-full">
                      View Details
                      <ExternalLink size={14} />
                    </GlowButton>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
          
          {projects.length > 3 && (
            <div className="text-center mt-12">
              <GlowButton 
                variant="outline" 
                glowColor="purple"
                onClick={() => setShowAllProjects(!showAllProjects)}
              >
                {showAllProjects ? 'Show Less' : `View All Projects (${projects.length})`}
                <ChevronRight className={`transition-transform ${showAllProjects ? 'rotate-90' : ''}`} size={16} />
              </GlowButton>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        
        {/* Neon Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <NeonBadge color="cyan">Contact</NeonBadge>
            <h2 className="text-4xl font-bold text-foreground mt-4 mb-4">
              Let's <span className="text-neon-cyan text-neon-glow">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'santhosh25995@gmail.com', href: 'mailto:santhosh25995@gmail.com', color: 'cyan' as const },
                { icon: Phone, label: 'Phone', value: '+91 88259 40502', href: 'tel:+918825940502', color: 'purple' as const },
                { icon: MapPin, label: 'Location', value: 'Karur, Tamil Nadu', href: '#', color: 'pink' as const },
              ].map((item, index) => (
                <TiltCard key={index} glowColor={item.color} intensity={8}>
                  <a href={item.href} className="flex items-center gap-4 p-4 glass rounded-xl border border-border/50 hover:border-neon-cyan/30 transition-all duration-300">
                    <div className={`p-3 rounded-lg bg-neon-${item.color}/10`}>
                      <item.icon className={`text-neon-${item.color}`} size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </a>
                </TiltCard>
              ))}
              
              {/* Social Links */}
              <div className="pt-4">
                <h3 className="text-foreground font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/santhosh123san', color: 'cyan' as const, external: true },
                    { icon: Linkedin, href: 'https://linkedin.com/in/santhosh-t-6325412a3', color: 'purple' as const, external: true },
                    { icon: Instagram, href: '/instagram', color: 'pink' as const, external: false },
                  ].map((social, index) => (
                    social.external ? (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 glass rounded-lg border border-border/50 hover:border-neon-${social.color}/30 hover:shadow-neon-${social.color} transition-all duration-300 group`}
                      >
                        <social.icon className={`text-foreground group-hover:text-neon-${social.color} transition-colors`} size={24} />
                      </a>
                    ) : (
                      <button
                        key={index}
                        onClick={() => navigate(social.href)}
                        className={`p-3 glass rounded-lg border border-border/50 hover:border-neon-${social.color}/30 hover:shadow-neon-${social.color} transition-all duration-300 group`}
                      >
                        <social.icon className={`text-foreground group-hover:text-neon-${social.color} transition-colors`} size={24} />
                      </button>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <TiltCard glowColor="cyan" intensity={5}>
              <Card className="bg-card-gradient border-border/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="bg-muted/50 border-border focus:border-neon-cyan focus:ring-neon-cyan/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="bg-muted/50 border-border focus:border-neon-cyan focus:ring-neon-cyan/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message..."
                        rows={4}
                        className="bg-muted/50 border-border focus:border-neon-cyan focus:ring-neon-cyan/20"
                      />
                    </div>
                    <GlowButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      glowColor="cyan"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <ChevronRight size={18} />
                    </GlowButton>
                  </form>
                </CardContent>
              </Card>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 <span className="text-neon-cyan">Santhosh T</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;