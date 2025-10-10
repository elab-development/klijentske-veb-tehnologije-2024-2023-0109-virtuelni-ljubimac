import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import pozadina from "../images/pozadina.jpg";

// Primer slike ljubimaca za Featured Pets
import labrador from "../images/labrador.jpg";
import mops from "../images/mops.jpg";
import kuca from "../images/kuca.jpg";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* HERO sekcija */}
      <section className="hero">
        <img src={pozadina} alt="Pozadina" className="hero-image" />
        <div className="hero-text">
          <h1>Dobrodošli u svet virtuelnih ljubimaca!</h1>
          <p>Usvojite, hranite i igrajte se sa svojim digitalnim prijateljem.</p>
          <button onClick={() => navigate("/adopt")}>Usvoji ljubimca</button>
          <button
            className="cta-button"
            onClick={() => navigate("/adopt")}
          >
            Pogledaj sve ljubimce
          </button>
        </div>
      </section>

      {/* O nama */}
      <section className="about">
        <h2>O nama</h2>
        <p>
          Projekat "Virtuelni ljubimac" je edukativna i zabavna platforma
          gde korisnici mogu da usvoje pse, brinu o njima i uče odgovornost.
        </p>
      </section>

      {/* Featured Pets */}
      <section className="featured-pets">
        <h2>Naši ljubimci</h2>
        <div className="pets-grid">
          <div className="pet-card">
            <img src={labrador} alt="Ljubimac 1" />
            <h3>Max</h3>
            <p>Na čekanju za usvajanje</p>
          </div>
          <div className="pet-card">
            <img src={mops} alt="Ljubimac 2" />
            <h3>Luna</h3>
            <p>Na čekanju za usvajanje</p>
          </div>
          <div className="pet-card">
            <img src={kuca} alt="Ljubimac 3" />
            <h3>Charlie</h3>
            <p>Na čekanju za usvajanje</p>
          </div>
        </div>
      </section>

      {/* Testimonial / Citat */}
      <section className="testimonial">
        <h2>Šta kažu naši korisnici</h2>
        <blockquote>
          "Ne postoji verniji prijatelj od psa. Ovaj sajt mi je omogućio da
          brinem o ljubimcu čak i kad nisam kod kuće!" – Ana P.
        </blockquote>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Česta pitanja</h2>
        <div className="faq-item">
          <h3>Kako da usvojim ljubimca?</h3>
          <p>Kliknite na dugme "Usvoji ljubimca" i izaberite psa koji vam se sviđa.</p>
        </div>
        <div className="faq-item">
          <h3>Da li je ovo stvaran pas?</h3>
          <p>Ne, ovo su virtuelni psi koje možete hraniti i brinuti o njima digitalno.</p>
        </div>
        <div className="faq-item">
          <h3>Da li mogu imati više ljubimaca?</h3>
          <p>Da! Možete usvojiti više ljubimaca i pratiti njihove parametre gladi, sreće i energije.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

