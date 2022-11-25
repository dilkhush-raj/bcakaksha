import { useRouter } from "next/router";
import books from "../../../data/semester.json";
import examDate from "../../../data/exam-date.json";
import semesters from "../../../data/semesters.json";
import Link from "next/link";
import Head from "next/head";
import Timer from "../../../components/Timer";

export default function Semester2() {
  const router = useRouter();
  const slug = [router.query.subject];
  const post = books[slug];
  const sem = semesters[router.query.semester];

  const test = router.query.subject;
  if (!test) return <p></p>;
  var date = examDate[router.query.subject];
  if (!date) date = "August 01 2022 14:00:00 UTC+0530";
  if (!post) return <></>;
  if (!sem) return <p></p>;

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
        <li>
          <Link underline="hover" key="1" color="inherit" href={"/" + sem.path}>
            {sem.name}
          </Link>
        </li>
        <li>{post.name}</li>
      </ul>
      <div className="index">
        <Timer date={date.date} subject={slug} />
        <div className="chapter-list-heading">Chapter List</div>
        <div className="chapter-wrap">
          {post.book.map((value, index) => (
            <Link key={index} href={value.path}>
              <a className="chapter-list" target="_blank">
                {value.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
