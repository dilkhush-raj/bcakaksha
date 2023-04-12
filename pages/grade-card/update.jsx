import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { useRouter } from "next/router";
import { useUserAuth } from "../../firebase/UserAuthContext";
import axios from "axios";
import Image from "next/image";

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
      } catch (err) {
        console.error(err);
      }
    }
    if (uid) {
      fetchData();
    }
  }, [uid]); // Pass uid to the dependency array to run the effect whenever it changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    try {
      await axios.post("/api/user/grade", [
        {
          uid: uid,
          marks: marks,
        },
      ]);
      history.back();
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newMarks = [...marks];
    newMarks[index][name] = value;
    setMarks(newMarks);
  };

  const handleAddFields = () => {
    setMarks([
      ...marks,
      {
        theory_marks: "",
        assignment_marks: "",
        assignment_weightage: "",
        semester: "",
      },
    ]);
  };

  const handleRemoveFields = (index) => {
    const newMarks = [...marks];
    newMarks.splice(index, 1);
    setMarks(newMarks);
  };

  // const Form = () => {
  //   return (
      
  //   );
  // };



  const total = marks.reduce((acc, mark) => {
    const final =
      mark?.assignment_marks * mark?.assignment_weightage +
      mark?.theory_marks * (100 - mark?.assignment_weightage);
    return acc + final;
  }, 0);



  return (
    <>
      <h1 className="text-center text-3xl font-bold p-2  m-auto max-w-4xl">
        Update Grade Card
      </h1>
      <div className="overflow-auto">
      <div className=" bg-[#fff] w-max  mx-auto rounded-md drop-shadow-md p-4">
        <div className="grid marks-grid-update gap-4 px-4 bg-[#444] text-[#fff] rounded-md p-2 mb-2">
          <div>S. No.</div>
          <div>Course Code</div> <div>Theory Marks</div> <div>Assignment Marks</div>{" "}
          <div>Assignment Weightage</div> <div>Select Semester</div>
          <div>Total Marks</div>
        </div>
        <form onSubmit={handleSubmit}>
          {marks.map((mark, index) => (
            <div
              key={index}
              className="grid marks-grid-update gap-4 px-4 items-center"
            >
              {/* <h2> {index + 1}</h2> */}
              <div className="bg-[#cdcdcd] rounded-full w-[35px] h-[35px] flex items-center justify-center">
                {index + 1}
              </div>
              <input
                type="text"
                name="course"
                value={mark.course}
                onChange={(event) => handleInputChange(event, index)}
              />
              <input
                type="text"
                name="theory_marks"
                value={mark.theory_marks}
                onChange={(event) => handleInputChange(event, index)}
              />

              <input
                type="text"
                name="assignment_marks"
                value={mark.assignment_marks}
                onChange={(event) => handleInputChange(event, index)}
              />

              <select
                id="assignment_weightage"
                name="assignment_weightage"
                value={mark?.assignment_weightage}
                onChange={(event) => handleInputChange(event, index)}
              >
                <option value="">Assignment Weightage</option>
                <option value="25">25 %</option>
                <option value="30">30 %</option>
              </select>

              <select
                id="semester"
                name="semester"
                value={mark?.semester}
                onChange={(event) => handleInputChange(event, index)}
              >
                <option value="">Select a semester</option>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
                <option value="6">Semester 6</option>
              </select>
              <div className="bg-[#cdcdcd] rounded-md h-[35px] w-[55px] flex items-center justify-center">
                {(mark.theory_marks * (100 - mark.assignment_weightage) +
                  mark.assignment_marks * mark.assignment_weightage) /
                  100}
              </div>

              <div>
                <button type="button" onClick={() => handleRemoveFields(index)}>
                  <Image
                    src="/images/icons8_clear_symbol.svg"
                    width={30}
                    height={30}
                    alt="remove"
                  />
                </button>
              </div>
            </div>
          ))}
          <div>Total ={total/(marks.length * 100)} %</div>
          <div className="flex justify-end items-center">
            <div>
              <button type="button" onClick={() => handleAddFields()}>
                <Image src="/images/icons8_add_1.svg" width={20} height={20} alt="add" />{" "}
                Add
              </button>
            </div>
            <div>
              <button type="submit">
                <Image
                  src="/images/icons8_enter_key.svg"
                  width={20}
                  height={20}
                  alt="submit"
                />{" "}
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
      <button onClick={() => history.back()} className="text-center m-4 w-full">Cancel</button>
      <br /><br />
    </>
  );
}
