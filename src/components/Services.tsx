
import {
  GraduationCap,
  FileCheck,
  Plane,
  Home,
  Heart,
  Building,
  FileEdit,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Counseling",
    icon: <GraduationCap className="h-8 w-8 text-behrani-500" />,
    description:
      "Personalized guidance from experienced consultants who understand your academic goals and career aspirations.",
  },
  {
    title: "University Selection",
    icon: <Building className="h-8 w-8 text-behrani-500" />,
    description:
      "Expert advice on choosing universities that align with your academic profile, career goals, and budget.",
  },
  {
    title: "Application Assistance",
    icon: <FileCheck className="h-8 w-8 text-behrani-500" />,
    description:
      "End-to-end support with university applications, including document preparation and submission.",
  },
  {
    title: "Visa Guidance",
    icon: <Plane className="h-8 w-8 text-behrani-500" />,
    description:
      "Comprehensive visa application support, interview preparation, and documentation assistance.",
  },
  {
    title: "Accommodation",
    icon: <Home className="h-8 w-8 text-behrani-500" />,
    description:
      "Help finding suitable accommodation options near your university, within your budget and preferences.",
  },
  {
    title: "Health Cover",
    icon: <Heart className="h-8 w-8 text-behrani-500" />,
    description:
      "Assistance with obtaining appropriate health insurance coverage for your stay abroad.",
  },
  {
    title: "Education Loan and Fees Transfer",
    icon: <CreditCard className="h-8 w-8 text-behrani-500" />,
    description:
      "Guidance on education loan options, documentation requirements, and application procedures.",
  },
  {
    title: "International Bank Account Setup",
    icon: <FileEdit className="h-8 w-8 text-behrani-500" />,
    description:
      "Support with setting up bank accounts in your destination country for seamless financial management.",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-behrani-50" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm bg-behrani-100 text-behrani-800 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            End-to-End Support For Your International Education Journey
          </h2>
          <p className="text-lg text-gray-600">
            From selecting the right university to settling into your new life abroad, 
            we provide comprehensive assistance at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white border-0 overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-behrani-100 rounded-full opacity-40"></div>
              <div className="relative z-10">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {/* <Button variant="ghost" className="p-0 text-behrani-600 hover:text-behrani-700 hover:bg-transparent">
                  Learn more →
                </Button> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
