import Link from "next/link";

function Footer() {
  return (
    <>
      <footer>
        <div className="row">
          Created and designed by{" "}
          <Link href="https://dilkhush.vercel.app">
            <a target="_blank">Dilkhush Raj</a>
          </Link>
        </div>
        <br />
        <div>Copyright &copy; 2022 IGNOU की BCA कक्षा. All Rights Reserved</div>
      </footer>
    </>
  );
}

export default Footer;