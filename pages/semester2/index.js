// index.js
import Head from "next/head";
import Link from "next/link";

import data from "../../data/semester2.json";

export default function Home() {
  return (
    <div className="book-page">
      <Head>
        <title>Semester 2</title>
        <meta
          name="description"
          content="App that displays pretty colors to learn Next!"
        />
      </Head>
      <h1>Semester 2</h1>
      <div className="book-wrap">
      {data.map((value, index) => (
        <Link key={index} href={`/semester2/${value.path}`}>
          <a className="books">
            <h2>{value.name}</h2>
          </a>
        </Link>
      ))}
    </div>
    </div>
  );
}
