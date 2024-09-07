import { useState } from "react";

const ReviewCard = ({ imageUrl, name, username, reviewText, date }) => {
  const [showFullText, setShowFullText] = useState(false);

  // Limit the review text length (e.g., 100 characters) if it's too long
  const shortText = reviewText.length > 100 ? reviewText.substring(0, 100) + "..." : reviewText;

  // Toggle function for showing the full text or not
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="bg-gradient-to-t from-neutral-50 p-4 rounded-xl max-w-md">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-bold text-brandPrimary font-Inter text-lg leading-[140%]">{name}</p>
          <p className="text-base font-Inter font-medium text-tertiary">@{username}</p>
        </div>
      </div>

      {/* Conditionally render the short or full review text */}
      <p className="text-[#000] mb-4 text-lg font-Inter font-normal leading-[140%]">
        {showFullText ? reviewText : shortText}
      </p>

      <div className="text-sm text-tertiary flex justify-between">
        <span
          className="cursor-pointer hover:text-gray-900 border-b"
          onClick={toggleText}
        >
          {showFullText ? "Show less" : "Show original"}
        </span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
