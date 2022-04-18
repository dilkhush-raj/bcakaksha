import Navbar from "../../components/Navbar";
import Link from "next/link";
function Semester6() {

  return (
    <div className="semester-6">
    <Navbar />
    <section className="index">
      <h2>Semester 6</h2>
    <ul className="books">
      <Link href=""><a><li>BCS-062: E-Commerce</li></a></Link>
      <Link href=""><a><li>MCS-022: Operating System Concepts and Networking Management</li></a></Link>
      <Link href=""><a><li>CSL-063: Lab (Operating System concepts and Networking Management)</li></a></Link>
      <Link href=""><a><li>BCSP-064: Project</li></a></Link>
    </ul>
      </section>
    </div>
    
  );
}

export default Semester6;