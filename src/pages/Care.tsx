import React, { useState } from "react";

const Care: React.FC = () => {
  const [hunger, setHunger] = useState(50);
  const [energy, setEnergy] = useState(50);
  const [happiness, setHappiness] = useState(50);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Briga o ljubimcu</h1>
      <p>Glad: {hunger}</p>
      <p>Energija: {energy}</p>
      <p>Sreća: {happiness}</p>

      <button onClick={() => setHunger(Math.max(0, hunger - 10))}>
        Nahrani 🥩
      </button>
      <button onClick={() => setEnergy(Math.min(100, energy + 10))}>
        Odmori 😴
      </button>
      <button onClick={() => setHappiness(Math.min(100, happiness + 10))}>
        Igraj se 🎾
      </button>
    </div>
  );
};

export default Care;

