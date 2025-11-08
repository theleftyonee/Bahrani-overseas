
import { CheckCircle, ArrowRight } from "lucide-react";

const ProblemStatement = () => {
  return (
    <section className="py-10 md:py-14 bg-white" id="problem">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Students confused about university choices"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="inline-block px-3 py-1 text-sm bg-behrani-100 text-behrani-800 rounded-full mb-4">
              Our Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Finding Your Perfect Educational Path
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              International education comes with numerous challenges. Many students struggle with choosing the right university, program, and destination that aligns with their career goals. At Go Global, we solve these critical problems:
            </p>
            <div className="flex items-start">
                <CheckCircle className="text-behrani-600 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl">Right Course</h3>
                  <p className="text-gray-600 mt-1">Identifying programs that align with your career aspirations, skills, and academic background.</p>
                </div>
              </div>
            <div className="space-y-4">
              
              <div className="flex items-start">
                <CheckCircle className="text-behrani-600 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl">Right Destination</h3>
                  <p className="text-gray-600 mt-1">Guiding you to countries that offer the best opportunities for your field, budget, and lifestyle preferences.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-behrani-600 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl">Right University</h3>
                  <p className="text-gray-600 mt-1"> Matching your academic profile with institutions where you'll thrive and have strong admission chances.</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <a href="#services" className="text-behrani-600 font-medium flex items-center hover:text-behrani-700 transition-colors">
                Discover our comprehensive services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
