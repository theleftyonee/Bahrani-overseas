import { Phone, Globe, MessagesSquare } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const UnislaySection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-behrani-50">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Onshore Support?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced counsellors have guided over 1000+ successful students globally. 
            Connect with current students through Unislay to make informed ad clearer decisions.
          </p>
        </div>

        {/* Cards placed immediately below the main heading */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-behrani-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Global Student Network</h3>
                  <p className="text-gray-600">
                    Connect with students worldwide who share their authentic experiences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <MessagesSquare className="w-6 h-6 text-behrani-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Direct Student Insights</h3>
                  <p className="text-gray-600">
                    Get firsthand information about universities, courses, and campus life.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Embedded IFrame Section (designed for landscape mode) */}
        <div className="relative h-[600px] w-full">
          <div className="bg-white rounded-[3rem] p-3 shadow-xl mx-auto hover-lift">
            <div className="relative rounded-[2.5rem] overflow-hidden h-[600px] bg-gray-100">
              <iframe
                src="https://unislay.com"
                className="w-full h-full"
                style={{ transform: 'rotate(0deg)', maxWidth: '100%' }}
                title="Unislay Student Community"
              />
            </div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnislaySection;