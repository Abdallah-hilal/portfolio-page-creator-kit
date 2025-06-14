
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div 
        className="absolute inset-0 opacity-50"
        style={{ backgroundImage: `url("${patternUrl}")` }}
      ></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
            Full-Stack Developer & Digital Craftsman
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional digital experiences that bridge the gap between design and technology.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            View My Work
          </button>
          <button className="border border-blue-400 text-blue-100 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-blue-300" />
      </div>
    </section>
  );
};

export default Hero;
