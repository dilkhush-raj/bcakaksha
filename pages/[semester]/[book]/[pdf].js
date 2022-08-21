import { useRouter } from "next/router";
import books from "../../../data/semester.json";
import Link from "next/link";
import Head from "next/head";

export default function Semester2() {
  const router = useRouter();
  const post = [router.query.pdf];
  console.log(post);

  return (
    <div className="index">
      <Head>
        <title>{post.name + " - IGNOU की BCA कक्षा"}</title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <link
          rel="shortcut icon"
          href="/logo.svg"
          type="image/x-icon"
        />
      </Head>

      <div>
{post}

      </div>
    </div>
  );
};
