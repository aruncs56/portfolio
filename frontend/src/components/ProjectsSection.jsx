import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';
import { mockData } from '../data/mockData';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const statusColors = {
    'Production': 'bg-green-100 text-green-800',
    'Beta': 'bg-yellow-100 text-yellow-800',
    'Development': 'bg-blue-100 text-blue-800'
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions built using cutting-edge technologies, 
            from AI-powered platforms to scalable enterprise architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mockData.projects.map((project) => (
            <Card key={project.id} className="border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${statusColors[project.status]} font-medium`}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-gray-900 hover:bg-gray-800"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;