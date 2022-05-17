// index.js
import Head from "next/head";
import Link from "next/link";

import data from "../../data/semester2.json";

export default function MCS011() {
  return (
    <div className="book-page">
      <Head>
        <title>{data[5].name} - iBC</title>
        <meta name="description" content="BCS" />
      </Head>
      <h2>{data[5].name}</h2>
      <div className="book-wrap">
        {data[5].book.map((value, index) => (
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
