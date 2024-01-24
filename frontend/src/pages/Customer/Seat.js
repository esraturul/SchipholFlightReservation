import React, { useState } from 'react';

const Seat = ({ onSelect }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSeatSelect = (seat) => {
    if (!seat) {
      alert('Lütfen bir koltuk seçin.');
      return;
    }

    if (!selectedGender) {
      alert('Lütfen bir cinsiyet seçin.');
      return;
    }

    setSelectedSeat(seat);
    // onSelect fonksiyonuna sadece seçilen koltuk bilgisini gönderelim
    onSelect(seat);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const seats = [
    { id: 1, number: 'A1' },
    { id: 2, number: 'A2' },
    { id: 3, number: 'B1' },
    { id: 4, number: 'B2' },
    // ...
  ];

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">Koltuk Seçimi</h3>

      {/* Cinsiyet Seçimi */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Cinsiyet Seçimi:</label>
        <div className="mt-1 flex items-center">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={() => handleGenderSelect('male')}
            className="mr-2"
          />
          <label htmlFor="male" className="text-sm text-gray-700">Erkek</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={() => handleGenderSelect('female')}
            className="ml-4 mr-2"
          />
          <label htmlFor="female" className="text-sm text-gray-700">Kadın</label>
        </div>
      </div>

      {/* Koltuk Seçimi */}
      <div className="grid grid-cols-4 gap-4">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`p-4 border rounded cursor-pointer ${
              selectedSeat === seat.number ? (selectedGender === 'female' ? 'bg-pink-200' : 'bg-blue-200') : ''
            }`}
            onClick={() => handleSeatSelect(seat.number)}
          >
            {seat.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seat;
