import React, { useState, useEffect } from "react";
import "/src/assets/styles.css"; // CSS dosyanızı dahil edin

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false); // Navbar arka plan rengini tutmak için state

  useEffect(() => {
    const changeBg = () => {
      if (window.scrollY > 100) {
        setNavbarBg(true); // Kaydırma 100'ü geçerse arka plan rengi değişir
      } else {
        setNavbarBg(false); // Kaydırma geri çekilirse rengi eski haline döner
      }
    };

    window.addEventListener("scroll", changeBg); // Kaydırma olayını dinler

    return () => {
      window.removeEventListener("scroll", changeBg); // Temizleme işlemi
    };
  }, []);

  return (
    <header>
      <nav className={`navbar-container ${navbarBg ? "bgColor" : ""}`}> {/* Arka plan rengi değişimini uygular */}
        <div className="logo">
          <img src="public/images/logo.png" alt="band" />
        </div>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="menu-hmbgr"></span>
        </label>
        <div className="bar">
          <a href="#home">Home</a>
          <a href="#classes">Classes</a>
          <a href="#trainer">Trainer</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <button className="join-btn">
            <a href="#joinus">JOIN US</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
