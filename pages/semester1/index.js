import Navbar from "../../components/Navbar";
import Link from 'next/link';

function Semester1() {

  return (
    <div className="semester-1">
    <Navbar />
    <section className="index">
      <h2>Semester 1</h2>
    <ul className="books">
      <Link href=""><a><li>FEG-02 : Foundation Course in English -2</li></a></Link>
      <Link href=""><a><li>ECO-01: Business Organisation</li></a></Link>
      <Link href=""><a><li>BCS-011: Computer Basics and PC Software</li></a></Link>
      <Link href=""><a><li>BCS-012: Basic Mathematics </li></a></Link>
      <Link href=""><a><li>BCSL-013: Computer Basics and PC Software Lab</li></a></Link>
      
      
      
      
      
    </ul>
      </section>
    </div>
    
  );
}

export default Semester1;