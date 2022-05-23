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
  const InternalLinks = [
    {
      title: "Home",
      path: "/",
      className: "nav-text",
    },
    {
      title: "About",
      path: "/about",
      className: "nav-text",
    },
    {
      title: "Contact",
      path: "/contact",
      className: "nav-text",
    },
    {
      title: "Semester 1",
      path: "/semester1",
      className: "nav-text",
    },
    {
      title: "Semester 2",
      path: "/semester2",
      className: "nav-text",
    },
    {
      title: "Semester 3",
      path: "/semester3",
      className: "nav-text",
    },
    {
      title: "Semester 4",
      path: "/semester4",
      className: "nav-text",
    },
    {
      title: "Semester 5",
      path: "/semester5",
      className: "nav-text",
    },
    {
      title: "Semester 6",
      path: "/semester6",
      className: "nav-text",
    },
  ];

  const ExternalLinks = [
    {
      title: "eGyankosh",
      path: "https://www.egyankosh.ac.in/handle/123456789/404",
      className: "nav-text",
    },
    {
      title: "Previous Year Questions",
      path: "https://webservices.ignou.ac.in/Pre-Question/",
      className: "nav-text",
    },
    {
      title: "Gyan Vani",
      path: "http://www.ignou.ac.in/ignou/aboutignou/broadcast/3",
      className: "nav-text",
    },
    {
      title: "Gyan Darshan",
      path: "http://www.ignou.ac.in/ignou/aboutignou/broadcast/1",
      className: "nav-text",
    },
    {
      title: "IGNOU Online",
      path: "http://www.ignouonline.ac.in/",
      className: "nav-text",
    },
    {
      title: "IGNOU Wiki",
      path: "http://ieg.ignou.ac.in/wiki/index.php/Main_Page",
      className: "nav-text",
    },
  ];

  return (
    <>
      <div id="menu-btn" className="menu-button" onClick={openMenu}>
        <BiMenu />
      </div>
      <div className="sidebar" id="menu" onClick={openMenu}>
        <div className="nav-menu" id="header">
          <ul className="menu">
            {InternalLinks.map((item, index) => {
              return (
                <Link key={index} className={item.className} href={item.path}>
                  <a>
                    <li>{item.title}</li>
                  </a>
                </Link>
              );
            })}
            <hr />
            <h4>External Links</h4>
            {ExternalLinks.map((item, index) => {
              return (
                <Link key={index} className={item.className} href={item.path}>
                  <a target="_blank">
                    <li>{item.title}</li>
                  </a>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
