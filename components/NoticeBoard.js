import Link from "next/link";

export default function NoticeBoard() {
  const Notice = [
    {
      title: "Extension of last date for submission of Assignments for June 2022 Term End Examination",
      path: "http://www.ignou.ac.in/userfiles/Notification%20-%20Assignment%20Extension.pdf",
      className: "nav-text",
    },
    {
      title: "Re-registration for July 2022 Session - Last Date: 30th June 2022",
      path: "https://onlinerr.ignou.ac.in/",
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
                  </a>
                </Link>
              );
            })}
        </ul>
      </div>
    </>
  );
}
