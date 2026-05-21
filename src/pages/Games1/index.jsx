// import React, { useState } from "react";
// import "./index.css";

// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// import MaskotAksarama from "../../assets/MaskotAksarama.png";

// function Games1() {

//   const [answers, setAnswers] =
//     useState({});

//   const questions = [

//     {
//       id: 1,

//       question:
//         "Dalam teks tersebut, kebudayaan diibaratkan sebagai Operating System (OS). Apa fungsi utama sistem operasi budaya ini dalam kehidupan kita?",

//       options: [

//         { text: "Sebagai hiasan agar perangkat terlihat lebih mahal", type: "A" },
//         { text: "Menentukan cara berpikir, bertindak, dan berkarya", type: "B" },
//         { text: "Menggantikan teknologi modern", type: "C" },
//         { text: "Mengatur harga perangkat digital", type: "D" },

//       ],

//     },

//     {
//       id: 2,

//       question:
//         "Indonesia memiliki source code utama berupa nilai utama. Apa dua nilai tersebut?",

//       options: [

//         { text: "Individualisme dan Kompetisi", type: "A" },

//         { text: "Modernisasi dan Digitalisasi", type: "B" },

//         { text: "Ketuhanan dan Gotong Royong", type: "C" },

//         { text: "Teknologi dan Ekonomi", type: "D" },

//       ],

//     },

//     {
//       id: 3,

//       question:
//         "Motif Batik dan ukiran Toraja membuktikan bahwa nenek moyang kita adalah...",

//       options: [

//         { text: "Pengguna komputer pertama", type: "A" },
//         { text: "Desainer grafis yang menguasai komposisi visual", type: "B" },
//         { text: "Penjual kain sukses", type: "C" },
//         { text: "Orang yang suka menghafal pola", type: "D" },

//       ],

//     },

//     {
//       id: 4,

//       question:
//         "Teknik pembuatan patung tradisional diibaratkan dengan proses digital yang disebut...",

//       options: [

//         { text: "Coding", type: "A" },
//         { text: "Sculpting", type: "B" },
//         { text: "Downloading", type: "C" },
//         { text: "Rendering", type: "D" },

//       ],

//     },

//     {
//       id: 5,

//       question:
//         "Mengapa keberagaman budaya disebut sebagai fitur multifungsi dan bukan error?",

//       options: [

//         { text: "Karena keberagaman adalah kesalahan sejarah", type: "A" },
//         { text: "Karena keberagaman saling melengkapi", type: "B" },
//         { text: "Karena hanya ada di era digital", type: "C" },
//         { text: "Karena membuat sulit bersatu", type: "D" },

//       ],

//     },

//   ];

//   const handleAnswer = (
//     questionId,
//     option
//   ) => {

//     setAnswers({

//       ...answers,

//       [questionId]: option,

//     });

//   };

//   const handleSubmit = () => {

//     alert(
//       "Jawaban berhasil dikirim!"
//     );

//   };

//   return (

//     <div
//       className="games-page"


//     >

//       <Navbar />

//       {/* HERO */}

//       <section className="hero-section">

//         <div className="hero-box">

//           <div className="hero-text">

//             Di sesi ini kamu dapat
//             menguji pemahamanmu
//             mulai dari tahapan 1.

//           </div>

//           <img
//             src={MaskotAksarama}
//             alt=""
//             className="hero-img"
//           />

//         </div>

//       </section>

//       {/* QUESTIONS */}

//       <section className="question-section">

//         {questions.map((item) => (

//           <div
//             className="question-card"
//             key={item.id}
//           >

//             <h2>

//               {item.id}. {item.question}

//             </h2>

//             <div className="option-container">

//               {item.options.map(
//                 (option, index) => (

//                   <button

//                     key={index}

//                     className={
//                       answers[item.id] ===
//                         option.type

//                         ? "option-btn active"

//                         : "option-btn"
//                     }

//                     onClick={() =>
//                       handleAnswer(
//                         item.id,
//                         option.type
//                       )
//                     }
//                   >

//                     {option.type}
//                     . {option.text}

//                   </button>

//                 )
//               )}

//             </div>

//           </div>

//         ))}

//       </section>

//       {/* SUBMIT */}

//       <div className="submit-wrapper">

//         <button
//           className="submit-btn"
//           onClick={handleSubmit}
//         >

//           Submit

//         </button>

//       </div>

//       <Footer />

//     </div>

//   );

// }

// export default Games1;
import React, { useState } from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import MaskotAksarama from "../../assets/MaskotAksarama.png";

function Games1() {

  const navigate = useNavigate();

  const [answers, setAnswers] =
    useState({});

  const questions = [

    {
      id: 1,

      question:
        "Dalam teks tersebut, kebudayaan diibaratkan sebagai Operating System (OS). Apa fungsi utama sistem operasi budaya ini dalam kehidupan kita?",

      options: [

        {
          text:
            "Sebagai hiasan agar perangkat terlihat lebih mahal",
          type: "A",
        },

        {
          text:
            "Menentukan cara berpikir, bertindak, dan berkarya",
          type: "B",
        },

        {
          text:
            "Menggantikan teknologi modern",
          type: "C",
        },

        {
          text:
            "Mengatur harga perangkat digital",
          type: "D",
        },

      ],

    },

    {
      id: 2,

      question:
        "Indonesia memiliki source code utama berupa nilai utama. Apa dua nilai tersebut?",

      options: [

        {
          text:
            "Individualisme dan Kompetisi",
          type: "A",
        },

        {
          text:
            "Modernisasi dan Digitalisasi",
          type: "B",
        },

        {
          text:
            "Ketuhanan dan Gotong Royong",
          type: "C",
        },

        {
          text:
            "Teknologi dan Ekonomi",
          type: "D",
        },

      ],

    },

  ];

  const handleAnswer = (
    questionId,
    option
  ) => {

    setAnswers({

      ...answers,

      [questionId]: option,

    });

  };

  const handleSubmit = () => {

    alert(
      "Jawaban berhasil dikirim!"
    );

    localStorage.setItem(
      "selectedTahapan",
      2
    );

    localStorage.setItem(
      "aksaramaMode",
      "materi"
    );

    navigate("/Information");

  };

  return (

    <div className="games-page">

      <Navbar />

      <section className="hero-section">

        <div className="hero-box">

          <div className="hero-text">

            Yuk uji pemahamanmu
            di Games Tahapan 1!

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
                      answers[item.id] ===
                      option.type

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

                    {option.type}.
                    {" "}
                    {option.text}

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

export default Games1;