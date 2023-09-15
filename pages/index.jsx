import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import moment from "moment-timezone";
import { useState, useEffect } from "react";

export default function Home() {
  const [notice, setNotice] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageAvailable, setPageAvailable] = useState(true);
  const page = pageNo; // set the initial page number
  const limit = 2; // set the number of items per page
  const totalPage = totalRecords / limit;
  // console.log(totalPage);

  const handleNext = () => {
    if (pageNo < totalPage) {
      setPageNo(pageNo + 1);
    }
  };
  const handlePrev = () => {
    if (totalPage <= pageNo + 1) {
      setPageNo(pageNo - 1);
    }
  };
  console.log(pageNo);

  // Fetch user data when page number is updated
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/api/notice?page=${page}&limit=${limit}`);
        setNotice(res.data.notice);
        setTotalRecords(res.data.totalRecords);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [pageNo]);

  // console.log(totalRecords);

  return (
    <>
      <h1 className="page-heading font-bold text-center">IGNOU की BCA कक्षा</h1>
      <div className="max-w-[1000px] mx-auto">
        {/* <img src="/images/IGNOU-Logo.png" width={"50%"} alt="" /> */}
        <div className="h-[200px] rounded-md m-2 sm:m-4  shadow-md border-4 bg-slate-100 border-white hero relative">
          <h2 className="font-bold p-4 text-center text-3xl text-[#111]">
            {/* Welcome */}
          </h2>
        </div>

        <div className="flex gap-2 sm:gap-4 m-2 sm:m-4 sm:flex-row flex-col">
          <div className="max-w-[500px] shadow-md border-4 bg-slate-100 border-white  rounded-md">
            <div className=" p-2 h-[50px] flex-wrap items-center justify-evenly border-b-4 border-white flex gap-3">
              {Category.map((c, index) => {
                return (
                  <Link key={index} href={c.path}>
                    <img
                      src={"/images/" + c.img}
                      className="h-[90%] cursor-pointer"
                    />
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4 p-4 justify-center">
              {SemesterBags.map((item, index) => {
                return (
                  <Link key={index} href={item.path}>
                    <img
                      src={"/images/" + item.img + ".svg"}
                      alt={item.path}
                      className="cursor-pointer w-[120px]"
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="w-full relative overflow-x-auto shadow-md border-4 bg-slate-100 border-white  rounded-md">
            <h2 className="font-bold text-xl p-2 h-[50px] flex-wrap items-center justify-between border-b-4 border-white flex gap-3">
              Notice Board
              <div className="flex gap-2">
                <button onClick={handlePrev}>
                  <Image
                    src={"/images/prev.svg"}
                    width={30}
                    height={30}
                    alt="<-"
                  />
                </button>
                <button onClick={handleNext}>
                  <Image
                    src={"/images/next.svg"}
                    width={30}
                    height={30}
                    alt="->"
                  />
                </button>
              </div>
            </h2>
            <ul className="pin ml-6 flex flex-wrap gap-4 p-2">
              {notice.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="relative items-center border-b-2 border-slate-200 gap-2 w-full p-2"
                  >
                    <div className="absolute top-[-5px] right-0 text-xs">
                      {moment
                        .tz(item.updatedAt, "Asia/Kolkata")
                        .format(" hh:mm A DD MMM YYYY")}
                    </div>

                    {item.title}
                    {item.link ? (
                      <button className="text-xs bg-slate-500 text-white px-2 m-2 rounded-md ">
                        <Link href={item.link} target="_blank">
                          Details
                        </Link>
                      </button>
                    ) : null}
                  </li>
                );
              })}
            </ul>
            <div className="absolute bottom-2 right-2 text-sm ">Page No. {pageNo}</div>
          </div>
        </div>
        <div className=" bg-slate-800 text-white  m-2 sm:m-4 rounded-md p-4 text-center shadow-md border-4 border-white ">
          This is a project developed Dilkhush Raj not actual website of IGNOU. <br />
        </div>
      </div>
    </>
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
    title: "Account",
    path: "/account",
    img: "user.svg",
  },
  {
    title: "Blog",
    path: "/blog",
    img: "icons8-blog.svg",
  },
  {
    title: "Grade Calculator",
    path: "/grade-card",
    img: "icons8-exam.svg",
  },
  {
    title: "Links",
    path: "/pages/links",
    img: "icons8-link.svg",
  },
  {
    title: "Contact",
    path: "/pages/contact",
    img: "icons8-feedback-hub.svg",
  },
];
