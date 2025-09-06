import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronUp, Users, Clock, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mockData';

const CaseStudiesSection = () => {
  const [expandedStudy, setExpandedStudy] = useState(null);

  const toggleExpanded = (studyId) => {
    setExpandedStudy(expandedStudy === studyId ? null : studyId);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deep dive into successful projects that delivered measurable business impact 
            and transformed how organizations operate.
          </p>
        </div>

        <div className="space-y-8">
          {mockData.caseStudies.map((study) => (
            <Card key={study.id} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      {study.client}
                    </p>
                  </div>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {study.team}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {study.challenge}
                    </p>

                    <h4 className="font-semibold text-gray-900 mb-3">Solution</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="mr-2 text-green-600" size={18} />
                      Results Achieved
                    </h4>
                    <div className="space-y-3">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    variant="ghost"
                    onClick={() => toggleExpanded(study.id)}
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    {expandedStudy === study.id ? (
                      <>
                        <ChevronUp className="mr-2" size={16} />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2" size={16} />
                        Technical Details
                      </>
                    )}
                  </Button>

                  {expandedStudy === study.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">Technical Implementation</h5>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        This project involved designing a comprehensive solution architecture that addressed 
                        scalability, performance, and security requirements. Key technical decisions included 
                        microservices decomposition, API gateway implementation, and comprehensive monitoring setup.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;