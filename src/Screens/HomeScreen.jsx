import React from "react";
import { useGetNewsQuery } from "../Slices/newsApiSlice";
import Card from "../Components/Card";

const HomeScreen = () => {
  const { data, isError, isLoading } = useGetNewsQuery();

  return isLoading ? (
    <div className="text-center text-gray-500 mt-10">Loading...</div>
  ) : isError ? (
    <div className="text-center text-red-500 mt-10">Error loading news</div>
  ) : (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-left mb-6 text-3xl font-bold text-gray-900">
        Latest News
      </h1>
      <hr className="mb-6" />
      <div className="flex flex-wrap justify-center gap-6">
        {data?.articles?.map((article, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center"
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
      <hr className="mt-6" />
    </div>
  );
};

export default HomeScreen;
