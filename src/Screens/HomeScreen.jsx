import React from "react";
import { useGetNewsQuery } from "../Slices/newsApiSlice";
import Card from "../Components/Card";

const HomeScreen = () => {
  const { data, isError, isLoading } = useGetNewsQuery();

  if (isLoading) return <p>Loading news...</p>;
  if (isError) return <p>Failed to load news. Please try again later.</p>;

  return (
    <>
      <div className="flex justify-start mx-5 my-5">
        <h1 className="text-3xl font-bold">Breaking News</h1>
      </div>
      <hr />
      {/* LEFT DIV */}
      <div className="flex flex-row justify-start my-5 mx-5">
        {data?.articles?.slice(0, 1).map((article, index) => (
          <div key={index} className="w-2/3 h-full overflow-hidden mr-5">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="object-cover w-full h-96"
            />
            <div className="p-4">
              <h5 className="text-lg font-bold">{article.title}</h5>
              <p className="text-sm text-gray-600 mt-2">
                {article.description || "No description available."}
              </p>
            </div>
          </div>
        ))}
        {/* RIGHT DIV*/}
        <div className="flex flex-wrap justify-center w-96 h-48 py-2 gap-5">
          {data?.articles?.slice(0, 6).map((article, index) => (
            <div key={index} className="w-40 h-28">
              <img src={article.urlToImage} alt={article.title} className="" />
              <div className="h-10">
                <h5 className="text-sm font-bold trancate">{article.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="font-bold" />
      <div className="flex justify-start mx-3 my-5">
        <h1 className="text-3xl font-bold">Trending</h1>
        <hr className="" />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-5 m-3 my-5">
        {data?.articles?.slice(0, 8).map((article, index) => (
          <div key={index} className=" ">
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
