import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import { testimonials } from "../data";
import { useState } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(4);
  const { id, name, quote, job, avatar } = testimonials[index];

  function prevTestimonialHandler() {
    setIndex((prevState) => prevState - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  }
  function nextTestimonialHandler() {
    setIndex((prevState) => prevState + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  }
  return (
    <section className="testimonials">
      <div className="container testimonials--container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials--head"
        />
        <Card className="testimonial" key={id}>
          <div className="testimonial--avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial--quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial--title">{job}</small>
        </Card>
        <div className="testimonials--btn-container">
          <button
            className="testimonials--btn"
            onClick={prevTestimonialHandler}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials--btn"
            onClick={nextTestimonialHandler}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
}
