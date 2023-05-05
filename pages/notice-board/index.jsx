import axios from "axios";
import Link from "next/link";
import moment from "moment-timezone";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Book() {
  const router = useRouter();
  const [notice, setNotice] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  console.log(pageNo);

  // Fetch user data when uid is updated
  useEffect(() => {
    async function fetchData() {
      try {
        const page = pageNo; // set the initial page number
        const limit = 2; // set the number of items per page
        const res = await axios.get(`/api/notice?page=${page}&limit=${limit}`);
        setNotice(res.data.notice);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [pageNo]);

  async function handleDelete(id) {
    // check if the id is valid
    console.log(id);
    if (id) {
      // try to fetch the delete API with the id as the query
      try {
        if (window.confirm("Are you sure you want to delete this item?")) {
          const res = await fetch(`/api/notice?id=${id}`, {
            method: "DELETE",
          });
        }
      } catch (error) {
        // if there is an error, set the message state to the error message
      }
    } else {
      // if the id is not valid, set the message state to an empty string
    }
  }


  return (
    <>
      <div className="w-full max-w-4xl mx-auto mt-10 shadow-md border-4 bg-slate-100 border-white  rounded-md">
        <Link href={"/notice-board/update"}>
          <button>Add</button>
        </Link>
        <h2 className="font-bold text-xl p-2 h-[50px] flex-wrap items-center justify-evenly border-b-4 border-white flex gap-3">
          Notice Board
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
                {
                  <button className="text-xs bg-[#d00] text-white px-2 m-2 rounded-md " onClick={() => handleDelete(item?._id)}>Delete</button>
                }
              </li>
            );
          })}
        </ul>
        <button onClick={() => setPageNo(pageNo - 1)}>Previous</button>
        <button onClick={() => setPageNo(pageNo + 1)}>Next</button>
      </div>
    </>
  );
}
