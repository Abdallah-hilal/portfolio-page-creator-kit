
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "SERVICES", href: "#about" },
    { name: "WORKS", href: "#projects" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F17C58]/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gray-900 font-serif italic">
            AH
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  index === 0 
                    ? 'text-gray-900 border border-gray-900 px-4 py-2 rounded-full' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.name}
                {index !== 0 && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                )}
              </a>
            ))}
          </div>
          
          {/* Phone number */}
          <div className="hidden md:block text-sm font-medium text-gray-900">
            +001 (313) 345 678
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
