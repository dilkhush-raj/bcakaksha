import Head from "next/head";

export default function HeadTag(data) {
  return (
    <>
      <Head>
        <title>{data.data.title}</title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
    </>
  );
}
