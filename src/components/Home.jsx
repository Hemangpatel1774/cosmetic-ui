/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "../stylesheets/home.css";
import HeaderImg from "../assets/header.jpg";
import BgSpread from "../assets/bg-spread.png";
import Leaf from "../assets/symbols/leafs.svg";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.jpg";
import P3 from "../assets/p3.jpg";
import P4 from "../assets/p4.jpg";
import P5 from "../assets/p5.jpg";
import P6 from "../assets/p6.jpg";
import R1 from "../assets/roller/r1.svg";
import R2 from "../assets/roller/r2.svg";
import R3 from "../assets/roller/r3.svg";
import R4 from "../assets/roller/r4.svg";
import S1 from "../assets/social-media/facebook.svg";
import S2 from "../assets/social-media/github.svg";
import S3 from "../assets/social-media/insta.svg";
import S4 from "../assets/social-media/linkedin.svg";
import S5 from "../assets/social-media/twitter.svg";
import storyImg1 from "../assets/our-story/img1.jpg";
import storyImg2 from "../assets/our-story/img2.jpg";
import storyImg3 from "../assets/our-story/img3.jpg";
import storyImg4 from "../assets/our-story/img4.jpg";
import HomeV from "../assets/video/home-video.mp4";
import SendImg from "../assets/symbols/send.svg"
import BrownImg from "../assets/symbols/logobrown.svg";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".section3-feature-left-img-area", {
      rotation: 90,
      scrollTrigger: {
        trigger: ".section3-feature-area",
        start: "top 50%",
        end: "bottom 70%",
        scrub: 2,
      },
    });
    gsap.to(".feature-img-rotate", {
      rotation: -90,
      scrollTrigger: {
        trigger: ".section3-feature-area",
        start: "top 50%",
        end: "bottom 70%",
        scrub: 2,
      },
    });
  });
  const mouseTriggerLeave = (e) => {
    document.querySelector(
      ".home-header-img"
    ).style.transform = `translate(-50% , -50%)`;
    document.querySelector(
      ".home-header-title"
    ).style.transform = `translate(-50% , -50%)`;
  };
  const mouseTrigger = (e) => {
    const w = (e.clientX / innerWidth) * 100 - 50;
    const h = (e.clientY / innerHeight) * 100 - 50;
    const trafX = 50 + w / 15;
    const trafY = 50 + h / 15;

    const trafX2 = 50 + (w * -1) / 50;
    const trafY2 = 50 + (h * -1) / 50;
    document.querySelector(
      ".home-header-img"
    ).style.transform = `translate(-${trafX}% , -${trafY}%)`;
    document.querySelector(
      ".home-header-title"
    ).style.transform = `translate(-${trafX2}% , -${trafY2}%)`;
  };
  window.addEventListener("scroll", () => {
    const el =
      document.querySelector(".section1-products-2").getBoundingClientRect()
        .top + window.scrollY;
    if (scrollY > el) {
      gsap.to(".Section1-tested-head", {
        opacity: 0,
        duration: 0.001,
      });
    } else {
      gsap.to(".Section1-tested-head", {
        opacity: 1,
        duration: 0.001,
      });
    }
  });
  return (
    <div>
      <header
        className="home-header"
        onMouseMove={mouseTrigger}
        onMouseLeave={mouseTriggerLeave}
      >
        <img src={HeaderImg} className="home-header-img" />
        <div>
          <h1 className="home-header-title">
            Embrace a New Era of Skincare Excellence
          </h1>
        </div>
        <img src={BgSpread} className="bg-spread-left" />
        <img src={BgSpread} className="bg-spread-right" />
      </header>
      <section className="section1">
        <button className="section1-shop-btn">SHOP NOW</button>
        <div className="section1-bg-text-slider">
          <h1>
            <span>R</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>a</span>
            <span>t</span>
            <span className="slider-bg-word-space">e</span>
            <span>B</span>
            <span>e</span>
            <span>a</span>
            <span>u</span>
            <span>t</span>
            <span>y</span>
            <span className="small-h1-part">,</span>
            <span>N</span>
            <span>a</span>
            <span>t</span>
            <span>u</span>
            <span>r</span>
            <span>a</span>
            <span>l</span>
            <span>l</span>
            <span>y</span>
            <span className="small-h1-part">.</span>
          </h1>
          <h1>
            <span>R</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>a</span>
            <span>t</span>
            <span className="slider-bg-word-space">e</span>
            <span>B</span>
            <span>e</span>
            <span>a</span>
            <span>u</span>
            <span>t</span>
            <span>y</span>
            <span className="small-h1-part">,</span>
            <span>N</span>
            <span>a</span>
            <span>t</span>
            <span>u</span>
            <span>r</span>
            <span>a</span>
            <span>l</span>
            <span>l</span>
            <span>y</span>
            <span className="small-h1-part">.</span>
          </h1>
        </div>
        <h1 className="Section1-tested-head">
          Dermatologist-Tested <img src={Leaf} />
        </h1>
        <div className="section1-products-1">
          <div className="product-card">
            <img src={P1} />
            <h1>Moisture Surge Night Cream</h1>
            <h4>₹ 1,499 </h4>
            <p>
              A deeply hydrating night cream that replenishes moisture while you
              sleep,it helps restore.{" "}
            </p>
          </div>
          <div className="product-card">
            <img src={P2} />
            <h1>Brightening Eye Cream</h1>
            <h4>₹ 749</h4>
            <p>
              A lightweight yet powerful formula that reduces dark circles and
              puffiness, giving your eyes a radiant, well-rested look. Enriched
              with brightening agents, it hydrates and smoothens the delicate
              under-eye area.
            </p>
          </div>
          <div className="product-card">
            <img src={P3} />
            <h1>Lash Lift Mascara</h1>
            <h4>₹ 849</h4>
            <p>
              A high-definition mascara that lifts, curls, and lengthens lashes
              for a bold, eye-opening effect. Its smudge-proof.
            </p>
          </div>
        </div>
        <div className="section1-products-2">
          <div className="product-card">
            <img src={P4} />
            <h1>Radiant Glow Face Oil</h1>
            <h4>₹ 2,599</h4>
            <p>
              A deeply hydrating night cream that replenishes moisture while you
              sleep, leaving your skin soft, plump.
            </p>
          </div>
          <div className="product-card">
            <img src={P6} />
            <h1>Clear Complexion Clay Mask</h1>
            <h4>₹ 999</h4>
            <p>
              A high-definition mascara that lifts, curls, and lengthens lashes
              for a bold, eye-opening effect. Its smudge-proof, long-wearing.
            </p>
          </div>
          <div className="product-card">
            <img src={P5} />
            <h1>Nourishing Hair Mask</h1>
            <h4>₹ 1,299</h4>
            <p>
              A lightweight yet powerful formula that reduces dark circles and
              puffiness, giving your eyes a radiant, well-rested look. Enriched
              with brightening agents.
            </p>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="section2-our-story-area">
          <div className="section2-our-story-left">
            <h2>Our Story</h2>
            <h1>A Passion for Skincare that Transformed into a Brand</h1>
            <p>
              Pamper your skin with the purest organic ingredients and
              experience the difference of natural skincare.
            </p>
            <p>
              Our organic products are crafted with care and commitment to
              provide you with a skincare routine that is not only effective but
              also mindful of your well-being and the planet.
            </p>
            <p>
              Discover the beauty of organic skincare and let nature restore and
              enhance your skin's natural radiance.
            </p>
          </div>
          <div className="section2-our-story-right">
            <img src={storyImg4} className="story-right-img-1" />
            <img src={storyImg2} className="story-right-img-2" />
            <img src={storyImg3} className="story-right-img-3" />
            <img src={storyImg1} className="story-right-img-4" />
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="home-video">
          <video src={HomeV} autoPlay loop muted />
        </div>
        <div className="section3-feature-area">
          <div className="section3-feature-left">
            <div className="section3-feature-left-img-area">
              <div className="section3-feature-img1 feature-img-rotate">
                <img src={R1} />
              </div>
              <div className="section3-feature-img2 feature-img-rotate">
                <img src={R2} />
              </div>
              <div className="section3-feature-img3 feature-img-rotate">
                <img src={R3} />
              </div>
              <div className="section3-feature-img4 feature-img-rotate">
                <img src={R4} />
              </div>
            </div>
          </div>
          <div className="section3-feature-right">
            <h2>Features</h2>
            <h1>Pure & Natural Organic Skincare</h1>
            <p>
              Our innovative products are designed to deliver visible results,
              helping you achieve the flawless complexion you've always dreamed
              of.
            </p>
            <p>
              During the testing process, dermatologists may assess various
              factors, such as the product's ingredients, formulation, potential
              allergens, and its impact on the skin.
            </p>
            <p>
              They may conduct clinical trials, patch testing, or other methods
              to evaluate the product's safety and efficacy.Each individual's
              skin is unique, and what works for one person may not work for
              another.
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-functions-area">
          <div className="footer-logo-area">
            <img src={BrownImg} />
          </div>
          <div className="footer-links-area">
            <h5>Pages</h5>
            <a>Home</a>
            <a>About</a>
            <a>Shop</a>
            <a>Blog</a>
            <a>Contact</a>
            <div>
              <img src={S1} />
              <img src={S2} />
              <img src={S3} />
              <img src={S4} />
              <img src={S5} />
            </div>
          </div>
          <div className="footer-msg-area">
              <p>Glow with elegance, shine with confidence.
              We appreciate your visit.</p><span>- come back soon!</span>
              <div className="footer-send-mail">
                <input type="text" placeholder="Email"/>
                <img src={SendImg} />
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
