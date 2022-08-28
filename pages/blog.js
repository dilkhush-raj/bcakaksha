import Link from "next/dist/client/link";

function Notice() {

  return (
    <div className="page">
    <h1 className="page-heading">Blog</h1>
      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>Blog</li>
      </ul>
    </div>
  );
}

export default Notice;
