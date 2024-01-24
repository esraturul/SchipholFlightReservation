import React, { useState } from 'react';

const FlightListPage = () => {
  
  const flights = [
    { id: 1, name: 'Flight 1', departureDate: '2023-01-01', status: 'Geçmiş' },
    { id: 2, name: 'Flight 2', departureDate: '2024-01-25', status: 'Gelecek' },
    { id: 3, name: 'Flight 3', departureDate: '2024-02-10', status: 'Gelecek' },
    // ...
  ];

  const [selectedFlight, setSelectedFlight] = useState(null);

 
  const showFlightDetails = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Geçmiş ve Gelecek Uçuşlar</h2>

      <div className="grid grid-cols-2 gap-4">
        {}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Geçmiş Uçuşlar</h3>
          <ul>
            {flights
              .filter((flight) => flight.status === 'Geçmiş')
              .map((flight) => (
                <li
                  key={flight.id}
                  className="cursor-pointer hover:bg-gray-100 rounded p-2"
                  onClick={() => showFlightDetails(flight)}
                >
                  {flight.name} - {flight.departureDate}
                </li>
              ))}
          </ul>
        </div>

        {/* Gelecek Uçuşlar */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Gelecek Uçuşlar</h3>
          <ul>
            {flights
              .filter((flight) => flight.status === 'Gelecek')
              .map((flight) => (
                <li
                  key={flight.id}
                  className="cursor-pointer hover:bg-gray-100 rounded p-2"
                  onClick={() => showFlightDetails(flight)}
                >
                  {flight.name} - {flight.departureDate}
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Seçilen Uçuş Detayları */}
      {selectedFlight && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Uçuş Detayları</h3>
          <p className="text-gray-600">Uçuş: {selectedFlight.name}</p>
          <p className="text-gray-600">Kalkış Tarihi: {selectedFlight.departureDate}</p>
          {/* Diğer uçuş detayları buraya eklenebilir */}
        </div>
      )}
    </div>
  );
};

export default FlightListPage;
