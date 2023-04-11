import { useRouter } from "next/router";
import books from "../../../data/semester.json";
import semesters from "../../../data/semesters.json";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../../firebase/UserAuthContext";
import Image from "next/image";

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
      {admin && (
        <div className="absolute bottom-5 right-5 cursor-pointer flex flex-col gap-2 items-center">
          <Link href={"/semester/update/" + slug}>
            <Image
              src="/images/icons8_update.svg"
              width={25}
              height={25}
              alt="Update"
            />
          </Link>
          <div
            className="text-center text-3xl font-bold p-2  m-auto max-w-4xl"
            onClick={() => handleDelete(data?._id)}
          >
            <Image
              src="/images/icons8_Remove_1.svg"
              width={30}
              height={30}
              alt="Del"
            />
          </div>
        </div>
      )}
      <div className="index">
        <div className="flex flex-col flex-wrap">
          {post?.book &&
            post?.book?.map((value, index) => (
              <div
                key={index}
                className="p-2 flex flex-wrap odd:bg-[#f5f5f5] even:bg-[#fff]"
              >
                <Link href={value?.path || "#"}>
                  <a target="_blank">
                    <div>{value?.name}</div>
                  </a>
                </Link>
              </div>
            ))}
          {data?.block?.map((value, index) => (
            <div key={index}>
              <div className="p-2 flex flex-wrap bg-[#87cefa]">
                {value.name}
              </div>
              {value.units.map((unit, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 flex flex-wrap odd:bg-[#f5f5f5] even:bg-[#fff]"
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
    </div>
  );
}
