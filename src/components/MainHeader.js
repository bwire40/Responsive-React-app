/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
export default function MainHeader() {
  return (
    <header>
      <div className="main--header">
        <div className="container main--header-container">
          <div className="main--header-left">
            <h4>#100DaysOfWorkOut</h4>
            <h1>Join the legend of the Fitness World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              faucibus a arcu ut facilisis. Suspendisse suscipit ante in neque
              volutpat consequat.
            </p>
            <Link to="/plans" className="btn lg">
              Get started
            </Link>
          </div>
          <div className="main--header-right">
            <div className="main-header-circle"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
