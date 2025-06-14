import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Education",
    href: "#education"
  }, {
    name: "Experience",
    href: "#experience"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Testimonials",
    href: "#testimonials"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo size="default" />
            <div className="hidden md:block">
              <span className="text-xl font-bold text-gray-900">Abdallah Helal </span>
              <span className="text-sm text-gray-600 block -mt-1">Data Scientist</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-700 hover:text-[#F17C58] font-medium text-sm transition-colors duration-200 relative group">
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#F17C58] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              </a>)}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="bg-[#F17C58] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#E06A47] transition-colors duration-200 shadow-lg hover:shadow-xl">
              Let's Talk
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden py-6 border-t border-gray-100 bg-white">
            <div className="space-y-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="block py-2 text-gray-700 hover:text-[#F17C58] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>)}
              <div className="pt-4 border-t border-gray-100">
                <a href="#contact" className="block w-full bg-[#F17C58] text-white px-6 py-3 rounded-full font-medium text-sm text-center hover:bg-[#E06A47] transition-colors" onClick={() => setIsOpen(false)}>
                  Let's Talk
                </a>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;