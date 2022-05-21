import Link from "next/dist/client/link";
import { BiMenu } from "react-icons/bi";

function Sidebar() {
  const showSidebar = () =>
    document.getElementById("sidebar").classNameList.toggle("active");
  function openMenu() {
    var element = document.getElementById("menu");
    var menuBtn = document.getElementById("menu-btn");
    document.getElementById("menu").classList.toggle("open-menu");
  }

  return (
    <>
      <div id="menu-btn" className="menu-button" onClick={openMenu}>
        <BiMenu />
      </div>
      <div className="sidebar" id="menu" onClick={openMenu}>
        {/* Navigation Menu Starts  */}
        <div className="nav-menu" id="header">
          <ul className="menu">
            <Link href="/">
              <a>
                <li>Home</li>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <li>About</li>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <li>Contact</li>
              </a>
            </Link>
            {/* <Link href="/regional-centre">
              <a>
                <li>Regional Centre</li>
              </a>
            </Link> */}
            <Link href="/semester1">
              <a>
                <li>Semester 1</li>
              </a>
            </Link>
            <Link href="/semester2">
              <a>
                <li>Semester 2</li>
              </a>
            </Link>
            <Link href="/semester3">
              <a>
                <li>Semester 3</li>
              </a>
            </Link>
            <Link href="/semester4">
              <a>
                <li>Semester 4</li>
              </a>
            </Link>
            <Link href="/semester5">
              <a>
                <li>Semester 5</li>
              </a>
            </Link>
            <Link href="/semester6">
              <a>
                <li>Semester 6</li>
              </a>
            </Link>
          </ul>
        </div>
        {/* Navigation Menu Ends  */}
      </div>
    </>
  );
}

export default Sidebar;
