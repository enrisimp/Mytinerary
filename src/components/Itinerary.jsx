import React, { useState } from "react";

const Itinerary = (props) => {
  const { itinerary } = props;

  // Repeat the "💵" emoji based on the price value
  const priceEmoji = "💵".repeat(itinerary.price);

  const [showDetails, setShowDetails] = useState(false);
  const [likes, setLikes] = useState(itinerary.likes);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h3 className="text-lg font-semibold">{itinerary.itinerary}</h3>

      <div className="flex items-center">
        <div>
          <img
            src={itinerary.foto}
            alt={itinerary.itinerary}
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <p>
            <span className="font-semibold">Name:</span> {itinerary.name}
          </p>

          <p>
            <span className="font-semibold">Duration:</span>{" "}
            {itinerary.duration}
          </p>
          <p>
            <span className="font-semibold">Likes:</span>{" "}
            {likes}{" "}
            <span
              role="img"
              aria-label="heart"
              onClick={handleLikeClick}
              style={{ cursor: "pointer" }}
            >
              ❤️
            </span>
          </p>
        </div>
        <div>
          {/* Replace the price number with emojis */}
          <p>
            <span className="font-semibold">Price:</span> {priceEmoji}
          </p>
          <p>
            {/* <span className="font-semibold">Hashtags:</span>{" "} */}
            {itinerary.hashtags.map((tag) => `#${tag}`).join(" ")}
          </p>
          <p>
            <span className="font-semibold">Activities:</span>{" "}
            {itinerary.activities}
          </p>
        </div>
      </div>
      <button
        onClick={toggleDetails}
        className="mt-2 text-blue-600 underline focus:outline-none"
      >
        View More
      </button>
      {showDetails && (
        <div className="mt-2">
          <p>Activities and Comments:</p>
          <p>Under Construction</p>
        </div>
      )}
    </div>
  );
};

export default Itinerary;
