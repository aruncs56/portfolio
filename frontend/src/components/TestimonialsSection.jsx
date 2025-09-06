import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../data/mockData';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Colleagues Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Testimonials from team members, managers, and stakeholders I've had the privilege to work with.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mockData.testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 text-gray-200" size={24} />
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-blue-600">
                      {testimonial.company}
                    </p>
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

export default TestimonialsSection;