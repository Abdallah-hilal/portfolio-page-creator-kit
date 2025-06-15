
import { ChevronDown, Briefcase, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F17C58]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F17C58]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content container */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl max-w-7xl px-8 py-16 md:py-20 relative z-10 border border-white/20 md:px-[60px] mx-[66px] my-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-left space-y-8 relative">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium text-[#F17C58] bg-[#F17C58]/10 px-4 py-2 rounded-full">
                  👋 Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Hi, I'm <span className="text-[#F17C58]">Abdallah</span>
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-medium text-gray-700">
                I build data solutions for science.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Specialized in automation, machine learning, and transforming complex data into actionable insights. Based in Brisbane, Australia.
              </p>
            </div>

            {/* Gmail section */}
            

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild variant="outline" className="border-2 border-[#F17C58] text-[#F17C58] hover:bg-[#F17C58] hover:text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300">
                <a href="#projects">
                  <Briefcase className="w-5 h-5" />
                  Explore My Work
                </a>
              </Button>
              <Button asChild className="bg-[#F17C58] text-white hover:bg-[#E16A47] px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300">
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Get in touch
                </a>
              </Button>
            </div>

            {/* Experience/Projects stats */}
            <div className="flex items-center gap-12 pt-4">
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900">1+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider mt-1">Year Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#F17C58]">50+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider mt-1">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative text-center">
              {/* Decorative background shape */}
              <div className="absolute inset-0 w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F17C58]/20 to-[#F17C58]/10 rounded-full transform rotate-6"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-[#F17C58]/10 to-transparent rounded-full transform -rotate-3"></div>
              </div>

              {/* Profile image */}
              <div className="relative z-10">
                <img src="/lovable-uploads/710cffca-786e-40f1-a31c-31a56d5e6bb7.png" alt="Abdallah Helal" className="w-72 h-72 lg:w-96 lg:h-96 mx-auto rounded-full object-cover border-8 border-white shadow-2xl relative z-10" />
              </div>
              
              {/* Social Links */}
              <div className="mt-6 flex justify-center items-center gap-x-6 relative z-10">
                <a href="https://www.linkedin.com/in/abdallah-helal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-500 hover:text-[#F17C58] transition-colors duration-300">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="https://github.com/abdallah-helal" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-500 hover:text-[#F17C58] transition-colors duration-300">
                  <Github className="w-7 h-7" />
                </a>
                <a href="https://www.upwork.com/freelancers/~01bb96f2647f529f76" target="_blank" rel="noopener noreferrer" aria-label="Upwork Profile" className="transition-opacity duration-300 hover:opacity-75">
                  <img src="https://www.citypng.com/public/uploads/preview/upwork-round-logo-icon-png-7017516949686332n4bo69bd8.png" alt="Upwork Profile" className="w-7 h-7" />
                </a>
                <a href="https://www.kaggle.com/abdallahhelal" target="_blank" rel="noopener noreferrer" aria-label="Kaggle Profile" className="text-gray-500 hover:text-[#F17C58] transition-colors duration-300">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor"><title>Kaggle</title><path d="M10.153 24c-1.95 0-3.523-1.573-3.523-3.523V3.523C6.63 1.573 8.203 0 10.153 0s3.523 1.573 3.523 3.523v16.954c0 1.95-1.573 3.523-3.523 3.523zm9.79-10.37L13.23 3.523v6.577c0 .378-.308.686-.686.686H6.012c-.378 0-.686-.308-.686-.686V4.023c0-.378-.308-.686-.686-.686H.58c-.378 0-.686.308-.686.686v13.725c0 .378.308.686.686.686h4.06c.378 0 .686-.308.686-.686v-5.49c0-.378.308.686.686-.686h6.532c.378 0 .686.308.686.686v5.908c0 .378.308.686.686.686h4.06c.378 0 .686-.308.686-.686l-.11-13.726z"/></svg>
                </a>
              </div>
            </div>
          </div>
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
