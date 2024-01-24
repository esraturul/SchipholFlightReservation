import React, { useState } from 'react';
import Seat from './Seat'; 
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { HeaderNavComp } from '../../components/HeaderNavComp';
import FlyImg2 from '../../assets/flyinn_2.jpeg';

const Reservation = () => {
  const location = useLocation();
  const selectedFlight = location.state?.selectedFlight || null;
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [reservationStatus, setReservationStatus] = useState(null);

  const handleSeatSelect = (seat) => {
    setSelectedSeat(seat);
  };

  const handleReservationSubmit = async () => {
    try {
      if (!selectedFlight || !selectedSeat) {
        console.error('Selected flight or seat is missing.');
        return;
      }

      
      const response = await axios.post('http://localhost:5001/flights/reserve', {
        flightId: selectedFlight.id,
        seat: selectedSeat,
      });

      
      if (response.data.success) {
        setReservationStatus('Reservation successful!');
       
      } else {
        setReservationStatus('Reservation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      setReservationStatus('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <HeaderNavComp />
      <div
        style={{
          backgroundImage: `url("${FlyImg2}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '85vh', 
          position: 'relative',
        }}
      >
        <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Flight Reservation</h2>
  
          {/* Uçuş Seçim */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Upcoming Flights</h3>
            <ul>
              {selectedFlight && (
                <li key={selectedFlight.id} className="text-gray-600">
                  {selectedFlight.name} - {selectedFlight.departureDate}
                </li>
              )}
            </ul>
          </div>
  
          {/* Koltuk Seçimi */}
          {selectedFlight && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Seat Selection</h3>
              <p className="text-gray-600">Selected Flight: {selectedFlight.name}</p>
              <p className="text-gray-600">Selected Seat: {selectedSeat}</p>
              <Seat onSelect={handleSeatSelect} />
            </div>
          )}
  
          {/* Rezervasyon Onay */}
          {selectedFlight && selectedSeat && (
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Reservation Confirmation</h3>
              <p className="text-gray-600">Flight: {selectedFlight.name}</p>
              <p className="text-gray-600">Seat: {selectedSeat}</p>
              {reservationStatus && <p className="text-red-500">{reservationStatus}</p>}
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleReservationSubmit}
              >
                Make Reservation
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Reservation;
