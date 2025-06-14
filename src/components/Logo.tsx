
const Logo = ({ size = "default", className = "" }: { size?: "small" | "default" | "large", className?: string }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center relative`}>
      <div className="relative w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none">
          {/* Hexagonal background */}
          <path 
            d="M24 2L38 10V28L24 36L10 28V10L24 2Z" 
            fill="#1F2937"
            stroke="none"
          />
        </svg>
        
        {/* AH Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg font-sans tracking-tight">
            AH
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
