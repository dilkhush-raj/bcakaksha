import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";


export default function Home() {


  function explore(){
    var element = document.getElementById("menu");
    element.classList.toggle("open-menu");
    window.scrollTo(0, 0)
  }
  
  return (
    <>
    
      <Head>
        <title>IGNOU BCA Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        
      </Head>
      <Navbar />
      {/* <Hero /> */}
      <div className="hero">
        <div className="hero-content">
          
          <h3>Everything for IGNOU BCA Students</h3>
          <h1>
            Welcome to
            <br />
            ignou BCA Club
          </h1>
          <p>
            This website is under-construction. <br />Currently I have linked all books to eGyankosh, organised content will be available soon.
          </p>

          <button className="cta" onClick={explore}>Explore Us</button>
        </div>
      </div>
      <section className="index">
        {/* <div className="home-nav">
          <ul>
          <ul>
           <Link href="/"><a><li className="lynk">Home</li></a></Link>
             <Link href="/About"><a><li className="lynk">About</li></a></Link>
             <Link href="/Contact"><a><li className="lynk">Contact</li></a></Link>
           </ul>
          </ul>
        </div> */}
        <h2>Select a Bag to open</h2>
        <ul className="semester-bags">
          <Link href="/semester1/"><a><Image src='/images/bag1.svg' width='150px' height='200px' alt="semester 1 bag"/></a></Link>
          <Link href="/semester2/"><a><Image src='/images/bag2.svg' width='150px' height='200px' alt="semester 2 bag"/></a></Link>
          <Link href="/semester3/"><a><Image src='/images/bag3.svg' width='150px' height='200px' alt="semester 3 bag"/></a></Link>
          <Link href="/semester4/"><a><Image src='/images/bag4.svg' width='150px' height='200px' alt="semester 4 bag"/></a></Link>
          <Link href="/semester5/"><a><Image src='/images/bag5.svg' width='150px' height='200px' alt="semester 5 bag"/></a></Link>
          <Link href="/semester6/"><a><Image src='/images/bag6.svg' width='150px' height='200px' alt="semester 6 bag"/></a></Link>
        </ul>
      </section>

      <Footer />
    </>
  );
}
