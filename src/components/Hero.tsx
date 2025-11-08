
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-r from-white via-purple-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-800">Your Global Education</span>
              <span className="text-behrani-600 block mt-2">Journey Begins Here</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Navigating your international education journey with personalized guidance, expert counseling and end-to-end support to help you achieve your goal of overseas education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-behrani-600 hover:bg-behrani-700 text-white py-3 px-8 rounded-md transition-colors shadow-md flex items-center justify-center"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="border border-behrani-600 text-behrani-600 hover:bg-behrani-50 py-3 px-8 rounded-md transition-colors flex items-center justify-center"
              >
                Free Consultation
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/hi.png"
                alt="Students celebrating graduation"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-behrani-100 rounded-full opacity-70 blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-behrani-200 rounded-full opacity-50 blur-3xl -z-10"></div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-behrani-600">15+</div>
            <div className="text-gray-600 mt-2">Years Experience</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-behrani-600">10000+</div>
            <div className="text-gray-600 mt-2">Students Placed</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-behrani-600">800+</div>
            <div className="text-gray-600 mt-2">Partner Universities</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-behrani-600">18+</div>
            <div className="text-gray-600 mt-2">Destinations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
