import Navbar from "../../../components/Navbar";
import Link from "next/link";

function BCSL022() {

  return (
    <div className="semester-5">
    <Navbar />
    <section className="index">
      <h2>Books</h2>
      <ul className="books">
        <li><Link href="https://www.egyankosh.ac.in/bitstream/123456789/11562/1/Section-1.pdf"><a target="_blank">Section-1 Digital Logic Circuits</a></Link></li>
        <li><Link href="https://www.egyankosh.ac.in/bitstream/123456789/11563/1/Section-2.pdf"><a target="_blank">Section-2 Assembly Language Programming</a></Link></li>
      </ul>
    </section>
    </div>
    
  );
}

export default BCSL022;