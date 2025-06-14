
const Logo = ({ size = "default", className = "" }: { size?: "small" | "default" | "large", className?: string }) => {
  const sizeClasses = {
    small: "w-8 h-8 text-sm",
    default: "w-12 h-12 text-lg",
    large: "w-16 h-16 text-xl"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      {/* Main logo container */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F17C58] via-[#F17C58] to-[#E56B47] shadow-lg flex items-center justify-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-full"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-1 right-1 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-2 left-1 w-1 h-1 bg-white/20 rounded-full"></div>
        
        {/* AH Text */}
        <span className="font-bold text-white tracking-tight relative z-10 font-serif">
          AH
        </span>
        
        {/* Inner glow */}
        <div className="absolute inset-1 rounded-full border border-white/20"></div>
      </div>
      
      {/* Outer shadow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F17C58]/20 to-transparent blur-sm scale-110 -z-10"></div>
    </div>
  );
};

export default Logo;
