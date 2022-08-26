import { Link } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container footer--container">
        <article>
          <Link to="/" className="logo">
            M<span>a</span>n<span>u</span>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
            quam nec justo vehicula posuere vitae ut est
          </p>
          <div className="footer--socials">
            <a
              href="https://linkedin.com"
              rel="noreferrer noopener "
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              rel="noreferrer noopener "
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              rel="noreferrer noopener "
              target="_blank"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com"
              rel="noreferrer noopener "
              target="_blank"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contacts</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Community</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contacts">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer--copyright">
        <small>2022 &copy; CopyRight Manu</small>
      </div>
    </footer>
  );
}
export default Footer;
