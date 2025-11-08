
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <Services />
        <Education />
        <Locations />
        <UnislaySection />
        <Testimonials />
        <Updates />
        <ContactForm />
        <About />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
