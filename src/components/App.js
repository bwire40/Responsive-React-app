import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home.js";
import About from "../pages/about/about.js";
import Contact from "../pages/contact/contact.js";
import Gallery from "../pages/gallery/gallery.js";
import NotFound from "../pages/notFound/notFound.js";
import Plans from "../pages/plans/plans.js";
import Trainers from "../pages/trainers/trainers.js";
import Navbar from "./NavBar.js";
import Footer from "./footer.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
