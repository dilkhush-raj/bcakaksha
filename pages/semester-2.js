import Navbar from "../components/Navbar";
import mcs011 from "./data/mcs011data";
import Link from "next/dist/client/link";

export default function Books() {
  return (
    <>
    <Navbar />

    {mcs011.map((item, index) => {
              return (
                <ol>
                <li className='link'>
                  <Link to={item.url}>
                    <span>{item.title}</span>
                  </Link>
                </li>
                </ol>
              );
            })}

    </>
  )
}
