import React from "react";

const Card = ({ image, title, description, url }) => {
  return (
    <>
      <div className="card mx-2 my-3 shadow" style={{ maxWidth: "350px" }}>
        <img
          src={image}
          className="card-img-top rounded-top"
          alt=""
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
          <a href={url} className="btn btn-primary btn-sm">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
