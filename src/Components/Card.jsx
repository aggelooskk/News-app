import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, url }) => {
  return (
    <Link to={url}>
      <div className="h-80 w-72 my-3 overflow-hidden">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="p-1">
          <h5 className="text-lg font-bold line-clamp-3">{title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
