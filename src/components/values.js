import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data.js";
import Card from "../UI/card";

function Values() {
  const valuesArray = values.map(({ id, title, desc, icon }) => {
    // console.log(value.desc);
    return (
      <Card className="values--value" key={id}>
        <span>{icon}</span>
        <h4>{title}</h4>
        <small>{desc}</small>
      </Card>
    );
  });

  return (
    <section className="values">
      <div className="container values--container">
        <div className="values--left">
          <div className="values--image">
            <img src={Image} alt="Values Img" />
          </div>
        </div>
        <div className="values--right">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
            quam nec justo vehicula posuere vitae ut est
          </p>
          <div className="values--wrapper">{valuesArray}</div>
        </div>
      </div>
    </section>
  );
}
export default Values;
