import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Locations from "@/components/Locations";
import UnislaySection from "@/components/UnislaySection";
import Testimonials from "@/components/Testimonials";
import Updates from "@/components/Updates";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import SectionLoader from "@/components/SectionLoader";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      // PageLoader will handle its own completion
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <PageLoader onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <Header />
          <main>
            {/* Hero loads immediately */}
            <Hero />
            
            {/* Other sections load with staggered delays */}
            <SectionLoader delay={100}>
              <ProblemStatement />
            </SectionLoader>
            
            <SectionLoader delay={200}>
              <Services />
            </SectionLoader>
            
            <SectionLoader delay={300}>
              <Education />
            </SectionLoader>
            
            <SectionLoader delay={400}>
              <Locations />
            </SectionLoader>
            
            <SectionLoader delay={500}>
              <UnislaySection />
            </SectionLoader>
            
            <SectionLoader delay={600}>
              <Testimonials />
            </SectionLoader>
            
            <SectionLoader delay={700}>
              <Updates />
            </SectionLoader>
            
            <SectionLoader delay={800}>
              <ContactForm />
            </SectionLoader>
            
            <SectionLoader delay={900}>
              <About />
            </SectionLoader>
            
            <SectionLoader delay={1000}>
              <FAQ />
            </SectionLoader>
          </main>
          <Footer />
          <ChatWidget />
          <BackToTop />
        </>
      )}
    </div>
  );
};

export default Index;
