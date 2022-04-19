import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

function Semester6() {

  return (
    <div className="semester-6">
    <Navbar />
    <section className="index">
      <h2>Semester 6</h2>
    <ul className="books">
      <Link href="https://egyankosh.ac.in/handle/123456789/51829"><a target="_blank"><li>BCS-062: <br /> E-Commerce</li></a></Link>
      <Link href="https://www.egyankosh.ac.in/handle/123456789/969"><a target="_blank"><li>MCS-022: <br /> Operating System Concepts and Networking Management</li></a></Link>
      <Link href="https://egyankosh.ac.in/handle/123456789/51907"><a target="_blank"><li>BCSL-063: <br /> Lab (Operating System concepts and Networking Management)</li></a></Link>
      <Link href="https://egyankosh.ac.in/handle/123456789/51905"><a target="_blank"><li>BCSP-064: <br /> Project</li></a></Link>
    </ul>
      </section>
      <Footer />
    </div>
    
  );
}

export default Semester6;