import { useRouter } from "next/router";
import books from "../../../data/semester.json";
import examDate from "../../../data/exam-date.json";
import semesters from "../../../data/semesters.json";
import HeadTag from "../../../components/Head";
import pyqp from "../../../data/pyqp.json";
import Link from "next/link";

export default function Semester2() {
  const router = useRouter();
  const slug = router.query.subject;
  const sem = semesters[router.query.semester];

  const data = pyqp[slug];

  console.log(data);

  return (
    <div>
      {/* <HeadTag title={"Previous Year Question Paper - IGNOU की BCA कक्षा"} /> */}
      <h1 className="page-heading"><span className="capitalize">{data.path}</span> <span> Question Paper</span></h1>
      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link underline="hover" key="1" color="inherit" href={"/" + sem.path}>
            {sem.name}
          </Link>
        </li>
        <li>{data.path + " Question Paper"}</li>
      </ul>
      <br />
      <div className="book-wrap">
        {/* {data.pyqp.map((value, index) => (
          <Link key={index} href={value.path}>
            <a className="books" target="_blank">
              <h2>{value.name}</h2>
            </a>
          </Link>
        ))} */}
        <Link href={data.pyqp[0].path}>
          <a className="books" target="_blank">
            <h2>{data.pyqp[0].name}</h2>
          </a>
        </Link>
      </div>
        <br />
        <span> ** More coming soon...</span>
    </div>
  );
}
