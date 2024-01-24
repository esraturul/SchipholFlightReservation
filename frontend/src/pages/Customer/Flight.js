import React, { useState, useEffect } from "react";
import { InputTextComp } from "../../components/InputTextComp";
import { IoIosAirplane } from "react-icons/io";
import { ButtonYellowComp } from "../../components/ButtonYellowComp";
import SeatImg from "./../../assets/seat.jpg";
import { HeaderNavComp } from "../../components/HeaderNavComp";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Seat from './Seat';  // Eğer Seat component'i aynı dizinde değilse doğru yolu belirtin

export const Flight = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState(null);
  const [dateFilter, setDateFilter] = useState("");
  const [departureFilter, setDepartureFilter] = useState("");
  const [selectedFlight, setSelectedFlight] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const response = await axios.get('http://localhost:5001/flights', { withCredentials: true });
      const apiFlights = response.data;
      setFlights(apiFlights);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  const handleReservation = () => {
    if (selectedFlight) {
      
      navigate("/reservation", { state: { selectedFlight } });
    } else {
      console.warn('Please select a flight before making a reservation.');
    }
  };

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    let filteredList = flights;

    if (dateFilter) {
      filteredList = filteredList.filter(flight => flight.scheduleDate.includes(dateFilter));
    }

    if (departureFilter) {
      filteredList = filteredList.filter(flight => flight.flightDirection.toLowerCase() === departureFilter.toLowerCase());
    }

    console.log("FilteredList:", filteredList); 

    setFilteredFlights(filteredList);
  };

  return (
    <>
      <HeaderNavComp />
      <div
        className="w-full h-[50vh] bg-red-300 bg-contain flex justify-center items-center"
        style={{
          backgroundImage: `url("${SeatImg}")`,
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="mt-4 p-6 text-center">
        <h2 className="text-lg font-semibold mb-2">Flight List</h2>

        <form onSubmit={(e) => { e.preventDefault(); handleFilter(e); }} className="mb-4">
          <InputTextComp
            image={<IoIosAirplane />}
            placeholder={"Enter Date"}
            label="Departure Date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
          <InputTextComp
            image={<IoIosAirplane />}
            placeholder={"Enter Flight Direction"}
            label="Flight Direction"
            value={departureFilter}
            onChange={(e) => setDepartureFilter(e.target.value)}
          />
          <ButtonYellowComp label={"APPLY FILTERS"} onClick={handleFilter} />
        </form>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-1">Flight Number</th>
              <th className="border border-gray-300 p-1">Arrival</th>
              <th className="border border-gray-300 p-1">Date</th>
              <th className="border border-gray-300 p-1">Gate</th>
              <th className="border border-gray-300 p-1">ID</th>
              <th className="border border-gray-300 p-1">Airline Code</th>
              <th className="border border-gray-300 p-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filteredFlights) && filteredFlights.map((flight) => (
              <tr key={flight.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-1">{flight.flightNumber}</td>
                <td className="border border-gray-300 p-1">{flight.route.destinations[0]}</td>
                <td className="border border-gray-300 p-1">{flight.scheduleDate}</td>
                <td className="border border-gray-300 p-1">{flight.gate}</td>
                <td className="border border-gray-300 p-1">{flight.id}</td>
                <td className="border border-gray-300 p-1">{flight.airlineCode}</td>
                <td className="border border-gray-300 p-1">
                  <button
                    onClick={() => handleFlightSelect(flight)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Select Flight
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Rezervasyon Sayfası */}
        {selectedFlight && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Flight Reservation</h2>
            <p className="text-gray-600">Selected Flight: {selectedFlight.flightNumber}</p>
            <Seat onSelect={() => {}} />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleReservation}
            >
              Make Reservation
            </button>
          </div>
        )}
      </div>
    </>
  );
};
