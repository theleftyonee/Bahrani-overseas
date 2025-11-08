
import { Milestone } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Behrani Overseas Education Team"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-behrani-100 rounded-full opacity-30 blur-3xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 text-sm bg-behrani-100 text-behrani-800 rounded-full mb-4">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Helping Students Achieve Global Education Dreams Since 2010
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Behrani Overseas Education was founded with a vision to empower Indian students with access to quality international education opportunities. Our journey began when our founder, Rajesh Behrani, faced challenges while pursuing his own overseas education.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              Recognizing the information gap and complex processes that international students face, he established Behrani Overseas Education to provide comprehensive guidance and support for students aspiring to study abroad.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Today, with over 15 years of experience and more than 5000 successful placements, we have grown into one of India's most trusted education consultancies, with dedicated teams specializing in various countries and programs.
            </p>
            
            {/* <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-behrani-50 p-4 rounded-lg text-center flex-1">
                <div className="text-3xl font-bold text-behrani-600">15+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-behrani-50 p-4 rounded-lg text-center flex-1">
                <div className="text-3xl font-bold text-behrani-600">5000+</div>
                <div className="text-gray-600">Students Placed</div>
              </div>
              <div className="bg-behrani-50 p-4 rounded-lg text-center flex-1">
                <div className="text-3xl font-bold text-behrani-600">15+</div>
                <div className="text-gray-600">Global Destinations</div>
              </div>
            </div> */}
            
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-behrani-600 hover:bg-behrani-700">
                Our Team
              </Button>
              <Button variant="outline" className="border-behrani-600 text-behrani-600">
                Our Mission
              </Button>
            </div> */}
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Milestones in our mission to empower students with global education opportunities
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-behrani-200"></div>
            
            <div className="grid grid-cols-1 gap-16 relative">
              {/* 2010 */}
              <div className="flex">
                <div className="w-1/2 pr-12 text-right">
                  <h3 className="font-bold text-2xl mb-2">2010</h3>
                  <h4 className="font-semibold text-xl mb-3 text-behrani-600">Founded in Mumbai</h4>
                  <p className="text-gray-600">
                    Behrani Overseas Education was established with a small team of 3 counselors focused on UK and Australia education.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-behrani-600 border-4 border-white z-10 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>
              
              {/* 2013 */}
              <div className="flex">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-behrani-600 border-4 border-white z-10 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="w-1/2 pl-12">
                  <h3 className="font-bold text-2xl mb-2">2013</h3>
                  <h4 className="font-semibold text-xl mb-3 text-behrani-600">Expansion</h4>
                  <p className="text-gray-600">
                    Opened new branches in Delhi and Bangalore, expanded services to include USA and Canada education counseling.
                  </p>
                </div>
              </div>
              
              {/* 2016 */}
              <div className="flex">
                <div className="w-1/2 pr-12 text-right">
                  <h3 className="font-bold text-2xl mb-2">2016</h3>
                  <h4 className="font-semibold text-xl mb-3 text-behrani-600">Education Excellence Award</h4>
                  <p className="text-gray-600">
                    Received the "Best Overseas Education Consultancy" award and reached milestone of 2000+ successful student placements.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-behrani-600 border-4 border-white z-10 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>
              
              {/* 2019 */}
              <div className="flex">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-behrani-600 border-4 border-white z-10 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="w-1/2 pl-12">
                  <h3 className="font-bold text-2xl mb-2">2019</h3>
                  <h4 className="font-semibold text-xl mb-3 text-behrani-600">Digital Transformation</h4>
                  <p className="text-gray-600">
                    Launched digital counseling services and expanded to European destinations including Germany, France, and Italy.
                  </p>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="flex">
                <div className="w-1/2 pr-12 text-right">
                  <h3 className="font-bold text-2xl mb-2">2023</h3>
                  <h4 className="font-semibold text-xl mb-3 text-behrani-600">Global Education Partner</h4>
                  <p className="text-gray-600">
                    Achieved partnership with 500+ universities worldwide and celebrated milestone of 5000+ successful student placements.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-behrani-600 border-4 border-white z-10 flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
