import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, url, publishedAt }) => {
  return (
    <Link to={url}>
      <div className="h-96 w-72 my-3 overflow-hidden">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="p-4">
          <h5 className="text-lg font-bold">{title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
