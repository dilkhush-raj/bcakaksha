import Link from "next/dist/client/link";
import { IoMdArrowRoundUp } from "react-icons/io";

function Navbar() {
  function Up() {
    window.scrollTo(0, 0);
  }

  return (
    <header>
      {/* Navigation Bar Starts  */}
      <div className="nav-bar">
        <Link href="/">
          <a>
            <span className="logo">IGNOU की BCA कक्षा</span>
          </a>
        </Link>

        <div className="navigation-links"></div>
      </div>
      <ul className="navigations">
        <li onClick={Up}>
          <IoMdArrowRoundUp />
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
