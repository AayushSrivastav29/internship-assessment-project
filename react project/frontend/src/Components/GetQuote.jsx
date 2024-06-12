import React, { useState } from "react";
import GetInfo from "./GetInfo";

const GetQuote = ({ closeModal }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [showGetInfo, setShowGetInfo] = useState(false);

  const services = [
    { id: 1, name: "Soft Wash Home Washing", icon: "🏠" },
    { id: 2, name: "Window Cleaning", icon: "🧼" },
    { id: 3, name: "Gutter Cleaning", icon: "🚽" },
    { id: 4, name: "Patio & Sidewalk Cleaning", icon: "🧹" },
    { id: 5, name: "Deck Cleaning", icon: "🧴" },
    { id: 6, name: "Dryer Vent Cleaning", icon: "👕" },
    { id: 7, name: "Fence Cleaning", icon: "🛡️" },
    { id: 8, name: "Holiday Light Installation", icon: "🎄" },
    { id: 9, name: "On-Site Quote", icon: "📋" },
    { id: 10, name: "Roof Cleaning", icon: "🏠" },
    { id: 11, name: "Track Cleaning", icon: "🔧" },
  ];

  const selectServiceHandler = (id) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((serviceId) => serviceId !== id)
        : [...prevSelected, id]
    );
  };

  const handleNext = () => {
    setShowGetInfo(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg w-11/12 max-w-lg">
        {!showGetInfo ? (
          <>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl">General Information</h2>
              <button onClick={closeModal} className="text-2xl">&times;</button>
            </div>
            <div className="mt-4">
              <h3 className="text-xl mb-2">Select the services that you are interested in:</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer w-24 h-24 text-center ${selectedServices.includes(service.id) ? 'bg-teal-100 border-teal-500' : 'bg-white border-gray-300'}`}
                    onClick={() => selectServiceHandler(service.id)}
                  >
                    <div className="text-3xl mb-1">{service.icon}</div>
                    <div className="text-sm">{service.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={closeModal} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                Back
              </button>
              <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                Next
              </button>
            </div>
          </>
        ) : (
          <GetInfo closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default GetQuote;
