// src/components/DogFacts.tsx
import React, { useEffect, useState } from "react";

const DogFacts: React.FC = () => {
  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Primer sa fiksnom listom činjenica
    const dogFacts = [
      "Psi imaju odličan njuh – 10.000 do 100.000 puta bolji od ljudi.",
      "Psi mogu da razumeju do 250 reči i gestova.",
      "Neki psi mogu da detektuju bolesti poput raka ili dijabetesa.",
      "Pseća usta sadrže oko 1.700 bakterija.",
      "Psi spavaju oko 12-14 sati dnevno, zavisno od rase i starosti.",
    ];

    // Simulacija učitavanja sa timeoutom
    setTimeout(() => {
      setFacts(dogFacts);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Učitavanje činjenica...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h3>Zanimljive činjenice o psima</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {facts.map((fact, index) => (
          <li key={index} style={{ margin: "0.5rem 0", fontStyle: "italic" }}>
            🐾 {fact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogFacts;

