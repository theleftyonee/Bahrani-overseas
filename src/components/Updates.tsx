
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight } from "lucide-react";

const newsUpdates = [
  {
    id: 1,
    title: "New UK Post-Study Work Visa Regulations Announced",
    excerpt: "The UK government has extended the Graduate Route visa to allow international students to work for up to 3 years after graduation.",
    date: "2023-11-15",
    category: "Visa Updates",
    image: "https://images.unsplash.com/photo-1543832923-44667a44c804?ixlib=rb-4.0.3&auto=format&fit=crop&w=1444&q=80"
  },
  {
    id: 2,
    title: "Canada Increases Express Entry Draws for International Graduates",
    excerpt: "Canada has announced more frequent Express Entry draws specifically targeting international graduates, making it easier to obtain permanent residency.",
    date: "2023-12-01",
    category: "Immigration",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Australian Universities Announce New Scholarships for 2024",
    excerpt: "Top Australian universities have revealed new scholarship programs for international students starting in the 2024 academic year.",
    date: "2023-12-10",
    category: "Scholarships",
    image: "https://images.unsplash.com/photo-1577036421869-7c8d388d2123?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
  },
  {
    id: 4,
    title: "Germany Expands English-Taught Programs in Public Universities",
    excerpt: "German public universities are expanding their English-taught programs to attract more international students in STEM fields.",
    date: "2023-12-18",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1570842407106-269501aa0a30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80"
  },
  {
    id: 5,
    title: "New Zealand Reopens Borders with Streamlined Student Visa Process",
    excerpt: "New Zealand has fully reopened its borders and introduced a faster visa processing system for international students.",
    date: "2023-12-22",
    category: "Visa Updates",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 6,
    title: "USA Announces STEM OPT Extension Opportunities",
    excerpt: "The United States has expanded the Optional Practical Training (OPT) program for STEM graduates, allowing longer work periods.",
    date: "2024-01-05",
    category: "Work Opportunities",
    image: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  }
];

// Format date function
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Category color mapping
const categoryColors: Record<string, string> = {
  "Visa Updates": "bg-blue-100 text-blue-800 border-blue-200",
  "Immigration": "bg-green-100 text-green-800 border-green-200",
  "Scholarships": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Programs": "bg-purple-100 text-purple-800 border-purple-200",
  "Work Opportunities": "bg-orange-100 text-orange-800 border-orange-200"
};

const marqueeNews = [
  "New UK Graduate Route visa extended to 3 years for PhD graduates",
  "Canada increases immigration targets for international students",
  "Australian universities announce new scholarship opportunities for 2024",
  "Germany eliminates tuition fees for more public university programs",
  "USA introduces new STEM scholarships for international students",
  "New Zealand simplifies post-study work visa application process",
  "Singapore universities rise in global rankings for technology programs",
  "Ireland extends stay-back option for international graduates",
  "UAE launches new talent attraction program for international students",
  "Italy introduces more English-taught degree programs in public universities"
];

const Updates = () => {
  const [visibleNews, setVisibleNews] = useState(3);
  const [marqueeIndex, setMarqueeIndex] = useState(0);

  useEffect(() => {
    const marqueeInterval = setInterval(() => {
      setMarqueeIndex((prevIndex) => (prevIndex + 1) % marqueeNews.length);
    }, 5000);

    return () => clearInterval(marqueeInterval);
  }, []);

  const showMoreNews = () => {
    setVisibleNews(newsUpdates.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="news">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 text-sm bg-behrani-100 text-behrani-800 rounded-full mb-4">
            Stay Informed
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Latest Education Updates
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with the latest news, visa changes, and opportunities in international education
          </p>
        </div>

        {/* News Marquee */}
        <div className="bg-behrani-50 py-4 px-4 rounded-lg mb-12 overflow-hidden relative">
          <div className="flex items-center">
            <span className="bg-behrani-600 text-white text-sm font-medium px-3 py-1 rounded-full mr-4">
              LATEST
            </span>
            <div className="relative overflow-hidden flex-1">
              <div 
                className="transition-transform duration-1000 ease-in-out whitespace-nowrap"
                style={{ transform: `translateY(-${marqueeIndex * 100}%)` }}
              >
                {marqueeNews.map((news, index) => (
                  <div 
                    key={index} 
                    className={`py-1 ${marqueeIndex === index ? 'block' : 'hidden'}`}
                  >
                    {news}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsUpdates.slice(0, visibleNews).map((news) => (
            <Card key={news.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <Badge variant="outline" className={categoryColors[news.category] || "bg-gray-100 text-gray-800 border-gray-200"}>
                    {news.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {formatDate(news.date)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{news.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
                <a 
                  href={`#news-${news.id}`} 
                  className="text-behrani-600 font-medium flex items-center hover:text-behrani-700 transition-colors"
                >
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleNews < newsUpdates.length && (
          <div className="text-center mt-10">
            <button 
              onClick={showMoreNews}
              className="border border-behrani-600 text-behrani-600 hover:bg-behrani-50 py-3 px-6 rounded-md transition-colors"
            >
              View More Updates
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Updates;
