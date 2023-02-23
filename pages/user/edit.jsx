import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { useRouter } from 'next/router';
import { useUserAuth } from "../../firebase/UserAuthContext";
import axios from "axios";

export default function Accounts() {

    
  const router = useRouter();
  const { user } = useUserAuth();

  const [data, setData] = useState(null); // State to store the product data
  
  const [formData, setFormData] = useState();

  const uid = user?.uid; // Check if user exists before destructuring uid

  // Fetch product data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the server for the product data
        const res = await axios.get(`/api/user/${uid}`);
        const json = res.data;

        // Update the state with the product data
        const fetchData = json.userData;
        // console.log(fetchData);
        setData(fetchData);
        
        setFormData(
            {
                uid: fetchData.uid || uid,
                name: fetchData.name,
                profileImage: fetchData.profileImage,
                semester: fetchData.semester,
                about: fetchData.about,
                rc: fetchData.rc
            }
        )
        console.log(formData);
      } catch (err) {
        console.error(err);
      }
    }
    if (uid) {
      fetchData();
    }
  }, [uid]); // Pass uid to the dependency array to run the effect whenever it changes

  // Show a loading spinner while the data is being fetched
  //  console.log(data);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      await axios.post("/api/user/update", [formData]);

      router.back();
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <>
      <h1 className="text-center text-3xl font-bold p-2 mb-5 m-auto max-w-5xl">
        Edit Account
      </h1>

      <form
        className="flex flex-col p-5 bg-[#fff] row-span-2 rounded-md m-auto max-w-5xl"
        onSubmit={handleSubmit}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData?.name}
          onChange={handleChange}
        />
        <label>Profile Image</label>
        <input
          type="text"
          name="profileImage"
          value={formData?.profileImage}
          onChange={handleChange}
        />
        <label>Semester</label>
        <input
          type="text"
          name="semester"
          value={formData?.semester}
          onChange={handleChange}
        />
        <label>RC Centre</label>
        <input
          type="text"
          name="rc"
          value={formData?.rc}
          onChange={handleChange}
        />
        <label>About</label>
        <input
          type="text"
          name="about"
          value={formData?.about}
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
