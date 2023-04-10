import { useRouter } from "next/router";
import semesters from "../../data/semesters.json";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../firebase/UserAuthContext";
import Image from "next/image";

export default function Semester() {
  const router = useRouter();
  const semesterString = useRouter().query.semester;
  let slug = semesterString?.replace(/semester/gi, "");
  const { user } = useUserAuth();

  useEffect(() => {
    function CheckUser(user) {
      if (user) {
        const id = user.uid;
        if (id === "H6Tx2hVSQBhC3Ub5eMQVWgftTPb2") {
          setadmin(true);
        } else {
          setadmin(false);
        }
      }
    }
    CheckUser(user);
  }, [user]);

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
  const [admin, setadmin] = useState(false);
  const post = semesters[router.query.semester];

  const groupedData = data.reduce((obj, item) => {
    if (!obj[item.category]) {
      obj[item.category] = [];
    }
    obj[item.category].push(item);
    return obj;
  }, {});

  return (
    <div>
      <Head>
        <title>{post?.name + " - IGNOU की BCA कक्षा"}</title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <h1 className="page-heading">{post?.name}</h1>

      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>{post?.name}</li>
      </ul>
      {admin && (
        <div className="absolute bottom-5 right-5">
          <Link href={post?.path + "/new"}>
            <Image src="/images/icons8_add_2.svg" width={30} height={30} />
          </Link>
        </div>
      )}

      <div className="index">
        {post?.book ? (
          <>
            <h2>Books</h2>
            <div className="book-wrap">
              {post?.book?.map((value, index) => (
                <Link key={index} href={post?.path + "/" + value?.url}>
                  <a className="books">
                    <h2>{value?.name}</h2>
                  </a>
                </Link>
              ))}
            </div>
          </>
        ) : null}

        {Object.entries(groupedData).map(([category, categoryData]) => (
          <div key={category}>
            <h2 className="capitalize">{category}</h2>
            <ul className="book-wrap">
              {categoryData.map((item, index) => (
                <Link key={index} href={post?.path + "/" + item?.slug}>
                  <a className="books">
                    <h2>{item.name}</h2>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        ))}

        {post?.assignment ? (
          <>
            {" "}
            <h2>Assignments</h2>
            <div className="book-wrap">
              {post?.assignments?.map((value, index) => (
                <Link key={index} href={value?.url}>
                  <a className="books" target="_blank">
                    <h2>{value?.name}</h2>
                  </a>
                </Link>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
