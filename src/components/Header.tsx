import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Destinations", href: "#locations", id: "locations" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "Updates", href: "#news", id: "news" },
  { label: "About", href: "#about", id: "about" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection (scroll spy)
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Check on mount

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest("header")) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100/50"
          : "py-4 bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center group transition-transform duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="/FINAL_LOGO_PRAVEEN_JI.png"
              alt="GoGlobal Logo"
              className={`transition-all duration-300 object-contain ${
                isScrolled 
                  ? "h-12 sm:h-14 md:h-16 max-w-[140px] sm:max-w-[160px] md:max-w-[180px]" 
                  : "h-14 sm:h-16 md:h-20 max-w-[160px] sm:max-w-[200px] md:max-w-[240px]"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 text-base font-semibold transition-all duration-300 rounded-lg group ${
                    isActive
                      ? "text-behrani-600 bg-behrani-50"
                      : "text-gray-700 hover:text-behrani-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-behrani-600 rounded-full"></span>
                  )}
                  <span className="absolute inset-0 rounded-lg bg-behrani-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
                </a>
              );
            })}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center ml-6">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative px-6 py-2.5 bg-gradient-to-r from-behrani-600 to-behrani-700 text-white font-semibold text-base rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-behrani-700 hover:to-behrani-800 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-behrani-700 to-behrani-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 p-2 rounded-lg text-gray-700 hover:text-behrani-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-behrani-500 focus:ring-offset-2"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
                size={24}
              />
              <X
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
                size={24}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen
            ? "max-h-[600px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <li
                  key={item.id}
                  className={isMenuOpen ? "animate-fade-in" : "opacity-0"}
                  style={isMenuOpen ? { animationDelay: `${index * 50}ms` } : {}}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-base transition-all duration-200 ${
                      isActive
                        ? "text-behrani-600 bg-behrani-50 border-l-4 border-behrani-600"
                        : "text-gray-700 hover:text-behrani-600 hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 bg-behrani-600 rounded-full"></span>
                    )}
                  </a>
                </li>
              );
            })}
            <li 
              className={`pt-4 border-t border-gray-200 ${isMenuOpen ? "animate-fade-in" : "opacity-0"}`}
              style={isMenuOpen ? { animationDelay: `${navItems.length * 50}ms` } : {}}
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block w-full px-4 py-3 bg-gradient-to-r from-behrani-600 to-behrani-700 text-white font-semibold text-base text-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;