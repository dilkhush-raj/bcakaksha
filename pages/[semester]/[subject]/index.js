import { useRouter } from "next/router";
import books from "../../../data/semester.json";
import semesters from "../../../data/semesters.json";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../../firebase/UserAuthContext";

export default function Semester2() {
  // const slug = 2;
  const slugM = useRouter().query.subject;
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
          baseURL: "/api/course",
        });
        const res = await api.get(`/${slugM}`);
        const json = res.data.data;
        setData(json);
      } catch (err) {
        console.error(err);
      }
    }
    if (slugM) {
      fetchData();
    }
  }, [slugM]); // Pass uid to the dependency array to run the effect whenever it changes

  const [data, setData] = useState([]);
  const [admin, setadmin] = useState(false);
  // console.log(data);

  const router = useRouter();
  const slug = [router.query.subject];
  const post = books[slug];
  const sem = semesters[router.query.semester];
  async function handleDelete(id) {
    // check if the id is valid
    // console.log(id);
    if (id) {
      // try to fetch the delete API with the id as the query
      try {
        if (window.confirm("Are you sure you want to delete this item?")) {
          const res = await fetch(`/api/course/delete?id=${id}`, {
            method: "DELETE",
          });
        }
      } catch (error) {
        // if there is an error, set the message state to the error message
      }
    } else {
      // if the id is not valid, set the message state to an empty string
    }
  }

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
      <h1 className="page-heading">{post?.name || data?.name}</h1>

      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            underline="hover"
            key="1"
            color="inherit"
            href={"/" + sem?.path}
          >
            {sem?.name || ""}
          </Link>
        </li>
        <li>{post?.name || data?.name}</li>
      </ul>
      <div className="fixed top-20 right-10">
        {admin && (
          <>
            <Link href={"/semester/update/" + slug}>Update</Link>
            <h1
              className="text-center text-3xl font-bold p-2  m-auto max-w-4xl"
              onClick={() => handleDelete(data?._id)}
            >
              Delete
            </h1>
          </>
        )}
      </div>
      <div className="index">
        <div className="chapter-list-heading">Chapter List</div>
        <div className="flex flex-col flex-wrap">
          {post && post?.book?.map((value, index) => (
            <Link key={index} href={value?.path || "#"}>
              <a className="chapter-list" target="_blank">
                {value?.name}
              </a>
            </Link>
          ))}
        </div>
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
                  <Link href={unit?.url || "#"}>
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
