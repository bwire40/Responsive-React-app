/* eslint-disable react/jsx-no-target-blank */
import "./contact.css";
import Header from "../../components/header";
import HImg from "../../images/contact.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

function Contact() {
  return (
    <>
      <Header title="Get In Touch" image={HImg}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam
        nec justo vehicula posuere vitae ut est. Sed sed nunc id ligula tempor
        lobortis at sed neque. Nunc at eros pretium, facilisis nulla ut,
        efficitur libero
      </Header>
      <section className="contact contact--container">
        <div className="contact--wrapper">
          <a
            href="mailto:emmanuelbwire10@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            {<MdEmail />}
          </a>
          <a
            href="http://m.facebook.com/emmanuel Bwire"
            target="_blank"
            rel="noreferrer noopener"
          >
            {<BsMessenger />}
          </a>
          <a
            href="https://wa.me/+254742923458"
            target="_blank"
            rel="noreferrer noopener"
          >
            {<IoLogoWhatsapp />}
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
