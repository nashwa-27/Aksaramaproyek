import React, { useState } from "react";
import "./games2.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import MaskotAksarama from "../../assets/MaskotAksarama.png";

function Games2() {

  const [answers, setAnswers] = useState({});

  const questions = [

    {
      id: 1,

      question:
        'Kalau adat istiadat diibaratkan sebagai "Community Guidelines" di media sosial, apa fungsi utamanya dalam kehidupan nyata?',

      options: [

        {
          text: "Supaya warga takut dan tidak berani keluar rumah.",
          type: "A",
        },

        {
          text: 'Menjaga pergaulan warga tetap damai dan bebas dari perilaku "toxic".',
          type: "B",
        },

        {
          text: "Sebagai cara untuk pamer aturan kuno kepada turis.",
          type: "C",
        },

        {
          text: "Membatasi jumlah teman yang boleh dimiliki di desa.",
          type: "D",
        },

      ],

    },

    {
      id: 2,

      question:
        'Alat musik "Idiofon" itu unik karena sumber bunyinya bukan dari senar atau kulit, melainkan dari...',

      options: [

        {
          text: "Tiupan angin yang kencang.",
          type: "A",
        },

        {
          text: "Getaran dari badan alat musik itu sendiri saat dipukul/digoyang.",
          type: "B",
        },

        {
          text: "Baterai atau listrik yang dicolokkan.",
          type: "C",
        },

        {
          text: "Suara manusia yang direkam.",
          type: "D",
        },

      ],

    },

    {
      id: 3,

      question:
        'Di dalam teks, memainkan musik tradisional disebut sebagai cara "tuning" frekuensi. Apa maksudnya?',

      options: [

        {
          text: "Mencari sinyal radio yang hilang di tengah hutan.",
          type: "A",
        },

        {
          text: "Memperbaiki alat musik yang suaranya sedang sumbang.",
          type: "B",
        },

        {
          text: "Menyelaraskan nilai masa lalu agar pas dengan gaya hidup masa kini.",
          type: "C",
        },

        {
          text: "Mengubah musik tradisional menjadi lagu luar negeri.",
          type: "D",
        },

      ],

    },

    {
      id: 4,

      question:
        'Upacara adat seperti Ngaben atau Rambu Solo diibaratkan sebagai momen "Level Up" dalam game karena...',

      options: [

        {
          text: "Hanya boleh dilakukan oleh pemain profesional.",
          type: "A",
        },

        {
          text: "Menjadi penanda perubahan tahap kehidupan seseorang.",
          type: "B",
        },

        {
          text: "Dilakukan sambil bermain game online.",
          type: "C",
        },

        {
          text: "Memiliki hadiah berupa uang virtual.",
          type: "D",
        },

      ],

    },

    {
      id: 5,

      question:
        'Apa gunanya membuat "Musical Remix" (gabungan musik tradisional dan modern)?',

      options: [

        {
          text: "Agar musik daerah lebih mudah diterima generasi muda.",
          type: "A",
        },

        {
          text: "Supaya kita perlahan-lahan lupa dengan lagu asli daerah tersebut.",
          type: "B",
        },

        {
          text: "Agar semua lagu tradisional terdengar sama.",
          type: "C",
        },

        {
          text: "Menghapus unsur budaya lokal sepenuhnya.",
          type: "D",
        },

      ],

    },

  ];

  const handleAnswer = (questionId, option) => {

    setAnswers({

      ...answers,

      [questionId]: option,

    });

  };

  const handleSubmit = () => {

    alert("Jawaban berhasil dikirim!");

  };

  return (

    <div className="games-page">

      <Navbar />

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-box">

          <div className="hero-text">

            Di sesi ini kamu dapat
            menguji pemahamanmu
            mulai dari tahapan 5.

          </div>

          <img
            src={MaskotAksarama}
            alt=""
            className="hero-img"
          />

        </div>

      </section>

      {/* QUESTIONS */}

      <section className="question-section">

        {questions.map((item) => (

          <div
            className="question-card"
            key={item.id}
          >

            <h2>

              {item.id}. {item.question}

            </h2>

            <div className="option-container">

              {item.options.map(
                (option, index) => (

                  <button

                    key={index}

                    className={
                      answers[item.id] === option.type
                        ? "option-btn active"
                        : "option-btn"
                    }

                    onClick={() =>
                      handleAnswer(
                        item.id,
                        option.type
                      )
                    }
                  >

                    {option.type}. {option.text}

                  </button>

                )
              )}

            </div>

          </div>

        ))}

      </section>

      {/* SUBMIT */}

      <div className="submit-wrapper">

        <button
          className="submit-btn"
          onClick={handleSubmit}
        >

          Submit

        </button>

      </div>

      <Footer />

    </div>

  );

}

export default Games2;