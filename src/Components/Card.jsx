import React from "react";

const Card = ({ image, title, description, url }) => {
  return (
    <div className="max-w-xs mx-2 my-3 shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h5 className="text-lg font-bold">{title}</h5>
        <p className="text-gray-500 mt-2">{description}</p>
        <a
          href={url}
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
