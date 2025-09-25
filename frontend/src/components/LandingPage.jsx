import React, { useState, useEffect } from 'react';
import { companyData } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import CustomLogo from './ui/CustomLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Users, 
  Building, 
  Target, 
  Heart,
  Linkedin,
  Instagram,
  Facebook,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Globe,
  Award,
  TrendingUp,
  Wine,
  UtensilsCrossed,
  Calendar,
  ChefHat,
  Ship,
  Cpu,
  Scale,
  PiggyBank,
  Crown,
  Settings,
  Shield,
  Clock,
  Zap,
  Star,
  Rocket,
  Newspaper,
  Sparkles,
  Timer
} from 'lucide-react';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState({});

  // Icon mapping for companies and team
  const iconMap = {
    Wine, UtensilsCrossed, Calendar, ChefHat, Ship, Heart, Cpu,
    Scale, PiggyBank, Crown, Settings, Shield
  };

  // Handle scroll effects and animations
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'companies', 'team', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }

      // Trigger animations for sections coming into view
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            setAnimationTrigger(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  // SEO and accessibility improvements
  useEffect(() => {
    document.title = 'Anantya Group - Leading Excellence Across Industries';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Anantya Group is a diversified business conglomerate with 6 companies spanning hospitality, events, catering, trading, and charity sectors.';
      document.head.appendChild(meta);
    }
  }, []);

  // Header Component with Enhanced Animation
  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-orange-500/20' : 'bg-black/80'
    }`} role="banner">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4" role="navigation" aria-label="Main navigation">
          <div className="brand-logo">
            <CustomLogo className="h-14 w-auto" animated={true} />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'companies', label: 'Companies' },
              { id: 'team', label: 'Team' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden p-3 rounded-xl text-white hover:bg-orange-500/20 transition-all duration-300 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <div className={`transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </button>

          {/* Desktop CTA Button */}
          <Button 
            className="btn-primary hidden md:flex group"
            onClick={() => scrollToSection('contact')}
            aria-label="Navigate to contact section"
          >
            <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            Get In Touch
          </Button>
        </nav>

        {/* Enhanced Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-md border-t border-orange-500/20 slide-in-left">
            <div className="px-6 py-8 space-y-6">
              {[
                { id: 'home', label: 'Home', icon: Star },
                { id: 'about', label: 'About', icon: Target },
                { id: 'companies', label: 'Companies', icon: Building },
                { id: 'team', label: 'Team', icon: Users },
                { id: 'contact', label: 'Contact', icon: Phone }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link w-full text-left flex items-center stagger-${index + 1} fade-in-up ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </button>
                );
              })}
              <Button 
                className="btn-primary w-full mt-6 stagger-6 fade-in-up"
                onClick={() => scrollToSection('contact')}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Enhanced Hero Section
  const HeroSection = () => (
    <section id="home" className="hero-section" role="banner">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzc3xlbnwwfHx8fDE3NTg4MDczODh8MA&ixlib=rb-4.1.0&q=85" 
          alt="Modern corporate skyscrapers representing business excellence"
          className="hero-image"
          loading="eager"
        />
        <div className="hero-overlay" aria-hidden="true"></div>
      </div>
      
      {/* Floating Elements Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="hero-content">
          <div className="fade-in-up">
            <h1 className="brand-display mb-8">
              {companyData.hero.title}
            </h1>
          </div>
          <div className="slide-in-left stagger-2">
            <h2 className="heading-2 mb-6 text-white font-normal">
              {companyData.hero.subtitle}
            </h2>
          </div>
          <div className="slide-in-right stagger-3">
            <p className="body-large mb-10 max-w-3xl text-gray-300">
              {companyData.hero.tagline}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start zoom-in stagger-4">
            <Button 
              className="btn-primary group"
              onClick={() => scrollToSection('companies')}
              aria-label="Explore our companies section"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Explore Our Companies 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              className="btn-secondary group"
              onClick={() => scrollToSection('about')}
              aria-label="Learn more about Anantya Group"
            >
              <Zap className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

  // Enhanced About Section
  const AboutSection = () => (
    <section id="about" className="section section-alt" role="main">
      <div className="container">
        <header className={`text-center mb-16 ${animationTrigger.about ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="heading-1 mb-6">About Anantya Group</h2>
          <p className="body-large max-w-4xl mx-auto">
            A diversified business conglomerate with a proven track record of excellence across multiple industries.
          </p>
        </header>

        {/* Enhanced Stats Grid */}
        <div className="stats-grid mb-16">
          {[
            { icon: Building, value: companyData.about.stats.companies, label: 'Companies', color: 'text-orange-500' },
            { icon: Users, value: companyData.about.stats.staff, label: 'Staff Members', color: 'text-teal-500' },
            { icon: Award, value: companyData.about.stats.teamMembers, label: 'Leadership Team', color: 'text-orange-500' },
            { icon: TrendingUp, value: companyData.about.stats.yearsExperience, label: 'Years Experience', color: 'text-teal-500' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`stat-item group ${animationTrigger.about ? `zoom-in stagger-${index + 1}` : 'opacity-0'}`}>
                <Icon className={`h-14 w-14 ${stat.color} mx-auto mb-4 group-hover:scale-125 transition-transform duration-300`} />
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className={`company-card p-8 group ${animationTrigger.about ? 'slide-in-left stagger-5' : 'opacity-0'}`}>
            <div className="flex items-center mb-6">
              <div className="w-18 h-18 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="heading-3 text-orange-500">Our Vision</h3>
            </div>
            <p className="body-medium text-gray-300 leading-relaxed">
              {companyData.about.vision}
            </p>
          </Card>
          
          <Card className={`company-card p-8 group ${animationTrigger.about ? 'slide-in-right stagger-6' : 'opacity-0'}`}>
            <div className="flex items-center mb-6">
              <div className="w-18 h-18 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="heading-3 text-teal-500">Our Mission</h3>
            </div>
            <p className="body-medium text-gray-300 leading-relaxed">
              {companyData.about.mission}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );

  // Enhanced Companies Section
  const CompaniesSection = () => (
    <section id="companies" className="section" role="main">
      <div className="container">
        <header className={`text-center mb-16 ${animationTrigger.companies ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="heading-1 mb-6">Our Companies</h2>
          <p className="body-large max-w-3xl mx-auto">
            Six distinct businesses, one unified commitment to excellence and innovation across industries.
          </p>
        </header>

        <div className="companies-grid">
          {companyData.companies.map((company, index) => {
            const Icon = iconMap[company.icon];
            const isComingSoon = company.status === 'coming_soon';
            
            return (
              <Card 
                key={company.id} 
                className={`company-card group overflow-hidden ${isComingSoon ? 'coming-soon-card' : ''} ${
                  animationTrigger.companies ? `zoom-in stagger-${index + 1}` : 'opacity-0'
                }`} 
                role="article"
              >
                {isComingSoon && (
                  <div className="coming-soon-badge">
                    <Timer className="inline w-3 h-3 mr-1" />
                    Coming Soon - {company.launchDate}
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={company.image} 
                    alt={`${company.name} - ${company.category}`}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      isComingSoon ? 'filter grayscale hover:grayscale-0' : ''
                    }`}
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300 ${
                    isComingSoon ? 'bg-black/40' : ''
                  }`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`font-semibold px-3 py-1 text-sm ${
                      isComingSoon 
                        ? 'bg-gradient-to-r from-orange-500 to-teal-500 text-white animate-pulse' 
                        : 'bg-orange-500 text-white'
                    }`}>
                      {company.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                      {isComingSoon ? (
                        <Clock className="h-5 w-5 text-white" />
                      ) : (
                        <ExternalLink className="h-5 w-5 text-white" />
                      )}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="heading-3 flex items-center justify-between text-white">
                    {company.name}
                    {isComingSoon && (
                      <Sparkles className="h-5 w-5 text-orange-500 animate-pulse" />
                    )}
                  </CardTitle>
                  <CardDescription className="body-medium text-gray-300 mt-2">
                    {company.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    <h4 className="caption text-orange-500 mb-2">KEY SERVICES:</h4>
                    {company.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-3 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full group/btn ${isComingSoon ? 'btn-secondary opacity-50 cursor-not-allowed' : 'btn-secondary'}`}
                    onClick={() => !isComingSoon && window.open(company.website, '_blank')}
                    disabled={isComingSoon}
                    aria-label={`${isComingSoon ? 'Coming soon' : `Visit ${company.name} website`}`}
                  >
                    {isComingSoon ? (
                      <>
                        <Clock className="mr-2 h-4 w-4" />
                        Coming Soon
                      </>
                    ) : (
                      <>
                        <Globe className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        Visit Website
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State for Future Expansion */}
        <div className={`mt-12 ${animationTrigger.companies ? 'fade-in-up stagger-6' : 'opacity-0'}`}>
          <div className="empty-state">
            <div className="empty-state-icon">
              <Rocket className="h-10 w-10 text-white" />
            </div>
            <h3 className="heading-3 text-orange-500 mb-3">{companyData.emptyStates.noProjects.title}</h3>
            <p className="body-medium text-gray-400">{companyData.emptyStates.noProjects.description}</p>
          </div>
        </div>
      </div>
    </section>
  );

  // Enhanced Team Section
  const TeamSection = () => (
    <section id="team" className="section section-alt" role="main">
      <div className="container">
        <header className={`text-center mb-16 ${animationTrigger.team ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="heading-1 mb-6">Leadership Team</h2>
          <p className="body-large max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation and excellence across Anantya Group.
          </p>
        </header>

        <div className="team-grid">
          {companyData.team.map((member, index) => {
            const Icon = iconMap[member.icon];
            return (
              <Card 
                key={member.id} 
                className={`team-card group overflow-hidden ${animationTrigger.team ? `zoom-in stagger-${index + 1}` : 'opacity-0'}`} 
                role="article"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="heading-3 text-white flex items-center justify-between">
                    {member.name}
                    <Star className="h-5 w-5 text-orange-500 group-hover:rotate-12 transition-transform" />
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className="w-fit border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 mt-2"
                  >
                    {member.position}
                  </Badge>
                  <CardDescription className="body-medium mt-3 text-gray-300 leading-relaxed">
                    {member.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <h4 className="caption text-orange-500 mb-3 flex items-center">
                      <Zap className="mr-2 h-4 w-4" />
                      EXPERTISE:
                    </h4>
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0 animate-pulse"></div>
                        <span>{skill}</span>
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
  );

  // Enhanced Contact Section
  const ContactSection = () => (
    <section id="contact" className="section" role="main">
      <div className="container">
        <header className={`text-center mb-16 ${animationTrigger.contact ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="heading-1 mb-6">Get In Touch</h2>
          <p className="body-large max-w-3xl mx-auto">
            Ready to explore opportunities with Anantya Group? We'd love to hear from you.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`space-y-8 ${animationTrigger.contact ? 'slide-in-left' : 'opacity-0'}`}>
            {[
              { icon: Phone, label: 'PHONE', value: companyData.contact.phone, href: `tel:${companyData.contact.phone}`, color: 'from-orange-500 to-orange-600' },
              { icon: Mail, label: 'EMAIL', value: companyData.contact.email, href: `mailto:${companyData.contact.email}`, color: 'from-teal-500 to-teal-600' },
              { icon: MapPin, label: 'ADDRESS', value: companyData.contact.address, href: '#', color: 'from-orange-500 to-teal-500' }
            ].map((contact, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className={`caption mb-2 ${index % 2 === 0 ? 'text-orange-500' : 'text-teal-500'}`}>{contact.label}</h4>
                  {contact.href !== '#' ? (
                    <a 
                      href={contact.href}
                      className="body-medium text-white hover:text-orange-500 transition-colors"
                      aria-label={`${contact.label}: ${contact.value}`}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="body-medium text-gray-300 leading-relaxed max-w-sm">
                      {contact.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Enhanced Social Links */}
            <div className="pt-8">
              <h4 className="caption text-teal-500 mb-4 flex items-center">
                <Sparkles className="mr-2 h-4 w-4" />
                FOLLOW US
              </h4>
              <div className="flex space-x-4">
                {[
                  { href: companyData.contact.socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600' },
                  { href: companyData.contact.socialLinks.instagram, icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
                  { href: companyData.contact.socialLinks.facebook, icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-700' }
                ].map((social, index) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className={`w-14 h-14 bg-gray-800 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 stagger-${index + 1} zoom-in`}
                    aria-label={`Follow us on ${social.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-6 w-6 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CTA Card */}
          <Card className={`company-card p-10 ${animationTrigger.contact ? 'slide-in-right' : 'opacity-0'}`}>
            <CardHeader className="text-center pb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 via-teal-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Mail className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="heading-3 text-orange-500 mb-3">Start a Conversation</CardTitle>
              <CardDescription className="body-medium text-gray-300">
                Whether you're interested in our services, partnerships, or career opportunities, we're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                className="btn-primary w-full group"
                onClick={() => window.open(`mailto:${companyData.contact.email}`, '_blank')}
                aria-label="Send us an email"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Send Email
                <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button 
                className="btn-secondary w-full group"
                onClick={() => window.open(`tel:${companyData.contact.phone}`, '_blank')}
                aria-label="Call us now"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Call Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Empty State for News */}
        <div className={`mt-16 ${animationTrigger.contact ? 'fade-in-up stagger-6' : 'opacity-0'}`}>
          <div className="empty-state">
            <div className="empty-state-icon">
              <Newspaper className="h-10 w-10 text-white" />
            </div>
            <h3 className="heading-3 text-teal-500 mb-3">{companyData.emptyStates.noNews.title}</h3>
            <p className="body-medium text-gray-400">{companyData.emptyStates.noNews.description}</p>
          </div>
        </div>
      </div>
    </section>
  );

  // Enhanced Footer
  const Footer = () => (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="brand-logo mb-6">
              <CustomLogo className="h-16 w-auto" animated={false} />
            </div>
            <p className="body-medium text-gray-400 mb-6 max-w-md leading-relaxed">
              Leading excellence across industries with integrity, innovation, and commitment to community growth.
            </p>
            <div className="flex space-x-4">
              {[
                { href: companyData.contact.socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: companyData.contact.socialLinks.instagram, icon: Instagram, label: 'Instagram' },
                { href: companyData.contact.socialLinks.facebook, icon: Facebook, label: 'Facebook' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-12 h-12 bg-gray-800 hover:bg-teal-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={`Follow us on ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6 text-white" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="caption text-orange-500 mb-4 flex items-center">
              <Star className="mr-2 h-4 w-4" />
              QUICK LINKS
            </h4>
            <div className="space-y-3">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'companies', label: 'Our Companies' },
                { id: 'team', label: 'Leadership' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-teal-500 transition-colors text-left group"
                >
                  <ArrowRight className="inline mr-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="caption text-teal-500 mb-4 flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              CONTACT INFO
            </h4>
            <div className="space-y-3 text-gray-400">
              <a 
                href={`tel:${companyData.contact.phone}`}
                className="block hover:text-white transition-colors flex items-center group"
              >
                <Phone className="mr-2 h-3 w-3 group-hover:rotate-12 transition-transform" />
                {companyData.contact.phone}
              </a>
              <a 
                href={`mailto:${companyData.contact.email}`}
                className="block hover:text-white transition-colors flex items-center group"
              >
                <Mail className="mr-2 h-3 w-3 group-hover:scale-110 transition-transform" />
                {companyData.contact.email}
              </a>
              <p className="text-sm leading-relaxed flex items-start">
                <MapPin className="mr-2 h-3 w-3 mt-1 flex-shrink-0" />
                {companyData.contact.address}
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 mb-4 md:mb-0 flex items-center">
            © 2024 Anantya Group. All rights reserved.
            <Sparkles className="ml-2 h-4 w-4 text-orange-500" />
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            <Rocket className="mr-2 h-4 w-4" />
            Built with excellence and innovation.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-950" itemScope itemType="https://schema.org/Corporation">
      <Header />
      <main role="main">
        <HeroSection />
        <AboutSection />
        <CompaniesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;