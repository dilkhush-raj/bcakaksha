import Link from "next/dist/client/link";
import Image from "next/image";
import HeadTag from "../../components/HeadTag";

function ImportantLinks() {
  
  const pageTitle = "Links";
  const links = [
    {
      title: "IGNOU Official Website",
      path: "http://ignou.ac.in",
      className: "nav-text",
    },
    {
      title: "eGyankosh",
      path: "https://www.egyankosh.ac.in/handle/123456789/404",
      className: "nav-text",
    },
    {
      title: "Assignments",
      path: "https://webservices.ignou.ac.in/assignments/Bachelor-Degree/BCA/bca.html",
      className: "nav-text",
    },
    {
      title: "Previous Year Questions",
      path: "https://webservices.ignou.ac.in/Pre-Question/",
      className: "nav-text",
    },
    {
      title: "Exam Datesheet",
      path: "http://www.ignou.ac.in/ignou/aboutignou/division/sed/datesheet",
      className: "nav-text",
    },
    {
      title: "Student Login",
      path: "https://admission.ignou.ac.in/changeadmdata/AdmissionStatusNew.asp",
      className: "nav-text",
    },
    {
      title: "Re-registration",
      path: "https://onlinerr.ignou.ac.in/",
      className: "nav-text",
    },
    {
      title: "Fresh Admission",
      path: "https://ignouadmission.samarth.edu.in/",
      className: "nav-text",
    },
    {
      title: "Exam Form",
      path: "https://exam.ignou.ac.in/",
      className: "nav-text",
    },
    {
      title: "Student Grievance",
      path: "https://igram.ignou.ac.in/",
      className: "nav-text",
    },
    {
      title: "TEE Result",
      path: "http://www.ignou.ac.in/ignou/studentzone/results/2",
      className: "nav-text",
    },
    {
      title: "Hall Ticket for TEE",
      path: "http://www.ignou.ac.in/ignou/studentzone/results/6",
      className: "nav-text",
    },
    {
      title: "Grade Card",
      path: "https://gradecard.ignou.ac.in/gradecard/",
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

      <div className="px-2 py-2 flex flex-col gap-3">
        {links.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <a target="_blank">
                <Image
                  src="/images/icons8-link.svg"
                  width="20px"
                  height="20px" alt=""
                />{" "}
                {item.title}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ImportantLinks;
