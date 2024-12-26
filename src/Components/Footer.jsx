import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import Search from "./Search";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h3 className="text-lg md:text-xl font-semibold">
            “Stay updated with the latest headlines, breaking news, and trending
            stories from around the world. Your go-to source for reliable, fast,
            and engaging news coverage, all in one place.”
          </h3>
        </div>
        <div className="mb-8 text-center">
          <h3 className="text-xl font-bold">
            Subscribe to our newsletter. We'll keep you up to date
          </h3>
          <Search />
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://www.facebook.com/"
            className="text-white text-2xl hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-white text-2xl hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/"
            className="text-white text-2xl hover:text-black transition"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.youtube.com/"
            className="text-white text-2xl hover:text-red-600 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.twitch.com/"
            className="text-white text-2xl hover:text-purple-500 transition"
          >
            <FaTwitch />
          </a>
        </div>
        <div className="flex justify-center space-x-6 flex-wrap">
          <a
            href="#news"
            className="text-white text-lg hover:underline hover:text-gray-400"
          >
            News
          </a>
          <a
            href="#reviews"
            className="text-white text-lg hover:underline hover:text-gray-400"
          >
            Reviews
          </a>
          <a
            href="#guides"
            className="text-white text-lg hover:underline hover:text-gray-400"
          >
            Guides
          </a>
          <a
            href="#trending"
            className="text-white text-lg hover:underline hover:text-gray-400"
          >
            Trending
          </a>
          <a
            href="#platform"
            className="text-white text-lg hover:underline hover:text-gray-400"
          >
            Platform
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
