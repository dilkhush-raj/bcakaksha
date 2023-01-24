import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
import { style } from "@mui/system";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

export default function Home() {
  const SemesterBags = [
    {
      img: "bag1",
      path: "/semester1",
      className: "semester-bag",
    },
    {
      img: "bag2",
      path: "/semester2",
      className: "semester-bag",
    },
    {
      img: "bag3",
      path: "/semester3",
      className: "semester-bag",
    },
    {
      img: "bag4",
      path: "/semester4",
      className: "semester-bag",
    },
    {
      img: "bag5",
      path: "/semester5",
      className: "semester-bag",
    },
    {
      img: "bag6",
      path: "/semester6",
      className: "semester-bag",
    },
  ];

  const Category = [
    {
      title: "Links",
      path: "/pages/links",
      img: "icons8-external-link.svg",
    },
    {
      title: "Notice Board",
      path: "/pages/notice",
      img: "icons8-noticeboard.svg",
    },
    {
      title: "Grade Calculator",
      path: "/pages/grade-calculator",
      img: "icons8-exam.svg",
    },
    {
      title: "Exam Timer",
      path: "/pages/exam-countdown",
      img: "icons8-timer.svg",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.top_row}>
        <h1 className={styles.logo}>Welcome to <br /> IGNOU Ki BCA Kaksha</h1>
        {/* <div className={styles.links}>
          {Category.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <a>
                  <Image
                    src={"/images/" + item.img}
                    width={20}
                    height={20}
                    alt={""}
                  />
                  {item.title}
                </a>
              </Link>
            );
          })}
        </div> */}
      </div>
      <div></div>

      <div className={styles.semesterBags}>
        <ul className={styles.bags}>
          {SemesterBags.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <a>
                  <Image
                    src={"/images/" + item.img + ".svg"}
                    width={120}
                    height={120}
                    alt={item.path}
                    className={styles.bag}
                  />
                </a>
              </Link>
            );
          })}
        </ul>
      </div>
      {/* <Image src={"/images/hero.svg"} width={600} height={400} alt={"hero-image"} /> */}
    </div>
  );
}
