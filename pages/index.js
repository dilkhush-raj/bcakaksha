import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import NoticeBoard from "../components/NoticeBoard";

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function Home() {
const defaultLayoutPluginInstance = defaultLayoutPlugin();
  function explore() {
    var element = document.getElementById("menu");
    element.classList.toggle("open-menu");
    window.scrollTo(0, 0);
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
      title: "Imp Links",
      path: "",
      img: "icons8-link.svg"
    },
    {
      title: "Notice Board",
      path: "",
      img: "icons8-noticeboard.svg"
    },
    {
      title: "Blog",
      path: "",
      img: "icons8-blog.svg"
    },
    {
      title: "Resources",
      path: "",
      img: "icons8-albums.svg"
    },
  ];

  return (
    <div className="page">
      <Head>
        <title>IGNOU की BCA कक्षा</title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <meta
          name="keywords"
          content="ignou, bca, kaksha, book, ebook, assignment, question paper, notes,IGNOU की BCA कक्षा"
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      {/* <Hero /> */}
      <div className="hero">
        <div className="hero-content">
          <h3>Everything for IGNOU BCA Students</h3>
          <h1>
            Welcome to
            <br />
            IGNOU की BCA कक्षा
          </h1>
          <h4>This website is under-construction. </h4>

          <button className="cta">
            <Link href="https://discord.gg/M4CXzrud3e">
              <a target="_blank">Join on Discord</a>
            </Link>
          </button>
        </div>
      </div>
      <div className="announcement">
        <marquee behavior="scroll" direction="">Under development | Please bookmark this website | Do share with your friends</marquee>
      </div>
      <section className="home-index">
        <div>
          <h2>Select a Bag to open</h2>
          <ul className="semester-bags">
            {SemesterBags.map((item, index) => {
              return (
                <Link key={index} className={item.className} href={item.path}>
                  <a>
                    <Image
                      src={"/images/" + item.img + ".svg"}
                      width="150px"
                      height="200px"
                      alt={item.path}
                    />
                  </a>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="category">
        {Category.map((item, index) => {
          return (
            <div>
              <Link key={index} href={item.path}>
                <div>
                <img src={"/images/" + item.img} alt={item.title} />
                <b>{item.title}</b></div>
              </Link>
            </div>
          );
        })}
      </div>
        {/* <NoticeBoard /> */}
        

    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
        <div style={{ height: '750px'}}>
            <Viewer
                fileUrl="/pdf/ECO-01.pdf"
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    </Worker>
      </section>
    </div>
  );
}
