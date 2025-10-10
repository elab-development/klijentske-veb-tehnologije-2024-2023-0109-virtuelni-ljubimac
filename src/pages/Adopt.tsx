import React, { useEffect, useState } from "react";

const Adopt: React.FC = () => {
  const [dogImage, setDogImage] = useState<string>("");

  const fetchDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setDogImage(data.message);
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Usvoji psa</h1>
      {dogImage && (
        <img
          src={dogImage}
          alt="Pas"
          style={{ width: "300px", borderRadius: "10px", margin: "10px" }}
        />
      )}
      <div>
        <button onClick={fetchDog} style={{ padding: "8px 15px" }}>
          Prikaži drugog psa
        </button>
      </div>
    </div>
  );
};

export default Adopt;
