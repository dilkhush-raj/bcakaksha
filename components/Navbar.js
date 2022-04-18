import Link from "next/dist/client/link";
import { BiMenu } from "react-icons/bi";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
// import { SiDiscord, SiLinkedin, SiYoutube, } from "react-icons/si";

function Navbar() {
  const showSidebar = () =>
    document.getElementById("sidebar").classNameList.toggle("active");
  function openMenu() {
    var element = document.getElementById("menu");
    element.classList.toggle("open-menu");
  }
  function goBack()
 {
 window.history.go(-1)
 }
  function goForward()
 {
 window.history.go(1)
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
            
          </ul>
          <ul>
            <li>About IGNOU BCA Course</li>
            <li>Guidlines for freshman</li>
            <li>Important Links</li>
          </ul>
          <ul>
            <Link href="/semester1/"><a><li>Semester 1</li></a></Link>
            <Link href="/semester2/"><a><li>Semester 2</li></a></Link>
            <Link href="/semester3/"><a><li>Semester 3</li></a></Link>
          </ul>
          <ul>
            <Link href="/semester4/"><a><li>Semester 4</li></a></Link>
            <Link href="/semester5/"><a><li>Semester 5</li></a></Link>
            <Link href="/semester6/"><a><li>Semester 6</li></a></Link>
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
      <ul className="navigations">
          <li onClick={goBack}><IoMdArrowRoundBack /></li>
            <li><Link href="/"><a><AiFillHome /></a></Link></li>
            <li onClick={goForward}><IoMdArrowRoundForward /></li>
            {/* <li><SiDiscord /></li>
            <li><SiLinkedin /></li>
            <li><SiYoutube /></li> */}
        </ul>
      {/* Navigations Bar Ends  */}
    </header>
  );
}

export default Navbar;
