import React from "react";
import { useGetNewsQuery } from "../Slices/newsApiSlice";
import Card from "../Components/Card";

const HomeScreen = () => {
  const { data, isError, isLoading } = useGetNewsQuery();

  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          {data?.articles?.map((article, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <Card
                image={article.urlToImage}
                title={article.title}
                description={article.description}
                url={article.url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;