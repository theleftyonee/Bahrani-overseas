import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, GraduationCap, Building, Users, Globe, ArrowRight, CheckCircle2, TrendingUp, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const locations = [
  {
    id: "uk",
    // Renamed from "United Kingdom" to "UK"
    name: "UK",
    image: "uk.jpg",
    description:
      "Home to some of the world's oldest and most prestigious universities including Oxford and Cambridge.",
    usp: [
      "World-class education system with globally recognized qualifications",
      "Shorter duration courses (3 years for Bachelors, 1 year for Masters)",
      "Diverse range of courses and specializations",
      "Post-study work visa opportunities for 2 years",
    ],
    topUniversities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London",
      "University of Edinburgh",
    ],
    averageTuition: "$25,000 - $50,000 per year",
    costOfLiving: "High ($15,000 - $20,000 per year)",
  },
  {
    id: "us",
    name: "United States",
    image: "nyc.jpg",
    description:
      "The USA offers the world's largest higher education system with unparalleled research opportunities.",
    usp: [
      "Flexible education system with thousands of institutions",
      "Cutting-edge research facilities and innovation hubs",
      "Vibrant campus life and strong alumni networks",
      "Optional Practical Training (OPT) for up to 3 years",
    ],
    topUniversities: [
      "Harvard University",
      "Stanford University",
      "MIT",
      "California Institute of Technology",
      "Princeton University",
    ],
    averageTuition: "$25,000 - $60,000 per year",
    costOfLiving: "Varies by location ($10,000 - $25,000 per year)",
  },
  {
    id: "canada",
    name: "Canada",
    image: "canada.jpg",
    description:
      "Known for its high quality of education, affordable tuition, and immigrant-friendly policies.",
    usp: [
      "Welcoming immigration policies and pathway to permanent residency",
      "Safe, multicultural environment with high quality of life",
      "Work opportunities during and after studies",
      "Post-Graduation Work Permit for up to 3 years",
    ],
    topUniversities: [
      "University of Toronto",
      "McGill University",
      "University of British Columbia",
      "University of Alberta",
      "McMaster University",
    ],
    averageTuition: "$15,000 - $35,000 per year",
    costOfLiving: "Moderate ($10,000 - $15,000 per year)",
  },
  {
    id: "australia",
    name: "Australia",
    image: "aus.jpg.avif",
    description:
      "Australia offers world-class education in a diverse and welcoming environment with stunning natural beauty.",
    usp: [
      "High-quality education system with practical approach",
      "Excellent quality of life and work opportunities",
      "Post-study work visa for up to 4 years",
      "Strong industry connections and internship programs",
    ],
    topUniversities: [
      "University of Melbourne",
      "Australian National University",
      "University of Sydney",
      "University of Queensland",
      "Monash University",
    ],
    averageTuition: "$20,000 - $45,000 per year",
    costOfLiving: "Moderate to High ($15,000 - $20,000 per year)",
  },
  {
    id: "newzealand",
    name: "New Zealand",
    image: "nz.jpg",
    description:
      "New Zealand offers high-quality education with a focus on research and innovation in a stunning natural environment.",
    usp: [
      "Globally recognized qualifications with practical learning approach",
      "Safe country with spectacular scenery and outdoor lifestyle",
      "Work rights during and after studies",
      "Post-study work visa for up to 3 years",
    ],
    topUniversities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
      "Massey University",
    ],
    averageTuition: "$18,000 - $30,000 per year",
    costOfLiving: "Moderate ($12,000 - $18,000 per year)",
  },
  {
    id: "europe",
    name: "Europe (Germany, France, Italy)",
    image: "eur.jxl",
    description:
      "European countries offer high-quality education often at much lower costs than other destinations.",
    usp: [
      "Low or no tuition fees in many countries",
      "Rich cultural experiences and ease of travel between countries",
      "Growing number of English-taught programs",
      "Strong emphasis on research and innovation",
    ],
    topUniversities: [
      "Technical University of Munich",
      "Sorbonne University",
      "University of Bologna",
      "Heidelberg University",
      "École Polytechnique",
    ],
    averageTuition: "$0 - $20,000 per year (varies widely by country)",
    costOfLiving: "Varies by country ($8,000 - $20,000 per year)",
  },
  {
    id: "singapore",
    name: "Singapore",
    image: "singapore.webp",
    description:
      "Singapore is an education hub in Asia with world-class universities and strong industry connections.",
    usp: [
      "Strategic location in the heart of Asia",
      "Multicultural environment with English as working language",
      "Strong economic opportunities and industry links",
      "Safe and clean city with excellent infrastructure",
    ],
    topUniversities: [
      "National University of Singapore",
      "Nanyang Technological University",
      "Singapore Management University",
    ],
    averageTuition: "$20,000 - $40,000 per year",
    costOfLiving: "High ($15,000 - $20,000 per year)",
  },
  {
    id: "dubai",
    name: "Dubai",
    image: "dubai.avif",
    description:
      "Dubai blends world-class infrastructure, a dynamic multicultural environment, and innovative educational institutions to create a unique study destination.",
    usp: [
      "Emerging global education hub in the Middle East",
      "State-of-the-art facilities and innovative learning environments",
      "Opportunities with international universities and diverse courses",
      "Dynamic job market and internship opportunities in multinational companies",
    ],
    topUniversities: [
      "American University in Dubai",
      "University of Wollongong in Dubai",
      "Hult International Business School",
      "Middlesex University Dubai",
      "Murdoch University Dubai",
    ],
    averageTuition: "$15,000 - $35,000 per year",
    costOfLiving: "High ($20,000 - $30,000 per year)",
  },
];

const Locations = () => {
  const [activeTab, setActiveTab] = useState("uk");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white via-behrani-50/30 to-white relative overflow-hidden" id="locations">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-behrani-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-behrani-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <Badge className="mb-6 px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-behrani-100 to-behrani-200 text-behrani-800 border-0 shadow-sm">
            <MapPin className="w-3.5 h-3.5 mr-2" />
            Study Destinations
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Explore Global Education Opportunities
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Discover the perfect study destination that aligns with your academic goals,
            career aspirations, and personal preferences.
          </p>
        </div>

        {/* Modern Tabs Navigation */}
        <Tabs defaultValue="uk" className="max-w-7xl mx-auto" onValueChange={setActiveTab}>
          <div className="relative mb-12">
            {/* Scrollable tabs container */}
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
              <TabsList className="inline-flex h-auto p-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100/50 gap-2 min-w-max">
                {locations.map((location) => (
                  <TabsTrigger
                    key={location.id}
                    value={location.id}
                    className="group relative px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-behrani-600 data-[state=inactive]:hover:bg-behrani-50/50 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-behrani-600 data-[state=active]:to-behrani-700 data-[state=active]:shadow-lg data-[state=active]:shadow-behrani-500/30 data-[state=active]:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {location.name}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {locations.map((location) => (
            <TabsContent
              key={location.id}
              value={location.id}
              className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:zoom-in-95 duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                {/* Enhanced Image Card */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-behrani-600/20 to-transparent z-10"></div>
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                      <Badge className="mb-4 bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30">
                        <TrendingUp className="w-3.5 h-3.5 mr-2" />
                        Popular Destination
                      </Badge>
                      <h3 className="text-4xl font-bold text-white mb-2">{location.name}</h3>
                      <p className="text-white/90 text-sm">{location.description}</p>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-behrani-200 rounded-full blur-2xl opacity-50"></div>
                  
                  {/* CTA Button - Moved below image */}
                  <div className="mt-8 relative z-10">
                    <Button
                      asChild
                      className="w-full group bg-gradient-to-r from-behrani-600 to-behrani-700 hover:from-behrani-700 hover:to-behrani-800 text-white shadow-lg shadow-behrani-500/30 hover:shadow-xl hover:shadow-behrani-500/40 transition-all duration-300 hover:scale-105 h-12 px-8 text-base font-semibold"
                    >
                      <a 
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById("contact");
                          if (element) {
                            const headerOffset = 100;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.scrollY - headerOffset;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: "smooth",
                            });
                          }
                        }}
                      >
                        <Globe className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        Start Your Journey to {location.name}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Enhanced Content Panel */}
                <div className="space-y-8 flex flex-col justify-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-behrani-100 rounded-full mb-6">
                      <Globe className="w-4 h-4 text-behrani-600" />
                      <span className="text-sm font-semibold text-behrani-800">Why Choose {location.name}?</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Your Path to Excellence
                    </h3>
                    <ul className="space-y-5">
                      {location.usp.map((point, index) => (
                        <li key={index} className="flex items-start group/item">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-behrani-500 to-behrani-600 flex items-center justify-center mr-4 mt-0.5 shadow-lg shadow-behrani-500/30 group-hover/item:scale-110 transition-transform">
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-700 leading-relaxed pt-1.5 text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enhanced Info Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <Card className="border-0 bg-gradient-to-br from-white to-behrani-50/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-5">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-behrani-500 to-behrani-600 flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform">
                            <GraduationCap className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="font-bold text-lg">Top Universities</h4>
                        </div>
                        <ul className="text-sm space-y-3 text-gray-700">
                          {location.topUniversities.slice(0, 3).map((uni, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-behrani-500 flex-shrink-0"></div>
                              <span className="leading-relaxed">{uni}</span>
                            </li>
                          ))}
                          {location.topUniversities.length > 3 && (
                            <li className="text-behrani-600 font-medium text-sm mt-3 pt-2 border-t border-gray-200">
                              +{location.topUniversities.length - 3} more
                            </li>
                          )}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-0 bg-gradient-to-br from-white to-behrani-50/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6 space-y-6">
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mr-3 shadow-md">
                              <DollarSign className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="font-bold text-lg">Tuition Fees</h4>
                          </div>
                          <p className="text-gray-700 font-semibold text-base mt-2">{location.averageTuition}</p>
                        </div>
                        <div className="pt-6 border-t border-gray-200">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3 shadow-md">
                              <Users className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="font-bold text-lg">Living Cost</h4>
                          </div>
                          <p className="text-gray-700 font-semibold text-base mt-2">{location.costOfLiving}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Locations;