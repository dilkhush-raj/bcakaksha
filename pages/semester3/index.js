import Navbar from "../../components/Navbar";
import Link from "next/link";

function Semester3() {

  return (
    <div className="semester-3">
    <Navbar />
    <section className="index">
      <h2>Semester 3</h2>
    <ul className="books">
      <Link href=""><a><li>MCS-014 : Systems Analysis and Design</li></a></Link>
      <Link href=""><a><li>MCS-021: Data and File Structures </li></a></Link>
      <Link href=""><a><li> MCS 023: Introduction to Database Management Systems </li></a></Link>
      <Link href=""><a><li>BCS-031 : Programming in C++</li></a></Link>
      <Link href=""><a><li>BCSL-032: C++ Programming Lab</li></a></Link>
      <Link href=""><a><li>BCSL-033: Data and File Structures Lab</li></a></Link>
      <Link href=""><a><li>BCSL-034: DBMS Lab</li></a></Link>
    </ul>
      </section>
    </div>
    
  );
}

export default Semester3;