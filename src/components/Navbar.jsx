import Logo from "../assets/symbols/logo.svg";
import Cart from "../assets/symbols/cart2.svg";
import DownArrow from "../assets/symbols/down-arrow.svg";
import { gsap } from "gsap";
const Navbar = () => {
  const changeNavLinkColor = (e) => {
    gsap.to(".navlinkColor", {
      color: "#000",
      duration: 0.1,
      ease: "power",
    });
    gsap.to(e.target, {
      color: "#B37A59",
      duration: 0.1,
      ease: "power",
    });
  };
  return (
    <nav className="navbar">
      <ul className="nav-page-links">
        <li className="navlinkColor" onClick={changeNavLinkColor}>
          Home
        </li>
        <li className="navlinkColor" onClick={changeNavLinkColor}>
          About
        </li>
        <li className="navlinkColor" onClick={changeNavLinkColor}>
          Shop
        </li>
      </ul>
      <img src={Logo} className="logo" />
      <ul className="nav-page-links">
        <li
          className="nav-link-pages-text navlinkColor"
          onClick={changeNavLinkColor}
        >
          <span className="navlinkColor">Pages</span>
          <img src={DownArrow} className="nav-link-down-arrow" />
        </li>
        <li className="navlinkColor" onClick={changeNavLinkColor}>
          Blog
        </li>
        <li className="navlinkColor" onClick={changeNavLinkColor}>
          Contact
        </li>
        <li className="nav-cart-area navlinkColor">
          <img src={Cart} className="nav-cart" />
          <span>0</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
