/* eslint-disable jsx-a11y/img-redundant-alt */
import "./gallery.css";
import Header from "../../components/header";
import GImg from "../../images/snow.jpg";
// import { MdEmail } from "react-icons/md";
// import { BsMessenger } from "react-icons/bs";
// import { IoLogoWhatsapp } from "react-icons/io";
function Gallery() {
  const galleryLength = 6;
  const images = [];

  for (let i = 0; i < galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  const mappedImges = images.map((image, index) => {
    return (
      <article key={index}>
        <img src={image} alt={`Gallery Image ${index + 1}`} />
      </article>
    );
  });
  return (
    <>
      <Header title="Our Gallery" image={GImg}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam
        nec justo vehicula posuere vitae ut est.
      </Header>
      <div className="container gallery--container">{mappedImges}</div>
    </>
  );
}

export default Gallery;
