import { useRouter } from "next/router";
import books from "../../../data/semester.json";
import Link from "next/link";
import Head from "next/head";

export default function Semester2() {
  const router = useRouter();
  const post = books[router.query.book];
  if (!post) return <p></p>;

  return (
    <div className="index">
      <Head>
        <title>{post.name + " - IGNOU की BCA कक्षा"}</title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <link
          rel="shortcut icon"
          href="/logo.svg"
          type="image/x-icon"
        />
      </Head>
      <h1>{post.name}</h1>
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
  );
};
