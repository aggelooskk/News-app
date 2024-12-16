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
    <>
      <header className="header">
        <div className="top-section">
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/">
              <FaTiktok />
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube />
            </a>
            <a href="https://www.twitch.com/">
              <FaTwitch />
            </a>
          </div>
          <Search />
        </div>
        <div className="logo-section">
          <h1 className="logo">NEWS</h1>
        </div>
        <nav className="nav-links">
          <a href="#news">News</a>
          <a href="#reviews">Reviews</a>
          <a href="#guides">Guides</a>
          <a href="#trending">Trending</a>
          <a href="#platform">Platform</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
