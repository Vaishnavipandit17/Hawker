import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/europe.jpg";
import Footer from "../components/Footer";
import Booking from "../components/Booking";

function Service() {
  return (
    <>
      <Navbar />
      {/* <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      /> */}
      <Booking />
      <Footer />
    </>
  );
}

export default Service;
