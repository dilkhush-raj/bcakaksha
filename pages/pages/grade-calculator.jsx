import Link from "next/dist/client/link";
import HeadTag from "../../components/HeadTag";
import { useState } from "react";
import { Button } from "@mui/material";

export default function GradeCalculator() {
  const pageTitle = "Grade Calculator"; // Page Title
  const [subject, setSubject] = useState([]); // All data entered by user
  const [assignmentMarks, setAssignmentMarks] = useState(""); // Assignment marks of last entry
  const [theoryMarks, setTheoryMarks] = useState(""); // Theory marks of last entry
  const [grades, setGrades] = useState("");
  const [totalPercentage, setTotalPercentage] = useState("");
  const [assignmentPercentage, setAssignmentPercentage] = useState(25);
  const [subjectName, setSubjectName] = useState("");
  const [percentage, setPercentage] = useState([]);
  const theoryPercentage = 100 - assignmentPercentage;

  // Calculate single subject percentage and add all data of subject to usestate array
  const calculate = (e) => {
    e.preventDefault();
    const formValid = +assignmentMarks >= 0 && +theoryMarks > 0;
    if (!formValid) {
      return;
    }

    setPercentage((prevPercentage) => [
      ...prevPercentage,
      (assignmentMarks * assignmentPercentage) / 100 +
        (theoryMarks * theoryPercentage) / 100,
    ]);

    setSubject((prevSubjects) => [
      ...prevSubjects,
      {
        s: subjectName,
        a: assignmentMarks,
        t: theoryMarks,
        p: assignmentPercentage,
        total:
          (assignmentMarks * assignmentPercentage) / 100 +
          (theoryMarks * theoryPercentage) / 100,
      },
    ]);

    setSubjectName("");
    setAssignmentMarks("");
    setTheoryMarks("");
  };

  // Clear all reconds entered by user
  const clear = () => {
    setSubject(() => []);
    setPercentage(() => []);
    setTotalPercentage(() => []);
    setGrades(() => []);
  };

  // Find toal percentage of all subject and grade
  const grade = () => {
    const totalMarks = percentage.reduce((a, b) => a + b, 0);
    const lenghtOfArray = percentage.length;
    const totalPercent = totalMarks / lenghtOfArray;
    setTotalPercentage(totalPercent);

    if (totalPercent >= 80) {
      setGrades("A");
    } else if (totalPercent >= 60) {
      setGrades("B");
    } else if (totalPercent >= 50) {
      setGrades("C");
    } else if (totalPercent >= 40) {
      setGrades("D");
    } else {
      setGrades("E");
    }
  };

  const evaluationScheme = [
    {
      title:
        "The Weightage for assignment in all subject is 25% except ECO-01, ECO-02, FEG-02 and BCSP-064.",
    },
    { title: "The Weightage for assignment in ECO-01, ECO-02, FEG-02 is 30%." },
    {
      title:
        "BCSP-064 project weightage is 75% and viva-voice weightage is 25%.",
    },
  ];

  return (
    <div className="page">
      <HeadTag title={pageTitle + " - IGNOU की BCA कक्षा"} />
      <h1 className="page-heading">{pageTitle}</h1>
      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>{pageTitle}</li>
      </ul>
      <br />
      <div className="grade-card">
        <div>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Assignment Marks</th>
                <th>Theory Marks</th>
                <th>Total %</th>
              </tr>
            </thead>
            <tbody>
              {subject.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="capitalize">{item.s}</td>
                    <td>{item.a}</td>
                    <td>{item.t}</td>
                    <td>{item.total}</td>
                  </tr>
                );
              })}
              <tr>
              <td colSpan={2}>Total % - {totalPercentage}</td>
              <td colSpan={2}>Grade - {grades}</td>
              </tr>
            </tbody>
          </table>
          <div className="buttons">
            <Button onClick={grade} variant="contained">
              Get Grade
            </Button>
            <Button onClick={clear} variant="contained">
              Clear All
            </Button>
          </div>
        </div>

        <form onSubmit={calculate} className="grade-form">
          <div>
            <label>Subject Code</label>
            <br />
            <input
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
            />
          </div>
          <div>
            <label>Assignment Marks</label>
            <br />
            <input
              value={assignmentMarks}
              onChange={(e) => setAssignmentMarks(e.target.value)}
            />
          </div>
          <div>
            <label>Theory Marks</label>
            <br />
            <input
              value={theoryMarks}
              onChange={(e) => setTheoryMarks(e.target.value)}
            />
          </div>
          <div>
            <label>Assignment Weightage</label>
            <br />
            <select
              value={assignmentPercentage}
              onChange={(e) => setAssignmentPercentage(e.target.value)}
            >
              <option value="25">25%</option>
              <option value="30">30%</option>
            </select>
          </div>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </form>
      </div>
      <br />

      <ul className="lists">
        {evaluationScheme.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
      <br />
    </div>
  );
}
