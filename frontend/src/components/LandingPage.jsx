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
  CheckCircle
} from 'lucide-react';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Header Component
  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          <div className="brand-logo">
            <h1 className="heading-3 text-lime-400">ANANTYA GROUP</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={() => scrollToSection('home')} className="nav-link">Home</a>
            <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">About</a>
            <a href="#companies" onClick={() => scrollToSection('companies')} className="nav-link">Companies</a>
            <a href="#team" onClick={() => scrollToSection('team')} className="nav-link">Team</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
          </div>

          <Button 
            className="btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </nav>
      </div>
    </header>
  );

  // Hero Section
  const HeroSection = () => (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzc3xlbnwwfHx8fDE3NTg4MDczODh8MA&ixlib=rb-4.1.0&q=85" 
          alt="Corporate Background" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="hero-content fade-in">
          <h1 className="brand-display mb-6">
            {companyData.hero.title}
          </h1>
          <p className="heading-3 mb-4 text-gray-300">
            {companyData.hero.subtitle}
          </p>
          <p className="body-large mb-8 max-w-2xl">
            {companyData.hero.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="btn-primary"
              onClick={() => scrollToSection('companies')}
            >
              Explore Our Companies <ArrowRight className="ml-2 h-4 w-4" />
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

  // About Section
  const AboutSection = () => (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container">
        <div className="text-center mb-16 slide-up">
          <h2 className="heading-1 mb-6">About Anantya Group</h2>
          <p className="body-large max-w-4xl mx-auto">
            A diversified business conglomerate with a proven track record of excellence across multiple industries.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid mb-16">
          <div className="stat-item">
            <div className="stat-number">{companyData.about.stats.companies}</div>
            <div className="stat-label">Companies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{companyData.about.stats.staff}</div>
            <div className="stat-label">Staff Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{companyData.about.stats.teamMembers}</div>
            <div className="stat-label">Leadership Team</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{companyData.about.stats.yearsExperience}</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="company-card p-8">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-lime-400 mr-3" />
              <h3 className="heading-3">Our Vision</h3>
            </div>
            <p className="body-medium text-gray-300">
              {companyData.about.vision}
            </p>
          </Card>
          
          <Card className="company-card p-8">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-lime-400 mr-3" />
              <h3 className="heading-3">Our Mission</h3>
            </div>
            <p className="body-medium text-gray-300">
              {companyData.about.mission}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );

  // Companies Section
  const CompaniesSection = () => (
    <section id="companies" className="py-20">
      <div className="container">
        <div className="text-center mb-16 slide-up">
          <h2 className="heading-1 mb-6">Our Companies</h2>
          <p className="body-large max-w-3xl mx-auto">
            Six distinct businesses, one unified commitment to excellence and innovation across industries.
          </p>
        </div>

        <div className="companies-grid">
          {companyData.companies.map((company, index) => (
            <Card key={company.id} className="company-card group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={company.image} 
                  alt={company.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-lime-400 text-black font-semibold">
                    {company.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="heading-3 flex items-center justify-between">
                  {company.name}
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-lime-400 transition-colors" />
                </CardTitle>
                <CardDescription className="body-medium">
                  {company.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-2 mb-4">
                  {company.services.map((service, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-lime-400 mr-2" />
                      {service}
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="btn-secondary w-full"
                  onClick={() => window.open(company.website, '_blank')}
                >
                  Visit Website
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Team Section
  const TeamSection = () => (
    <section id="team" className="py-20 bg-gray-900/50">
      <div className="container">
        <div className="text-center mb-16 slide-up">
          <h2 className="heading-1 mb-6">Leadership Team</h2>
          <p className="body-large max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation and excellence across Anantya Group.
          </p>
        </div>

        <div className="team-grid">
          {companyData.team.map((member) => (
            <Card key={member.id} className="team-card group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="heading-3">{member.name}</CardTitle>
                <Badge variant="outline" className="w-fit border-lime-400 text-lime-400">
                  {member.position}
                </Badge>
                <CardDescription className="body-medium mt-2">
                  {member.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-1">
                  <p className="caption mb-2">EXPERTISE:</p>
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="h-3 w-3 text-lime-400 mr-2" />
                      {skill}
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

  // Contact Section
  const ContactSection = () => (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-16 slide-up">
          <h2 className="heading-1 mb-6">Get In Touch</h2>
          <p className="body-large max-w-3xl mx-auto">
            Ready to explore opportunities with Anantya Group? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <div>
                <p className="caption">PHONE</p>
                <p className="body-medium text-lime-400">{companyData.contact.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <div>
                <p className="caption">EMAIL</p>
                <p className="body-medium text-lime-400">{companyData.contact.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <div>
                <p className="caption">ADDRESS</p>
                <p className="body-medium text-gray-300">{companyData.contact.address}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="caption mb-4">FOLLOW US</p>
              <div className="flex space-x-4">
                <a href={companyData.contact.socialLinks.linkedin} className="w-10 h-10 bg-gray-800 hover:bg-lime-400 rounded-full flex items-center justify-center transition-colors group">
                  <Linkedin className="h-5 w-5 text-lime-400 group-hover:text-black" />
                </a>
                <a href={companyData.contact.socialLinks.instagram} className="w-10 h-10 bg-gray-800 hover:bg-lime-400 rounded-full flex items-center justify-center transition-colors group">
                  <Instagram className="h-5 w-5 text-lime-400 group-hover:text-black" />
                </a>
                <a href={companyData.contact.socialLinks.facebook} className="w-10 h-10 bg-gray-800 hover:bg-lime-400 rounded-full flex items-center justify-center transition-colors group">
                  <Facebook className="h-5 w-5 text-lime-400 group-hover:text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="company-card p-8">
            <CardHeader>
              <CardTitle className="heading-3">Start a Conversation</CardTitle>
              <CardDescription className="body-medium">
                Whether you're interested in our services, partnerships, or career opportunities, we're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="btn-primary w-full">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
              <Button className="btn-secondary w-full">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="heading-3 mb-4">ANANTYA GROUP</h3>
            <p className="body-medium text-gray-400 mb-4">
              Leading excellence across industries with integrity, innovation, and commitment to community growth.
            </p>
          </div>
          
          <div>
            <h4 className="caption mb-4">QUICK LINKS</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-lime-400 transition-colors">About Us</a>
              <a href="#companies" className="block text-gray-400 hover:text-lime-400 transition-colors">Our Companies</a>
              <a href="#team" className="block text-gray-400 hover:text-lime-400 transition-colors">Leadership</a>
              <a href="#contact" className="block text-gray-400 hover:text-lime-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="caption mb-4">CONTACT INFO</h4>
            <div className="space-y-2 text-gray-400">
              <p>{companyData.contact.phone}</p>
              <p>{companyData.contact.email}</p>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8 bg-gray-800" />
        
        <div className="text-center">
          <p className="text-gray-500">
            © 2024 Anantya Group. All rights reserved. | Built with excellence and innovation.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <HeroSection />
      <AboutSection />
      <CompaniesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;