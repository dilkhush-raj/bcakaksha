import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { useRouter } from "next/router";
import { useUserAuth } from "../../firebase/UserAuthContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link"

export default function Accounts() {
  const {
    user: { uid },
  } = useUserAuth();

  const [marks, setMarks] = useState([
    {
      theory_marks: "",
      assignment_marks: "",
      assignment_weightage: "",
      semester: "",
      course: "",
    },
  ]);

  const [data, setData] = useState([
    {
      theory_marks: "",
      assignment_marks: "",
      assignment_weightage: "",
      semester: "",
      course: "",
    },
  ]);

  // Fetch product data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the server for the product data
        const api = axios.create({
          baseURL: "/api/user/",
        });
        const res = await api.get(`grade/${uid}`);
        const json = res.data;
        const mrks = json.userData.marks;
        setMarks(mrks);
        setData(mrks);
      } catch (err) {
        console.error(err);
      }
    }
    if (uid) {
      fetchData();
    }
  }, [uid]); // Pass uid to the dependency array to run the effect whenever it changes

  const total = marks.reduce((acc, mark) => {
    const final =
      mark?.assignment_marks * mark?.assignment_weightage +
      mark?.theory_marks * (100 - mark?.assignment_weightage);
    return acc + final;
  }, 0);

  const totalMarks = Math.round(total / (marks.length))/100;

  // q: how to get only two decimal places in js
  // a: https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary


  // Event handler for the semester filter
  const handleChange = (event) => {
    if (event.target.value === "all") {
      setMarks(data);
    } else {
      setMarks(data.filter((item) => item.semester == event.target.value));
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold p-2  m-auto max-w-4xl">
        Grade Card
      </h1>
      
      <div className="flex justify-end px-4 rounded-md mb-2"><Link href="/grade-card/update">Update</Link></div>
      <div className="overflow-auto px-2">
        <div className=" bg-[#fff] w-max  mx-auto rounded-md drop-shadow-md p-4">
          
        <div className="flex justify-between px-4 rounded-md mb-2">
          <select id="semester" name="semester" onChange={handleChange}>
            <option value="">Select a semester</option>
            <option value="all">All</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
          </select>
          <div>Total = {totalMarks} %</div>
          </div>
          <div className="grid marks-grid gap-4 px-4 bg-[#444] text-[#fff] rounded-md p-2 mb-2">
            <div>No.</div>
            <div>Course</div> <div>Theory</div> <div>Assignment</div>{" "}
            <div>Total</div>
            <div>Semester</div>
          </div>
          {marks.map((mark, index) => (
            <div
              key={index}
              className="grid marks-grid gap-4 py-2 rounded-md even:bg-gray-200 px-4 items-center"
            >
              <div>{index + 1}</div>
              <div>{mark.course}</div>

              <div>{mark.theory_marks}</div>
              <div>{mark.assignment_marks}</div>

              <div>
                {(mark.theory_marks * (100 - mark.assignment_weightage) +
                  mark.assignment_marks * mark.assignment_weightage) /
                  100}
              </div>
              <div>Semester {mark.semester}</div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
