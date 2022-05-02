import Navbar from "../../../components/Navbar";
import Link from "next/link";

function BCSL021() {

  return (
    <div className="semester-2">
    <Navbar />
    <section className="index">
      <h2>Books</h2>
      <ul className="books">
        <li><Link href="https://drive.google.com/file/d/1x1-9pvOyW5aaA2GHlgxx37LAsYThufMj/view?usp=sharing"><a target="_blank">Section-1 C Programming Lab</a></Link></li>
      </ul>
    </section>
    </div>
    
  );
}

export default BCSL021;