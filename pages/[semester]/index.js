import { useRouter } from "next/router";
import semesters from "../../data/semester.json";
import Link from "next/link";
import Head from "next/head";

export default function Semester() {
  const router = useRouter();
  const post = semesters[router.query.semester];
  if (!post) return <p></p>;

  return (
    <div className="index">
      <Head>
        <title>{post.name}</title>
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
      <h1>{post.name}</h1>
      {/* <div>{console.log({post})}</div> */}
      <div className="book-wrap">
        {post.book.map((value, index) => (
          <Link key={index} href={post.path + "/" + value.url}>
            <a className="books">
              <h2>{value.name}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
