import React from "react";
import PageHeader from "../components/Navbar/PageHeader";
import BookingForm from "../components/Cards/BookingForm";

const Booking = () => {
  return (
    <div>
      <PageHeader title="Booking" />
      <BookingForm />
    </div>
  );
};

export default Booking;
