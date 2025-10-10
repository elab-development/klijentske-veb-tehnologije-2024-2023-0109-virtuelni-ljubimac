import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Ulogovani ste kao ${email}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Prijava</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "5px", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "5px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 15px" }}>
          Uloguj se
        </button>
      </form>
    </div>
  );
};

export default Login;

