import { useRouter } from "next/router";
import Link from "next/link";
import HeadTag from "../../../components/HeadTag";

export default function Semester() {
  const router = useRouter();

  const slug = router.query.slug;

  return (
    <div>
      <HeadTag />
      <h1 className="page-heading">{slug}</h1>
      <ul className="breadcrumbs">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li>{slug}</li>
      </ul>

    </div>
  );
}
