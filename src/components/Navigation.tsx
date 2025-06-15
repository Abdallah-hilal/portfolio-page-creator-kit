import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const navItem = navItems.find((item) => item.href === `#${entry.target.id}`);
            if (navItem) {
              setActiveItem(navItem.name);
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        {/* Desktop Navigation - Pill Shape with Logo */}
        <div className="hidden lg:flex items-center bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 px-4 py-3 gap-4">
          {/* Logo and Name */}
          <a
            href="#home"
            onClick={() => setActiveItem("Home")}
            className="flex items-center px-3 gap-3 text-gray-900 hover:text-[#F17C58] transition-colors"
          >
            <Logo size="small" />
            <span className="font-bold text-lg whitespace-nowrap">Abdallah Helal</span>
          </a>
          
          {/* Navigation Items */}
          <div className="flex items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`px-4 py-3 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                  activeItem === item.name
                    ? "bg-[#F17C58] text-white shadow-md"
                    : "text-gray-700 hover:text-[#F17C58] hover:bg-gray-50"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation - Enhanced Design */}
        <div className="lg:hidden relative">
          {/* Mobile Header */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 px-6 py-4 flex items-center justify-between min-w-[200px]">
            {/* Logo and Name */}
            <a
              href="#home"
              className="flex items-center"
              onClick={() => {
                setActiveItem("Home");
                setIsOpen(false);
              }}
            >
              <Logo size="small" />
              <span className="ml-3 font-bold text-gray-900 text-lg">Abdallah Helal</span>
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu 
                  className={`absolute w-5 h-5 transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  className={`absolute w-5 h-5 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} 
                />
              </div>
            </button>
          </div>

          {/* Mobile Dropdown - Enhanced with animations */}
          <div className={`absolute top-full mt-3 left-0 right-0 transition-all duration-300 ease-out ${
            isOpen 
              ? 'opacity-100 transform translate-y-0 pointer-events-auto' 
              : 'opacity-0 transform -translate-y-4 pointer-events-none'
          }`}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-2 overflow-hidden">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center py-4 px-5 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 ${
                      activeItem === item.name
                        ? 'bg-[#F17C58] text-white shadow-lg'
                        : 'text-gray-700 hover:text-[#F17C58] hover:bg-gray-50'
                    }`}
                    style={{
                      animationDelay: isOpen ? `${index * 50}ms` : '0ms'
                    }}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsOpen(false);
                    }}
                  >
                    <span className="text-lg">{item.name}</span>
                    <div className={`ml-auto w-2 h-2 rounded-full transition-all duration-300 ${
                      activeItem === item.name ? 'bg-white' : 'bg-transparent'
                    }`} />
                  </a>
                ))}
              </div>
              
              {/* Mobile Footer */}
              <div className="mt-4 pt-4 border-t border-gray-200/50">
                <div className="px-5 py-3 text-center">
                  <div className="text-xs text-gray-500 font-medium">
                    © 2024 Portfolio
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Backdrop */}
          {isOpen && (
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </nav>
      {isHomePage && activeItem === "Home" && (
        <Button asChild className="hidden lg:flex fixed top-8 right-16 z-50 bg-[#F17C58] hover:bg-[#E16A47] text-white px-8 py-4 rounded-full text-base font-semibold items-center gap-2 shadow-md hover:shadow-lg transition-all">
          <a href="https://drive.google.com/file/d/1Bm92GbS2ei0P9oKTy3XS-JLFghZbfgg0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FileText className="w-5 h-5" />
            View Resume
          </a>
        </Button>
      )}
    </>
  );
};

export default Navigation;
