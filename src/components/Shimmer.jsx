const Shimmer = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-60 h-90 m-4 animate-pulse">
        {/* Image Placeholder */}
        <div className="h-48 bg-gray-300"></div>
  
        {/* Content Placeholder */}
        <div className="p-4">
          {/* Title Placeholder */}
          <div className="bg-gray-300 h-6 w-3/4 mb-4"></div>
  
          {/* Cuisines Placeholder */}
          <div className="bg-gray-300 h-4 w-1/2 mb-4"></div>
  
          {/* Cost for Two Placeholder */}
          <div className="bg-gray-300 h-4 w-1/3 mb-4"></div>
  
          {/* Rating Placeholder */}
          <div className="flex items-center">
            <div className="bg-gray-300 h-4 w-1/4"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  