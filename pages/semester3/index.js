import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

function Semester3() {
  return (
    <div className="semester-3">
      <section className="index">
        <h2>Semester 3</h2>
        <ul className="bk">
          <Link href="https://egyankosh.ac.in/handle/123456789/952">
            <a target="_blank">
              <li>
                MCS-014:
                <br /> Systems Analysis and Design
              </li>
            </a>
          </Link>
          <Link href="https://www.egyankosh.ac.in/handle/123456789/968">
            <a target="_blank">
              <li>
                MCS-021:
                <br /> Data and File Structures{" "}
              </li>
            </a>
          </Link>
          <Link href="https://www.egyankosh.ac.in/handle/123456789/971">
            <a target="_blank">
              <li>
                {" "}
                MCS 023:
                <br /> Introduction to Database Management Systems{" "}
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/460">
            <a target="_blank">
              <li>
                BCS-031:
                <br /> Programming in C++
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/461">
            <a target="_blank">
              <li>
                BCSL-032:
                <br /> C++ Programming Lab
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/462">
            <a target="_blank">
              <li>
                BCSL-033:
                <br /> Data and File Structures Lab
              </li>
            </a>
          </Link>
          <Link href="https://egyankosh.ac.in/handle/123456789/463">
            <a target="_blank">
              <li>
                BCSL-034:
                <br /> DBMS Lab
              </li>
            </a>
          </Link>
        </ul>
      </section>
    </div>
  );
}

export default Semester3;
