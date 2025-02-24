import { useState } from "react";
import "./NavbarMenu.style.css";

const NavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { href: "#", text: "Home" },
    { href: "#classes", text: "Classes" },
    { href: "#trainers", text: "Trainer" },
    { href: "#review", text: "Review" },
    { href: "#contact-us", text: "Contact" },
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="hamburger-menu">
        {/* Hamburger Butonu */}
        <button
          className={`hamburger-button ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Menü Öğeleri */}
        <div className={`menu-items ${isMenuOpen ? "show" : ""}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.text}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
