import Link from "next/dist/client/link";
<<<<<<< HEAD:pages/blog/index.js
import HeadTag from "../../components/HeadTag";
=======

import HeadTag from "../components/Head";
>>>>>>> 57db5fac10e2b10d07ea09516fbfd5ef1897851f:pages/blog.js

function Notice() {
  const headData = {
    title: "Blog",
  };
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


      <h1>Comming Soon....</h1>

    </div>
  );
}

export default Notice;
