import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

export default function Semester() {

  // const slug = 2;
  const slug = useRouter().query.slug;
  console.log(slug);
  // Fetch product data on mount
useEffect(() => {
async function fetchData() {
  try {
    // Make a GET request to the server for the product data
    const api = axios.create({
      baseURL: "/api/course/semester",
    });
    const res = await api.get(`/${slug}`);
    const json = res.data.data;
    setData(json)
  } catch (err) {
    console.error(err);
  }
}
if (slug) {
  fetchData();
}
}, [slug]); // Pass uid to the dependency array to run the effect whenever it changes

const [data, setData] = useState([]);

console.log(data);


  return (
    <div>
      <Head>
        <title>{"Semester" + slug + " - IGNOU की BCA कक्षा"}</title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <h1 className="page-heading">Semester {slug}</h1>

      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>Semester {slug}</li>
      </ul>

      <div className="index">
      
        <h2>Books</h2>
        <div className="book-wrap">
          {data?.map((value, index) => (
            <Link key={index} href={"/semester/book/" + value.slug} >
                <a className="books">
                <h2>{value.name}</h2>
              </a>
            </Link>
          ))}
        </div>

  

      </div>
    </div>
  );
}
