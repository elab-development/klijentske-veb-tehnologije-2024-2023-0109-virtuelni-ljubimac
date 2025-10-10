import React from "react";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        background: "linear-gradient(to bottom right, #a8edea, #fed6e3)",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#4B0082", fontSize: "3rem" }}>🐾 PetAdopt</h1>
      <p style={{ fontSize: "1.3rem", color: "#333", maxWidth: "600px", margin: "20px auto" }}>
        Dobrodošli u <b>PetAdopt</b>! Ovde možete usvojiti svog virtuelnog ljubimca —
        psa, mačku ili lisicu 🐶🐱🦊
      </p>
      <img
        src="https://placedog.net/400/300"
        alt="Dog"
        style={{
          borderRadius: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          marginTop: "20px",
          width: "400px",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <div style={{ marginTop: "40px" }}>
        <button
          style={{
            backgroundColor: "#6c63ff",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "1rem",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#5548d9")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#6c63ff")
          }
        >
          Usvoji ljubimca ❤️
        </button>
      </div>
    </div>
  );
}

export default App;

