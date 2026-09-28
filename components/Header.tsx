"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-is-open" : ""}`}
      id="site-header"
    >
      <nav className="container nav" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="uzair abdul khalique law assocaites & Co home">
          <span className="brand__mark" aria-hidden="true">
            <img src="/logo-mark.svg" alt="" />
          </span>
          <span className="brand__text">
            <strong>uzair abdul khalique law</strong>
            <small>& Co</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu${menuOpen ? " is-open" : ""}`} id="nav-menu">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#practice" onClick={closeMenu}>Practice Areas</a>
          <a href="#record" onClick={closeMenu}>Record</a>
          <a className="nav-menu__cta" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}



