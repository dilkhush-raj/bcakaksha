import { SiDiscord, SiLinkedin, SiYoutube } from "react-icons/si";

function Footer() {

  
    return (
      <>
      <footer>
          <ul className="social-media">
          <li><SiDiscord /></li>
            <li><SiLinkedin /></li>
            <li><SiYoutube /></li>
          </ul>
        <div className="row">It's seems it is the end of the page.</div>
        <div className="row">Created and designed by Dilkhush Raj</div>
      </footer>
      </>
    );
  }
  
  export default Footer;
  