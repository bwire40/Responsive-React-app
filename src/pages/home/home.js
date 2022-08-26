import "./home.css";
import Values from "../../components/values.js";
import Programs from "../../components/programs";
import MainHeader from "../../components/MainHeader";
import FAQ from "../../components/FAQs";
import Testimonials from "../../components/testimonials";
function Home() {
  return (
    <div>
      <MainHeader />
      <Programs />
      <Values />
      <FAQ />
      <Testimonials />
    </div>
  );
}

export default Home;
