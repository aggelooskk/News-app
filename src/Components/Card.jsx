import React from "react";

const Card = () => {
  return (
    <div className="card-container ">
      <div className="card">
        <div className="card-image">
          <img
            src="https://via.placeholder.com/320x180" // Replace with the actual image URL
            alt="Alien Lander"
          />
        </div>
        <div className="card-content">
          <h3>How to Code a Scrolling “Alien Lander” Website</h3>
          <p>
            We’ll be putting things together so that as you scroll down from the
            top of the page you’ll see an “Alien Lander” making its way to touch
            down.
          </p>
          <p className="card-author">KEZZ BRACEY</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
