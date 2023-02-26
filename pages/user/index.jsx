import Button from "@mui/material/Button";
import { useState, useEffect, useRef } from "react";
import semesters from "../../data/semesters.json";

import Loader from "../../components/Loader";
import Image from "next/image";
import { useUserAuth } from "../../firebase/UserAuthContext";
import axios from "axios";
import { Link } from "@mui/material";
import Login from "../../components/Login";

export default function Accounts() {
  const { user } = useUserAuth();

  const [data, setData] = useState(null); // State to store the product data

  const semester = semesters["semester" + data?.semester];

  const uid = user?.uid;

  const [userId, setUserId] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

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
        setUserId(json.userData._id);
        // console.log(json);
      } catch (err) {
        console.error(err);
      }
    }
    if (uid) {
      fetchData();
    }
  }, [uid]); // Pass uid to the dependency array to run the effect whenever it changes

  function handleCopy() {
    // Copy the text to clipboard
    navigator.clipboard.writeText(textRef.current.textContent);

    // Update the copy status
    setCopyStatus("Copied!");
  }

  // Show a loading spinner while the data is being fetched
  // console.log(data);
  if (!user) {
    return (
      <>
        <Login />
      </>
    );
  }

  // Destructure user and data properties
  const { photoURL, displayName } = user;

  return (
    <>
      <h1 className="page-heading">Account</h1>
      <div className="p-5">
        <div className="relative custombg p-4 bg-[#fff] max-w-5xl mx-auto rounded-md flex flex-col drop-shadow-md">
          <div className="absolute flex right-5 top-5">
            <Button>
              <Login />
            </Button>

            <Link href={"/user/edit"}>
              <Button type="primary">Edit</Button>
            </Link>
          </div>
          <div className="absolute flex p-2 gap-5 right-0 top-[138px]">
            <div>
              <Image src={"/images/gcap.svg"} width={20} height={20} />
              {"Semester " + data?.semester}
            </div>
            <div>
              <Image
                src={"/images/icons8_place_marker.svg"}
                width={20}
                height={20}
              />
              {"Study Centre: " + data?.rc}
            </div>
          </div>
          <div className="max-w-2xl mt-[100px] ">
            <img src={data?.profileImage} className="w-[100px] rounded-full" />
            <h2 className="">{displayName}</h2>

            <div>{data?.about}</div>
            <div>
              <span ref={textRef} style={{ display: "none" }}>
                {"https://bcakaksha.vercel.app/user/" + uid}
              </span>
              {/* <button onClick={handleCopy}>{copyStatus}</button> */}
            </div>
          </div>

          {/* <h2>Books</h2>
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
          </div> */}
        </div>
      </div>
    </>
  );
}
