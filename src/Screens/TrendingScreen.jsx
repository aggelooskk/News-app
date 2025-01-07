import React from "react";
import { useGetTrendingNewsQuery } from "../Slices/newsApiSlice";
import Loader from "../Components/Loader";
import Card from "../Components/Card";

const TrendingScreen = () => {
  const { data, isError, error, isLoading } =
    useGetTrendingNewsQuery(`trending`);

  isLoading && <Loader />;
  isError && <h1>{error.message}</h1>;

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-5 m-3">
        {data?.articles?.map((article, index) => (
          <div key={index} className="">
            <Card
              image={article.urlToImage}
              author={article.author}
              title={article.title}
              description={article.description}
              url={article.url}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TrendingScreen;
