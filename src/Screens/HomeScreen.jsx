import React from "react";
import { useGetNewsQuery } from "../Slices/newsApiSlice";
import Card from "../Components/Card";

const HomeScreen = () => {
  const { data, isError, isLoading } = useGetNewsQuery();

  return (
    <>
      <div className="grid grid-cols-4 m-5 gap-3 ">
        {data?.articles?.slice(0,6).map((article, index) => (
          <div
            key={index}
            className=" "
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
    </>
  );
};

export default HomeScreen;
