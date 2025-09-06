import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. I'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "aruncs56@gmail.com",
      href: "mailto:aruncs56@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/arun-kumar-m-a616364a/",
      href: "https://www.linkedin.com/in/arun-kumar-m-a616364a/"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bangalore, India",
      href: null
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Availability",
      value: "Open to opportunities",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'm available for consulting, 
            architecture design, and full-stack development opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    {info.href ? (
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-3">Available For:</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Solution Architecture Consulting</li>
                <li>• Full-Stack Development Projects</li>
                <li>• AI/ML Implementation</li>
                <li>• Technical Leadership Roles</li>
                <li>• Code Reviews & Mentoring</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-700 border-gray-600 text-white mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-700 border-gray-600 text-white mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-white">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-gray-700 border-gray-600 text-white mt-1"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-gray-700 border-gray-600 text-white mt-1"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2" size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;