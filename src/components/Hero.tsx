import { ChevronDown, Mail, Phone } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F17C58]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F17C58]/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content container */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl max-w-7xl mx-auto p-8 md:p-16 relative z-10 border border-white/20 my-[60px] px-[106px] py-[46px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-lg font-medium text-[#F17C58] bg-[#F17C58]/10 px-4 py-2 rounded-full">
                  👋 Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Hi, I'm <span className="text-[#F17C58]">Abdallah</span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-2xl font-medium text-gray-700">
                I build data solutions for science.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Specialized in automation, machine learning, and transforming complex data into actionable insights. Based in Brisbane, Australia.
              </p>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200 w-fit">
              <Mail className="w-5 h-5 text-[#F17C58]" />
              <span className="text-gray-900 font-medium">abdallah@example.com</span>
            </div>
            
            <div className="flex items-center gap-12">
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900">5+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#F17C58]">50+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Projects Completed</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F17C58]/20 to-[#F17C58]/10 rounded-full transform rotate-6"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-[#F17C58]/10 to-transparent rounded-full transform -rotate-3"></div>
              </div>
              
              {/* Profile image */}
              <div className="relative z-10">
                <img src="/lovable-uploads/c23bab3c-222c-4f0b-8920-fcd80f9033ee.png" alt="Abdallah Helal" className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full object-cover border-8 border-white shadow-2xl relative z-10" />
              </div>
              
              {/* Floating certification badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F17C58] to-[#F17C58]/80 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                  <div className="text-xs font-bold text-gray-900 leading-tight">
                    ICF CERTIFIED<br />
                    PROFESSIONAL<br />
                    DATA SCIENTIST
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact info in top right */}
        <div className="absolute top-6 right-6 flex items-center gap-3 text-sm text-gray-600 bg-white/70 px-4 py-2 rounded-full backdrop-blur-sm">
          
          <span className="font-medium">
        </span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600 font-medium">Scroll down</span>
          <ChevronDown className="w-6 h-6 text-[#F17C58]" />
        </div>
      </div>
    </section>;
};
export default Hero;