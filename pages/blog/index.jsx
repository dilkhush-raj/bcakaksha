import Link from "next/dist/client/link";
import HeadTag from "../../components/HeadTag";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import Loader from "../../components/Loader";

function Notice() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/blog");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  },);

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="page">
      <HeadTag title="Blog - IGNOU की BCA कक्षा" />
      <h1 className="page-heading">Blog</h1>

      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>Blog</li>
      </ul>

    {data.map((item, index) => {
      return (
        <>
        <h2>{item.title}</h2>
        <Link href={"/blog/" + item.slug}>View</Link>
        </>
      )
    })}

    </div>
  );
}

export default Notice;
