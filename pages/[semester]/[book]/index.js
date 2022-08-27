import { useRouter } from "next/router";
import books from "../../../data/semester.json";
import examDate from "../../../data/exam-date.json";
import semesters from "../../../data/semesters.json";
import Link from "next/link";
import Head from "next/head";
import Timer from "../../../components/Timer";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import PdfViewer from "../../../components/PdfViewer";


export default function Semester2() {
  
  const router = useRouter();
  const post = books[router.query.book];
  const sem = semesters[router.query.semester];
  
  const test = router.query.book;
  const pdf = "/pdf/" + test;
  console.log(pdf);
  var date = examDate[router.query.book];
  if (!date) date = "August 01 2022 14:00:00 UTC+0530";
  if (!post) return (
  <>
  <PdfViewer pdf={pdf}/>
  </>
  );
  if (!sem) return <p></p>;
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" >
      Home
    </Link>,
    <Link underline="hover" key="1" color="inherit" href={"/" + sem.path} >
    {sem.name}
  </Link>,
    <Typography key="3" color="text.primary">
      {post.name}
    </Typography>,
  ];

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
      <div className="index">
        <Breadcrumbs
       
       aria-label="breadcrumb"
     >
       {breadcrumbs}
     </Breadcrumbs><br />
        <Timer date={date.date} />

        {/* <Timer  date="12/31/2023 23:59:59"/> */}
        {/* <div>{console.log({post})}</div> */}
        <div className="book-wrap">
          {post.book.map((value, index) => (
            <Link key={index} href={value.path}>
              <a className="books" target="_blank">
                <h2>{value.name}</h2>
              </a>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
