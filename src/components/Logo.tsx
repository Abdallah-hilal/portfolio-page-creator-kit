

const Logo = ({ size = "default", className = "" }: { size?: "small" | "default" | "large", className?: string }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center relative`}>
      {/* Crown */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path 
            d="M2 8L4 4L6 6L8 2L10 6L12 4L14 8H2Z" 
            fill="#D4A574"
            stroke="#B8956A" 
            strokeWidth="0.5"
          />
        </svg>
      </div>
      
      {/* Shield */}
      <div className="relative w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none">
          {/* Outer shield */}
          <path 
            d="M24 2L36 8V20C36 30 24 44 24 44C24 44 12 30 12 20V8L24 2Z" 
            fill="#D4A574"
            stroke="#B8956A" 
            strokeWidth="1"
          />
          {/* Inner shield */}
          <path 
            d="M24 6L32 10V19C32 26 24 36 24 36C24 36 16 26 16 19V10L24 6Z" 
            fill="#3A4A5C"
          />
        </svg>
        
        {/* AH Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#D4A574] font-bold text-lg font-serif tracking-tight">
            AH
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;

