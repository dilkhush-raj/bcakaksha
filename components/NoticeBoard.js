import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import moment from "moment-timezone";
import { useState, useEffect } from "react";

export default function Noticeboard() {
  const [notice, setNotice] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const limit = 10;
  const totalPage = Math.ceil(totalRecords / limit);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/api/notice?page=${pageNo}&limit=${limit}`);
        setNotice(res.data.notice);
        setTotalRecords(res.data.totalRecords);
      } catch (err) {
        console.error(err);
        // Handle errors here
      }
    }

    fetchData();
  }, [pageNo]);

  const handleNext = () => {
    if (pageNo < totalPage) {
      setPageNo(pageNo + 1);
    }
  };

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  return (
    <div className="w-full relative overflow-x-auto shadow-md border-4 bg-slate-100 border-white rounded-md">
      <h2 className="font-bold text-xl p-2 h-[50px] flex-wrap items-center justify-between border-b-4 border-gray-300 flex gap-3">
        Notice Board
        <div className="flex gap-2">
          <button onClick={handlePrev}>
            <Image src="/images/prev.svg" width={30} height={30} alt="<-" />
          </button>
          <button onClick={handleNext}>
            <Image src="/images/next.svg" width={30} height={30} alt="->" />
          </button>
        </div>
      </h2>
      <ul className="pin ml-6 flex flex-wrap gap-4 p-2">
        {notice.map((item) => (
          <li
            key={item._id}
            className="relative items-center border-b-2 border-slate-200 gap-2 w-full p-2"
          >
            <div className="absolute top-[-5px] right-0 text-xs">
              {moment
                .tz(item.updatedAt, "Asia/Kolkata")
                .format("hh:mm A DD MMM YYYY")}
            </div>

            {item.title}
            {item.link ? (
              <button className="text-xs bg-slate-500 text-white px-2 m-2 rounded-md">
                <Link href={item.link} target="_blank">
                  Details
                </Link>
              </button>
            ) : null}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-2 right-2 text-sm">
        Page No. {pageNo}
      </div>
    </div>
  );
}
