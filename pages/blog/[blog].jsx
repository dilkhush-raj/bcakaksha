import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import styles from "../../styles/Blog.module.css"
import Loader from "../../components/Loader";

const Blog = () => {
  // Router object to access the current URL's query parameters
  const router = useRouter();

  // Get the value of the "product" query parameter
  const params = router.query.blog;

  // State to store the product data
  const [data, setData] = useState(null);

  // Fetch product data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the server for the product data
        const res = await fetch(`/api/blogs/${params}`);
        const json = await res.json();

        const blog= json.blog;

        // Update the state with the product data
        setData(blog);

      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []); // Pass an empty dependency array to run the effect only on mount

  // Show a loading spinner while the data is being fetched
  if (!data) {
    return <Loader />;
  }

  return (
    <div className={styles.main}>
      <h1 className="page-heading">{data.title}</h1>
      <div className={styles.content}>{parse(`${data.content}`)}</div>
    </div>
  );
};

export default Blog;
