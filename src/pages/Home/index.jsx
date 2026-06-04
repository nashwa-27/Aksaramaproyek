import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

// import Aksarama from "../../assets/Aksarama.webp";
// import bgkosong from "../../assets/bgkosong.png";
import MaskotAksarama from "../../assets/MaskotAksarama.png";

import Foto3 from "../../assets/Foto3.webp";
import fotobatik from "../../assets/fotobatik.jpg";
import fotokendang from "../../assets/fotokendang.jpg"; 
import fotosmp from "../../assets/fotosmp.jpg";

import FunFact1 from "../../assets/FunFact1.jpg";
import FunFact2 from "../../assets/FunFact2.jpg";
import FunFact3 from "../../assets/FunFact3.jpg";
import FunFact4 from "../../assets/FunFact4.jpg";

import movie1 from "../../assets/movie1.png";
import movie2 from "../../assets/movie2.png";
import movie3 from "../../assets/movie3.png";
import movie4 from "../../assets/movie4.png";
import movie5 from "../../assets/movie5.png";
import movie6 from "../../assets/movie6.png";

import profile from "../../assets/profile.png";
import instagram from "../../assets/instagram.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Background from "../../components/Background";

import { testInsertFeedback } from "../../service/feedback";

function Home() {
  const [message, setMessage] = React.useState("");
  const userData = localStorage.getItem("userData"); // string 
  console.log("Data User yang Login:", userData);
  const userEmail = userData ? JSON.parse(userData).email : "";
  console.log("Data user JSON:", JSON.parse(userData));
  // const navigate = useNavigate();
  return (
    <div
      className="home"
      // style={{
      //   backgroundImage: `url(${bgkosong})`,
      // }}
    >
      <Background />
      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="hero" id="home">
        <h1>Rahayu Kalbu</h1>

        <div className="hero-box">
          <div className="hero-text">
            <h2>Selamat !!!!!</h2>

            <p>
              kamu terpilih untuk membangun
              kembali pemahaman bangsa
              tentang jati diri kita.
            </p>
          </div>

          <img
            src={MaskotAksarama}
            alt="maskot"
            className="maskot"
          />

          <div className="hero-text right">
            <p>
              Selesaikan 3 tahapan di
              setiap level untuk membuka
              kuis kenaikan tingkat
            </p>
          </div>
        </div>

            <div className="start-section">

        <h3 className="start-title">
          Get Started
        </h3>

        <div className="start-line"></div>

        <p className="start-desc">
          Mari menjelajahi budaya Indonesia
          melalui materi interaktif, fakta unik,
          dan tantangan seru di setiap level.
        </p>

      </div>
      </section>

      {/* ================= FOTO ================= */}

      <section className="gallery">
        <img src={fotobatik} alt="" />
        <img src={fotokendang} alt="" />
        <img src={fotosmp} alt="" />
      </section>

      {/* ================= WHY ================= */}

      <section className="why-section">
        <h2>Why Choose Aksarama?</h2>

        <div className="title-line"></div>

        <div className="why-container">
          <div className="why-card">
            <h3>Easy to Use</h3>

            <p>
              Ubah materi rumit jadi visual
              simpel yang mudah dipahami.
            </p>
          </div>

          <div className="why-card">
            <h3>Safe & Eternal</h3>

            <p>
              Simpan budaya secara digital
              agar tetap lestari.
            </p>
          </div>

          <div className="why-card">
            <h3>Versatile Hub</h3>

            <p>
              Belajar budaya jadi lebih
              modern dan menyenangkan.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FUNFACT ================= */}

      <section className="funfact-section">
        <h2>Our FunFact</h2>

        <div className="title-line"></div>

     <div className="funfact-box">

      <p className="funfact-title">
        ─ Tahukah Kamu ?
      </p>

      <p className="funfact-desc">

        Di balik kekayaan budaya Indonesia, terdapat banyak fakta unik
        dan menarik yang sering terlewatkan. Setiap tradisi menyimpan
        cerita dan makna yang layak untuk kita kenali lebih dalam.

      </p>

    </div>
        <div className="funfact-container">
          <img src={FunFact1} alt="" />
          <img src={FunFact2} alt="" />
          <img src={FunFact3} alt="" />
          <img src={FunFact4} alt="" />
        </div>
      </section>

      {/* ================= MOVIE ================= */}

      <section
        className="movie-section"
        id="movie"
      >
        <h2>Movie</h2>

        <div className="title-line"></div>

        <div className="movie-container">
          <div className="movie-card">
            <a href ="https://www.youtube.com/watch?si=3WxeOClzuD0uu0dQ&v=Gtnjons7tkU&feature=youtu.be" target="_blank" rel="noreferrer">
              <img src={movie1} alt="" />
              <p>PKN - Gotong Royong | Aplikasi untuk belajar materi gotong rotong</p>
            </a>
          </div>

          <div className="movie-card">
            <a href = "https://www.youtube.com/watch?si=4KfqR4onY3EorMo4&v=1G8cAqwRYR8&feature=youtu.be" target="_blank" rel="noreferrer">
            <img src={movie2} alt="" />
            <p>Sebaram Flora dan Fauna di Indonesia 
            Mengenai Aneka Ragam Hias dari Berbagai Daerah di Indonesia</p>
            </a>
          </div>


          <div className="movie-card">
            <a href = "https://youtu.be/Y9w9vxCJLkU?si=k2vVfwE5sO4attT1" target="_blank" rel="noreferrer">
              <img src={movie3} alt="" />
              <p>Keberagaman Suku dan Budaya di Indonesia | PKN | SayaBisa</p>
            </a>
          </div>

          <div className="movie-card">
            <a href = "https://www.youtube.com/watch?si=iF8IcKxzt3y2mEvi&v=eq_hS1Ung0U&feature=youtu.be" target="_blank" rel="noreferrer">
              <img src={movie4} alt="" />
              <p>Mengenal Aneka Ragam Hiasan yang ada di indonesia</p>
            </a>
          </div>

          <div className="movie-card">
            <a href = "https://www.youtube.com/watch?si=Dcn0-CjLavsHfgi7&v=o-MdksQwhso&feature=youtu.be" target="_blank" rel="noreferrer">
              <img src={movie5} alt="" />
              <p>Mengenal Cara membuat patung kita bisa belajar lewat video ini</p>
            </a>
          </div>

          <div className="movie-card">
            <a href = "https://www.youtube.com/watch?v=kUMRJ0dz_J4" target="_blank" rel="noreferrer">
              <img src={movie6} alt="" />
              <p>Sebaram Flora dan Fauna di Indonesia 
              Mengenai Aneka Ragam Hias dari Berbagai Daerah di Indonesia</p>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FEEDBACK ================= */}

      <section
        className="feedback-section"
        id="feedback"
      >
        <h2>Feedback</h2>

        <div className="title-line"></div>

        <textarea
          placeholder="Ketik pesan..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="send-btn"
          onClick={() => testInsertFeedback(userEmail, message, setMessage)}
          >
          Send
        
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

export default Home;