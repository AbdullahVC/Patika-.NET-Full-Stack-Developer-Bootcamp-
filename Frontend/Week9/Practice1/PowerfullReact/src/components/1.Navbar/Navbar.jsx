import "./Navbar.style.css";
import NavbarScrolled from "./NavbarScrolled";
import HamburgerMenu from "./HamburgerMenu";
a;
const Navbar = () => {
  return (
    <NavbarScrolled>
      <nav className="navbar__container">
        <div className="navbar__logo">
          <img src="./src/assets/images/logo.png" alt="Logo" />
        </div>
        <div className="navbar__items">
          <a href="#home">Home</a>
          <a href="#classes">Classes</a>
          <a href="#trainers">Trainers</a>
          <a href="#review">Review</a>
          <a href="#contact-us">Contact</a>
        </div>

        <HamburgerMenu />
      </nav>
    </NavbarScrolled>
  );
};

export default Navbar;
