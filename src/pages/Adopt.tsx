import React, { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import { Pet } from "../models/types";
import { v4 as uuidv4 } from "uuid";
import { getMultipleDogs } from "../api/dogApi";

const Adopt: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const petNames = [
    "Max", "Luna", "Charlie", "Bella", "Rocky", "Daisy",
    "Buddy", "Molly", "Cooper", "Lucy", "Bailey", "Sadie",
    "Jack", "Lola", "Toby", "Maggie", "Oscar", "Chloe",
    "Leo", "Ruby"
  ];

  const petAges = [
    3, 2, 5, 1, 4, 6,
    3, 2, 5, 1, 4, 6,
    2, 3, 4, 1, 5, 2,
    3, 4
  ];

  useEffect(() => {
    getMultipleDogs(20)
      .then((data: string[]) => {
        const newPets: Pet[] = data.map((dogUrl, index) => ({
          id: uuidv4(),
          name: petNames[index] || `Doggo ${index + 1}`,
          age: petAges[index] || 3,
          breed: "Random",
          image: dogUrl,
        }));
        setPets(newPets);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error("Greška pri učitavanju pasa:", err);
        setLoading(false);
      });
  }, []);

  const adoptPet = (petId: string) => {
    alert("Uspesno ste usvojili ljubimca! 🐶");
    setPets((prev) => prev.filter((p) => p.id !== petId));
  };

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Usvojite psa</h2>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Pretraga po imenu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      <div className="pets-grid" style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5rem"
      }}>
        {filteredPets.length === 0 && <p>Nema pasa sa tim imenom.</p>}
        {filteredPets.map((pet) => (
          <div key={pet.id} style={{ textAlign: "center" }}>
            <PetCard pet={pet} />
            <button
              onClick={() => adoptPet(pet.id)}
              style={{
                marginTop: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#ff7f50",
                color: "white",
                cursor: "pointer"
              }}
            >
              Usvoji
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adopt;


