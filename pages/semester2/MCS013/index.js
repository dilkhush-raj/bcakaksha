import Navbar from "../../../components/Navbar";
import Link from "next/link";

function MCS013() {

  return (
    <div className="semester-2">
    <Navbar />
    <section className="index">
      <h2>Books</h2>
        <h3>Block-1 Elementary Logic</h3>
      <ul className="books">
        <li><Link href="https://egyankosh.ac.in/bitstream/123456789/9805/1/Unit-1.pdf"><a target="_blank">Unit-1 Propositional Calculus</a></Link></li>
        <li><Link href="https://egyankosh.ac.in/bitstream/123456789/9807/1/Unit-2.pdf"><a target="_blank">Unit-2 Methods of Proof</a></Link></li>
        <li><Link href="https://egyankosh.ac.in/bitstream/123456789/9810/1/Unit-3.pdf"><a target="_blank">Unit-3 Boolean Algebra and Circuits</a></Link></li>
      </ul>

      <h3>Block-2 Basic Combinatorics</h3>
      <ul className="books">
        <li><Link href="https://egyankosh.ac.in/bitstream/123456789/9817/1/Unit-1.pdf"><a target="_blank">Unit-1 Sets, Relations and Functions</a></Link></li>
        <li><Link href="https://egyankosh.ac.in/bitstream/123456789/9819/1/Unit-2.pdf"><a target="_blank">Unit-2 Combinatorics - An Introduction</a></Link></li>
        <li><Link href="https://egyankosh.ac.in/bitstream/123456789/9822/1/Unit-3.pdf"><a target="_blank">Unit-3 Some More Counting Principles</a></Link></li>
        <li><Link href="https://egyankosh.ac.in/bitstream/123456789/9825/1/Unit-4.pdf"><a target="_blank">Unit-4 Partitions and Distributions</a></Link></li>
      </ul>
    </section>
    </div>
    
  );
}

export default MCS013;