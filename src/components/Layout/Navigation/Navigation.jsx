import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Navigation.module.scss";
import { IoMenuOutline } from "react-icons/io5";

import { scrollToId } from "@/utils/scrollToId.js";
import { useScrollEffect } from "@/utils/useScrollEffect";
import { logo } from "@/data/logo";
import { navData } from "@/data/navigation";

function Navigation({ className = "", id, isDark = false }) {
  if (navData.length === 0) return null;

  const isScrolled = useScrollEffect(50);

  const iconColor = isDark ? "#ffffff" : isScrolled ? "var(--text-main)" : "var(--text-inverse)";

  const logoSrc = isDark ? logo.light : isScrolled ? logo.dark : logo.light;

  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = (e, link) => {
    const isAnchor = link.startsWith("#");

    if (isAnchor) {
      e.preventDefault();
      const targetId = link.replace("#", "");

      if (typeof scrollToId === "function") {
        scrollToId(targetId);
      }

      setExpanded(false);
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        variant="light"
        fixed="top"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        id={id}
        className={`${styles.navbar} ${className} ${isScrolled ? styles.navbarScrolled : ""}`.replace(/\s+/g, " ").trim()}
      >
        <Container className={`${styles.navbarContainer} ${isScrolled ? styles.navbarContainerScrolled : ""}`.replace(/\s+/g, " ").trim()}>
          {/* Navbar Logo */}
          <Navbar.Brand
            href="#home"
            onClick={(e) => {
              handleLinkClick(e, "#home");
              setExpanded(false);
            }}
            className={styles.navbarImage}
          >
            <img alt="Logo" src={logoSrc} />
          </Navbar.Brand>

          {/* Hamburger button */}
          <Navbar.Toggle aria-controls="main-navbar-nav" className={styles.mobileButton}>
            <IoMenuOutline size={32} color={iconColor} />
          </Navbar.Toggle>

          {/* Collapsible navData */}
          <Navbar.Collapse id="main-navbar-nav" className={styles.overlay}>
            <Nav className="ms-auto align-items-center">
              {navData.links.map((item) => (
                <Nav.Link
                  key={item.text}
                  href={item.link}
                  target={!item.link.startsWith("#") ? "_blank" : undefined}
                  rel={!item.link.startsWith("#") ? "noopener noreferrer" : undefined}
                  className={`${styles.linkText} ${isScrolled ? styles.linkTextScrolled : ""}`}
                  onClick={(e) => handleLinkClick(e, item.link)}
                >
                  {item.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={styles.frameTop}></div>
      <div className={`${styles.frameLeft} ${isScrolled ? styles.hideLeft : ""}`}></div>
      <div className={`${styles.frameRight} ${isScrolled ? styles.hideRight : ""}`}></div>
    </>
  );
}

export default Navigation;
