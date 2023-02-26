import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { useRouter } from "next/router";
import { useUserAuth } from "../../firebase/UserAuthContext";
import axios from "axios";

export default function Accounts() {
  const router = useRouter();
  const { user } = useUserAuth();

  const [formData, setFormData] = useState();

  const [socialLinks, setSocialLinks] = useState([]);
  console.log(socialLinks);

  const uid = user.uid; // Check if user exists before destructuring uid

  // Fetch product data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the server for the product data
        const res = await axios.get(`/api/user/edit/${uid}`);
        const json = res.data;

        // Update the state with the product data
        const fetchData = json.userData;

        setFormData({
          uid: fetchData.uid || uid,
          name: fetchData.name,
          profileImage: fetchData.profileImage,
          semester: fetchData.semester,
          about: fetchData.about,
          rc: fetchData.rc,
        });
        setSocialLinks(fetchData.social || [])
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      social: socialLinks,
    }));
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
  };

  const handleAddLink = () => {
    setSocialLinks([...socialLinks, { displayText: "", link: "" }]);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = [...socialLinks];
    updatedLinks.splice(index, 1);
    setSocialLinks(updatedLinks);
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

        

        <Button type="submit" className="w-5">
          Submit
        </Button>
      </form>

      <form>
      {socialLinks.map((link, index) => (
        <div key={index}>
          <label htmlFor={`socialLinkDisplayText-${index}`}>Display Text</label>
          <input
            type="text"
            id={`socialLinkDisplayText-${index}`}
            value={link.displayText}
            onChange={(e) => handleInputChange(e, index, 'displayText')}
          />
          <label htmlFor={`socialLinkUrl-${index}`}>Link URL</label>
          <input
            type="text"
            id={`socialLinkUrl-${index}`}
            value={link.link}
            onChange={(e) => handleInputChange(e, index, 'link')}
          />
          <button type="button" onClick={() => handleRemoveLink(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddLink}>
        Add Link
      </button>
    </form>
    </>
  );
}
