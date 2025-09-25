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
  Star,
  Sparkles
} from 'lucide-react';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Icon mapping for companies and team
  const iconMap = {
    Wine, UtensilsCrossed, Calendar, ChefHat, Ship, Heart, Cpu,
    Scale, PiggyBank, Crown, Settings, Shield
  };

  // Handle scroll effects
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
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

  // Header Component - Optimized
  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black/80'
    }`} role="banner">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4" role="navigation">
          <div className="brand-logo">
            <CustomLogo className="h-12 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden p-2 rounded-lg text-white hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop CTA Button */}
          <Button 
            className="btn-primary hidden md:flex"
            onClick={() => scrollToSection('contact')}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
        </nav>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
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
                  className={`nav-link w-full text-left ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="btn-primary w-full mt-4"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Hero Section - Fast Loading
  const HeroSection = () => (
    <section id="home" className="hero-section" role="banner">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80" 
          alt="Modern corporate skyscrapers"
          className="hero-image"
          loading="eager"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="hero-content">
          <h1 className="brand-display mb-6">
            {companyData.hero.title}
          </h1>
          <h2 className="heading-2 mb-4 text-white font-normal">
            {companyData.hero.subtitle}
          </h2>
          <p className="body-large mb-8 max-w-2xl text-gray-300">
            {companyData.hero.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button 
              className="btn-primary"
              onClick={() => scrollToSection('companies')}
            >
              Explore Our Companies 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              className="btn-secondary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

  // About Section - Optimized
  const AboutSection = () => (
    <section id="about" className="section section-alt" role="main">
      <div className="container">
        <header className="text-center mb-12">
          <h2 className="heading-1 mb-6">About Anantya Group</h2>
          <p className="body-large max-w-4xl mx-auto">
            A diversified business conglomerate with a proven track record of excellence across multiple industries.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="stats-grid mb-12">
          {[
            { icon: Building, value: companyData.about.stats.companies, label: 'Companies' },
            { icon: Users, value: companyData.about.stats.staff, label: 'Staff Members' },
            { icon: Award, value: companyData.about.stats.teamMembers, label: 'Leadership Team' },
            { icon: TrendingUp, value: companyData.about.stats.yearsExperience, label: 'Years Experience' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-item">
                <Icon className="h-12 w-12 text-orange-500 mx-auto mb-3" />
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="company-card p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-3 text-orange-500">Our Vision</h3>
            </div>
            <p className="body-medium text-gray-300">
              {companyData.about.vision}
            </p>
          </Card>
          
          <Card className="company-card p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-3">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-3 text-teal-500">Our Mission</h3>
            </div>
            <p className="body-medium text-gray-300">
              {companyData.about.mission}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );

  // Companies Section - With Company Logos
  const CompaniesSection = () => (
    <section id="companies" className="section" role="main">
      <div className="container">
        <header className="text-center mb-12">
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
                className="company-card overflow-hidden" 
              >
                {isComingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="coming-soon-badge">
                      <Clock className="inline w-3 h-3 mr-1" />
                      Coming {company.launchDate}
                    </div>
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={company.image} 
                    alt={`${company.name} business overview`}
                    className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
                      isComingSoon ? 'filter grayscale' : ''
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Company Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white font-semibold px-3 py-1">
                      {company.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="heading-3 flex items-center text-white">
                    {/* Small Company Logo */}
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="company-logo mr-3"
                      loading="lazy"
                    />
                    {company.name}
                    {isComingSoon && (
                      <Sparkles className="h-4 w-4 text-orange-500 ml-2" />
                    )}
                  </CardTitle>
                  <CardDescription className="body-medium text-gray-300 mt-2">
                    {company.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    <h4 className="caption text-orange-500 mb-2">KEY SERVICES:</h4>
                    {company.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-3 w-3 text-teal-500 mr-2 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${isComingSoon ? 'btn-secondary opacity-50 cursor-not-allowed' : 'btn-secondary'}`}
                    onClick={() => !isComingSoon && window.open(company.website, '_blank')}
                    disabled={isComingSoon}
                  >
                    {isComingSoon ? (
                      <>
                        <Clock className="mr-2 h-4 w-4" />
                        Coming Soon
                      </>
                    ) : (
                      <>
                        <Globe className="mr-2 h-4 w-4" />
                        Visit Website
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );

  // Team Section - Optimized
  const TeamSection = () => (
    <section id="team" className="section section-alt" role="main">
      <div className="container">
        <header className="text-center mb-12">
          <h2 className="heading-1 mb-6">Leadership Team</h2>
          <p className="body-large max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation and excellence across Anantya Group.
          </p>
        </header>

        <div className="team-grid">
          {companyData.team.map((member) => {
            const Icon = iconMap[member.icon];
            return (
              <Card key={member.id} className="team-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="heading-3 text-white flex items-center justify-between">
                    {member.name}
                    <Star className="h-4 w-4 text-orange-500" />
                  </CardTitle>
                  <Badge className="w-fit border-teal-500 text-teal-500 mt-2">
                    {member.position}
                  </Badge>
                  <CardDescription className="body-medium mt-2 text-gray-300">
                    {member.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <h4 className="caption text-orange-500 mb-2">EXPERTISE:</h4>
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 flex-shrink-0"></div>
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

  // Contact Section - Optimized
  const ContactSection = () => (
    <section id="contact" className="section" role="main">
      <div className="container">
        <header className="text-center mb-12">
          <h2 className="heading-1 mb-6">Get In Touch</h2>
          <p className="body-large max-w-3xl mx-auto">
            Ready to explore opportunities with Anantya Group? We'd love to hear from you.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {[
              { icon: Phone, label: 'PHONE', value: companyData.contact.phone, href: `tel:${companyData.contact.phone}` },
              { icon: Mail, label: 'EMAIL', value: companyData.contact.email, href: `mailto:${companyData.contact.email}` },
              { icon: MapPin, label: 'ADDRESS', value: companyData.contact.address, href: '#' }
            ].map((contact, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="caption text-orange-500 mb-1">{contact.label}</h4>
                  {contact.href !== '#' ? (
                    <a 
                      href={contact.href}
                      className="body-medium text-white hover:text-orange-500 transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="body-medium text-gray-300 max-w-sm">
                      {contact.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="caption text-teal-500 mb-3">FOLLOW US</h4>
              <div className="flex space-x-3">
                {[
                  { href: companyData.contact.socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
                  { href: companyData.contact.socialLinks.instagram, icon: Instagram, label: 'Instagram' },
                  { href: companyData.contact.socialLinks.facebook, icon: Facebook, label: 'Facebook' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={`Follow us on ${social.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="company-card p-8">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="heading-3 text-orange-500 mb-2">Start a Conversation</CardTitle>
              <CardDescription className="body-medium text-gray-300">
                Whether you're interested in our services, partnerships, or career opportunities, we're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="btn-primary w-full"
                onClick={() => window.open(`mailto:${companyData.contact.email}`, '_blank')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
              <Button 
                className="btn-secondary w-full"
                onClick={() => window.open(`tel:${companyData.contact.phone}`, '_blank')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );

  // Footer - Clean & Simple (No Logo/Name as requested)
  const Footer = () => (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <h4 className="caption text-orange-500 mb-3">QUICK LINKS</h4>
            <div className="space-y-2">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'companies', label: 'Our Companies' },
                { id: 'team', label: 'Leadership' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-teal-500 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="caption text-teal-500 mb-3">CONTACT INFO</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <a href={`tel:${companyData.contact.phone}`} className="block hover:text-white transition-colors">
                {companyData.contact.phone}
              </a>
              <a href={`mailto:${companyData.contact.email}`} className="block hover:text-white transition-colors">
                {companyData.contact.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="caption text-orange-500 mb-3">FOLLOW US</h4>
            <div className="flex space-x-3">
              {[
                { href: companyData.contact.socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: companyData.contact.socialLinks.instagram, icon: Instagram, label: 'Instagram' },
                { href: companyData.contact.socialLinks.facebook, icon: Facebook, label: 'Facebook' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-8 h-8 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={`Follow us on ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <Separator className="mb-6 bg-gray-800" />
        
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Anantya Group. All rights reserved. | Built with excellence and innovation.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-950">
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