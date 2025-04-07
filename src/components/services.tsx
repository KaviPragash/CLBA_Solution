import React from "react";
import { FiLayers, FiBookOpen, FiBriefcase, FiDollarSign, FiHeadphones, FiCpu } from "react-icons/fi";

const services = [
  {
    icon: <FiLayers className="w-6 h-6" />,
    title: "Business Setup",
    description: "Comprehensive company formation services with expert guidance through every step of the registration process.",
    stat: "4,500+ businesses established"
  },
  {
    icon: <FiBookOpen className="w-6 h-6" />,
    title: "Online Bookkeeping",
    description: "Real-time financial tracking with cloud-based solutions that give you 24/7 access to your financial data.",
    stat: "98% accuracy guarantee"
  },
  {
    icon: <FiBriefcase className="w-6 h-6" />,
    title: "Legal Services",
    description: "End-to-end legal support including contracts, compliance, and intellectual property protection.",
    stat: "15+ years experience"
  },
  {
    icon: <FiDollarSign className="w-6 h-6" />,
    title: "Payroll Management",
    description: "Automated payroll processing with tax compliance handled by our certified professionals.",
    stat: "100% compliance record"
  },
  {
    icon: <FiHeadphones className="w-6 h-6" />,
    title: "Dedicated Support",
    description: "Personal account managers available via multiple channels for immediate assistance.",
    stat: "24/7 availability"
  },
  {
    icon: <FiCpu className="w-6 h-6" />,
    title: "Technology Platform",
    description: "Integrated business management dashboard with AI-powered analytics and reporting.",
    stat: "All-in-one solution"
  }
];

export default function MainServices() {
  return (
    <div className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-indigo-100/50 blur-3xl -mr-32 -mb-32"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full mb-4">
            Our Main Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The future of the <span className="text-indigo-600">business owner</span> experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to streamline your operations and fuel growth
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <p className="text-sm font-medium text-indigo-600">{service.stat}</p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Learn more link */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <button className="flex items-center text-indigo-600 font-medium">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Explore All Services
          </button>
          <p className="mt-4 text-gray-500">
            Have questions? <a href="#" className="text-indigo-600 hover:underline">Talk to our experts</a>
          </p>
        </div>
      </div>
    </div>
  );
}