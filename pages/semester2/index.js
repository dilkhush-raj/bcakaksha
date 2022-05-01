import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

function Semester2() {
  return (
    <div className="semester-2">
      <Navbar />
      <section className="index">
        <h2>Semester 2</h2>
        <ul className="books">
          <Link href="https://egyankosh.ac.in/handle/123456789/5006">
            <a target="_blank">
              <li>
                ECO-02: <br /> Accountancy-I{" "}
              </li>
            </a>
          </Link>
          <Link href="https://www.egyankosh.ac.in/handle/123456789/451">
            <a target="_blank">
              <li>
                MCS - 011: <br /> Problem Solving and Programming
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/452">
            <a target="_blank">
              <li>
                MCS-012: <br /> Computer Organisation and Assembly Language
                Language Programming{" "}
              </li>
            </a>
          </Link>
          <Link href="/semester2/MCS013">
            <a>
              <li>
                MCS-013: <br /> Discrete Mathematics
              </li>
            </a>
          </Link>
          <Link href="https://www.egyankosh.ac.in/handle/123456789/453">
            <a target="_blank">
              <li>
                MCS-015: <br /> Communication Skills
              </li>
            </a>
          </Link>
          <Link href="/semester2/BCSL021/">
            <a>
              <li>
                BCSL - 021: <br /> C Language Programming Lab (Lab Course){" "}
              </li>
            </a>
          </Link>
          <Link href="/semester2/BCSL022/">
            <a>
              <li>
                BCSL - 022: <br /> Assembly Language Programming Lab (Lab
                Course)
              </li>
            </a>
          </Link>
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Semester2;
