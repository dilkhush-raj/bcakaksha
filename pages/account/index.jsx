import Button from "@mui/material/Button";

import { useState, useEffect, useRef } from "react";
import semesters from "../../data/semesters.json";
import regionalCenters from "../../data/rc.json"

import Loader from "../../components/Loader";
import Image from "next/image";
import { useUserAuth } from "../../firebase/UserAuthContext";
import axios from "axios";
import { Link } from "@mui/material";
import Login from "../../components/Login";

export default function Accounts() {
  const { user } = useUserAuth();

  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  const [data, setData] = useState(null); // State to store the product data
  const [rc, setRc] = useState([]); // State to store the product data

  const semester = semesters["semester" + data?.semester];

  const uid = user?.uid;
  const [copyStatus, setCopyStatus] = useState("Copy");
  const textRef = useRef(null);

  // Fetch product data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the server for the product data

        const res = await axios.get(`/api/user/edit/${uid}`);

        const json = res.data;

        // Update the state with the product data
        setData(json.userData);


        // console.log(json);
      } catch (err) {
        console.error(err);
      }

    }
    if (uid) {
      fetchData();
    }
   

  }, [uid]); // Pass uid to the dependency array to run the effect whenever it changes

  useEffect(() => {
    
  const center = regionalCenters.filter((center) => center.name == data?.rc);
  setRc(center)
  }, [data?.rc])
  function handleCopy() {
    // Copy the text to clipboard
    navigator.clipboard.writeText(uid);

    // Update the copy status
    setCopyStatus("Copied!");
  }
  


  return (
    <>
      <h1 className="page-heading">Account</h1>
      {CheckUser(user) ? (
      <div className="p-5">
        <div className="relative custombg p-4 bg-[#fff] max-w-5xl mx-auto rounded-md flex flex-col drop-shadow-md">
          <div className="absolute flex right-5 top-5">
            <Link href={"/account/edit"}>
              <Button type="primary">Edit</Button>
            </Link>
          </div>
          <div className="absolute flex p-2 gap-5 right-0 top-[138px]">
            <div className="flex items-center justify-center gap-1">
              <Image src={"/images/gcap.svg"} width={20} height={20} />
              <div>{"Semester " + data?.semester}</div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Image
                src={"/images/icons8_place_marker.svg"}
                width={20}
                height={20}
              />
              <div><Link href={rc[0]?.url || "#"} className="text-[#000]"  target="_blank">{rc[0]?.name || "Update Your RC"}</Link></div>
            </div>
          </div>
          <div className="absolute flex p-2 pr-8 gap-5 right-0 top-[180px]">
            <Link href={data?.linkedin || "#"} target="_blank">
            <Image src={"/images/icons8_linkedin_circled_1.svg"} width={35} height={35} />
            </Link>
            <Link href={data?.github  || "#"} target="_blank">
            <Image src={"/images/icons8_github.svg"} width={35} height={35} />
            </Link>
            <Link href={data?.portfolio  || "#"} target="_blank">
            <Image src={"/images/icons8_resume_website.svg"} width={35} height={35} />
            </Link>
          </div>

          <div className="max-w-2xl mt-[100px] ">
            <img
              src={data?.profileImage || "/images/user.svg"}
              className="w-[100px] rounded-full"
            />
            <h2 className="">{data?.name}</h2>

            <div>{data?.about}</div>
            {/* <div>
              <span ref={textRef} style={{ display: "none" }}>
                {"https://bcakaksha.vercel.app/user/" + uid}
              </span>
              <button onClick={handleCopy}>{copyStatus}</button>
            </div> */}
          </div>
        </div>

        <div className="relative my-4 p-4 bg-[#fff] max-w-5xl mx-auto rounded-md flex flex-col drop-shadow-md">
          <h2 className="text-xl">Books</h2>
          <div className="book-wrap">
            {semester?.book.map((value, index) => (
              <Link
                className="books"
                key={index}
                href={"semester" + data?.semester + "/" + value.url}
              >
                <h2>{value.name}</h2>
              </Link>
            ))}
          </div>

          <h2>Assignments</h2>
          <div className="book-wrap">
            {semester?.assignments.map((value, index) => (
              <Link
                className="books"
                traget="_blank"
                key={index}
                href={value.url}
              >
                <h2>{value.name}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>) : <>Please Login first <Login login="Login"/></>}
    </>
  );
}
