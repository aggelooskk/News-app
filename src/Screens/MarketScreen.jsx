import React from "react";
import { useGetMarketNewsQuery } from "../Slices/newsApiSlice";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

const MarketScreen = () => {
  const { data, isError, error, isLoading } = useGetMarketNewsQuery(`market`);

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

export default MarketScreen;
