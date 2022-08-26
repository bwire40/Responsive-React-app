import SectionHead from "./SectionHead";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data.js";
import FAQ from "./FAQ";

export default function FAQs() {
  const faqsArray = faqs.map(({ id, question, answer }) => {
    return <FAQ question={question} answer={answer} key={id} />;
  });
  return (
    <section className="faqs">
      <div className="container faqs--container">
        <SectionHead icon={<FaQuestion />} title="FAQs" />
        <div className="faqs--wrapper">{faqsArray}</div>
      </div>
    </section>
  );
}
