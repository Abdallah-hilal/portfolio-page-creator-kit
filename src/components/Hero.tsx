
import { ChevronDown, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-orange-100 overflow-hidden">
      {/* Main content container with white background */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl mx-auto p-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hey There,
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                I'm <span className="text-gray-900">Abdallah</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-md">
              I design beautifully simple data solutions, And I love what I do.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500 font-medium">abdallah@example.com</span>
              </div>
            </div>
            
            <div className="flex items-center gap-12 mb-8">
              <div className="text-left">
                <div className="text-5xl font-bold text-gray-900 mb-1">5+</div>
                <div className="text-sm text-gray-600 font-medium">YEARS</div>
                <div className="text-sm text-gray-600 font-medium">EXPERIENCE</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Image with creative brush stroke */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Artistic brush stroke background */}
              <div className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96">
                <svg viewBox="0 0 400 400" className="w-full h-full absolute">
                  <path 
                    d="M50 200 Q200 50 350 200 Q200 350 50 200" 
                    fill="#2dd4bf" 
                    opacity="0.9"
                    transform="rotate(-15 200 200)"
                  />
                  <path 
                    d="M80 180 Q220 80 320 220 Q180 320 80 180" 
                    fill="#06b6d4" 
                    opacity="0.7"
                    transform="rotate(10 200 200)"
                  />
                </svg>
              </div>
              
              {/* Profile image */}
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/c23bab3c-222c-4f0b-8920-fcd80f9033ee.png" 
                  alt="Abdallah Helal" 
                  className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full object-cover border-8 border-white shadow-xl relative z-10"
                />
              </div>
            </div>
            
            {/* Certification badge */}
            <div className="absolute bottom-8 right-8 bg-white rounded-full p-4 shadow-lg border-2 border-gray-100">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="text-xs font-bold text-gray-900">ICF CERTIFIED</div>
                <div className="text-xs font-bold text-gray-900">PROFESSIONAL</div>
                <div className="text-xs font-bold text-gray-900">DATA SCIENTIST</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact info in header */}
        <div className="absolute top-6 right-6 flex items-center gap-4 text-sm text-gray-600">
          <Phone className="w-4 h-4" />
          <span>+001 (313) 345 678</span>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-900" />
      </div>
    </section>
  );
};

export default Hero;
