import React, { useState } from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

import MaskotAksarama from "../../assets/MaskotAksarama.png";
// import Aksarama from "../../assets/Aksarama.png";

import movie1 from "../../assets/movie1.png";
import movie2 from "../../assets/movie2.png";
import movie3 from "../../assets/movie3.png";
import movie4 from "../../assets/movie4.png";
import movie5 from "../../assets/movie5.png";
import movie6 from "../../assets/movie6.png";

function Home() {

  const navigate = useNavigate();

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

    <div className="home-container">

      {/* NAVBAR */}
      <nav className="navbar">

        <h1 className="logo">
          AKSARAMA
        </h1>

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <button
            className="nav-btn"

            onClick={() =>
              navigate("/information")
            }
          >
            Information
          </button>

          <a href="#movie">
            Movie
          </a>

          <a href="#feedback">
            Feedback
          </a>

        </div>

      </nav>

      {/* HERO */}
      <section
        className="hero"
        id="home"
      >

        <h1>
          Rahayu Kalbu 👋🏻
        </h1>

        <img
          src={MaskotAksarama}
          alt="Maskot"
          className="maskot"
        />

        <div className="hero-box">

          <div>
            Selamat!!!!! <br />

            kamu terpilih untuk membangun kembali
            pemahaman bangsa tentang jati diri kita.
          </div>

          <div>
            Selesaikan 3 tahapan di setiap level
            untuk membuka kuis kenaikan tingkat
          </div>

        </div>

      </section>

      {/* FLOATING */}
      <section className="floating-section">

        <div className="top-card"></div>
        <div className="top-card"></div>
        <div className="top-card"></div>

      </section>

      {/* ABOUT */}
      <section id="about">

        <h2>
          Why choose Aksarama?
        </h2>

        <div className="why-grid">

          <div>

            <h3>Easy to Use</h3>

            <p>
              Ubah materi rumit jadi visual simpel.
            </p>

          </div>

          <div>

            <h3>Safe & Eternal</h3>

            <p>
              Simpan warisan leluhur secara digital.
            </p>

          </div>

          <div>

            <h3>Versatile Hub</h3>

            <p>
              Wadah kreatif untuk belajar budaya.
            </p>

          </div>

        </div>

      </section>

      {/* MOVIE */}
      <section id="movie">

        <h2>Movie</h2>

        <div className="movie-grid">

          {movies.map((movie, index) => (

            <div
              className="movie-card"
              key={index}

              onClick={() =>
                window.open(movie.link, "_blank")
              }
            >

              <img
                src={movie.image}
                alt={movie.title}
              />

              <h3>
                {movie.title}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* FEEDBACK */}
      <section id="feedback">

        <h2>Feedback</h2>

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

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">

          <img
            src={MaskotAksarama}
            alt="Logo"
          />

          <h1>AKSARAMA</h1>

        </div>

        <div className="socials">

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>

          <a href="mailto:kelompok6@gmail.com">
            Email
          </a>

          <a
            href="https://wa.me/62895423012443"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

        </div>

      </footer>

    </div>

  );
}

export default Home;