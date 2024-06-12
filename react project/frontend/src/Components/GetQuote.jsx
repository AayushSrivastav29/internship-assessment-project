import React, { useState } from "react";
import "./GetQuote.css"; // Create and import a CSS file for styling

const GetQuote = ({ closeModal }) => {
  const [selectedServices, setSelectedServices] = useState([]);

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

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>General Information</h2>
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <h3>Select the services that you are interested in:</h3>
          <div className="service-list">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-item ${
                  selectedServices.includes(service.id) ? "selected" : ""
                }`}
                onClick={() => selectServiceHandler(service.id)}
              >
                <div className="service-icon">{service.icon}</div>
                <div className="service-name">{service.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={closeModal} className="next-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
