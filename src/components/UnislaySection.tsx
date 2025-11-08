import { Globe, MessagesSquare, ExternalLink, ArrowRight, Users, MessageCircle, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const UnislaySection = () => {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-white via-behrani-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-behrani-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-behrani-300/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-4 px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-behrani-100 to-behrani-200 text-behrani-800 border-0 shadow-sm inline-flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Student Community
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Need Onshore Support?
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Our experienced counsellors have guided over <span className="font-bold text-behrani-600">1000+ successful students</span> globally. 
            Connect with current students through{" "}
            <a 
              href="https://unislay.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-behrani-600 hover:text-behrani-700 font-semibold underline decoration-2 underline-offset-2 transition-colors"
            >
              Unislay
            </a>{" "}
            to make informed and clearer decisions.
          </p>
        </div>

        {/* Enhanced Feature Cards - Better spacing and alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          <Card className="group border-0 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Global Student Network</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Connect with students worldwide who share their authentic experiences and insights.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <MessagesSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Direct Student Insights</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Get firsthand information about universities, courses, and campus life.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modern Preview Section - Better proportions */}
        <div className="max-w-5xl mx-auto mb-10">
          <Card className="border-0 shadow-xl overflow-hidden bg-white">
            {/* Preview Header */}
            <div className="bg-gradient-to-r from-behrani-600 to-behrani-700 px-4 md:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <span className="text-white/90 text-xs md:text-sm font-medium">unislay.com</span>
              </div>
              <a 
                href="https://unislay.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Open Unislay in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            {/* Preview Content - Better spacing */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12">
              <div className="flex flex-col items-center text-center space-y-5">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-behrani-100 to-behrani-200 flex items-center justify-center shadow-inner">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-behrani-600" />
                </div>
                <div className="space-y-2 max-w-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Join the Unislay Community</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Connect with thousands of students, get real insights, and make better decisions about your study abroad journey.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                  <Badge variant="outline" className="px-3 py-1.5 bg-behrani-50 border-behrani-200 text-behrani-700">
                    <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                    Student Forums
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1.5 bg-behrani-50 border-behrani-200 text-behrani-700">
                    <Users className="w-3.5 h-3.5 mr-1.5" />
                    University Reviews
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1.5 bg-behrani-50 border-behrani-200 text-behrani-700">
                    <Globe className="w-3.5 h-3.5 mr-1.5" />
                    Global Network
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Enhanced CTA Button - Better positioning */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-behrani-600 to-behrani-700 hover:from-behrani-700 hover:to-behrani-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold group"
          >
            <a 
              href="https://unislay.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 md:gap-3"
            >
              <span>Explore Unislay Community</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="mt-3 text-xs md:text-sm text-gray-500">
            Opens in a new tab • Free to join
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnislaySection;