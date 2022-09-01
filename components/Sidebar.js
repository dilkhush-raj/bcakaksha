import Link from "next/dist/client/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Image from "next/image";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const ShowSidebar = () => setSidebar(!sidebar);

  const InternalLinks = [
    {
      title: "Home",
      path: "/",
      className: "nav-text",
      img: "icons8-home.svg",
    },
    {
      title: "Semester 1",
      path: "/semester1",
      className: "nav-text",
      img: "bag1.svg",
    },
    {
      title: "Semester 2",
      path: "/semester2",
      className: "nav-text",
      img: "bag2.svg",
    },
    {
      title: "Semester 3",
      path: "/semester3",
      className: "nav-text",
      img: "bag3.svg",
    },
    {
      title: "Semester 4",
      path: "/semester4",
      className: "nav-text",
      img: "bag4.svg",
    },
    {
      title: "Semester 5",
      path: "/semester5",
      className: "nav-text",
      img: "bag5.svg",
    },
    {
      title: "Semester 6",
      path: "/semester6",
      className: "nav-text",
      img: "bag6.svg",
    },
  ];

  const ExternalLinks = [
    {
      title: "Blog",
      path: "/blog",
      img: "icons8-blog.svg",
      className: "nav-text",
    },
    {
      title: "Links",
<<<<<<< HEAD
      path: "/links",
=======
      path: "/pages/links",
>>>>>>> dev
      img: "icons8-external-link.svg",
      className: "nav-text",
    },
    {
      title: "Notice Board",
<<<<<<< HEAD
      path: "/notice",
=======
      path: "/pages/notice",
>>>>>>> dev
      img: "icons8-noticeboard.svg",
      className: "nav-text",
    },
    {
      title: "Resources",
<<<<<<< HEAD
      path: "/resources",
=======
      path: "/pages/resources",
>>>>>>> dev
      img: "icons8-albums.svg",
      className: "nav-text",
    },
    {
      title: "Exam Timer",
<<<<<<< HEAD
      path: "/exam-countdown",
=======
      path: "/pages/exam-countdown",
>>>>>>> dev
      img: "icons8-timer.svg",
      className: "nav-text",
    },
    {
      title: "FAQ",
<<<<<<< HEAD
      path: "/faq",
=======
      path: "/pages/faq",
>>>>>>> dev
      img: "icons8-faq.svg",
      className: "nav-text",
    },
    {
      title: "Feedback",
<<<<<<< HEAD
      path: "/feedback",
=======
      path: "/pages/feedback",
>>>>>>> dev
      img: "icons8-feedback-hub.svg",
      className: "nav-text",
    },
    {
      title: "Support Us",
<<<<<<< HEAD
      path: "/support",
=======
      path: "/pages/support",
>>>>>>> dev
      img: "icons8-charity-box.svg",
      className: "nav-text",
    },
    {
      title: "Contact Us",
<<<<<<< HEAD
      path: "/contact",
=======
      path: "/pages/contact",
>>>>>>> dev
      img: "icons8-contact-us.svg",
      className: "nav-text",
    },
  ];

  return (
    <>
      <div id="menu-btn" className="menu-button" onClick={ShowSidebar}>
        <BiMenu />
      </div>
      <div
        className={sidebar ? "sidebar active" : "sidebar"}
        onClick={ShowSidebar}
      >
        <div className="nav-menu" id="header">
          <ul className="menu">
            {InternalLinks.map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <a>
                    <li className={item.className}><Image src={"/images/" + item.img} width="20px" height="20px" /> {item.title}</li>
                  </a>
                </Link>
              );
            })}
            <hr />
            {/* <h4>External Links</h4> */}
            {ExternalLinks.map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <a>
                    <li className={item.className}><Image src={"/images/" + item.img} width="20px" height="20px" /> {item.title}</li>
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
