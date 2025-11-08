import { useState, useEffect } from "react";

interface PageLoaderProps {
  onComplete: () => void;
}

const PageLoader = ({ onComplete }: PageLoaderProps) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Show loader for 2 seconds, then fade out
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 500); // Allow fade-out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (isComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-behrani-50 to-white">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping opacity-20">
              <img
                src="/FINAL_LOGO_PRAVEEN_JI.png"
                alt="GoGlobal Logo"
                className="h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-contain"
              />
            </div>
            <img
              src="/FINAL_LOGO_PRAVEEN_JI.png"
              alt="GoGlobal Logo"
              className="relative h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-contain animate-bounce"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

