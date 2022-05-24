import { useRouter } from "next/router";
import Head from "next/head";

export default function Unit() {

  return (
    <div className="index">
      <Head>
        <title>IGNOU की BCA कक्षा</title>
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
    </div>
  );
};
