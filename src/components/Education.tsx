import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, FileText, GraduationCap, Gem } from "lucide-react";

const Education = () => {
  const [activeTab, setActiveTab] = useState("english");

  return (
    <section className="py-10 md:py-14 bg-white" id="education">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 text-sm bg-behrani-100 text-behrani-800 rounded-full mb-4">
            Education Support
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Exam Preparation
          </h2>
          <p className="text-lg text-gray-600">
            Expert coaching for all major international exams required for overseas education
          </p>
        </div>

        <Tabs 
          defaultValue="english" 
          className="max-w-5xl mx-auto" 
          onValueChange={setActiveTab}
        >
          <TabsList className="inline-flex p-1 bg-behrani-100/20 rounded-xl mb-12">
            <TabsTrigger 
              value="english" 
              className="px-6 py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:text-behrani-800 data-[state=active]:shadow-sm transition-all duration-300"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              English Proficiency Tests
            </TabsTrigger>
            <TabsTrigger 
              value="admissions"
              className="px-6 py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:text-behrani-800 data-[state=active]:shadow-sm transition-all duration-300"
            >
              <Gem className="w-5 h-5 mr-2" />
              Admission Tests
            </TabsTrigger>
          </TabsList>

          <TabsContent value="english" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className={`border-0 shadow-md hover:shadow-lg transition-all ${activeTab === "english" ? "animate-fade-in" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-6 w-6 text-behrani-500 mr-2" />
                    IELTS Preparation
                  </CardTitle>
                  <CardDescription>International English Language Testing System</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">Our comprehensive IELTS coaching covers all four modules:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Reading</li>
                      <li>Writing</li>
                      <li>Listening</li>
                      <li>Speaking</li>
                    </ul>
                    <div className="pt-2">
                      <Badge variant="outline" className="bg-behrani-50 text-behrani-700 border-behrani-200">Most Popular</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`border-0 shadow-md hover:shadow-lg transition-all ${activeTab === "english" ? "animate-fade-in" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-6 w-6 text-behrani-500 mr-2" />
                    TOEFL Coaching
                  </CardTitle>
                  <CardDescription>Test of English as a Foreign Language</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">Our TOEFL preparation program focuses on:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Computer-based test strategies</li>
                      <li>Academic English proficiency</li>
                      <li>Integrated skills practice</li>
                      <li>Score improvement techniques</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className={`border-0 shadow-md hover:shadow-lg transition-all ${activeTab === "english" ? "animate-fade-in" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-6 w-6 text-behrani-500 mr-2" />
                    PTE Academic
                  </CardTitle>
                  <CardDescription>Pearson Test of English Academic</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">Our PTE Academic coaching includes:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Computer-based test format practice</li>
                      <li>AI scoring system insights</li>
                      <li>Time management strategies</li>
                      <li>Speaking and writing modules</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="admissions" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className={`border-0 shadow-md hover:shadow-lg transition-all ${activeTab === "admissions" ? "animate-fade-in" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 text-behrani-500 mr-2" />
                    GRE Preparation
                  </CardTitle>
                  <CardDescription>Graduate Record Examination</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">Our GRE coaching covers:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Verbal Reasoning</li>
                      <li>Quantitative Reasoning</li>
                      <li>Analytical Writing</li>
                      <li>Advanced test-taking strategies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className={`border-0 shadow-md hover:shadow-lg transition-all ${activeTab === "admissions" ? "animate-fade-in" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 text-behrani-500 mr-2" />
                    GMAT Training
                  </CardTitle>
                  <CardDescription>Graduate Management Admission Test</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">Our GMAT preparation includes:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Analytical Writing Assessment</li>
                      <li>Integrated Reasoning</li>
                      <li>Quantitative Section</li>
                      <li>Verbal Section</li>
                    </ul>
                    <div className="pt-2">
                      <Badge variant="outline" className="bg-behrani-50 text-behrani-700 border-behrani-200">Business School Focus</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`border-0 shadow-md hover:shadow-lg transition-all ${activeTab === "admissions" ? "animate-fade-in" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 text-behrani-500 mr-2" />
                    SAT Preparation
                  </CardTitle>
                  <CardDescription>Scholastic Assessment Test</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">Our SAT coaching focuses on:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Evidence-Based Reading and Writing</li>
                      <li>Mathematics</li>
                      <li>Essay (optional)</li>
                      <li>Practice tests and analysis</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-gradient-to-r from-behrani-100 to-purple-100 p-8 rounded-xl max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Help With Exam Preparation?</h3>
              <p className="text-gray-700">Our expert coaches have helped thousands of students achieve their target scores.</p>
            </div>
            <div>
              <a href="#contact" className="inline-block bg-behrani-600 hover:bg-behrani-700 text-white py-3 px-6 rounded-md transition-colors shadow-md">
                Book a Free Demo Class
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
