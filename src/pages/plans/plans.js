import Header from "../../components/header";
import Himg from "../../images/snow.jpg";
import Card from "../../UI/card";
import { plans } from "../../data";

import "./plans.css";
function Plans() {
  const plansArray = plans.map((plan) => {
    return (
      <Card key={plan.id} className="plan">
        <h3>{plan.name}</h3>
        <small>{plan.desc}</small>
        <h1>{`$${plan.price}`}</h1> <h2>/mo</h2>
        <h4>Features</h4>
        {plan.features.map(({ feature, available }, index) => {
          return (
            <p key={index} className={!available ? "disabled" : ""}>
              {feature}
            </p>
          );
        })}
        <button className="btn lg">Choose Plan</button>
      </Card>
    );
  });
  return (
    <>
      <Header title="Membership Plans" image={Himg}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus a
        arcu ut facilisis. Suspendisse suscipit ante in neque volutpat
        consequat.
      </Header>
      <section className="container plans--container">{plansArray}</section>
    </>
  );
}

export default Plans;
