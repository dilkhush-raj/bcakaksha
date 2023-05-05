// Importing necessary libraries and components
import { useState, useEffect, useRef } from "react";
import regionalCenters from "../../data/rc.json";
import Image from "next/image";
import { useUserAuth } from "../../firebase/UserAuthContext";
import axios from "axios";
import Link from "next/link";
import Login from "../../components/Login";

// Main function of the Accounts page
export default function Accounts() {
  const { user } = useUserAuth();
  const [book, setBook] = useState([]);
  const [data, setData] = useState(null);
  const [rc, setRc] = useState([]);
  const [copyStatus, setCopyStatus] = useState("Copy");
  const textRef = useRef(null);
  // This function checks if the user is logged in
  function isUserLoggedIn(user) {
    return !!user;
  }

  // Fetch user data when uid is updated
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/api/user/edit/${user.uid}`);
        setData(res.data.userData);
      } catch (err) {
        console.error(err);
      }
    }

    if (isUserLoggedIn(user)) {
      fetchData();
    }
  }, [user]);

  // Fetch semester data when data is updated
  useEffect(() => {
    async function fetchData() {
      try {
        const api = axios.create({
          baseURL: "/api/course/semester",
        });
        const res = await api.get(`/${data?.semester}`);
        setBook(res.data.data);
      } catch (err) {
        console.error(err);
      }
    }

    if (data?.semester) {
      fetchData();
    }
  }, [data?.semester]);

  // Set regional center when data is updated
  useEffect(() => {
    const center = regionalCenters.find((center) => center.name === data?.rc);
    setRc(center);
  }, [data?.rc]);

  // This function handles text copy
  function handleCopy() {
    navigator.clipboard.writeText(user.uid); // Copy the text to clipboard
    setCopyStatus("Copied!"); // Update the copy status
  }

  const groupedData = book.reduce((obj, item) => {
    if (!obj[item.category]) {
      obj[item.category] = [];
    }
    obj[item.category].push(item);
    return obj;
  }, {});

  return (
    <>
      <h1 className="page-heading">Account</h1>
      {isUserLoggedIn(user) ? (
        <div className="p-2 sm:p-5">
          <div className="relative custombg p-4 bg-[#fff] max-w-5xl mx-auto rounded-md flex flex-col drop-shadow-md">
            {/* Edit button */}
            <div className="absolute flex right-5 top-5">
              <Link href={"/account/edit"}>
                <div className="text-black">Edit</div>
              </Link>
            </div>
            {/* Semester and center details */}
            <div className="absolute flex p-2 gap-2 right-0 top-[100px] flex-col-reverse sm:gap-5 sm:top-[138px] sm:flex-row">
              <div className="flex items-center justify-center gap-1">
                <Image src={"/images/gcap.svg"} width={20} height={20} alt="" />
                <div>{"Semester " + data?.semester}</div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Image
                  src={"/images/icons8_place_marker.svg"}
                  width={20}
                  height={20}
                  alt=""
                />
                <Link
                  href={rc?.url || "#"}
                  className="text-[#000]"
                  target="_blank"
                >
                  <div className="text-[#000]">
                    {rc?.name || "Update Your RC"}
                  </div>
                </Link>
              </div>
            </div>
            {/* Social media links */}
            <div className="absolute flex p-2 pr-2 gap-2 right-0 top-[180px]">
              <Link href={data?.linkedin || "#"} target="_blank">
                <Image
                  src={"/images/icons8_linkedin_circled_1.svg"}
                  width={35}
                  height={35}
                  alt=""
                />
              </Link>
              <Link href={data?.github || "#"} target="_blank">
                <Image
                  src={"/images/icons8_github.svg"}
                  width={35}
                  height={35}
                  alt=""
                />
              </Link>
              <Link href={data?.portfolio || "#"} target="_blank">
                <Image
                  src={"/images/icons8_resume_website.svg"}
                  width={35}
                  height={35}
                  alt=""
                />
              </Link>
            </div>
            {/* User details */}
            <div className="max-w-2xl mt-[100px]">
              <img
                src={data?.profileImage || "/images/user.svg"}
                className="w-[100px] rounded-full"
                alt=""
              />
              <h2 className="">{data?.name}</h2>
              <div>{data?.about}</div>
            </div>
          </div>
          {/* Books and Assignments section */}
          <div className="relative my-4 p-4 bg-[#fff] max-w-5xl mx-auto rounded-md flex flex-col drop-shadow-md">
            {Object.entries(groupedData).map(([category, categoryData]) => (
              <div key={category}>
                <h2 className="capitalize">{category}</h2>
                <ul className="book-wrap">
                  {categoryData.map((item, index) => (
                    <Link
                      key={index}
                      href={"/semester" + data?.semester + "/" + item?.slug}
                    >
                      <div className="books">{item.name}</div>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-[80%] items-center justify-center flex-col gap-4 m-2">
          <div className="text-center">Please login to view your Account </div>
          <div className="bg-[#0ad] px-4 py-2 rounded-md "><Login login="Continue with Google" /></div>
        </div>
      )}
    </>
  );
}
