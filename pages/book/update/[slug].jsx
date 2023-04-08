import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Book() {
  const slug = useRouter().query.slug;

  // Fetch product data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the server for the product data
        const api = axios.create({
          baseURL: "/api/course/",
        });
        const res = await api.get(`/${slug}`);
        const json = res.data.data;
        setData(json);
        // console.log(json);
      } catch (err) {
        console.error(err);
      }
    }
    if (slug) {
      fetchData();
    }
  }, [slug]); // Pass uid to the dependency array to run the effect whenever it changes

  const [data, setData] = useState([]);
  const [form, setForm] = useState([]);
  const [assignment, setAssignment] = useState([]);
  const [block, setBlock] = useState([]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    try {
      await axios.post("/api/course", [
        form
      ]);
    } catch (err) {
      console.error(err);
    }
  };


  // ASSIGNMENT SECTION STARTS HERE
  const handleAddAssignment = () => {
    setAssignment([...assignment, { name: "", url: "" }]);
  };

  const handleRemoveAssignment = (index) => {
    const updatedLinks = [...assignment];
    updatedLinks.splice(index, 1);
    setAssignment(updatedLinks);
    setForm({...form, assignment})
  };
  
  const handleAssignmentInput = (e, index, field) => {
    const updatedLinks = [...assignment];
    updatedLinks[index][field] = e.target.value;
    setAssignment(updatedLinks);
    setForm({...form, assignment})
  };

  // ASSIGNMENT SECTION ENDS HERE

  // BLOCK SECTION STARTS HERE
  const handleAddBlock = () => {
    setBlock([...block, { name: ""}]);
  };

  const handleRemoveBlock = (index) => {
    const updatedLinks = [...block];
    updatedLinks.splice(index, 1);
    setBlock(updatedLinks);
    setForm({...form, block})
  };
  
  const handleBlockInput = (e, index, field) => {
    const updatedLinks = [...block];
    updatedLinks[index][field] = e.target.value;
    setBlock(updatedLinks);
    setForm({...form, block})
  };

  // BLOCK SECTION ENDS HERE

  return (
    <>
      <h1 className="text-center text-3xl font-bold p-2  m-auto max-w-4xl">
        Update Course
      </h1>
      <div className="overflow-auto">
        <div className=" bg-[#fff] w-max  mx-auto rounded-md drop-shadow-md p-4">
          <form className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form?.name}
              onChange={handleChange}
            />
            <label>Slug</label>
            <input
              type="text"
              name="slug"
              value={form?.slug}
              onChange={handleChange}
            />
            <label>Semester</label>
            <select
              id="semester"
              name="semester"
              value={form?.semester}
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
            <label>Exam Date</label>
            <input
              type="datetime-local"
              name="examDate"
              value={form?.examDate}
              onChange={handleChange}
            />
            <label>Assignment</label>
            {assignment.map((link, index) => (
              <div key={index} className="flex bg-[#ddd] p-2 gap-5 rounded-md justify-center items-center mx-2">
                <label>Title</label>
                <input
                  type="text"
                  value={link.name}
                  onChange={(e) => handleAssignmentInput(e, index, "name")}
                  className="bg-[#fff]"
                />
                <label>Link</label>
                <input
                  type="text"
                  value={link.url}
                  onChange={(e) => handleAssignmentInput(e, index, "url")}
                  className="bg-[#fff]"
                />
                <button type="button" onClick={() => handleRemoveAssignment(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddAssignment}>
              Add Assignment
            </button>
            <label>Block</label>
            {block.map((item, index) => (
              <div key={index} className="flex bg-[#ddd] p-2 gap-5 rounded-md justify-center items-center mx-2">
                <label>Title</label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleBlockInput(e, index, "name")}
                  className="bg-[#fff]"
                />
                <button type="button" onClick={() => handleRemoveBlock(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddBlock}>
              Add Block
            </button>
          </form>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}
