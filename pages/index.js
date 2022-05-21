import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  function explore() {
    var element = document.getElementById("menu");
    element.classList.toggle("open-menu");
    window.scrollTo(0, 0);
  }

  return (
    <div className="page">
      <Head>
        <title>IGNOU की BCA कक्षा</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
      </Head>
      {/* <Hero /> */}
      <div className="hero">
        <div className="hero-content">
          <h3>Everything for IGNOU BCA Students</h3>
          <h1>
            Welcome to
            <br />
            IGNOU की BCA कक्षा
          </h1>
          <p>
            This website is under-construction. <br />But you can access Semsester 2
            
          </p>

          <button className="cta">
            <Link href="https://discord.gg/M4CXzrud3e"><a target="_blank">Join Discord</a></Link>
          </button>
        </div>
      </div>
      <section className="index">
        <div>
        <h2>Select a Bag to open</h2>
        <ul className="semester-bags">
          <Link href="/semester1/">
            <a>
              <Image
                src="/images/bag1.svg"
                width="150px"
                height="200px"
                alt="semester 1 bag"
              />
            </a>
          </Link>
          <Link href="/semester2/">
            <a>
              <Image
                src="/images/bag2.svg"
                width="150px"
                height="200px"
                alt="semester 2 bag"
              />
            </a>
          </Link>
          <Link href="/semester3/">
            <a>
              <Image
                src="/images/bag3.svg"
                width="150px"
                height="200px"
                alt="semester 3 bag"
              />
            </a>
          </Link>
          <Link href="/semester4/">
            <a>
              <Image
                src="/images/bag4.svg"
                width="150px"
                height="200px"
                alt="semester 4 bag"
              />
            </a>
          </Link>
          <Link href="/semester5/">
            <a>
              <Image
                src="/images/bag5.svg"
                width="150px"
                height="200px"
                alt="semester 5 bag"
              />
            </a>
          </Link>
          <Link href="/semester6/">
            <a>
              <Image
                src="/images/bag6.svg"
                width="150px"
                height="200px"
                alt="semester 6 bag"
              />
            </a>
          </Link>
        </ul>
        </div>
      </section>

    </div>
  );
}
