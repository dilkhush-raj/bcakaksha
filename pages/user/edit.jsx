import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { useRouter } from "next/router";

import { useUserAuth } from "../../firebase/UserAuthContext";
import axios from "axios";

export default function Accounts() {

  const {
    user: { uid },
  } = useUserAuth();

  const [formData, setFormData] = useState({
    uid: uid,
    name: "",
    profileImage: "",
    semester: "",
    about: "",
    rc: "",
    github: "",
    linkedin: "",
    portfolio: ""
  });

  // const [socialLinks, setSocialLinks] = useState([]);
  const [marks, setMarks] = useState([]);



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
          portfolio: fetchData.portfolio || ""
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
    // console.log(formData);

   
    try {
      await axios.post("/api/user/update", [formData]);

      // router.back();

    } catch (err) {
      console.error(err);
    }
  };


  const handleInputChange = (e, index, field) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index][field] = e.target.value;
    setSocialLinks(updatedLinks);
    setFormData((prevFormData) => ({
      ...prevFormData,
      social: socialLinks,
    }));
  };

  const handleAddLink = () => {
    setSocialLinks([...socialLinks, { displayText: "", link: "" }]);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = [...socialLinks];
    updatedLinks.splice(index, 1);
    setSocialLinks(updatedLinks);
  };

  const handleMarksChange = (e, index, field) => {
    const updatedLinks = [...marks];
    updatedLinks[index][field] = e.target.value;
    setMarks(updatedLinks);
    setFormData((prevFormData) => ({
      ...prevFormData,
      marks: marks,
    }));
  };

  const handleAddMarks = () => {
    setMarks([...marks, { theory_marks: "", assignment_marks: "", assignment_weightage: "", semester: "" }]);
  };

  const handleRemoveMarks = (index) => {
    const updatedLinks = [...marks];
    updatedLinks.splice(index, 1);
    setMarks(updatedLinks);
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
        {/* {formData?.semester && <p>You selected semester {formData.semester}.</p>} */}
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
        <label>RC Centre</label>
        <input
          type="text"
          name="rc"
          value={formData?.rc}
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

        {/* {socialLinks.map((link, index) => (
          <div key={index}>
            <label htmlFor={`socialLinkDisplayText-${index}`}>
              Display Text
            </label>
            <input
              type="text"
              id={`socialLinkDisplayText-${index}`}
              value={link.displayText}
              onChange={(e) => handleInputChange(e, index, "displayText")}
            />
            <label htmlFor={`socialLinkUrl-${index}`}>Link URL</label>
            <input
              type="text"
              id={`socialLinkUrl-${index}`}
              value={link.link}
              onChange={(e) => handleInputChange(e, index, "link")}
            />
            <button type="button" onClick={() => handleRemoveLink(index)}>
              Remove
            </button>
          </div>
        ))} */}
        <button type="button" onClick={handleAddLink}>
          Add Link
        </button>
        {marks.map((link, index) => (
          <div key={index}>
            <label htmlFor={`theory_marks-${index}`}>
            theory_marks
            </label>
            <input
              type="text"
              id={`theory_marks-${index}`}
              value={link.theory_marks}
              onChange={(e) => handleMarksChange(e, index, "theory_marks")}
            />
            
    {/* setMarks([...marks, { theory_marks: "", assignment_marks: "", assignment_weightage: "", semester: "" }]); */}
            <label htmlFor={`socialLinkUrl-${index}`}>Link URL</label>
            <input
              type="text"
              id={`socialLinkUrl-${index}`}
              value={link.link}
              onChange={(e) => handleInputChange(e, index, "link")}
            />
            <button type="button" onClick={() => handleRemoveMarks(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddMarks}>
          Add Link
        </button>


        <Button type="submit" className="w-5">
          Submit
        </Button>
      </form>
    </>
  );
}
