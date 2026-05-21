import React from "react";
import "./index.css";

import { useNavigate, useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import MaskotAksarama from "../../assets/MaskotAksarama.png";

function InformationMateri() {

  const navigate = useNavigate();
  const location = useLocation();

  const { from } = location.state || {};

  return (

    <div
      className="materi-page"

    
    >

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <div className="hero-box">

          <div className="hero-text">

            Di sesi ini kamu dapat menguji
            pemahamanmu mulai dari {from}.

          </div>

          <img
            src={MaskotAksarama}
            alt="maskot"
            className="hero-img"
          />

        </div>

      </section>

      {/* ================= BAB 1 ================= */}

      <section className="materi-section">

        <h2>BAB 1</h2>

        <div className="materi-card">

          <p>
            Kebudayaan sejatinya adalah
            Operating System (OS) dalam
            kehidupan kita yang berjalan
            di latar belakang untuk
            menentukan cara kita berpikir,
            bertindak, dan berkarya.
          </p>

          <br />

          <p>
            Tanpa OS yang solid, perangkat
            secanggih apa pun akan mengalami
            lag; dan di Indonesia, source
            code utama dari sistem ini adalah
            nilai Ketuhanan serta Gotong
            Royong.
          </p>

          <br />

          <p>
            Ini adalah algoritma luhur yang
            memastikan setiap individu tidak
            hanya fokus pada self-interest,
            melainkan tetap sinkron dengan
            kepentingan bersama demi
            keharmonisan ekosistem sosial kita.
          </p>

        </div>

      </section>

      {/* ================= BAB 2 ================= */}

      <section className="materi-section">

        <h2>BAB 2</h2>

        <div className="materi-card">

          <p>
            Nenek moyang kita sebenarnya
            adalah desainer grafis pertama
            di dunia. Bayangkan motif Batik
            atau ukiran Toraja itu sebagai
            aset visual orisinal yang memiliki
            sistem grid yang presisi.
          </p>

          <br />

          <p>
            Pola geometris, stilasi flora,
            hingga bentuk fauna yang mereka
            buat adalah bukti bahwa mereka
            sudah menguasai komposisi visual
            jauh sebelum adanya perangkat
            lunak desain masa kini.
          </p>

          <br />

          <p>
            Memahami seni rupa daerah bukan
            lagi soal menghafal pola, tapi
            membedah bagaimana elemen visual
            tersebut disusun menjadi sebuah
            identitas budaya yang estetik.
          </p>

        </div>

      </section>

      {/* ================= BUTTON ================= */}

      <div className="button-wrapper">

        <button
          className="next-btn"
          onClick={() => navigate("/Information")}
        >
          Next
        </button>

      </div>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>

  );
}

export default InformationMateri;