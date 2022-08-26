/* eslint-disable no-template-curly-in-string */

function Card({ className, children }) {
  return <article className={`card  ${className}`}>{children}</article>;
}
export default Card;
