import React from "react";
import AirportImg from "../assets/airport.webp"
const BookingTerms = () => {
  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${AirportImg})`,  backgroundSize: "cover" }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Booking Terms and Conditions</h2>
        <p>
  1. When you make a reservation, you agree to the applicable conditions displayed in the reservation process. Each Service Provider's cancellation policies and other terms (about age requirements, security/deposits, surcharges for group Bookings, extra bed, breakfast, pets, cards accepted, etc.) are available on our Platform, on the Service Provider information page, during the booking process, under the following "attention to detail" section and the confirmation email or request (if applicable).
</p>

<p>
  2. If you cancel or no-show the reservation, the cancellation/no-show fee and refund will depend on the Service Provider's cancellation/no-show conditions.
</p>

<p>
  3. Some Reservations cannot be canceled free of charge, while others can only be canceled free of charge up to a certain date.
</p>

<p>
  4. If you make a prepaid Travel Experience reservation (including all price components and/or deposit, if any) and the Service Provider is unable to collect payment on the specified date, it may cancel the Reservation without prior notice. If they cancel, any non-refundable payments you have made may be refunded at the sole discretion of the Service Provider. It is your responsibility to ensure that payment is made on time (debit card, debit card, or credit card details must be correct and there must be sufficient funds in your account).
</p>

<p>
  5. If you think you will not be able to arrive on time, please contact your Service Provider and let them know when you will be able to arrive. It is your responsibility to make sure you arrive on time. If you do not arrive on time, we will not be liable for any associated costs (for example, the cancellation of your Booking or any fees the Service Provider may charge).
</p>

<p>
  6. As the person making the booking, you are responsible for the actions and behavior of everyone in the group (in relation to the Travel Experience). It is also your responsibility to obtain their permission before providing us with their personal data.
</p>

        
      </div>
    </div>
  );
};

export default BookingTerms;
