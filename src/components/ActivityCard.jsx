import React from "react";

const ActivityCard = ({ image, title, text }) => {
  return (
    <div className="border border-gray-300 border-opacity-50 shadow-xl p-4 max-w-sm bg-white/30 bg-opacity-30 rounded-xl backdrop-blur-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-800">{text}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
