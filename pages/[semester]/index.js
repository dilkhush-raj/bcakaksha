import { useRouter } from "next/router";
import semesters from "../../data/semesters.json";
import pyqp from "../../data/sub-pyqp.json";
import Link from "next/link";
import Head from "next/head";
import TimerTwo from "../../components/TimerTwo";
import examDate from "../../data/exam-date.json";

export default function Semester() {
  const router = useRouter();
  const post = semesters[router.query.semester];
  const subPyqp = pyqp[router.query.semester];
  console.log(examDate);
  const date = examDate["bcs-011"];
  console.log(date);
  if (!post) return <p></p>;

  return (
    <div>
      <Head>
        <title>{post.name + " - IGNOU की BCA कक्षा"}</title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <h1 className="page-heading">{post.name}</h1>

      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>{post.name}</li>
      </ul>
      <div className="index">
      {post.book.map((value, index) => (
          <>
            <TimerTwo key={index} date={examDate[value.url]} subject={value.url} />
          </>
        ))}

        <h2>Books</h2>
        <div className="book-wrap">
          {post.book.map((value, index) => (
            <Link key={index} href={post.path + "/" + value.url}>
              <a className="books">
                <h2>{value.name}</h2>
              </a>
            </Link>
          ))}
        </div>

        {/* <h2>Notes</h2>
        <div className="book-wrap">
          {post.notes.map((value, index) => (
            <Link key={index} href={"pdf/" + value.url}>
              <a className="books note" target="_blank">
                <h2>{value.name}</h2>
              </a>
            </Link>
          ))}
        </div> */}

        <h2>Assignments</h2>
        <div className="book-wrap">
          {post.assignments.map((value, index) => (
            <Link key={index} href={value.url}>
              <a className="books" target="_blank">
                <h2>{value.name}</h2>
              </a>
            </Link>
          ))}
        </div>

        <h2>Previous Year Question Paper</h2>
        <div className="book-wrap">
          {subPyqp.book.map((value, index) => (
            <Link key={index} href={post.path + "/" + value.url + "/pyqp"}>
              <a className="books">
                <h2>{value.name}</h2>
              </a>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
