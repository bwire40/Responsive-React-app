import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

function FAQ({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer() {
    setShowAnswer((prevShow) => !prevShow);
  }

  return (
    <article className="faq" onClick={toggleAnswer}>
      <div>
        <h4>{question}</h4>
        <button className="faq--icon">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAnswer && <p>{answer}</p>}
    </article>
  );
}
export default FAQ;
