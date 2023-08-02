import "./BookingStyles.css";
import BookingData from "./BookingData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Booking() {
  return (
    <div className="booking">
      {/* <p>You can search hawkers using Google Maps.</p> */}
      <h1>Recent Bookings</h1>
      <div className="bookingcard">
        <BookingData
          image={Trip1}
          heading="15 May 2023"
          text="Vegetable Hawker"
        />

        <BookingData
          image={Trip2}
          heading="17 April 2023"
          text="IceCream Hawker"
        />

        <BookingData
          image={Trip3}
          heading="23 February 2023"
          text="Junk Hawker"
        />
      </div>
    </div>
  );
}

export default Booking;
