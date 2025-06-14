
const Logo = ({ size = "default", className = "" }: { size?: "small" | "default" | "large", className?: string }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center relative`}>
      {/* Main Shield */}
      <div className="relative w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none">
          {/* Shield background */}
          <path 
            d="M24 4L34 8V18C34 26 24 40 24 40C24 40 14 26 14 18V8L24 4Z" 
            fill="#2563EB"
            stroke="#1E40AF" 
            strokeWidth="1"
          />
        </svg>
        
        {/* AH Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-sm font-sans tracking-wider">
            AH
          </span>
        </div>
      </div>
      
      {/* Small crown accent */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-500"></div>
      </div>
    </div>
  );
};

export default Logo;
