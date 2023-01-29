import Link from "next/dist/client/link";
import HeadTag from "../../components/HeadTag";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { useUserAuth } from "../../firebase/UserAuthContext";
import styles from "../../styles/Blogs.module.css";

function Notice() {
  const { user } = useUserAuth();

  useEffect(() => {
    function CheckUser(user) {
      if (user) {
        const id = user.uid;
        console.log(id);
        if (id === "H6Tx2hVSQBhC3Ub5eMQVWgftTPb2") {
          setadmin(true);
        } else {
          setadmin(false);
        }
      }
    }
    CheckUser(user);
  }, [user]);

  const [data, setData] = useState(null);
  const [admin, setadmin] = useState(false);


  useEffect(() => {
    async function fetchData() {
      try {

        const res = await fetch("/api/blogs");

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  });


  if (!data) {
    return <Loader />;
  }

  return (

    <div className={styles.main}>

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

      <div className={styles.container}>
        {data.blogs.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <img src={item.image} />
              <div className={styles.row}>
                <div className={styles.heading}>{item.title}</div>
                <div className={styles.buttons}>
                  <Link href={"/blog/" + item.slug}>Read</Link>
                </div>
              </div>
              {admin && <Link href={"/blog/edit?post=" + item.slug}>Edit</Link>}
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Notice;
