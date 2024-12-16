import React from "react";
import Search from "./Search";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-description">
          <h5>
            “Stay updated with the latest headlines, breaking news, and trending
            stories from around the world. Your go-to source for reliable, fast,
            and engaging news coverage, all in one place.”
          </h5>

           <div className="footer-search">
          <Search />
        </div>

               <div className="footer-icons">
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
        <div className="footer-links">
          <a href="#news">News</a>
          <a href="#reviews">Reviews</a>
          <a href="#guides">Guides</a>
          <a href="#trending">Trending</a>
          <a href="#platform">Platform</a>
        </div>
        </div>
       
 
      </footer>
    </>
  );
};

export default Footer;
