import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Hero loads first with a small delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-r from-white via-purple-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 mb-10 md:mb-0 md:pr-10 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className={`block transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                Your Global Education
              </span>
              <span className={`block mt-2 text-behrani-600 transition-all duration-700 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                Journey Begins Here
              </span>
            </h1>
            <p className={`text-lg text-gray-600 mb-8 max-w-lg transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Navigating your international education journey with personalized guidance, expert counseling and end-to-end support to help you achieve your goal of overseas education.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <a
                href="#services"
                className="bg-behrani-600 hover:bg-behrani-700 text-white py-3 px-8 rounded-md transition-colors shadow-md flex items-center justify-center group"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="border border-behrani-600 text-behrani-600 hover:bg-behrani-50 py-3 px-8 rounded-md transition-colors flex items-center justify-center"
              >
                Free Consultation
              </a>
            </div>
          </div>
          
          <div className={`md:w-1/2 relative transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
          }`}>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/hi.png"
                alt="Students celebrating graduation"
                className="w-full h-auto"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-behrani-100 rounded-full opacity-70 blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-behrani-200 rounded-full opacity-50 blur-3xl -z-10"></div>
          </div>
        </div>
        
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700 delay-600 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {[
            { value: "15+", label: "Years Experience" },
            { value: "10000+", label: "Students Placed" },
            { value: "800+", label: "Partner Universities" },
            { value: "18+", label: "Destinations" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl font-bold text-behrani-600">{stat.value}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
