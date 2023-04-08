import Button from "@mui/material/Button";
import { useState, useEffect, useRef  } from "react";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";
import Image from "next/image";
import { useUserAuth } from "../../firebase/UserAuthContext";
import axios from "axios";
import { Link } from "@mui/material";
import Login from "../../components/Login";

export default function Accounts() {
    
  const router = useRouter();
  

  const [data, setData] = useState(null); // State to store the product data

  const uid = router.query.user;

  const [copyStatus, setCopyStatus] = useState('Copy');
  const textRef = useRef(null);


  // Fetch product data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the server for the product data
        const res = await axios.get(`/api/user/${uid}`);
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

  function handleCopy() {
    // Copy the text to clipboard
    navigator.clipboard.writeText(textRef.current.textContent);
  
    // Update the copy status
    setCopyStatus('Copied!');
  }
  


  return (
    <>
      <h1 className="page-heading">Account</h1>
      <div className="p-5">
        <div className="relative custombg p-4 bg-[#fff] max-w-5xl mx-auto rounded-md flex flex-col drop-shadow-md">
          <div className="absolute flex right-5 top-5">
          <span ref={textRef} style={{display: "none"}}>{"https://bcakaksha.vercel.app/user/" + uid}</span>
              <button onClick={handleCopy}>{copyStatus}</button>
          </div>
          <div className="absolute flex p-2 gap-5 right-0 top-[138px]">
            <div>
              <Image src={"/images/gcap.svg"} width={20} height={20} />
              {" " + data?.semester}
            </div>
            <div>
              <Image
                src={"/images/icons8_place_marker.svg"}
                width={20}
                height={20}
              />
              {" " + data?.rc}
            </div>
          </div>
          <div className="max-w-2xl mt-[100px] ">
            <img src={data?.profileImage} className="w-[100px] rounded-full" />
            <h2 className="">{data?.name}</h2>

            <div>{data?.about}</div>
            
          </div>
        </div>
      </div>
    </>
  );
}
