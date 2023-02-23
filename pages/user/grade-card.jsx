import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";

import { useUserAuth } from "../../firebase/UserAuthContext";
import axios from "axios";

export default function Accounts() {
  const { user } = useUserAuth();
  // console.log(user);

  const [data, setData] = useState(null); // State to store the product data

  // Fetch product data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the server for the product data
        const res = await axios.get(`/api/user/${user.uid}`);
        const json = res.data;

        // Update the state with the product data
        setData(json.userData);
        console.log(json);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []); // Pass an empty dependency array to run the effect only on mount

  // Show a loading spinner while the data is being fetched
 console.log(data);

  const [formData, setFormData] = useState({
    uid: user.uid,
    name: "",
    semester: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      await axios.post("/api/user", formData);
      setFormData({ uid: user.uid, name: "", semester: "" });
      // setIsModalOpen(false);
      // openMessage();
    } catch (err) {
      console.error(err);
    }
  };
  if (!data) {
    return <Loader />;
  }
// Destructure user and data properties
const { photoURL, displayName } = user;
const { name, semester } = data;

return (
 <>
 <h1 className='text-center text-3xl font-bold p-2 mb-5 m-auto max-w-5xl'>Account</h1>
 <div className="m-2 p-4 bg-[#fff] w-[250px] rounded-md flex flex-col drop-shadow-md">
   <img src={photoURL} className="w-[100px] m-auto rounded-full" />
   <h2 className="text-center">{displayName}</h2>
   <div>Semester : {data.semester}</div>
 </div>

   <form className="flex flex-col p-5 bg-[#fff] row-span-2 rounded-md" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label>Semester</label>
            <input
              type="text"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
            />
            
            <Button type="submit" className="w-5">
              Submit
            </Button>
          </form>
   {/* <Login /> */}
   </>
  );
}