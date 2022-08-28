import Link from "next/dist/client/link";

function ImportantLinks() {
  const links = [
    {
        title: "IGNOU Official Website",
        path: "https://ignou.ac.in",
        className: "nav-text",
    },
    {
        title: "eGyankosh",
        path: "https://www.egyankosh.ac.in/handle/123456789/404",
        className: "nav-text",
      },
      {
        title: "Assignments",
        path: "https://webservices.ignou.ac.in/assignments/schools/socis/bca/bca.html",
        className: "nav-text",
      },
      {
        title: "Previous Year Questions",
        path: "https://webservices.ignou.ac.in/Pre-Question/",
        className: "nav-text",
      },
      {
        title: "Gyan Vani",
        path: "http://www.ignou.ac.in/ignou/aboutignou/broadcast/3",
        className: "nav-text",
      },
      {
        title: "Gyan Darshan",
        path: "http://www.ignou.ac.in/ignou/aboutignou/broadcast/1",
        className: "nav-text",
      },
      {
        title: "IGNOU Online",
        path: "http://www.ignouonline.ac.in/",
        className: "nav-text",
      },
      {
        title: "IGNOU Wiki",
        path: "http://ieg.ignou.ac.in/wiki/index.php/Main_Page",
        className: "nav-text",
      },
  ];

  return (
    <div className="page">
      <h1 className="page-heading">Important Links</h1>
      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>Important Links</li>
        
      </ul>

      <ul className="imp-links">
      {links.map((item, index) => {
              return (
                <li key={index}>
                <Link href={item.path}>
                  <a target="_blank">
                    <li>{item.title}</li>
                  </a>
                </Link>
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default ImportantLinks;
