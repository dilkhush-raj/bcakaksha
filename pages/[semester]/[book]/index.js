import { useRouter } from "next/router";
import books from "../../../data/semester.json";
import examDate from "../../../data/exam-date.json";
import Link from "next/link";
import Head from "next/head";
import Timer from "../../../components/Timer";
import Script from 'next/script';

export default function Semester2() {
  const router = useRouter();
  const post = books[router.query.book];
  var date = examDate[router.query.book];
  if (!date) date = "August 01 2022 14:00:00 UTC+0530";
  if (!post) return <p></p>;



  return (
    <div>
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
      <h1 className="page-heading">{post.name}</h1>
      <div className="index">
      <Timer  date={date.date}/>
      
      {/* <Timer  date="12/31/2023 23:59:59"/> */}
      {/* <div>{console.log({post})}</div> */}
      <div className="book-wrap">
        {post.book.map((value, index) => (
          <Link key={index} href={value.path}>
            <a className="books" target="_blank">
              <h2>{value.name}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
    <Script
        src="https://documentcloud.adobe.com/view-sdk/viewer.js"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div id="adobe-dc-view"></div>

{document.addEventListener("adobe_dc_view_sdk.ready", function()
    {
        var adobeDCView = new AdobeDC.View({clientId: "d6a5fb0a611a4a6d87a0cc1c116a25f2", divId: "adobe-dc-view"});
        adobeDCView.previewFile(
       {
          content:   {location: {url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
          metaData: {fileName: "Bodea Brochure.pdf"}
       })
    })
}


      

    

    </div>
  );
};
