import Link from "next/dist/client/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from 'next/router'

import styles from "../styles/Sidebar.module.css";

const routes = [
  {

    title: "My Profile",
    path: "/account",
    className: "nav-text",
    icon: "user.svg",
  },
  {

    title: "Semester 1",
    path: "/semester1",
    className: "nav-text",
    icon: "bag1.svg",
  },
  {
    title: "Semester 2",
    path: "/semester2",
    className: "nav-text",
    icon: "bag2.svg",
  },
  {
    title: "Semester 3",
    path: "/semester3",
    className: "nav-text",
    icon: "bag3.svg",
  },
  {
    title: "Semester 4",
    path: "/semester4",
    className: "nav-text",
    icon: "bag4.svg",
  },
  {
    title: "Semester 5",
    path: "/semester5",
    className: "nav-text",
    icon: "bag5.svg",
  },
  {
    title: "Semester 6",
    path: "/semester6",
    className: "nav-text",
    icon: "bag6.svg",
  },
];

const externalRoutes = [
  {
    title: "Blog",
    path: "/blog",
    icon: "icons8-blog.svg",
    className: "nav-text",
  },
  {
    title: "Links",
    path: "/pages/links",
    icon: "icons8-link.svg",
    className: "nav-text",
  },
  {
    title: "Exam Timer",
    path: "/pages/exam-countdown",
    icon: "icons8-timer.svg",
    className: "nav-text",
  },
  {
    title: "Grade Card",
    path: "/grade-card",
    icon: "icons8-exam.svg",
    className: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/pages/contact",
    icon: "icons8-contact-us.svg",
    className: "nav-text",
  },
];

const Sidebar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <div className={styles.top_section}>
          {isOpen && <h1 className={styles.logo}>BCA Kaksha</h1>}
          <div className={styles.bar} onClick={toggle}>
            =
          </div>
        </div>
        <section className={styles.routes}>

        <Link href={'/'} >
                <div
                  className={
                    router.asPath == "/"
                      ? styles.link_active
                      : styles.link
                  }
                >
                  <div className={styles.icon}>
                    <Image
                      src={"/images/icons8-home.svg"}
                      width="20px"
                      height="20px"
                      alt={"icons8-home.svg"}
                      priority="true"
                    />
                  </div>

                  <div>
                    {isOpen && (
                      <div className={styles.link_text}>{"Home"}</div>
                    )}
                  </div>
                </div>
              </Link>

          {routes.map((route, index) => {
            return (
              <Link href={route.path} key={index}>
                <div
                  className={

                    router.asPath.startsWith(route.path)
                      ? styles.link_active
                      : styles.link
                  }>

                  <div className={styles.icon}>
                    <Image
                      src={"/images/" + route.icon}
                      width="20px"
                      height="20px"
                      alt={route.icon}
                      priority="true"
                    />
                  </div>

                  <div>
                    {isOpen && (
                      <div className={styles.link_text}>{route.title}</div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
        <section className={styles.routes}>
          {externalRoutes.map((route, index) => {
            return (
              <Link href={route.path} key={index}>
                <div className={
                    router.asPath.startsWith(route.path)
                      ? styles.link_active
                      : styles.link
                  }>
                  <div className={styles.icon}>
                    <Image
                      src={"/images/" + route.icon}
                      width="20px"
                      height="20px"
                      alt={route.icon}
                      priority="true"
                    />
                  </div>

                  <div>
                    {isOpen && (
                      <div className={styles.link_text}>{route.title}</div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
};


export default Sidebar;

