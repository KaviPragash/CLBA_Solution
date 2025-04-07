'use client';

import React, { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'The registration process was a breeze, and the team was always available to answer my questions. I highly recommend their services to anyone seeking assistance with business registration. Thank you, CBSL Solutions!',
      author: 'Dilan',
      position: 'Director, Alpha Engineering',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'This service provides easy document collection with a professional and friendly approach, leaving customers feeling confident and satisfied. A highly recommended service with exceptional professionalism.',
      author: 'Nathan',
      position: 'Director, Soft Solutions',
      rating: 5,
    },
    {
      id: 3,
      quote: 'Excellent service! Your assistance has left me feeling extremely satisfied.',
      author: 'Azeez',
      position: 'Founder',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Testimonials from Top Clients
          </h2>
          <p className="text-lg text-gray-600">An honest look into how we work</p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Positive Feedback for CBSL Solutions
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="mb-6 text-blue-500">
              <Quote className="w-8 h-8" />
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {testimonials[currentIndex].quote}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-900">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentIndex].position}
                </p>
              </div>

              <div className="flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
