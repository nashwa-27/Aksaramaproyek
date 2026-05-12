import React, { useState } from "react";
import "./index.css";

import { Link } from "react-router-dom";

import Aksarama from "../../assets/Aksarama.png";
import bgkosong from "../../assets/bgkosong.png";
import MaskotAksarama from "../../assets/MaskotAksarama.png";

import foto1 from "../../assets/foto1.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";

import funfact1 from "../../assets/funfact1.png";
import funfact2 from "../../assets/funfact2.png";
import funfact3 from "../../assets/funfact3.png";

import movie1 from "../../assets/movie1.png";
import movie2 from "../../assets/movie2.png";
import movie3 from "../../assets/movie3.png";
import movie4 from "../../assets/movie4.png";
import movie5 from "../../assets/movie5.png";
import movie6 from "../../assets/movie6.png";

import profile from "../../assets/profile.png";

function Home() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") {
      alert("Pesan masih kosong!");
      return;
    }

    alert("Feedback berhasil dikirim ✨");
    setMessage("");
  };

  const movies = [
    {
      title: "Gotong Royong",
      image: movie1,
      link: "https://youtu.be/Gtnjons7tkU",
    },

    {
      title: "Sebaran Flora dan Fauna",
      image: movie2,
      link: "https://youtu.be/1G8cAqwRYR8",
    },

    {
      title: "Keberagaman Indonesia",
      image: movie3,
      link: "https://youtu.be/Y9w9vxCJLkU",
    },

    {
      title: "Aneka Ragam Hias",
      image: movie4,
      link: "https://youtu.be/eq_hS1Ung0U",
    },

    {
      title: "Teknik Pembuatan Patung",
      image: movie5,
      link: "https://youtu.be/o-MdksQwhso",
    },

    {
      title: "Norma Dalam Kehidupan",
      image: movie6,
      link: "https://youtu.be/kUMRJ0dz_J4",
    },
  ];

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${bgkosong})`,
      }}
    >

      {/* NAVBAR */}
      <nav className="navbar">

        <img
          src={Aksarama}
          alt="Aksarama"
          className="logo"
        />

        <div className="nav-links">

          <a href="#home">Home</a>

          <Link to="/about">
            About Us
          </Link>

          <a href="#movie">
            Movie
          </a>

          <Link to="/information">
            Information
          </Link>

          <a href="#feedback">
            Feedback
          </a>

        </div>

        <Link
          to="/login"
          className="login-btn"
        >
          Login

          <div className="login-icon">
            →
          </div>

        </Link>

      </nav>

      {/* HERO */}
      <section
        className="hero"
        id="home"
      >

        <h1>
          Rahayu Kalbu
        </h1>

        <div className="hero-decor">

          <span>✦</span>
          <span>👋🏻</span>
          <span>⌒</span>

        </div>

        <img
          src={MaskotAksarama}
          alt="Maskot"
          className="maskot"
        />

        <div className="hero-box">

          <div>
            <h3>Selamat !!!!!</h3>

            <p>
              kamu terpilih untuk membangun
              kembali pemahaman bangsa
              tentang jati diri kita.
            </p>
          </div>

          <div>
            <p>
              Selesaikan 3 tahapan di
              setiap level untuk membuka
              kuis kenaikan tingkat
            </p>
          </div>

        </div>

        <p className="hero-small">
          Lets started together !
        </p>

        <button className="start-btn">
          Get Started →
        </button>

      </section>

      {/* FOTO */}
      <section className="foto-section">

        <img src={foto1} alt="" />
        <img src={foto2} alt="" />
        <img src={foto3} alt="" />

      </section>

      {/* WHY */}
      <section
        className="why-section"
        id="about"
      >

        <h2>
          Why choose Aksarama?
        </h2>

        <div className="why-grid">

          <div>
            <h3>Easy to Use</h3>

            <p>
              Ubah materi rumit jadi visual
              simpel yang instan.
            </p>
          </div>

          <div>
            <h3>Safe & Eternal</h3>

            <p>
              Simpan warisan leluhur
              secara digital agar abadi.
            </p>
          </div>

          <div>
            <h3>Versatile Hub</h3>

            <p>
              Wadah kreatif untuk belajar
              budaya hingga bangun brand.
            </p>
          </div>

        </div>

      </section>

      {/* FUNFACT */}
      <section className="funfact-section">

        <h2>Our FunFact</h2>

        <h3>— Tahukah Kamu ?</h3>

        <p className="funfact-text">
          Di balik kekayaan budaya Indonesia,
          terdapat banyak fakta unik dan
          menarik yang sering terlewatkan.
        </p>

        <div className="funfact-grid">

          <img src={funfact1} alt="" />
          <img src={funfact2} alt="" />
          <img src={funfact3} alt="" />

        </div>

      </section>

      {/* MOVIE */}
      <section
        className="movie-section"
        id="movie"
      >

        <h2>Movie</h2>

        <div className="movie-grid">

          {movies.map((movie, index) => (

            <div
              className="movie-card"
              key={index}
              onClick={() =>
                window.open(
                  movie.link,
                  "_blank"
                )
              }
            >

              <img
                src={movie.image}
                alt=""
              />

              <h3>{movie.title}</h3>

            </div>

          ))}

        </div>

      </section>

      {/* FEEDBACK */}
      <section
        className="feedback-section"
        id="feedback"
      >

        <h4>Hubungi Kami</h4>

        <h2>Feedback</h2>

        <div className="feedback-box">

          <textarea
            placeholder="Ketik pesan..."

            value={message}

            onChange={(e) =>
              setMessage(e.target.value)
            }

            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSend();
              }
            }}
          />

          <button onClick={handleSend}>
            Send !
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-container">

          {/* kiri */}
          <div>

            <h3>Navigation</h3>

            <a href="#home">Home</a>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/information">
              Information
            </Link>

            <a href="#movie">Movie</a>

            <a href="#feedback">
              Feedback
            </a>

          </div>

          {/* tengah */}
          <div className="footer-center">

            <img
              src={profile}
              alt=""
            />

            <h1>AKSARAMA</h1>

            <a
              href="https://www.instagram.com/aksarama.web?igsh=MTRldTZrbHN3cHV2ZA=="
              target="_blank"
              rel="noreferrer"
              className="ig-btn"
            >
              Instagram
            </a>

            <div className="footer-links">

              <Link to="/about">
                About
              </Link>

              <Link to="/contact">
                Contact Us
              </Link>

              <a href="#feedback">
                Feedback
              </a>

            </div>

          </div>

          {/* kanan */}
          <div>

            <h3>Get in Touch</h3>

            <p>
              +62 895-4230-12443
            </p>

            <p>
              kelompok6@gmail.com
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;