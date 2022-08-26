import { useRouter } from "next/router";
import PdfViewer from "../../../components/PdfViewer";
import books from "../../../data/semester.json";
import Link from "next/link";
import Head from "next/head";

export default function Semester2() {
  const router = useRouter();
  // console.log(books);
  // console.log(post);
  const test = router.query.pdf;
  
  // const book = test.book;
  const post = books[router.query.book];
  if (!post) return <p></p>;

  // console.log(test);
  
  console.log(post);
  // console.log(book);

  const unit = post.book[test];

  const pdf = unit.path;
  // console.log(pdf); 

  return (
    <div>

<PdfViewer pdf={pdf}/>
    </div>
  );
};
