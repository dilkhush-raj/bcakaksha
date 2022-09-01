import Link from "next/dist/client/link";
import NoticeBoard from "../../components/NoticeBoard"

function Notice() {

  return (
    <div className="page">
    <h1 className="page-heading">Notice Board</h1>
      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>Notice Board</li>
      </ul>
        <NoticeBoard />
    </div>
  );
}

export default Notice;
