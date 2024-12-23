import React from "react";
import { useGetNewsQuery } from "../Slices/newsApiSlice";
import Card from "../Components/Card";
import { Spinner } from "react-bootstrap";

const HomeScreen = () => {
  const { data, isError, isLoading } = useGetNewsQuery();

  return isLoading ? (
    <Spinner />
  ) : isError ? (
    isError
  ) : (
    <div className="container mt-4">
      <h1 className="text-start mb-4 fw-bold text-dark">Latest News</h1>
      <hr />
      <div className="row justify-content-center">
        {data?.articles?.map((article, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
          >
            <Card
              image={article.urlToImage}
              title={article.title}
              description={article.description}
              url={article.url}
            />
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default HomeScreen;
