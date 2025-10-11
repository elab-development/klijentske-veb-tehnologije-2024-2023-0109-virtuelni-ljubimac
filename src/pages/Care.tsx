import React, { useState } from "react";
import happyDog from "../images/happydog.jpg";
import neutralDog from "../images/kk.jpg";
import sadDog from "../images/sadDog.jpg";
import "./Care.css";

const Care: React.FC = () => {
  const [hunger, setHunger] = useState(50);
  const [energy, setEnergy] = useState(50);
  const [happiness, setHappiness] = useState(50);

  const getDogImage = () => {
    if (hunger <30 && happiness > 70 && energy > 70) return happyDog;
    if (hunger >70 || happiness < 30 || energy < 30) return sadDog;
    return neutralDog;
  };

  return (
    <div className="care-container">
      <h1>Briga o ljubimcu</h1>
      <img src={getDogImage()} alt="Ljubimac" className="dog-image" />

      <div className="status-bar">
        <label>Glad</label>
        <div className="bar">
          <div className="fill" style={{ width: `${hunger}%`, backgroundColor: "#ff4d4d" }}></div>
        </div>

        <label>Energija</label>
        <div className="bar">
          <div className="fill" style={{ width: `${energy}%`, backgroundColor: "#4da6ff" }}></div>
        </div>

        <label>Sreća</label>
        <div className="bar">
          <div className="fill" style={{ width: `${happiness}%`, backgroundColor: "#4dff88" }}></div>
        </div>
      </div>

      <div className="buttons">
        <button onClick={() => setHunger(Math.max(0, hunger - 10))}>Nahrani 🥩</button>
        <button onClick={() => setEnergy(Math.min(100, energy + 10))}>Odmah Odmori 😴</button>
        <button onClick={() => setHappiness(Math.min(100, happiness + 10))}>Igraj se 🎾</button>
        <div style={{ marginTop: "2rem" }}>
      <h3>📊 Napredak ljubimca</h3>
      <div style={{
        width: "300px",
        backgroundColor: "#ddd",
        borderRadius: "10px",
        overflow: "hidden",
        margin: "0 auto"
      }}>
        <div style={{
          width: `${happiness}%`,
          height: "20px",
          backgroundColor: "#4CAF50"
        }} />
      </div>
      <p>Raspolozenje:: {happiness}%</p>
    </div>
      </div>
    </div>
 
  );


};

export default Care;


