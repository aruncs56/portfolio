import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Brain, Building, Award } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies, cloud platforms, and scalable application development"
    },
    {
      icon: <Building className="w-8 h-8 text-green-600" />,
      title: "Solution Architecture",
      description: "Designing robust, scalable systems that meet business objectives and technical requirements"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI & Machine Learning",
      description: "Implementing AI solutions, LLMs, and machine learning models for business transformation"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Technical Leadership",
      description: "Leading development teams, mentoring engineers, and driving innovation initiatives"
    }
  ];

  const certifications = [
    "Solutions Architect",
    "Azure AI Engineer Associate",
    "Microsoft Azure Expert",
    "DevOps Engineer Expert",
    "Machine Learning Engineer"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate software architect with 12+ years of experience building enterprise-scale applications, 
            leading technical teams, and implementing cutting-edge AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Started as a software developer and evolved into a solution architect specializing in 
              cloud-native applications and AI integration. I've worked with startups and Fortune 500 
              companies, delivering solutions that drive business growth and operational efficiency.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Currently focused on leveraging AI and machine learning to solve complex business problems, 
              while maintaining a strong foundation in software architecture principles and best practices.
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;