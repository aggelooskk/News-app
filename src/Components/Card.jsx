import React from "react";

const Card = ({ image, title, description, url }) => {

  return (
    <div className="d-flex justify-content-center mx-2 my-3 w-25">
      <div className="card-image d-flex justify-content-center mx-2 my-3 w-25">
        <img src={image} alt="Alien Lander" />
      </div>
      <div className="card-description d-flex-justify-content-center mx-5 w-50">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{url}</p>
      </div>
    </div>
  );
};

export default Card;
