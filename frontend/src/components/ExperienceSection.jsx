import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mockData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A journey through various roles and companies, building expertise in software development, 
            solution architecture, and AI implementation.
          </p>
        </div>

        <div className="space-y-8">
          {mockData.experiences.map((experience, index) => (
            <Card key={experience.id} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {experience.position}
                    </h3>
                    <h4 className="text-lg font-medium text-blue-600 mb-3">
                      {experience.company}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-600">
                            <CheckCircle size={16} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;