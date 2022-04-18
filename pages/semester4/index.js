import Navbar from "../../components/Navbar";
import Link from "next/link";

function Semester4() {

  return (
    <div className="semester-4">
    <Navbar />
    <section className="index">
      <h2>Semester 4</h2>
    <ul className="books">
      <Link href=""><a><li>BCS-040: Statistical Techniques</li></a></Link>
      <Link href=""><a><li>MCS-024: Object Oriented Technologies and Java Programming</li></a></Link>
      <Link href=""><a><li>BCS-041: Fundamental of Computer Networks</li></a></Link>
      <Link href=""><a><li>BCS-042: Analysis and Design of Algorithms</li></a></Link>
      <Link href=""><a><li>MCSL-016: Internet Concepts and Web Design (Lab Course)</li></a></Link>
      <Link href=""><a><li>BCSL-043: Java Programming Lab</li></a></Link>
      <Link href=""><a><li>BCSL-044: Statistical Techniques Lab</li></a></Link>
      <Link href=""><a><li> BCSL-045 : Analysis and Design of Algorithms Lab </li></a></Link>
      
      
      
      
      
      
      
      
    </ul>
      </section>
    </div>
    
  );
}

export default Semester4;