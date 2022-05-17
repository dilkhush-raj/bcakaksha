// index.js
import Head from "next/head";
import Link from "next/link";

import data from "../../data/semester2.json";

export default function MCS011() {
  return (
    <div className="book-page">
      <Head>
        <title>{data[0].name} - iBC</title>
        <meta
          name="description"
          content="App that displays pretty colors to learn Next!"
        />
      </Head>
      <h2>{data[0].name}</h2>
      <div className="book-wrap">
        {data[0].book.map((value, index) => (
          <Link key={index} href={value.url}>
            <a className="books" target="_blank">
              <h2>{value.name}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
