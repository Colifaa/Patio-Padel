import React, { useState } from 'react';

const BookingComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedCourt, setSelectedCourt] = useState<string | null>(null);

  const handleDateChange = (date: string) => setSelectedDate(date);
  const handleTimeChange = (time: string) => setSelectedTime(time);
  const handleCourtChange = (court: string) => setSelectedCourt(court);

  const availableTimes = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
  const courts = ["Court 1 Indoor", "Court 2 Indoor", "Court 3 Outdoor", "Court 4 Outdoor"];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Book a Court</h2>
        <p className="text-center text-gray-500 mb-6">Select your preferred date, time, and court</p>
        
        {/* Date Picker */}
        <div className="mb-6">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </div>

        {/* Select Court */}
        <div className="mb-6">
          <label className="block text-gray-700">Select Court</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {courts.map((court, index) => (
              <button
                key={index}
                onClick={() => handleCourtChange(court)}
                className={`p-2 rounded border ${selectedCourt === court ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {court}
              </button>
            ))}
          </div>
        </div>

        {/* Available Time Slots */}
        <div className="mb-6">
          <label className="block text-gray-700">Available Time Slots</label>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {availableTimes.map((time, index) => (
              <button
                key={index}
                onClick={() => handleTimeChange(time)}
                className={`p-2 rounded border ${selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-2">Booking Summary</h3>
          <p><span className="font-semibold">Date:</span> {selectedDate || "Not selected"}</p>
          <p><span className="font-semibold">Time:</span> {selectedTime || "Not selected"}</p>
          <p><span className="font-semibold">Court:</span> {selectedCourt || "Not selected"}</p>
          <p><span className="font-semibold">Price:</span> ${selectedTime ? "50.00" : "0.00"}</p>
        </div>

        {/* Book Now Button */}
        <button className="w-full py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingComponent;
