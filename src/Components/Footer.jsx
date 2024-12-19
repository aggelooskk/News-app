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
    <footer className="bg-dark text-white py-4">
      <div className="footer-container">
        <div className="mb-4 text-center">
          <h3 className="fs-5">
            “Stay updated with the latest headlines, breaking news, and trending
            stories from around the world. Your go-to source for reliable, fast,
            and engaging news coverage, all in one place.”
          </h3>
        </div>
        <div className="mb-4 text-center">
          <h3 className="fs-4">
            Subscribe to our newsletter. We'll keep you up to date
          </h3>
          <Search />
        </div>
        <div className="d-flex justify-content-center mb-4">
          <a href="https://www.facebook.com/" className="text-white fs-4 mx-2">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/" className="text-white fs-4 mx-2">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/" className="text-white fs-4 mx-2">
            <FaTiktok />
          </a>
          <a href="https://www.youtube.com/" className="text-white fs-4 mx-2">
            <FaYoutube />
          </a>
          <a href="https://www.twitch.com/" className="text-white fs-4 mx-2">
            <FaTwitch />
          </a>
        </div>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <a href="#news" className="text-white text-decoration-none fs-5">
            News
          </a>
          <a href="#reviews" className="text-white text-decoration-none fs-5">
            Reviews
          </a>
          <a href="#guides" className="text-white text-decoration-none fs-5">
            Guides
          </a>
          <a href="#trending" className="text-white text-decoration-none fs-5">
            Trending
          </a>
          <a href="#platform" className="text-white text-decoration-none fs-5">
            Platform
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
