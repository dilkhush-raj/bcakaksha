import Navbar from "../../components/Navbar";
import Link from "next/link";

function Semester2() {

  return (
    <div className="semester-2">
    <Navbar />
    <section className="index">
      <h2>Semester 2</h2>
    <ul className="books">
      <Link href="/semester2/ECO02"><a><li>ECO-02: Accountancy-I </li></a></Link>
      <Link href="/semester2/MCS011"><a><li>MCS - 011: Problem Solving and Programming</li></a></Link>
      <Link href="/semester2/MCS012"><a><li>MCS-012: Computer Organisation and Assembly Language Language Programming </li></a></Link>
      <Link href="/semester2/MCS013"><a><li>MCS-013: Discrete Mathematics </li></a></Link>
      <Link href="/semester2/MCS015"><a><li>MCS-015: Communication Skills</li></a></Link>
      <Link href="/semester2/BCSL021"><a><li>BCSL - 021: C Language Programming Lab (Lab Course) </li></a></Link>
      <Link href="/semester2/BCSL022"><a><li>BCSL - 022: Assembly Language Programming Lab (Lab Course)</li></a></Link>
    </ul>
      </section>
    </div>
    
  );
}

export default Semester2;