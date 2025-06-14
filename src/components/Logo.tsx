
const Logo = ({ size = "default", className = "" }: { size?: "small" | "default" | "large", className?: string }) => {
  const sizeClasses = {
    small: "w-8 h-8 text-lg",
    default: "w-12 h-12 text-2xl",
    large: "w-16 h-16 text-3xl"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <div className="font-bold text-black tracking-tighter select-none" style={{ fontFamily: 'serif' }}>
        <span className="text-current">A</span>
        <span className="text-current">H</span>
      </div>
    </div>
  );
};

export default Logo;
