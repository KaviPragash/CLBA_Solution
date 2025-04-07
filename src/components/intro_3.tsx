import React from "react";
import { FiTrendingUp, FiBook, FiShield } from "react-icons/fi";

export default function FocusAreas() {
  return (
    <div className="relative w-full py-20 md:py-28 lg:py-36">
      {/* Background Image with 50% opacity overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/assets/img/businessman-talking-phone.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What We <span className="text-indigo-300">Focus On</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our specialized services are designed to help your business thrive at every stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Registration */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-indigo-400/30 transition-all duration-300 group">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-600/20 rounded-lg mb-6 group-hover:bg-indigo-600/40 transition-colors duration-300">
              <FiTrendingUp className="text-indigo-300 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Business Registration</h3>
            <p className="text-gray-300 mb-6">
              Our expertise has helped over 4,500 business owners establish and expand their businesses in South Asia. 
              We assist in finding the optimal location for your entrepreneurial journey, from finance to legal.
            </p>
            <div className="flex items-center space-x-2 text-indigo-300 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Business Accounts */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-indigo-400/30 transition-all duration-300 group">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-600/20 rounded-lg mb-6 group-hover:bg-indigo-600/40 transition-colors duration-300">
              <FiBook className="text-indigo-300 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Business Accounts</h3>
            <p className="text-gray-300 mb-6">
              Relax and let our finance team handle your bookkeeping. Why worry when you can focus on capturing invoices, 
              receipts, and bills? We take care of it all for you. It is that simple.
            </p>
            <div className="flex items-center space-x-2 text-indigo-300 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Legal Advice */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-indigo-400/30 transition-all duration-300 group">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-600/20 rounded-lg mb-6 group-hover:bg-indigo-600/40 transition-colors duration-300">
              <FiShield className="text-indigo-300 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Legal Advice</h3>
            <p className="text-gray-300 mb-6">
              Expert assistance for trademark and intellectual property protection, as well as contract management. 
              Our specialists are available to cater to your specific legal needs.
            </p>
            <div className="flex items-center space-x-2 text-indigo-300 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "4,500+", label: "Businesses Registered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
            { value: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-indigo-300 mb-2">{stat.value}</p>
              <p className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}