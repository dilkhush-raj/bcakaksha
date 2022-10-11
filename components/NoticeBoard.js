import Link from "next/link";

export default function NoticeBoard() {
  const Notice = [
    {
      title: "Tentative Datasheet for December 2022 Term End Examination",
      path: "http://www.ignou.ac.in/userfiles/datesheet.pdf",
      className: "nav-text",
    },
    {
      title: "Online Submission of Examination Form for December 2022 Term End Examination",
      path: "https://exam.ignou.ac.in/",
      className: "nav-text",
    },
    {
      title: "The last date for submission of Assignments for TEE December, 2022 is extended upto 31st October, 2022",
      path: "http://ignou.ac.in/userfiles/Extension%20till%2031_10_22.pdf",
      className: "nav-text",
    },
    {
      title:
        "Link of Online Application for Re-Evaluation of Answerscripts for TEE June 2022",
      path: "https://onlineservices.ignou.ac.in/reevaluation/",
      className: "nav-text",
    },
  ];

  return (
    <>
      <div className="notice-board">
        <h2>Notice Board</h2>
        <ul>
          {Notice.map((item, index) => {
            return (
              <Link key={index} className={item.className} href={item.path}>
                <a target="_blank">
                  <li>{item.title}</li>
                  <br />
                </a>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
