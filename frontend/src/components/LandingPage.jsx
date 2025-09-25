import React, { useState, useEffect } from 'react';
import { companyData } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
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
  TrendingUp
} from 'lucide-react';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    // Set page title dynamically
    document.title = 'Anantya Group - Leading Excellence Across Industries';
    
    // Add meta description if not present
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Anantya Group is a diversified business conglomerate with 6 companies spanning hospitality, events, catering, trading, and charity sectors.';
      document.head.appendChild(meta);
    }
  }, []);

  // Header Component with Mobile Responsiveness
  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black/80'
    }`} role="banner">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4" role="navigation" aria-label="Main navigation">
          <div className="brand-logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_anantya-enterprise/artifacts/iv6tdfp5_Final.png" 
              alt="Anantya Group Logo" 
              className="h-10 w-auto"
              loading="eager"
            />
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
            className="md:hidden p-2 rounded-md text-white hover:bg-gray-800 transition-colors"
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
            aria-label="Navigate to contact section"
          >
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

  // Hero Section with Enhanced Accessibility
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
      
      <div className="container relative z-10">
        <div className="hero-content fade-in">
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
              aria-label="Explore our companies section"
            >
              Explore Our Companies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              className="btn-secondary"
              onClick={() => scrollToSection('about')}
              aria-label="Learn more about Anantya Group"
            >
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
        <header className="text-center mb-16 slide-up">
          <h2 className="heading-1 mb-6">About Anantya Group</h2>
          <p className="body-large max-w-4xl mx-auto">
            A diversified business conglomerate with a proven track record of excellence across multiple industries.
          </p>
        </header>

        {/* Enhanced Stats Grid */}
        <div className="stats-grid mb-16">
          <div className="stat-item group">
            <Building className="h-12 w-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <div className="stat-number">{companyData.about.stats.companies}</div>
            <div className="stat-label">Companies</div>
          </div>
          <div className="stat-item group">
            <Users className="h-12 w-12 text-teal-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <div className="stat-number">{companyData.about.stats.staff}</div>
            <div className="stat-label">Staff Members</div>
          </div>
          <div className="stat-item group">
            <Award className="h-12 w-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <div className="stat-number">{companyData.about.stats.teamMembers}</div>
            <div className="stat-label">Leadership Team</div>
          </div>
          <div className="stat-item group">
            <TrendingUp className="h-12 w-12 text-teal-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <div className="stat-number">{companyData.about.stats.yearsExperience}</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="company-card p-8 group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="heading-3 text-orange-500">Our Vision</h3>
            </div>
            <p className="body-medium text-gray-300 leading-relaxed">
              {companyData.about.vision}
            </p>
          </Card>
          
          <Card className="company-card p-8 group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-white" />
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
        <header className="text-center mb-16 slide-up">
          <h2 className="heading-1 mb-6">Our Companies</h2>
          <p className="body-large max-w-3xl mx-auto">
            Six distinct businesses, one unified commitment to excellence and innovation across industries.
          </p>
        </header>

        <div className="companies-grid">
          {companyData.companies.map((company, index) => (
            <Card key={company.id} className="company-card group overflow-hidden" role="article">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={company.image} 
                  alt={`${company.name} - ${company.category}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500 text-white font-semibold px-3 py-1 text-sm">
                    {company.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="heading-3 flex items-center justify-between text-white">
                  {company.name}
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
                  className="btn-secondary w-full group/btn"
                  onClick={() => window.open(company.website, '_blank')}
                  aria-label={`Visit ${company.name} website`}
                >
                  <Globe className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                  Visit Website
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Enhanced Team Section
  const TeamSection = () => (
    <section id="team" className="section section-alt" role="main">
      <div className="container">
        <header className="text-center mb-16 slide-up">
          <h2 className="heading-1 mb-6">Leadership Team</h2>
          <p className="body-large max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation and excellence across Anantya Group.
          </p>
        </header>

        <div className="team-grid">
          {companyData.team.map((member) => (
            <Card key={member.id} className="team-card group overflow-hidden" role="article">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.position}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="heading-3 text-white">{member.name}</CardTitle>
                <Badge 
                  variant="outline" 
                  className="w-fit border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors mt-2"
                >
                  {member.position}
                </Badge>
                <CardDescription className="body-medium mt-3 text-gray-300 leading-relaxed">
                  {member.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-2">
                  <h4 className="caption text-orange-500 mb-3">EXPERTISE:</h4>
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Enhanced Contact Section
  const ContactSection = () => (
    <section id="contact" className="section" role="main">
      <div className="container">
        <header className="text-center mb-16 slide-up">
          <h2 className="heading-1 mb-6">Get In Touch</h2>
          <p className="body-large max-w-3xl mx-auto">
            Ready to explore opportunities with Anantya Group? We'd love to hear from you.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="caption text-orange-500 mb-1">PHONE</h4>
                <a 
                  href={`tel:${companyData.contact.phone}`}
                  className="body-medium text-white hover:text-teal-500 transition-colors"
                  aria-label={`Call us at ${companyData.contact.phone}`}
                >
                  {companyData.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="caption text-teal-500 mb-1">EMAIL</h4>
                <a 
                  href={`mailto:${companyData.contact.email}`}
                  className="body-medium text-white hover:text-orange-500 transition-colors"
                  aria-label={`Email us at ${companyData.contact.email}`}
                >
                  {companyData.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="caption text-orange-500 mb-1">ADDRESS</h4>
                <p className="body-medium text-gray-300 leading-relaxed max-w-xs">
                  {companyData.contact.address}
                </p>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="pt-8">
              <h4 className="caption text-teal-500 mb-4">FOLLOW US</h4>
              <div className="flex space-x-4">
                {[
                  { 
                    href: companyData.contact.socialLinks.linkedin, 
                    icon: Linkedin, 
                    label: 'LinkedIn',
                    color: 'hover:bg-blue-600'
                  },
                  { 
                    href: companyData.contact.socialLinks.instagram, 
                    icon: Instagram, 
                    label: 'Instagram',
                    color: 'hover:bg-pink-600'
                  },
                  { 
                    href: companyData.contact.socialLinks.facebook, 
                    icon: Facebook, 
                    label: 'Facebook',
                    color: 'hover:bg-blue-700'
                  }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className={`w-12 h-12 bg-gray-800 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6`}
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

          {/* Enhanced CTA Card */}
          <Card className="company-card p-8 lg:p-10">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="heading-3 text-orange-500 mb-2">Start a Conversation</CardTitle>
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
              </Button>
              <Button 
                className="btn-secondary w-full group"
                onClick={() => window.open(`tel:${companyData.contact.phone}`, '_blank')}
                aria-label="Call us now"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Call Now
              </Button>
            </CardContent>
          </Card>
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
              <img 
                src="https://customer-assets.emergentagent.com/job_anantya-enterprise/artifacts/iv6tdfp5_Final.png" 
                alt="Anantya Group Logo" 
                className="h-10 w-auto"
                loading="lazy"
              />
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
                  className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={`Follow us on ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="caption text-orange-500 mb-4">QUICK LINKS</h4>
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
                  className="block text-gray-400 hover:text-teal-500 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="caption text-teal-500 mb-4">CONTACT INFO</h4>
            <div className="space-y-3 text-gray-400">
              <a 
                href={`tel:${companyData.contact.phone}`}
                className="block hover:text-white transition-colors"
              >
                {companyData.contact.phone}
              </a>
              <a 
                href={`mailto:${companyData.contact.email}`}
                className="block hover:text-white transition-colors"
              >
                {companyData.contact.email}
              </a>
              <p className="text-sm leading-relaxed">
                {companyData.contact.address}
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2024 Anantya Group. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
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