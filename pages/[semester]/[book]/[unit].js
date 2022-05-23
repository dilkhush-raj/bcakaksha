import { useRouter } from "next/router";
import books from "../../../data/semester2.json";
import Link from "next/link";
import Head from "next/head";

export default function Semester2() {
  const router = useRouter();
  const post = books[router.query.book];
  if (!post) return <p></p>;

  return (
    <div className="index">
      <Head>
        <title></title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
    </div>
  );
}
