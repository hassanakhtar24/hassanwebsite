import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";

import styles from "./LandingNavigation.module.scss";
import { IoMenuOutline } from "react-icons/io5";

import { useScrollEffect } from "@/utils/useScrollEffect";
import { scrollToId } from "@/utils/scrollToId.js";
import { logo } from "@/data/logo";

function Navigation({ className = "", id, data = [] }) {
  if (data.length === 0) return null;

  const [expanded, setExpanded] = useState(false);

  const isScrolled = useScrollEffect(50);

  const iconColor = "#fff";

  const logoSrc = logo.light;

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
        {/* Logo: On landing page, usually scrolls to top */}
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

        <Navbar.Toggle aria-controls="main-navbar-nav" className={styles.mobileButton}>
          <IoMenuOutline size={32} color={iconColor} />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar-nav" className={styles.overlay}>
          <Nav className="ms-auto align-items-center">
            {data.links.map((item) => (
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
  );
}

export default Navigation;
