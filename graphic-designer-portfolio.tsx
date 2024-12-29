import React, { useState } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Head from 'next/head';
import { useEffect } from 'react';

// Components
const Navbar = ({ mobileMenuOpen, toggleMenu }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold">Alex Rivera</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {['Home', 'Portfolio', 'Testimonials', 'Contact'].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="hover:text-blue-600 transition"
          >
            {section}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu Dropdown */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
        {['Home', 'Portfolio', 'Testimonials', 'Contact'].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="block px-4 py-3 hover:bg-gray-100"
          >
            {section}
          </a>
        ))}
      </div>
    )}
  </nav>
);

const ProjectCard = ({ project }) => (
  <Card className="hover:shadow-xl transition-shadow">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-64 object-cover rounded-t-lg"
    />
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <p className="italic mb-4">"{testimonial.quote}"</p>
    <div className="font-semibold">{testimonial.author}</div>
    <div className="text-yellow-500 mt-2">{'★'.repeat(testimonial.rating)}</div>
  </div>
);

const DesignerPortfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const featuredProjects = [
    {
      id: 1,
      title: 'Brand Identity - Tech Startup',
      description:
        'Comprehensive branding solution including logo, color palette, and brand guidelines',
      image: '/api/placeholder/600/400',
    },
    {
      id: 2,
      title: 'Print Campaign - Local Brewery',
      description: 'Marketing collateral design for seasonal craft beer launch',
      image: '/api/placeholder/600/400',
    },
    {
      id: 3,
      title: 'Digital Illustration Series',
      description: 'Custom illustration set for mobile app interface',
      image: '/api/placeholder/600/400',
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        'Exceptional creativity and professionalism. Their designs transformed our brand identity completely.',
      author: 'Sarah Johnson, CEO of TechInnovate',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'Precise, innovative, and always delivers beyond expectations. A true design partner.',
      author: 'Michael Chen, Marketing Director',
      rating: 5,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Alex Rivera - Graphic Designer</title>
        <meta
          name="description"
          content="Transforming ideas into visually compelling experiences."
        />
        <meta name="keywords" content="Graphic Design, Portfolio, Branding" />
      </Head>

      {/* Navbar */}
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        toggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* Hero Section */}
      <header
        id="home"
        className="pt-24 pb-16 text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Graphic Design that Tells Your Story
          </h1>
          <p className="text-xl mb-8">
            Transforming ideas into visually compelling experiences
          </p>
          <a
            href="#portfolio"
            className="bg-white text-blue-700 px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            View My Work
          </a>
        </div>
      </header>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-700"
      >
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8">Let's Collaborate</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full"
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project"
                required
                className="w-full h-32"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Send className="mr-2" size={18} /> Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {['Behance', 'LinkedIn', 'Instagram'].map((platform) => (
            <a
              key={platform}
              href="#"
              className="hover:text-blue-400"
              aria-label={`Visit my ${platform} profile`}
            >
              {platform}
            </a>
          ))}
        </div>
        <p>&copy; 2024 Alex Rivera. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default DesignerPortfolio;
