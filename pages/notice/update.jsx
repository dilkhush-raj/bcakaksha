import { useState } from "react";
import axios from "axios";

export default function Book() {
  const [form, setForm] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/notice", [form]);
      setForm([])
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold p-2  m-auto max-w-4xl">
        Add Notice
      </h1>
      <div className="overflow-auto">
        <div className=" bg-[#fff]  m-4 rounded-md drop-shadow-md p-4">
          <form className="flex update-book flex-col">
            <label>Title</label>
            <input type="text" name="title" onChange={handleChange} />
            <label>Link (Optional)</label>
            <input type="text" name="link" onChange={handleChange} />
          </form>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <button
          onClick={() => history.back()}
          className="my-5 mx-7 bg-[#f00] px-3 py-2 text-[#fff] rounded-md"
        >
          Cancel
        </button>
      </div>
    </>
  );
}
