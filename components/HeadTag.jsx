import Head from "next/head";

export default function HeadTag(data) {

  const title = data.title;
  const description = data.description;
  const tag = data.tag;

  return (
    <>
      <Head>
        <title>{title || "IGNOU की BCA कक्षा"}</title>
        <meta
          name="description"
          content={description || "IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."}
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
    </>
  );
}
