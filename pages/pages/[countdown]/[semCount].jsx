import date from "../../../data/exam-date.json";
import { useRouter } from "next/router";
import semesterData from "../../../data/semesters.json"

export default function SemCount() {
  const router = useRouter();
  const sem = semesterData[router.query.semCount].book;
  if (!sem) return <></>
  console.log(sem);

  return (
    <>
      <h1>Semester Countdown</h1>
    </>
  );
}
