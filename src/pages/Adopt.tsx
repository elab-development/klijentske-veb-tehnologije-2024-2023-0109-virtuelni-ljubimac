import React, { useEffect, useState } from "react";
import { getMultipleDogs } from "../api/dogApi";

const Adopt: React.FC = () => {
  const [dogs, setDogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMultipleDogs(6)
      .then((data) => {
        setDogs(data.map((dog) => dog.message));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Greška pri učitavanju pasa:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Učitavanje pasa...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Usvoji virtuelnog psa 🐶</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
        padding: "1rem"
      }}>
        {dogs.map((url, index) => (
          <div key={index}>
            <img src={url} alt="Pas" style={{ width: "100%", borderRadius: "10px" }} />
            <button style={{ marginTop: "0.5rem" }}>Usvoji</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adopt;

