import "./about.css";
import Header from "../../components/header";
import Image from "../../images/phone.jpg";
import Image2 from "../../images/snow.jpg";
import Image3 from "../../images/phone.jpg";
function About() {
  return (
    <div>
      <Header title="About Us" image={Image}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam
        nec justo vehicula posuere vitae ut est. Sed sed nunc id ligula tempor
        lobortis at sed neque. Nunc at eros pretium, facilisis nulla ut,
        efficitur libero
      </Header>
      <section className="about--story">
        <div className="container about--story-container">
          <div className="about--section-img">
            <img src={Image2} />
          </div>
          <div className="about--section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
              quam nec justo vehicula posuere vitae ut est. Sed sed nunc id
              ligula tempor lobortis at sed neque. Nunc at eros pretium,
              facilisis nulla ut, efficitur libero. Donec sodales odio nisi,
              vitae ullamcorper purus vehicula in.Phasellus vitae ipsum sed orci
              lobortis tincidunt gravida in orci. Duis sagittis vestibulum
              ligula a venenatis. Donec et lacus eget mauris commodo dignissim
              eget id quam.
            </p>
            <p>
              Phasellus vitae ipsum sed orci lobortis tincidunt gravida in orci.
              Duis sagittis vestibulum ligula a venenatis. Donec et lacus eget
              mauris commodo dignissim eget id quam.
            </p>
            <p>
              Phasellus vitae ipsum sed orci lobortis tincidunt gravida in orci.
              Duis sagittis vestibulum ligula a venenatis. Donec et lacus eget
              mauris commodo dignissim eget id quam.
            </p>
          </div>
        </div>
      </section>

      <section className="about--vision">
        <div className="container about--vision-container">
          <div className="about--section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
              quam nec justo vehicula posuere vitae ut est. Sed sed nunc id
              ligula tempor lobortis at sed neque. Nunc at eros pretium,
              facilisis nulla ut, efficitur libero. Donec sodales odio nisi,
              vitae ullamcorper purus vehicula in.Phasellus vitae ipsum sed orci
              lobortis tincidunt gravida in orci. Duis sagittis vestibulum
              ligula a venenatis. Donec et lacus eget mauris commodo dignissim
              eget id quam.
            </p>
            <p>
              Phasellus vitae ipsum sed orci lobortis tincidunt gravida in orci.
              Duis sagittis vestibulum ligula a venenatis. Donec et lacus eget
              mauris commodo dignissim eget id quam.
            </p>
          </div>
          <div className="about--section-img">
            <img src={Image3} />
          </div>
        </div>
      </section>

      <section className="about--mission">
        <div className="container about--mission-container">
          <div className="about--section-img">
            <img src={Image2} />
          </div>
          <div className="about--section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
              quam nec justo vehicula posuere vitae ut est. Sed sed nunc id
              ligula tempor lobortis at sed neque. Nunc at eros pretium,
              facilisis nulla ut, efficitur libero. Donec sodales odio nisi,
              vitae ullamcorper purus vehicula in.Phasellus vitae ipsum sed orci
              lobortis tincidunt gravida in orci. Duis sagittis vestibulum
              ligula a venenatis. Donec et lacus eget mauris commodo dignissim
              eget id quam.
            </p>
            <p>
              Phasellus vitae ipsum sed orci lobortis tincidunt gravida in orci.
              Duis sagittis vestibulum ligula a venenatis. Donec et lacus eget
              mauris commodo dignissim eget id quam.
            </p>
            <p>
              Phasellus vitae ipsum sed orci lobortis tincidunt gravida in orci.
              Duis sagittis vestibulum ligula a venenatis. Donec et lacus eget
              mauris commodo dignissim eget id quam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
