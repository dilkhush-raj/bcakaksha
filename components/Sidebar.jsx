import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Sidebar.module.css";
import routes from "../data/routes";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
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
          <Link href={"/"}>
            <div
              className={
                router.asPath == "/" ? styles.link_active : styles.link
              }
            >
              <div className={styles.icon}>
                <img
                  src={"/images/icons8-home.svg"}
                  width="20"
                  height="20"
                  alt={"icons8-home.svg"}
                  priority="true"
                />
              </div>

              <div>
                {isOpen && <div className={styles.link_text}>{"Home"}</div>}
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
                  }
                >
                  <div className={styles.icon}>
                    <img
                      src={"/images/" + route.icon}
                      width="20"
                      height="20"
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
