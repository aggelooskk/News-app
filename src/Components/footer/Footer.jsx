import React from "react";
import styles from "../footer/Footer.module.css"
import Search from "../search/Search";
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
      <footer className={styles.footer}>
        <div className="description">
          <h3>
            “Stay updated with the latest headlines, breaking news, and trending
            stories from around the world. Your go-to source for reliable, fast,
            and engaging news coverage, all in one place.”
          </h3>
        </div>
        <div className="search">
          <h3>Subscribe to our newsletter.We'll keep you up to date</h3>
          <Search />
        </div>
        <div className="icons">
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
        <div className="links">
          <a href="#news">News</a>
          <a href="#reviews">Reviews</a>
          <a href="#guides">Guides</a>
          <a href="#trending">Trending</a>
          <a href="#platform">Platform</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
