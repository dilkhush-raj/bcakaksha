import Link from "next/dist/client/link";
import HeadTag from "../../components/HeadTag";

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
