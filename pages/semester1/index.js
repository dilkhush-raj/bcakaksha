import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

function Semester1() {
  return (
    <div className="semester-1">
      <section className="index">
        <h2>Semester 1</h2>
        <div className="book-wrap">
          <ul className="bk">
            <Link href="https://egyankosh.ac.in/handle/123456789/422">
              <a target="_blank">
                <li>
                  FEG-02: <br /> Foundation Course in English -2
                </li>
              </a>
            </Link>
            <Link href="https://egyankosh.ac.in/handle/123456789/3592">
              <a target="_blank">
                <li>
                  ECO-01: <br /> Business Organisation
                </li>
              </a>
            </Link>
            <Link href="https://egyankosh.ac.in/handle/123456789/434">
              <a target="_blank">
                <li>
                  BCS-011: <br /> Computer Basics and PC Software
                </li>
              </a>
            </Link>
            <Link href="https://egyankosh.ac.in/handle/123456789/438">
              <a target="_blank">
                <li>
                  BCS-012: <br /> Basic Mathematics{" "}
                </li>
              </a>
            </Link>
            <Link href="https://egyankosh.ac.in/handle/123456789/442">
              <a target="_blank">
                <li>
                  BCSL-013: <br /> Computer Basics and PC Software Lab
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Semester1;
