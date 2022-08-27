import "./notFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <div className="container notfound--container">
        <h1>Page NotFound</h1>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
