import Link from "next/dist/client/link";
import { BiMenu } from "react-icons/bi";
// import { SiDiscord, SiLinkedin, SiYoutube } from "react-icons/si";

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
        <div className="menu-button" onClick={openMenu}>
          <b><BiMenu /></b>
        </div>
        <div id="menu" className="menu">
          <ul>
            <Link href="/"><a><li>Home</li></a></Link>
            <Link href="/About"><a><li>About</li></a></Link>
            <Link href="/Contact"><a><li>Contact</li></a></Link>
            {/* <li><SiDiscord /></li>
            <li><SiLinkedin /></li>
            <li><SiYoutube /></li> */}
          </ul>
          <ul>
            <li>About IGNOU BCA Course</li>
            <li>Guidlines for freshman</li>
            <li>Important Links</li>
          </ul>
          <ul>
            <li>Semester 1</li>
            <Link href="/semester2/"><a><li>Semester 2</li></a></Link>
            <li>Semester 3</li>
          </ul>
          <ul>
            <li>Semester 4</li>
            <li>Semester 5</li>
            <li>Semester 6</li>
          </ul>
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
          <Link href="/About">
            <a className="nav-link">About</a>
          </Link>
          <Link href="/Contact">
            <a className="nav-link">Contact</a>
          </Link>
        </div>
      </div>
      {/* Navigations Bar Ends  */}
    </header>
  );
}

export default Navbar;
