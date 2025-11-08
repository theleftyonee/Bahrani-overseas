import { useState, useEffect } from "react";
import {
  GraduationCap,
  FileCheck,
  Plane,
  Home,
  Heart,
  Building,
  FileEdit,
  CreditCard,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Counseling",
    icon: GraduationCap,
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100/50",
    description:
      "Personalized guidance from experienced consultants who understand your academic goals and career aspirations.",
  },
  {
    title: "University Selection",
    icon: Building,
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100/50",
    description:
      "Expert advice on choosing universities that align with your academic profile, career goals, and budget.",
  },
  {
    title: "Application Assistance",
    icon: FileCheck,
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100/50",
    description:
      "End-to-end support with university applications, including document preparation and submission.",
  },
  {
    title: "Visa Guidance",
    icon: Plane,
    gradient: "from-amber-500 to-amber-600",
    bgGradient: "from-amber-50 to-amber-100/50",
    description:
      "Comprehensive visa application support, interview preparation, and documentation assistance.",
  },
  {
    title: "Accommodation",
    icon: Home,
    gradient: "from-pink-500 to-pink-600",
    bgGradient: "from-pink-50 to-pink-100/50",
    description:
      "Help finding suitable accommodation options near your university, within your budget and preferences.",
  },
  {
    title: "Health Cover",
    icon: Heart,
    gradient: "from-rose-500 to-rose-600",
    bgGradient: "from-rose-50 to-rose-100/50",
    description:
      "Assistance with obtaining appropriate health insurance coverage for your stay abroad.",
  },
  {
    title: "Education Loan & Fees Transfer",
    icon: CreditCard,
    gradient: "from-indigo-500 to-indigo-600",
    bgGradient: "from-indigo-50 to-indigo-100/50",
    description:
      "Guidance on education loan options, documentation requirements, and application procedures.",
  },
  {
    title: "Bank Account Setup",
    icon: FileEdit,
    gradient: "from-cyan-500 to-cyan-600",
    bgGradient: "from-cyan-50 to-cyan-100/50",
    description:
      "Support with setting up bank accounts in your destination country for seamless financial management.",
  },
];

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Staggered loading for cards
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white via-behrani-50/40 to-white relative overflow-hidden" id="services">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-behrani-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-behrani-300/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center max-w-4xl mx-auto mb-10 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <Badge className="mb-6 px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-behrani-100 to-behrani-200 text-behrani-800 border-0 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            End-to-End Support For Your International Education Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            From selecting the right university to settling into your new life abroad, 
            we provide comprehensive assistance at every step.
          </p>
        </div>

        {/* Modern Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-0 bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  isLoaded 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isLoaded ? `${index * 100}ms` : "0ms"
                }}
              >
                {/* Gradient background overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Decorative corner element */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`}></div>
                
                <CardContent className="p-6 relative z-10">
                  {/* Icon with gradient background */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-900 transition-colors leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center text-sm font-semibold text-gray-400 group-hover:text-behrani-600 transition-colors duration-300">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your journey?
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-behrani-600 to-behrani-700 hover:from-behrani-700 hover:to-behrani-800 text-white shadow-lg shadow-behrani-500/30 hover:shadow-xl hover:shadow-behrani-500/40 transition-all duration-300 hover:scale-105 h-12 px-8 text-base font-semibold"
          >
            <a href="#contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
