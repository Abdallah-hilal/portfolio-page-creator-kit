
import { ChevronDown, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-400 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-400 rounded-full opacity-25"></div>
      
      {/* Decorative brush strokes */}
      <div className="absolute top-1/4 left-1/3 w-40 h-20 bg-gradient-to-r from-teal-400 to-teal-600 opacity-80 transform -rotate-12 rounded-lg"></div>
      <div className="absolute top-1/3 left-1/2 w-32 h-16 bg-gradient-to-r from-orange-400 to-red-400 opacity-70 transform rotate-12 rounded-lg"></div>
      
      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-left">
          <div className="mb-6">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Hey There,
            </h1>
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              I'm <span className="text-teal-600">Abdallah</span>
            </h1>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">ICF CERTIFIED</p>
                <p className="text-sm text-gray-600 font-medium">PROFESSIONAL</p>
                <p className="text-lg font-bold text-gray-900">DATA SCIENTIST</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-md">
            I design beautifully simple data solutions, and I know what I do. 
            I transform raw data into actionable insights and automate complex processes.
          </p>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600 font-medium">YEARS EXPERIENCE</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>abdallah@datascientist.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Image with creative frame */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Creative background shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 rounded-full transform rotate-12 scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-red-500 rounded-full transform -rotate-6 scale-105 opacity-80"></div>
            
            {/* Profile image */}
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/c23bab3c-222c-4f0b-8920-fcd80f9033ee.png" 
                alt="Abdallah Helal" 
                className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full object-cover border-8 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-teal-600" />
      </div>
    </section>
  );
};

export default Hero;
