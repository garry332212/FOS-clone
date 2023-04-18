import React, { useState } from "react";
import styles from "../CSS/Navbar.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav>
        <div className={styles.imgage}>
          <img src={logo} height="65" alt="logo" />
        </div>
        <div className={styles.menu}>
          <div
            className={`${styles.hamburger} ${showMenu ? styles.close : ""}`}
            onClick={toggleMenu}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <ul className={`${styles.navLinks} ${showMenu ? styles.show : ""}`}>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>Features</li>
            <li>
              {" "}
              <Link to="/pricing">pricing </Link>
            </li>
            <li>
              <Link to={"/our-story"}>our story</Link>{" "}
            </li>
            <li>login</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
