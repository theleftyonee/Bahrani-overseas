interface SkeletonCardProps {
  className?: string;
}

export const SkeletonCard = ({ className = "" }: SkeletonCardProps) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-200 rounded-2xl h-full">
        <div className="p-6 space-y-4">
          {/* Icon skeleton */}
          <div className="w-16 h-16 bg-gray-300 rounded-xl"></div>
          {/* Title skeleton */}
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;

