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
    <header className="bg-dark text-white py-3">
      <div className="header-container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex gap-3">
            <a href="https://www.facebook.com/" className="text-white fs-4">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" className="text-white fs-4">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/" className="text-white fs-4">
              <FaTiktok />
            </a>
            <a href="https://www.youtube.com/" className="text-white fs-4">
              <FaYoutube />
            </a>
            <a href="https://www.twitch.com/" className="text-white fs-4">
              <FaTwitch />
            </a>
          </div>
          <Search />
        </div>
        <div className="text-center mb-3">
          <h1 className="fw-bold fs-1">NEWS</h1>
        </div>
        <nav className="d-flex justify-content-center gap-4 flex-wrap">
          <a
            href="#news"
            className="text-white text-uppercase fs-5 text-decoration-none"
          >
            News
          </a>
          <a
            href="#reviews"
            className="text-white text-uppercase fs-5 text-decoration-none"
          >
            Reviews
          </a>
          <a
            href="#guides"
            className="text-white text-uppercase fs-5 text-decoration-none"
          >
            Guides
          </a>
          <a
            href="#trending"
            className="text-white text-uppercase fs-5 text-decoration-none"
          >
            Trending
          </a>
          <a
            href="#platform"
            className="text-white text-uppercase fs-5 text-decoration-none"
          >
            Platform
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
