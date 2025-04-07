export default function IndexPage() {
    return (
      <div className="relative w-full min-h-screen flex flex-col pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('/still-life-with-scales-justice.jpg')",
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
        
        {/* Content Section */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-7xl mx-auto w-full">
            <section 
              className="w-full md:w-2/3 lg:w-1/2 flex flex-col space-y-6"
              data-aos="zoom-out"
            >
              <p className="text-grey-300 text-xl md:text-2xl font-medium tracking-wider">
                Corporate And Legal Business Accounts Solutions (Private) Limited
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
                Solving Your{' '}
                <span className="text-[#edca38]">Business Challenges</span>{' '}
                Head-On
              </h1>
              
              <p className="text-gray-100 text-lg md:text-xl leading-relaxed">
                We provide direct access to expert legal & accounting professionals
                to resolve corporate issues efficiently and amicably.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  Explore Our Services
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-gray-100 text-gray-100 text-lg font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  Contact Our Experts
                </button>
              </div>
              
              <div className="flex items-center gap-2 pt-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div 
                      key={item}
                      className="w-10 h-10 rounded-full bg-white border-2 border-indigo-300"
                    ></div>
                  ))}
                </div>
                <p className="text-gray-200 text-sm md:text-base">
                  Trusted by <span className="font-bold text-white">500+</span> corporations worldwide
                </p>
              </div>
            </section>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="relative z-10 bg-white/90 backdrop-blur-sm py-6 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Clients Served" },
              { value: "24/7", label: "Support Available" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-indigo-600">{stat.value}</p>
                <p className="text-gray-700 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }