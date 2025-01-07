import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, url, author }) => {
  return (
    <Link to={url}>
      <div className="h-73 w-72 my-3 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="p-1 mt-2">
          <h5 className="text-lg font-bold line-clamp-3">{title}</h5>
          <p className="text-sm text-gray-500">{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
