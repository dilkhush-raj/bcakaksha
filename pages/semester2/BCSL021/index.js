import Navbar from "../../../components/Navbar";
import Link from "next/link";

function BCSL021() {

  return (
    <div className="semester-2">
    <Navbar />
    <section className="index">
      <h2>Books</h2>
      <ul className="books">
        <li><Link href="https://egyankosh.ac.in/bitstream/123456789/11561/1/Section-1.pdf"><a target="_blank">Section-1 C Programming Lab</a></Link></li>
      </ul>
    </section>
    </div>
    
  );
}

export default BCSL021;