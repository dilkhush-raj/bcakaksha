import { useRouter } from "next/router";
import books from "../data/semester.json";
import Link from "next/link";
import Head from "next/head";

export default function Semester() {
  const router = useRouter();
  const post = books[router.query.semester];
  if (!post) return <p></p>;

  return (
    <div className="index">
      <Head>
        <title>{post.name}</title>
        <meta
          name="description"
          content="App that displays pretty colors to learn Next!"
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
