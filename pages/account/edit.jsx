import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import regionalCenters from "../../data/rc.json";
import { useUserAuth } from "../../firebase/UserAuthContext";
import axios from "axios";

export default function Accounts() {
  const {
    user: { uid },
  } = useUserAuth();

  const router = useRouter();

  const [formData, setFormData] = useState({
    uid: uid,
    name: "",
    profileImage: "",
    semester: "",
    about: "",
    rc: "",
    github: "",
    linkedin: "",
    portfolio: "",
  });


  // Fetch product data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the server for the product data

        const api = axios.create({
          baseURL: "/api/user/",
        });
        const res = await api.get(`edit/${uid}`);
        const json = res.data;

        // Update the state with the product data
        const fetchData = json.userData || {};

        setFormData({
          uid: fetchData.uid || uid,
          name: fetchData.name || "",
          profileImage: fetchData.profileImage || "",
          semester: fetchData.semester || "",
          about: fetchData.about || "",
          rc: fetchData.rc || "",
          github: fetchData.github || "",
          linkedin: fetchData.linkedin || "",
          portfolio: fetchData.portfolio || "",
        });
        // setSocialLinks(fetchData.social || []);
      } catch (err) {
        console.error(err);
      }
    }
    if (uid) {
      fetchData();
    }
  }, [uid]); // Pass uid to the dependency array to run the effect whenever it changes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/user/update", [formData]);
      router.back();
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <>
      <h1 className="text-center text-3xl font-bold p-2 mb-5 m-auto max-w-4xl">
        Edit Account
      </h1>

      <form
        className="flex flex-col drop-shadow-md p-5 bg-[#fff] row-span-2 rounded-md m-auto max-w-2xl"
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
        <label htmlFor="semester">Select Semester:</label>
        <select
          id="semester"
          name="semester"
          value={formData?.semester}
          onChange={handleChange}
        >
          <option value="">Select a semester</option>
          <option value="1">Semester 1</option>
          <option value="2">Semester 2</option>
          <option value="3">Semester 3</option>
          <option value="4">Semester 4</option>
          <option value="5">Semester 5</option>
          <option value="6">Semester 6</option>
        </select>

        <label>RC Centre</label>
        <select id="rc" name="rc" value={formData?.rc} onChange={handleChange}>
          <option value="">Select RC</option>
          {regionalCenters.map((rc, index) => {
            return <option value={rc.name} key={index}>{rc.name}</option>;
          })}
        </select>

        <label>GitHub</label>
        <input
          type="text"
          name="github"
          value={formData?.github}
          onChange={handleChange}
        />
        <label>LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          value={formData?.linkedin}
          onChange={handleChange}
        />
        <label>Portfolio</label>
        <input
          type="text"
          name="portfolio"
          value={formData?.portfolio}
          onChange={handleChange}
        />
        <label>About</label>

        <textarea
          rows="10"
          cols="80"
          name="about"
          value={formData?.about}
          onChange={handleChange}
        ></textarea>
        <Button type="submit" className="w-5">
          Submit
        </Button>
      </form>
    </>
  );
}