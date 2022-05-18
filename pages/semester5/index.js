import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

function Semester5() {
  return (
    <div className="semester-5">
      <section className="index">
        <h2>Semester 5</h2>
        <ul className="bk">
          <Link href="https://egyankosh.ac.in/handle/123456789/52136">
            <a target="_blank">
              <li>
                BCS-051: <br /> Introduction to Software Engineering
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/472">
            <a target="_blank">
              <li>
                BCS-052: <br /> Network Programming and Administration
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/51958">
            <a target="_blank">
              <li>
                BCS-053: <br /> Web Programming
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/51889">
            <a target="_blank">
              <li>
                BCS-054: <br /> Computer Oriented Numerical Techniques{" "}
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/476">
            <a target="_blank">
              <li>
                BCS-055: <br /> Business Communication
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/477">
            <a target="_blank">
              <li>
                BCSL-056: <br /> Network Programming and Administration Lab
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/478">
            <a target="_blank">
              <li>
                BCSL-057: <br /> Web Programming Lab
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/52141">
            <a target="_blank">
              <li>
                BCSL-058: <br /> Computer Oriented Numerical Techniques Lab
              </li>
            </a>
          </Link>
        </ul>
      </section>
    </div>
  );
}

export default Semester5;
