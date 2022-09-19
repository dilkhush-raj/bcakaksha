import Link from "next/dist/client/link";
import HeadTag from "../../components/HeadTag";

export default function Feedback() {
    const pageTitle = "Feedback";
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

      <h1>Comming Soon....</h1>
      Until then you can give your feedback on our Discord Server or mail at dilkhush_raj@yahoo.com
    </div>
  );
}
