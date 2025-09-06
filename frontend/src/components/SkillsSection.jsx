import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { mockData } from '../data/mockData';

const SkillsSection = () => {
  const skillCategories = {
    'Programming': { color: 'bg-blue-100 text-blue-800', icon: '💻' },
    'Frontend': { color: 'bg-green-100 text-green-800', icon: '🎨' },
    'Backend': { color: 'bg-purple-100 text-purple-800', icon: '⚙️' },
    'Cloud': { color: 'bg-orange-100 text-orange-800', icon: '☁️' },
    'DevOps': { color: 'bg-red-100 text-red-800', icon: '🚀' },
    'AI/ML': { color: 'bg-indigo-100 text-indigo-800', icon: '🧠' },
    'Database': { color: 'bg-yellow-100 text-yellow-800', icon: '🗄️' }
  };

  const groupedSkills = mockData.skills.technical.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning full-stack development, cloud architecture, 
            AI/ML implementation, and modern DevOps practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(groupedSkills).map(([category, skills]) => (
                <Card key={category} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{skillCategories[category]?.icon}</span>
                      <Badge className={`${skillCategories[category]?.color} font-medium`}>
                        {category}
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-900">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-600">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-gray-200"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills & Competencies */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Leadership & Soft Skills</h3>
            <Card className="border-gray-200 mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  {mockData.skills.soft.map((skill, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                      <span className="text-gray-900 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Career Highlights</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Team Members Led</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">8+</div>
                    <div className="text-sm text-gray-600">Technologies Mastered</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;