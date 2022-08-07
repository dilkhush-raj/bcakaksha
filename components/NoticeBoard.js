import Link from "next/link";

export default function NoticeBoard() {
  const Notice = [
    {
      title: "Hall Ticket for June 2022 Term End Examination",
      path: "http://www.ignou.ac.in/ignou/bulletinboard/news/latest/detail/Hall_Ticket_for_June_2022_Term_End_Examination-854",
      className: "nav-text",
    },
    {
      title: "Date Sheet for June 2022 Term End Examination",
      path: "http://www.ignou.ac.in/userfiles/datesheet.pdf",
      className: "nav-text",
    },
    {
      title:
        "The Last Date for Re-Registration for July 2022 Session extended till 12th August, 2022",
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
