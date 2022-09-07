import Link from "next/dist/client/link";
import HeadTag from "../../components/HeadTag";
import { useState } from "react";
import { Button } from "@mui/material";

export default function GradeCalculator() {
  const pageTitle = "Grade Calculator";

  const [subject, setSubject] = useState([]);

  const [assignmentMarks, setAssignmentMarks] = useState("");
  const [theoryMarks, setTheoryMarks] = useState("");
  const [grades, setGrades] = useState("");
  const [totalPercentage, setTotalPercentage] = useState("");
  const [assignmentPercentage, setAssignmentPercentage] = useState(25);
  const [subjectName, setSubjectName] = useState("");
  const [percentage, setPercentage] = useState([]);

  const theoryPercentage = 100 - assignmentPercentage;

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +assignmentMarks >= 0 && +theoryMarks > 0;
    if (!formValid) {
      return;
    }
    // setPercentage(
    //   (assignmentMarks * assignmentPercentage) / 100 +
    //     (theoryMarks * theoryPercentage) / 100
    // );

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

  };

  const clear = () => {
    setSubject(() => []);
    setPercentage(() => []);
    setTotalPercentage(() => []);
    setGrades(() => []);
  };
  const grade = () => {
    const totalMarks = percentage.reduce((a, b) => a + b, 0);
    const lenghtOfArray = percentage.length;
    const totalPercent = totalMarks / lenghtOfArray;
    setTotalPercentage(totalPercent);
    // console.log(totalPercentage);

    // getGrade();
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
        "Assignment with a weightage of 25% in all courses except ECO-01, ECO-02, FEG-02 and BCSP-064.",
    },
    { title: "The Weightage for assignment in ECO-01, ECO-02, FEG-02 is 30%." },
    {
      title:
        "Term-end examination with a weightage of 75% for all the courses except ECO-01, ECO-02, FEG-02 and BCSP-064.",
    },
    {
      title:
        "Term-end examination weightage of ECO-01, ECO-02, FEG-02 and BCSP-064 is 70%.",
    },
    {
      title:
        "BCSP-064, project weightage of 75% and viva-voice weightage of 25%.",
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
    <h3>Design will be improved soon</h3>
      <table>
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Assignment Marks</th>
            <th>Theory Marks</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {subject.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.s}</td>
                <td>{item.a}</td>
                <td>{item.t}</td>
                <td>{item.total}</td>
              </tr>
            );
          })}
          <td>Total %: {totalPercentage}</td>
          <td>Grade: {grades}</td>
          <td>
            <Button onClick={grade} variant="contained">
              Get Grade
            </Button>
          </td>
          <td>
            <Button onClick={clear} variant="contained">
              Clear All
            </Button>
          </td>
        </tbody>
      </table>

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

      <ul className="lists">
        {evaluationScheme.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
