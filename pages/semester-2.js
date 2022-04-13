import Navbar from "../components/Navbar";
import mcs011 from "./data/mcs011data";

export default function Books() {
  return (
    <>
    <Navbar />

    {mcs011.map((item, index) => {
              return (
                <ol>
                <li className='link'>
                  <a href={item.url}>
                    <span>{item.title}</span>
                  </a>
                </li>
                </ol>
              );
            })}

    </>
  )
}
