import Link from "next/link";
import HeadTag from "../components/HeadTag";

export default function Contact() {
    const pageTitle = "Contact Us";
  return (
    <div className="page">
      <HeadTag title={pageTitle + " - IGNOU की BCA कक्षा"} />
      <h1 className="page-heading">{pageTitle}</h1>
      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>{pageTitle}</li>
      </ul>
      <div className="p-4">Email: <Link href={"mailto:dilkhush_raj@yahoo.com"}>dilkhush_raj@yahoo.com</Link></div>
    </div>
  );
}
