import Link from "next/dist/client/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import Login from "./Login";
import { useUserAuth } from "../firebase/UserAuthContext";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const ShowSidebar = () => setSidebar(!sidebar);

  const { user } = useUserAuth();
  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  const InternalLinks = [
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
      path: "/pages/links",
      img: "icons8-external-link.svg",
      className: "nav-text",
    },
    {
      title: "Notice Board",
      path: "/pages/notice",
      img: "icons8-noticeboard.svg",
      className: "nav-text",
    },
    {
      title: "Resources",
      path: "/pages/resources",
      img: "icons8-albums.svg",
      className: "nav-text",
    },
    {
      title: "Exam Timer",
      path: "/pages/exam-countdown",
      img: "icons8-timer.svg",
      className: "nav-text",
    },
    {
      title: "Grade Calculator",
      path: "/pages/grade-calculator",
      img: "icons8-exam.svg",
      className: "nav-text",
    },
    {
      title: "FAQ",
      path: "/pages/faq",
      img: "icons8-faq.svg",
      className: "nav-text",
    },
    {
      title: "Feedback",
      path: "/pages/feedback",
      img: "icons8-feedback-hub.svg",
      className: "nav-text",
    },
    {
      title: "Support Us",
      path: "/pages/support",
      img: "icons8-charity-box.svg",
      className: "nav-text",
    },
    {
      title: "Contact Us",
      path: "/pages/contact",
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
            <Link href="/">
              <a>
                <li className="nav-text">
                  <Image
                    src={"/images/icons8-home.svg"}
                    width="20px"
                    height="20px"
                  />{" "}
                  Home
                </li>
              </a>
            </Link>
            {CheckUser(user) ? (
              <Link href={"/user"}>
                <a>
                  <li className="nav-text">
                    <Image
                      src={"/images/icons8-male-user-50.svg"}
                      width="20px"
                      height="20px"
                    />{" "}
                    Account
                  </li>
                </a>
              </Link>
            ) : (
              <></>
            )}

            {InternalLinks.map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <a>
                    <li className={item.className}>
                      <Image
                        src={"/images/" + item.img}
                        width="20px"
                        height="20px"
                      />{" "}
                      {item.title}
                    </li>
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
                    <li className={item.className}>
                      <Image
                        src={"/images/" + item.img}
                        width="20px"
                        height="20px"
                      />{" "}
                      {item.title}
                    </li>
                  </a>
                </Link>
              );
            })}
            <Login />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
