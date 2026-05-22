import React, { useState } from "react";
import "./games3.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import MaskotAksarama from "../../assets/MaskotAksarama.png";

function Games3() {

  const [answers, setAnswers] = useState({});

  const questions = [

    {
      id: 1,

      question:
        "Berdasarkan teks tersebut, dimanakah lokasi 'nongkrong' atau tempat berkumpul masyarakat yang sedang populer di era digital saat ini?",

      options: [

        {
          text: "Server Discord dan kafe estetik",
          type: "A",
        },

        {
          text: "Laboratorium komputer di sekolah",
          type: "B",
        },

        {
          text: "Perpustakaan pusat dan sekolah",
          type: "C",
        },

        {
          text: "Pasar tradisional dan balai desa",
          type: "D",
        },

      ],

    },

    {
      id: 2,

      question:
        "Kapan penggunaan motif etnik atau elemen tradisi dianggap sebagai bentuk penghormatan (apresiasi)?",

      options: [

        {
          text: "Jika didasari oleh pemahaman yang mendalam tentang budaya tersebut",
          type: "A",
        },

        {
          text: "Jika hanya digunakan untuk mengikuti tren visual saja",
          type: "B",
        },

        {
          text: "Jika digunakan tanpa meminta izin pemilik budaya",
          type: "C",
        },

        {
          text: "Jika digunakan untuk mengejek kebudayaan lama",
          type: "D",
        },

      ],

    },

    {
      id: 3,

      question:
        "Teknologi apa yang disebutkan dalam teks dapat membuat candi atau tarian tradisional tersimpan secara abadi dan bisa diakses dari rumah?",

      options: [

        {
          text: "Mesin cetak dan radio",
          type: "A",
        },

        {
          text: "Kamera analog dan televisi",
          type: "B",
        },

        {
          text: "Internet dan digitalisasi budaya",
          type: "C",
        },

        {
          text: "VR (Virtual Reality) dan AR (Augmented Reality)",
          type: "D",
        },

      ],

    },

    {
      id: 4,

      question:
        'Seorang "Cultural Entrepreneur" atau pengusaha budaya harus memiliki kemampuan utama dalam hal apa?',

      options: [

        {
          text: "Membeli semua barang antik untuk disimpan sendiri",
          type: "A",
        },

        {
          text: "Menjual produk budaya dengan harga semurah mungkin",
          type: "B",
        },

        {
          text: "Mengemas nilai tradisi menjadi produk kreatif yang diminati pasar internasional",
          type: "C",
        },

        {
          text: "Memaksa orang luar negeri untuk memakai baju daerah",
          type: "D",
        },

      ],

    },

    {
      id: 5,

      question:
        "Apa kunci utama untuk menarik perhatian pembeli luar negeri saat melakukan presentasi (pitching) produk budaya lokal?",

      options: [

        {
          text: "Hanya menunjukkan foto produk tanpa penjelasan apapun",
          type: "A",
        },

        {
          text: "Menceritakan nilai, filosofi, dan cerita unik di balik produk budaya tersebut",
          type: "B",
        },

        {
          text: "Menggunakan bahasa asing yang sulit dimengerti",
          type: "C",
        },

        {
          text: "Meniru strategi promosi produk luar negeri sepenuhnya",
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

      <section className="hero-section">

        <div className="hero-box">

          <div className="hero-text">

            Di sesi ini kamu dapat
            menguji pemahamanmu
            mulai dari tahapan 6.

          </div>

          <img
            src={MaskotAksarama}
            alt=""
            className="hero-img"
          />

        </div>

      </section>

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

export default Games3;