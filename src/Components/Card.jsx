import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, url, author }) => {
  return (
    <>
      <div className="h-73 w-72 my-3 overflow-hidden rounded-lg hover:scale-105">
        <Link to={url}>
          <img src={image} alt={title} className="w-full h-52 object-cover" />
        </Link>
        <div className="p-1 mt-2">
          <Link to={url}>
            <h5 className="text-lg font-bold line-clamp-3 hover:text-blue-600">
              {title}
            </h5>
          </Link>
          <p className="text-sm text-gray-500">{author}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
