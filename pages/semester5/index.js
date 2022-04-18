import Navbar from "../../components/Navbar";
import Link from "next/link";

function Semester5() {

  return (
    <div className="semester-5">
    <Navbar />
    <section className="index">
      <h2>Semester 5</h2>
    <ul className="books">
      <Link href="/semester5/BCS051/"><a><li>BCS-051: Introduction to Software Engineering</li></a></Link>
      <Link href="./BCS052"><a><li>BCS-052: Network Programming and Administration</li></a></Link>
      <Link href="./BCS053"><a><li>BCS-053: Web Programming</li></a></Link>
      <Link href="./BCS-054"><a><li>BCS-054 : Computer Oriented Numerical Techniques </li></a></Link>
      <Link href="./BCS-055"><a><li>BCS-055: Business Communication</li></a></Link>
      <Link href="./BCSL056"><a><li>BCSL-056: Network Programming and Administration Lab</li></a></Link>
      <Link href="./BCSL057"><a><li>BCSL-057: Web Programming Lab</li></a></Link>
      <Link href="./BCSL058"><a><li>BCSL-058: Computer Oriented Numerical Techniques Lab</li></a></Link>      
    </ul>
      </section>
    </div>
    
  );
}

export default Semester5;