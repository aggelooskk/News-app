import React from "react";
import { useGetNewsQuery } from "../Slices/newsApiSlice";
import Loader from "../Components/Loader";
import Card from "../Components/Card";

const HomeScreen = () => {
  const { data, isError, error, isLoading } = useGetNewsQuery();

  isLoading && <Loader />;
  isError && <h1>{error}</h1>;

  return (
    <>
      <div className="flex justify-start mt-5 mx-3">
        <h1 className="text-3xl font-bold">Breaking News</h1>
      </div>
      <hr className="h-1 bg-gray-950 border-0 rounded dark:bg-gray-900" />
      {/* LEFT DIV */}
      <div className="flex flex-row justify-start my-5 mx-5">
        {data?.articles?.slice(1, 2).map((article, index) => (
          <div key={index} className="w-2/3 h-full overflow-hidden mr-5">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="object-cover w-full h-96"
            />
            <div className="p-1">
              <h5 className="text-lg font-bold">{article.title}</h5>
              <p className="text-md text-gray-600 mt-1">
                {article.description}
              </p>
              <p className="text-sm font-bold text-gray-600">{article.author}</p>
            </div>
          </div>
        ))}
        {/* RIGHT DIV*/}
        <div className="flex flex-wrap mt-10">
          <div>
            {data?.articles?.slice(1, 3).map((article, index) => (
              <div key={index} className="w-40 h-30 mb-20 mx-7">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className=""
                />
                <div className="h-10">
                  <h5 className="text-sm font-bold line-clamp-3">
                    {article.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          <div>
            {data?.articles?.slice(1, 3).map((article, index) => (
              <div key={index} className="w-40 h-32 mb-20">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className=""
                />
                <div className="h-10">
                  <h5 className="text-sm font-bold line-clamp-3">
                    {article.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* */}
      </div>
      <div className="flex justify-start mt-5 mx-3">
        <h1 className="text-3xl font-bold">Trending</h1>
      </div>
      <hr className="h-1 bg-gray-950 border-0 rounded dark:bg-gray-900" />
      {/* MID DIV */}
      <div className="flex flex-row flex-wrap justify-center gap-5 m-3 my-5">
        {data?.articles?.slice(0, 8).map((article, index) => (
          <div key={index} className=" ">
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
      <div className="flex justify-start mt-5 mx-3">
        <h1 className="text-3xl font-bold">Categories</h1>
      </div>
      <hr className="h-1 bg-gray-950 border-0 rounded dark:bg-gray-900" />
      {/* BOTTOM DIV */}
      <div className="flex flex-wrap justify-start gap-3 my-5 mx-3 text-7xl font-medium italic">
        <h1 className="hover:text-blue-600/100">News.</h1>
        <h1 className="hover:text-blue-600/100">Reviews.</h1>
        <h1 className="hover:text-blue-600/100">Guides.</h1>
        <h1 className="hover:text-blue-600/100">Deals.</h1>
        <h1 className="hover:text-blue-600/100">Videos.</h1>
        <h1 className="hover:text-blue-600/100">Reader Poll.</h1>
        <h1 className="hover:text-blue-600/100">Features.</h1>
        <h1 className="hover:text-blue-600/100">Staff Picks.</h1>
        <h1 className="hover:text-blue-600/100">Game Culture.</h1>
        <h1 className="hover:text-blue-600/100">Podcast.</h1>
      </div>
    </>
  );
};

export default HomeScreen;
