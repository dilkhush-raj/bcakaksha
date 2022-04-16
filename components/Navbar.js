import Image from "next/image";
import Link from "next/dist/client/link";

function Navbar() {
  const showSidebar = () =>
    document.getElementById("sidebar").classNameList.toggle("active");
  function openMenu() {
    var element = document.getElementById("menu");
    element.classList.toggle("open-menu");
  }

  return (
    <header>
      {/* Navigation Menu Starts  */}
      <div className="nav-menu" id="header">
        <div id="menu" className="menu">
          <div className="menu-grid">
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li>Semester 1</li>
              <li>Semester 2</li>
              <li>Semester 3</li>
              <li>Semester 4</li>
              <li>Semester 5</li>
              <li>Semester 6</li>
            </ul>
          </div>

          <div className="menu-button" onClick={openMenu}>
            <b>🍔</b>
          </div>
        </div>
      </div>
      {/* Navigation Menu Ends  */}

      {/* Navigation Bar Starts  */}
      <div className="nav-bar">
          <Link href="/">
            <a>
              <span className="logo">iBC</span>
            </a>
          </Link>

        <div className="navigation-links">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="./About">
            <a className="nav-link">About</a>
          </Link>
          <Link href="./Contact">
            <a className="nav-link">Contact</a>
          </Link>
        </div>
      </div>
      {/* Navigations Bar Ends  */}

    </header>
  );
}

export default Navbar;
