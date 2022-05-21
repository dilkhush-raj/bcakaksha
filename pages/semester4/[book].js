import { useRouter } from "next/router";
import books from "../../data/semester4.json";
import Link from "next/link";
import Head from "next/head";

export default function Semester4() {
  const router = useRouter();
  const post = books[router.query.book];
  if (!post) return <p></p>;

  return (
    <div className="index">
      <Head>
        <title>{post.name}</title>
        <meta
          name="description"
          content="App that displays pretty colors to learn Next!"
        />
      </Head>
      <h1>{post.name}</h1>
      {/* <div>{console.log({post})}</div> */}
      <div className="book-wrap">
        {post.book.map((value, index) => (
          <Link key={index} href={value.url}>
            <a className="books" target="_blank">
              <h2>{value.name}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
