import React from "react";
import "./index.css";

import {
  useNavigate,
  useLocation
} from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MaskotAksarama from "../../assets/MaskotAksarama.png";
import { getGamesByChapterId } from "../../service/tahapan1";
import Background from "../../components/Background";

function Tahapan() {

  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};
  // const [gamesData, setGamesData] = React.useState([]);
  // console.log("Data yang diterima di Tahapan dari halaman information:", data);

  return (

    <div className="materi-page">

      <Navbar />
      <Background />

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-box">

          <div className="hero-text">

            Di sesi ini kamu dapat
            mempelajari materi dari tahapan { }
            {data?.id}.

          </div>

          <img
            src={MaskotAksarama}
            alt=""
            className="hero-img"
          />

        </div>

      </section>

      {/* BAB 1 */}

      <section className="materi-section">

        <h2>BAB 1</h2>
        <div className="materi-card">
          <p>

            {data?.materi_1}

          </p>

          <br />

        </div>

      </section>

      {/* BAB 2 */}

      <section className="materi-section">

        <h2>BAB 2</h2>

        <div className="materi-card">

          <p>{data?.materi_2}</p>

        </div>

      </section>

      {/* BUTTON */}

      <div className="btn-group">

        <button

          className="next-btn"

          onClick={() => {

            localStorage.setItem(
              "aksaramaMode",
              "materi"
            );

            navigate("/Information");

          }}
        >

          Lanjut Membaca

        </button>

        <button
          className="game-btn"
          onClick={async () => {
            const gamesData = await getGamesByChapterId(data?.id);
            navigate("/Games1", { state: { data: gamesData } });
          }}
        >
          Mulai Melatih
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default Tahapan;