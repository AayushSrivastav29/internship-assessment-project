import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetQuote from "../Components/GetQuote";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-end mr-8 mt-3 mb-3">
      <button className="mr-5 bg-blue-500">Call-987654321</button>

      <button className="mr-5 ml-5 bg-blue-500" onClick={openModal}>
        Instant quote
      </button>
      {isModalOpen && <GetQuote closeModal={closeModal} />}
    </div>
  );
};

export default Header;
