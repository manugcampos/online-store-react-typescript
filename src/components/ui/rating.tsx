import { Star } from "lucide-react";
import { Rating as RatingType } from "../../types";

interface RatingProps {
  rating: RatingType;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="mt-3">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        {/* Star Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 flex-shrink-0 ${
                index < Math.round(rating.rate) ? "text-yellow-400" : "text-gray-300"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Hidden rating text for accessibility */}
        <p className="sr-only">{rating.rate} of 5 stars</p>

        {/* Review count */}
        <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
          {rating.count} reviews
        </span>
      </div>
    </div>
  );
}

export default Rating;
