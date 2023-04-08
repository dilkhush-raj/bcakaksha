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
          baseURL: "/api/course",
        });
        const res = await api.get(`/${slug}`);
        const json = res.data.data;
        setData(json);
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
        <title>{data?.name + " - IGNOU की BCA कक्षा"}</title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <h1 className="page-heading">{data?.name}</h1>

      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>{data?.name}</li>
      </ul>

      <div className="index">
        <div className="fixed top-20 right-10">
          <Link href={"/semester/update/" + slug}>Update</Link>
        </div>

        {/* <h2>Books</h2> */}
        {data?.block?.map((value, index) => (
          <div key={index} className="p-2 flex flex-col gap-2 w-[500px]">
            <div className="bg-[#333] text-[#fff] py-1 px-4 rounded-md">
              {value.name}
            </div>
            {value.units.map((unit, index) => {
              return (
                <div
                  key={index}
                  className="ml-10 px-4 py-1 rounded-md flex flex-col gap-4 even:bg-gray-300"
                >
                  <Link href={unit.url}>
                    <a target="_blank">{unit.name}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
