
import { useState, useEffect, useRef } from "react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "Masters in Computer Science",
    university: "University of Toronto, Canada",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    quote: "Behrani Overseas Education made my dream of studying in Canada come true. Their counselors guided me through every step, from university selection to visa approval. I'm now studying at my dream university!",
    rating: 5,
  },
  {
    id: 2,
    name: "Arjun Patel",
    course: "MBA",
    university: "London Business School, UK",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    quote: "The team at Behrani provided exceptional guidance for my MBA applications. Their insights on essay writing and interview preparation were invaluable. I received offers from multiple top business schools!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Reddy",
    course: "Bachelor of Engineering",
    university: "University of Melbourne, Australia",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1161&q=80",
    quote: "I was confused about which course to choose, but the counselors at Behrani helped me identify my strengths and interests. Their exam preparation coaching also helped me score well in IELTS.",
    rating: 4,
  },
  {
    id: 4,
    name: "Rahul Mehra",
    course: "MS in Data Science",
    university: "Technical University of Munich, Germany",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    quote: "I was skeptical about studying in Germany due to the language barrier, but Behrani's team provided me with comprehensive information and language preparation. Their visa guidance was spot on!",
    rating: 5,
  },
  {
    id: 5,
    name: "Divya Kapoor",
    course: "Masters in Marketing",
    university: "NTU Singapore",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1364&q=80",
    quote: "From SOP writing to scholarship applications, Behrani supported me at every step. Their attention to detail and personalized approach sets them apart from other consultancies.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section 
      className="py-16 md:py-24 bg-behrani-800 text-white"
      id="testimonials"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm bg-white/10 text-white rounded-full mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-200">
            Hear directly from students who achieved their international education dreams with our guidance
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white shadow-xl">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/3">
                        <div className="relative">
                          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-behrani-300">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-behrani-600 rounded-full p-2">
                            <Quote className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <div className="text-center mt-8">
                          <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                          <p className="text-gray-300 text-sm">{testimonial.course}</p>
                          <p className="text-gray-300 text-sm">{testimonial.university}</p>
                          <div className="flex justify-center mt-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-behrani-300 text-behrani-300" />
                            ))}
                            {[...Array(5 - testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-gray-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <blockquote className="relative">
                          <p className="text-xl italic leading-relaxed">"{testimonial.quote}"</p>
                        </blockquote>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button 
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full mx-2 transition-colors"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full mx-2 transition-colors"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.youtube.com/watch?v=aBcDeFgHiJk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-behrani-600 hover:bg-behrani-700 text-white py-3 px-6 rounded-md transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video mr-2"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
              Watch Student Video Testimonials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
