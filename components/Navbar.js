import Link from "next/dist/client/link";
import { BiMenu } from "react-icons/bi";
import {
  IoMdArrowRoundBack,
  IoMdArrowRoundForward,
  IoMdArrowRoundUp,
} from "react-icons/io";
import { AiFillHome, AiFillCloseCircle } from "react-icons/ai";

function Navbar() {
  const showSidebar = () =>
    document.getElementById("sidebar").classNameList.toggle("active");
  function openMenu() {
    var element = document.getElementById("menu");
    var menuBtn = document.getElementById("menu-btn");
    element.classList.toggle("open-menu");
  }
  function goBack() {
    window.history.go(-1);
  }
  function goForward() {
    window.history.go(1);
  }
  function Up() {
    window.scrollTo(0, 0);
  }

  return (
    <header>
      {/* Navigation Bar Starts  */}
      <div className="nav-bar">
        <Link href="/">
          <a>
            <span className="logo">IGNOU की BCA कक्षा</span>
          </a>
        </Link>

        <div className="navigation-links">
          {/* <Link href="/">
            <a className="nav-link">Home</a>
          </Link> */}
        </div>
      </div>
      <ul className="navigations">
        <li onClick={Up}>
          <IoMdArrowRoundUp />
        </li>
        {/* <li onClick={goBack}>
          <IoMdArrowRoundBack />
        </li>
        <li>
          <Link href="/">
            <a>
              <AiFillHome />
            </a>
          </Link>
        </li>
        <li onClick={goForward}>
          <IoMdArrowRoundForward />
        </li> */}
      </ul>
      {/* Navigations Bar Ends  */}
    </header>
  );
}

export default Navbar;
