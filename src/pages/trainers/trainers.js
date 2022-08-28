import Header from "../../components/header";
import HImg from "../../images/phone.jpg";
import { trainers } from "../../data";
import Trainer from "../../components/Trainer";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import "./trainer.css";

function Trainers() {
  const trainersArray = trainers.map(({ id, image, name, job, socials }) => {
    return (
      <Trainer
        key={id}
        image={image}
        name={name}
        job={job}
        socials={[
          { icon: <AiFillInstagram />, link: socials[0] },
          { icon: <AiOutlineTwitter />, link: socials[1] },
          { icon: <FaFacebook />, link: socials[2] },
          { icon: <FaLinkedin />, link: socials[3] },
        ]}
      />
    );
  });
  return (
    <>
      <Header title="Our Trainers" image={HImg}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam
        nec justo vehicula posuere vitae ut est.
      </Header>
      <section className="container trainers--container">
        {trainersArray}
      </section>
    </>
  );
}
export default Trainers;
