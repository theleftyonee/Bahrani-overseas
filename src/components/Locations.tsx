import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, GraduationCap, Building, Users, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-behrani-50" id="locations">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 text-sm bg-behrani-100 text-behrani-800 rounded-full mb-4">
            Study Destinations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore Global Education Opportunities
          </h2>
          <p className="text-lg text-gray-600">
            Discover the perfect study destination that aligns with your academic goals,
            career aspirations, and personal preferences.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="uk" className="max-w-6xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="flex overflow-x-auto gap-4 mb-8 md:mb-12 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-md">
            {locations.map((location) => (
              <TabsTrigger
                key={location.id}
                value={location.id}
                className="px-8 py-3 whitespace-nowrap text-base font-medium transition-all duration-300 hover:bg-behrani-50 data-[state=active]:bg-behrani-600 data-[state=active]:text-white"
              >
                {location.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {locations.map((location) => (
            <TabsContent
              key={location.id}
              value={location.id}
              className="mt-0 transition-all duration-300 animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Card */}
                <div className="relative overflow-hidden rounded-2xl group">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    style={{ minHeight: "400px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                    {/* Make Badge an inline-block to fit its text */}
                    <Badge className="inline-block bg-behrani-500 hover:bg-behrani-600 mb-3 px-3 py-1 text-sm font-medium">
                      Popular Destination
                    </Badge>
                    <h3 className="text-3xl font-bold text-white">{location.name}</h3>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Why Study in {location.name}?</h3>
                    <p className="text-gray-700 mb-4">{location.description}</p>
                    <ul className="space-y-3">
                      {location.usp.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-behrani-100 text-behrani-600 rounded-full p-1 mr-3 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-check"
                            >
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <Card className="border-0 bg-white shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <GraduationCap className="h-5 w-5 text-behrani-500 mr-2" />
                          <h4 className="font-semibold">Top Universities</h4>
                        </div>
                        <ul className="text-sm space-y-1 text-gray-700">
                          {location.topUniversities.map((uni, index) => (
                            <li key={index}>• {uni}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-0 bg-white shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div className="mb-3">
                            <div className="flex items-center mb-2">
                              <Building className="h-5 w-5 text-behrani-500 mr-2" />
                              <h4 className="font-semibold">Avg. Tuition</h4>
                            </div>
                            <p className="text-gray-700">{location.averageTuition}</p>
                          </div>
                          <div>
                            <div className="flex items-center mb-2">
                              <Users className="h-5 w-5 text-behrani-500 mr-2" />
                              <h4 className="font-semibold">Living Cost</h4>
                            </div>
                            <p className="text-gray-700">{location.costOfLiving}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <a
                      href="#contact"
                      className="flex items-center justify-center px-6 py-3 bg-behrani-600 hover:bg-behrani-700 text-white rounded-md transition-colors shadow-md"
                    >
                      <Globe className="mr-2 h-5 w-5" />
                      Study in {location.name}
                    </a>
                    <a
                      href={`#${location.id}-universities`}
                      // className="flex items-center justify-center px-6 py-3 border border-behrani-600 text-behrani-600 hover:bg-behrani-50 rounded-md transition-colors"
                    >
                      {/* Additional button content can go here */}
                    </a>
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