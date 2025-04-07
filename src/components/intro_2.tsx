import React from "react";
import Image from "next/image";
import { FiCheckCircle, FiAward, FiUsers, FiBriefcase } from "react-icons/fi";

const About = () => {
  return (
    <div className="bg-white w-full py-16 md:py-24 lg:py-32">
      {/* Max Width Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center">
          {/* Content Section - Left Side */}
          <div className="lg:basis-1/2" data-aos="fade-right">
            <div className="max-w-2xl mx-auto lg:mx-0">
              {/* Section Tag */}
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-4 h-0.5 bg-blue-600"></div>
                <span className="text-blue-600 font-medium tracking-wider text-sm uppercase">
                  About Our Company
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Business Startup is <span className="text-green-600">Tough.</span><br />
                We Make It <span className="text-blue-600">Easier.</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 30 years of combined experience handling complex business formations and legal challenges, we guide clients through every stage of their entrepreneurial journey. Our proven approach ensures you can accomplish your business goals efficiently.
              </p>
              
              {/* Proof Points */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: <FiCheckCircle className="text-green-500" size={20} />, text: "500+ successful business formations" },
                  { icon: <FiAward className="text-blue-500" size={20} />, text: "Industry-leading success rates" },
                  { icon: <FiUsers className="text-indigo-500" size={20} />, text: "Dedicated team of specialists" },
                  { icon: <FiBriefcase className="text-amber-500" size={20} />, text: "30+ years combined experience" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span>{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4" data-aos="zoom-in-up">
                <Link href="/contact" className="flex-1">
                  <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    GET IN TOUCH
                  </button>
                </Link>
                <Link href="/about" className="flex-1">
                  <button className="w-full px-6 py-3 bg-white border border-gray-300 text-gray-700 text-lg font-medium rounded-md shadow-sm hover:bg-gray-50 transition-all duration-300">
                    LEARN MORE
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
          
          {/* Image Section - Right Side */}
          <div className="lg:basis-1/2 w-full" data-aos="fade-left">
            <div className="relative aspect-video lg:aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/assets/img/group-three-modern-architects.jpg"
                alt="Business startup team meeting"
                fill
                className="object-cover transition duration-700 ease-in-out hover:scale-105"
                quality={90}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;