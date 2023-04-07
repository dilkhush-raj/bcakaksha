import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
import { style } from "@mui/system";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Login from "../components/Login";

export default function Home() {
 

  return (
    <div className={styles.main}>
        <h1 className="text-5xl font-bold uppercase mx-auto my-5 p-4 text-center">Welcome to IGNOU Ki BCA Kaksha</h1>
        <div className="fixed top-[10px] right-[20px]"><Login login={"Login"} logout={"Logout"} /></div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-5 mx-a max-w-[400px]">
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
        </div>
    </div>
  );
}

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