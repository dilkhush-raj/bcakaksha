import { useRouter } from "next/router";
import semesters from "../../../data/semesters.json";
import Head from "next/head";
import pyqp from "../../../data/pyqp.json";
import Link from "next/link";

export default function Pyqp() {
  const router = useRouter();
  const slug = router.query.subject;
  const sem = semesters[router.query.semester];

  const data = pyqp[slug];
  if (!data) return <p></p>;



  return (
    <div className="page">
      <Head>
        <title>Question Paper - IGNOU की BCA कक्षा</title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
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
        {data.pyqp.map((value, index) => (
          <Link key={index} href={value.path}>
            <a className="books" target="_blank">
              <h2>{value.name}</h2>
            </a>
          </Link>
        ))}
      </div>
        <br />
        <span> ** Open first one only. More coming soon...</span>
    </div>
  );
}
