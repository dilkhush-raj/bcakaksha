import { SiDiscord, SiLinkedin, SiYoutube } from "react-icons/si";
import Link from "next/link";

function Footer() {

  
    return (
      <>
      <footer>
          {/* <ul className="social-media">
          <li><Link href="https://discord.gg/M4CXzrud3e"><a target="_blank"><SiDiscord /></a></Link></li>
          <li><Link href="https://linkedin.com/in/dilkhushraj"><a target="_blank"><SiLinkedin /></a></Link></li>
          <li><Link href="https://www.youtube.com/channel/UC_id0Cd62I7jtSFqmi4ew1A"><a target="_blank"><SiYoutube /></a></Link></li>
          </ul> */}
        {/* <div className="row">End of the page.</div> */}
        <div className="row">Created and designed by Dilkhush Raj</div><br />
        <div>Copyright &copy; 2022 IGNOU की BCA कक्षा. All Rights Reserved</div>
      </footer>
      </>
    );
  }
  
  export default Footer;
  