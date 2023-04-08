import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Sem(){

    const slug = useRouter().query.slug;
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
    return(
        <>
        {data.map((course, index) => {
            return(
                <div key={index}>{course.name}</div>
            )
        })}
        </>
    )
}