import Hawker from "../components/Hawker";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Booking from "../components/Booking";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://img.freepik.com/premium-vector/organic-food-market-street-with-people-food-market-stalls-with-fruits-vegetables_273525-491.jpg?w=1380"
        title="Request A Hawker Now"
        text="Choose Your Hawker"
        buttonText="Request Now"
        url="/"
        btnClass="show"
      />
      <Hawker />
      <Booking />
      <Footer />
    </>
  );
}

export default Home;
