import React from "react";
import "./index.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


import zaza from "../../assets/zaza.png";
import abel from "../../assets/abel.webp";
import vici from "../../assets/vici.png";
import giza from "../../assets/giza.png";
import aca from "../../assets/aca.webp";
import Background from "../../components/Background";

function AboutUs() {
  return (
    <div
      className="about-page"
    >
      {/* NAVBAR */}
      <Navbar />
      <Background />

      {/* ABOUT */}
      <section className="about-section">

        <h1 className="about-title">
          About Us
        </h1>

        <div className="about-box top-box">

          <p>
            Kami membuat Website Aksarama
            karena terinspirasi dari salah
            satu website di internet yang
            menceritakan tentang edukasi SMP
            yang berisi materi PPKN untuk
            mempermudah anak SMP belajar
            lebih semangat lagi.
          </p>

        </div>

        <div className="about-box bottom-box">

          <p>
            Website Aksarama dibuat dengan
            tujuan untuk meningkatkan minat
            belajar generasi muda terhadap
            budaya Indonesia melalui media
            digital yang lebih modern dan
            interaktif.
          </p>

        </div>

      </section>

      {/* TEAM */}
      <section className="team-section">
   
        <h2>
          Developer Aksarama
        </h2>

        <div className="line"></div>

        

        <div className="team-container">

          <div className="team-card">

            <img
              src={zaza}
              alt="zaza"
            />

            <h3>
              Nashwa Zahia Arkana
            </h3>

            <p>
              Sebagai Hacker
            </p>

          </div>

          <div className="team-card">

            <img
              src={abel}
              alt="abel"
            />

            <h3>
              Anabella Earline A.
            </h3>

            <p>
              Sebagai Hipster
            </p>

          </div>

          <div className="team-card">

            <img
              src={vici}
              alt="vici"
            />

            <h3>
              Rihana Vici N.
            </h3>

            <p>
              Sebagai Hacker
            </p>

          </div>

          <div className="team-card">

            <img
              src={giza}
              alt="giza"
            />

            <h3>
              Giza Aura W.
            </h3>

            <p>
              Sebagai Hustler
            </p>

          </div>

          <div className="team-card">

            <img
              src={aca}
              alt="aca"
            />

            <h3>
              Marella Maden M.
            </h3>

            <p>
              Sebagai Hustler
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default AboutUs;