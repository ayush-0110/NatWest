import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';

function Modal({ showModal, setShowModal, selectedState }) {
  if (showModal === false) return null;
  const closeModal = () => {
    setShowModal(false);
  };

  const barData = selectedState && Object.entries(selectedState.cities).map(([cityName, cityData]) => ({
    city: cityName,
    MaxTemp: cityData.max_temp,
    MinTemp: cityData.min_temp,
  }));

  const cityRows = selectedState && Object.entries(selectedState.cities).map(([cityName, cityData], index) => (
    <tr key={index}>
      <td>{cityName}</td>
      <td>{cityData.max_temp}°C</td>
      <td>{cityData.min_temp}°C</td>
    </tr>
  ));
  return (
    <div className="custom-modal">
      <div className="custom-modal-content">
        <div className="custom-modal-header">
          <button
            onClick={closeModal}
            className="custom-modal-close-btn"
          >
            &times;
          </button>
        </div>
        <div className="body">

        <div className="custom-modal-body tableBody">
        <table className="table table-striped custom-modal-table">
            <thead className="table-dark">
              <tr>
                <th scope="col">City</th>
                <th scope="col">Max Temperature</th>
                <th scope="col" >Min Temperature</th>
              </tr>
            </thead>
            <tbody>
              {cityRows}
            </tbody>
          </table>
        </div>
        <div className="graph">
        {barData.map((data, index) => (
            <div key={index} className="bardiv">
              <h3 style={{marginBottom:'1rem'}}>{data.city}</h3>
              <ResponsiveContainer width="80%" height={150}>
                <BarChart data={[data]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="MaxTemp" fill="#8884d8" name="Max Temperature" />
                  <Bar dataKey="MinTemp" fill="#82ca9d" name="Min Temperature" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className="custom-modal-overlay" onClick={closeModal}></div>
    </div>
  );
}

export default Modal;
