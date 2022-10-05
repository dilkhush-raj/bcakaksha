import Link from "next/dist/client/link";
import NoticeBoard from "../../components/NoticeBoard";
import Head from "next/head";

function Notice() {

  return (
    <div className="page">
      <Head>
        <title>{"Notice Board - IGNOU की BCA कक्षा"}</title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
    <h1 className="page-heading">Notice Board</h1>
      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>Notice Board</li>
      </ul>
        <NoticeBoard />
    </div>
  );
}

export default Notice;
