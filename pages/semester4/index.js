import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

function Semester4() {

  return (
    <div className="semester-4">
    <Navbar />
    <section className="index">
      <h2>Semester 4</h2>
    <ul className="books">
      <Link href="https://egyankosh.ac.in/handle/123456789/464"><a target="_blank"><li>BCS-040: <br /> Statistical Techniques</li></a></Link>
      <Link href="https://www.egyankosh.ac.in/handle/123456789/973"><a target="_blank"><li>MCS-024: <br /> Object Oriented Technologies and Java Programming</li></a></Link>
      <Link href="https://egyankosh.ac.in/handle/123456789/466"><a target="_blank"><li>BCS-041: <br /> Fundamental of Computer Networks</li></a></Link>
      <Link href="https://egyankosh.ac.in/handle/123456789/467"><a target="_blank"><li>BCS-042: <br /> Analysis and Design of Algorithms</li></a></Link>
      <Link href="https://egyankosh.ac.in/handle/123456789/468"><a target="_blank"><li>MCSL-016: <br /> Internet Concepts and Web Design (Lab Course)</li></a></Link>
      <Link href="https://egyankosh.ac.in/handle/123456789/468"><a target="_blank"><li>BCSL-043: <br /> Java Programming Lab</li></a></Link>
      <Link href="https://egyankosh.ac.in/handle/123456789/470"><a target="_blank"><li>BCSL-044: <br /> Statistical Techniques Lab</li></a></Link>
      <Link href="https://egyankosh.ac.in/handle/123456789/471"><a target="_blank"><li> BCSL-045: <br /> Analysis and Design of Algorithms Lab </li></a></Link>
      
      
      
      
      
      
      
      
    </ul>
      </section>
      <Footer />
    </div>
    
  );
}

export default Semester4;