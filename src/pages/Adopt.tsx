import React, { useEffect, useState, useContext } from "react";
import PetCard from "../components/PetCard";
import { v4 as uuidv4 } from "uuid";
import { getMultipleDogs } from "../api/dogApi";
import DogFacts from "../components/DogFacts";
import { useLocation, useNavigate } from "react-router-dom";
import { PetContext } from "../context/PetContext";
import { Pet } from "../models/Pet";

const Adopt: React.FC = () => {
  const context = useContext(PetContext);
  if (!context) throw new Error("PetContext must be used within PetProvider");

  const { pets, adoptedPets, setPets, adoptPet } = context;

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 6;

  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("name") || "";
  const [search, setSearch] = useState(initialSearch);

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

  // 🐶 Učitavanje pasa
  useEffect(() => {
    if (pets.length === 0) {
      getMultipleDogs(20)
        .then((data: string[]) => {
          const newPets: Pet[] = data.map(
            (dogUrl, index) =>
              new Pet(
                uuidv4(),
                petNames[index] || `Doggo ${index + 1}`,
                petAges[index] || 3,
                "Random",
                dogUrl
              )
          );
          setPets(newPets);
          setLoading(false);
        })
        .catch((err: unknown) => {
          console.error("Greška pri učitavanju pasa:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [pets, setPets]);

  // 🔁 Kad korisnik promeni pretragu, ažuriraj URL
  useEffect(() => {
    if (search) {
      navigate(`?name=${search}`);
    } else {
      navigate("/adopt");
    }
  }, [search, navigate]);

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);
  const totalPages = Math.ceil(filteredPets.length / petsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <div style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Usvojite psa</h2>

      {/* Statistika */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          backgroundColor: "#f0f8ff",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ color: "#333" }}>📈 Statistika napretka</h3>
        <p>Usvojeno ljubimaca: {adoptedPets.length}</p>
      </div>

      {/* Pretraga */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Pretraga po imenu..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          style={{
            padding: "0.5rem 1rem",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Lista pasa */}
      <div
        className="pets-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {currentPets.length === 0 && <p>Nema pasa sa tim imenom.</p>}

        {currentPets.map((pet) => (
          <div key={pet.id} style={{ textAlign: "center" }}>
            <PetCard pet={pet} />
            <button
              onClick={() => adoptPet(pet)}
              style={{
                marginTop: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#ff7f50",
                color: "white",
                cursor: "pointer",
              }}
            >
              Usvoji
            </button>
          </div>
        ))}
      </div>

      {/* Dugmad za paginaciju */}
      {filteredPets.length > petsPerPage && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            gap: "1rem",
          }}
        >
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#6495ed",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
            }}
          >
            ⬅️ Prethodna
          </button>

          <span>
            Strana {currentPage} od {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#6495ed",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            }}
          >
            Sledeća ➡️
          </button>
        </div>
      )}

      {/* Dodatni API */}
      <div style={{ marginTop: "2rem" }}>
        <DogFacts />
      </div>
    </div>
  );
};

export default Adopt;

