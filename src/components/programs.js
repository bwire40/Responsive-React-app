import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../data.js";
import Card from "../UI/card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

export default function Programs() {
  const programsArray = programs.map(({ id, icon, title, path, info }) => {
    return (
      <Card className="programs--program" key={id}>
        <span>{icon}</span>
        <h4>{title}</h4>
        <small>{info}</small>
        <Link to={path} className="btn sm">
          Learn More
          {<AiFillCaretRight />}
        </Link>
      </Card>
    );
  });
  return (
    <section className="programs">
      <div className="container programs--container">
        <SectionHead icon={<FaCrown />} title="Programs" />
        <div className="program--wrapper">{programsArray}</div>
      </div>
    </section>
  );
}
