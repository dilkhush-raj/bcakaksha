import Link from "next/dist/client/link";
import HeadTag from "../components/HeadTag";
import { externalLinks } from "../data/routes"

export default function ImportantLinks() {
  
  const pageTitle = "Links";

  return (
    <div className="page">
    <HeadTag title={pageTitle + " - IGNOU की BCA कक्षा"} />
      <h1 className="page-heading">Important Links</h1>
      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>Important Links</li>

      </ul>

      <div className="px-2 py-4 flex flex-col gap-3">
        {externalLinks.map((item, index) => {
          return (
            <Link href={item.path} target="_blank" key={index} className="flex gap-2 w-max ">
                <img
                  src="/images/icons8-link.svg"
                  width={20}
                  height={20} alt=""
                />
                {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
