import React, { useState } from "react";
import "./index.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import MaskotAksarama from "../../assets/MaskotAksarama.png";
import { useLocation } from "react-router-dom";
import Background from "../../components/Background";

function Games1() {
  const location = useLocation();

  const { data } = location.state || {};
  const [userAnswers, setUserAnswers] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const questions = [

    {
      id: 1,

      question:
        "Dalam teks tersebut, kebudayaan diibaratkan sebagai Operating System (OS). Apa fungsi utama sistem operasi budaya ini dalam kehidupan kita?",

      options: [

        { text: "Sebagai hiasan agar perangkat terlihat lebih mahal", type: "A" },
        { text: "Menentukan cara berpikir, bertindak, dan berkarya", type: "B" },
        { text: "Menggantikan teknologi modern", type: "C" },
        { text: "Mengatur harga perangkat digital", type: "D" },

      ],

    },

    {
      id: 2,

      question:
        "Indonesia memiliki source code utama berupa nilai utama. Apa dua nilai tersebut?",

      options: [

        { text: "Individualisme dan Kompetisi", type: "A" },

        { text: "Modernisasi dan Digitalisasi", type: "B" },

        { text: "Ketuhanan dan Gotong Royong", type: "C" },

        { text: "Teknologi dan Ekonomi", type: "D" },

      ],

    },

    {
      id: 3,

      question:
        "Motif Batik dan ukiran Toraja membuktikan bahwa nenek moyang kita adalah...",

      options: [

        { text: "Pengguna komputer pertama", type: "A" },
        { text: "Desainer grafis yang menguasai komposisi visual", type: "B" },
        { text: "Penjual kain sukses", type: "C" },
        { text: "Orang yang suka menghafal pola", type: "D" },

      ],

    },

    {
      id: 4,

      question:
        "Teknik pembuatan patung tradisional diibaratkan dengan proses digital yang disebut...",

      options: [

        { text: "Coding", type: "A" },
        { text: "Sculpting", type: "B" },
        { text: "Downloading", type: "C" },
        { text: "Rendering", type: "D" },

      ],

    },

    {
      id: 5,

      question:
        "Mengapa keberagaman budaya disebut sebagai fitur multifungsi dan bukan error?",

      options: [

        { text: "Karena keberagaman adalah kesalahan sejarah", type: "A" },
        { text: "Karena keberagaman saling melengkapi", type: "B" },
        { text: "Karena hanya ada di era digital", type: "C" },
        { text: "Karena membuat sulit bersatu", type: "D" },

      ],

    },

  ];

  const handleAnswer = (
    questionId,
    option
  ) => {

    setUserAnswers({

      ...userAnswers,

      [questionId]: option,

    });

  };

  console.log("Data yang diterima di Games1 dari halaman Tahapan:", data);
  const handleSubmit = () => {

    console.log("Jawaban yang dipilih:", userAnswers);

    const wrongAnswers = data.filter(
      (item) => userAnswers[item.id] !== item.answer
    );

    setWrongAnswers(wrongAnswers);
    console.log("Jawaban yang salah:", wrongAnswers);


  };

  let optionClass = "option-btn";

  return (

    <div className="games-page">

      <Navbar />
      <Background />

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-box">

          <div className="hero-text">

            Di sesi ini kamu dapat
            menguji pemahamanmu
            mulai dari tahapan 1.

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

        {data?.map((item, index) => (

          <div
            className="question-card"
            key={item.id}
          >

            <h2>

              {index + 1}. {item.question}

            </h2>

            <div className="option-container">

              {item.option.map(
                (option, index) => (

                  <button

                    key={index}

                    className={
                      userAnswers[item.id] === option.type // Jika jawaban yg dipilih
                        ? "option-btn active"
                        : wrongAnswers.some(
                            (wrong) =>
                              wrong.id === item.id &&
                              wrong.answer === option.type
                          )
                        ? "option-btn wrong"
                        : "option-btn"
                    }

                    onClick={() =>
                      handleAnswer(
                        item.id,
                        option.type
                      )
                    }
                  >

                    {option.type}
                    . {option.text}

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

export default Games1;