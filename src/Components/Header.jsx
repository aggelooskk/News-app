import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="px-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/"
              className="text-white text-2xl hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-white text-2xl hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/"
              className="text-white text-2xl hover:text-black"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/"
              className="text-white text-2xl hover:text-red-500"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.twitch.com/"
              className="text-white text-2xl hover:text-purple-500"
            >
              <FaTwitch />
            </a>
          </div>
          <Search />
        </div>
        <div className="text-center mb-6">
          <h1 className="font-bold text-4xl">NEWS</h1>
        </div>
        <nav className="flex justify-center space-x-8 flex-wrap">
          <a href="/" className="text-white uppercase text-lg hover:underline">
            News
          </a>
          <a
            href="/trending"
            className="text-white uppercase text-lg hover:underline"
          >
            Trending
          </a>
          <a
            href="/market"
            className="text-white uppercase text-lg hover:underline"
          >
            Market
          </a>
          <a
            href="/sports"
            className="text-white uppercase text-lg hover:underline"
          >
            Sports
          </a>
          <a
            href="/gaming"
            className="text-white uppercase text-lg hover:underline"
          >
            Gaming
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
