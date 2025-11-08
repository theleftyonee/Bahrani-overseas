import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/95 backdrop-blur-sm shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
          <img
            src="/FINAL_LOGO_PRAVEEN_JI.png"
            alt="GoGlobal Logo"
            className="h-20 w-auto max-w-[160px] md:h-32 md:max-w-[240px] object-contain"
          />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                {["services", "education", "testimonials", "news", "about"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        className="text-gray-700 hover:text-behrani-500 font-medium transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-behrani-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <a
              href="#contact"
              className="bg-behrani-600 hover:bg-behrani-700 text-white py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4">
            <nav>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#services"
                    className="text-gray-700 hover:text-behrani-500 font-medium block py-2"
                    onClick={toggleMenu}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="text-gray-700 hover:text-behrani-500 font-medium block py-2"
                    onClick={toggleMenu}
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#locations"
                    className="text-gray-700 hover:text-behrani-500 font-medium block py-2"
                    onClick={toggleMenu}
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-700 hover:text-behrani-500 font-medium block py-2"
                    onClick={toggleMenu}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#news"
                    className="text-gray-700 hover:text-behrani-500 font-medium block py-2"
                    onClick={toggleMenu}
                  >
                    Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-700 hover:text-behrani-500 font-medium block py-2"
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="bg-behrani-500 text-white py-2 px-6 rounded-md block text-center"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;