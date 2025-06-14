
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Work", href: "#experience" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Desktop Navigation - Pill Shape with Logo */}
      <div className="hidden lg:flex items-center bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 px-6 py-4 gap-6">
        {/* Logo and Name */}
        <div className="flex items-center gap-3 px-3">
          <Logo size="small" />
          <div className="flex flex-col">
            <span className="font-bold text-gray-900 text-lg">Abdallah Helal</span>
            <span className="text-xs text-gray-600 font-medium">Data Scientist</span>
          </div>
        </div>
        
        {/* Navigation Items */}
        <div className="flex items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
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

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 px-5 py-3 flex items-center justify-between min-w-[220px]">
          <div className="flex items-center gap-3">
            <Logo size="small" />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-base">Abdallah Helal</span>
              <span className="text-xs text-gray-600 font-medium">Data Scientist</span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full mt-2 left-0 right-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:text-[#F17C58] hover:bg-gray-50 rounded-xl font-medium transition-colors"
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
