// import React, { useEffect, useState } from "react";
// import "./index.css";

// import { useNavigate } from "react-router-dom";

// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// import bginformation from "../../assets/bginformation.webp";
// import MaskotAksarama from "../../assets/MaskotAksarama.png";

// function Information() {

//   const navigate = useNavigate();

//   const [currentLevel, setCurrentLevel] =
//     useState(1);

//   useEffect(() => {

//     const savedLevel =
//       localStorage.getItem("aksaramaLevel");

//     if (savedLevel) {

//       setCurrentLevel(
//         parseInt(savedLevel)
//       );

//     }

//   }, []);

//   const levels = [

//     {
//       id: 1,
//       title: "Tahapan 1",
//       desc: "Belajar Gotong Royong",
//     },

//     {
//       id: 2,
//       title: "Tahapan 2",
//       desc: "Kenali Flora & Fauna",
//     },

//     {
//       id: 3,
//       title: "Tahapan 3",
//       desc: "Eksplor Budaya Indonesia",
//     },

//   ];

  

//   const handleStart = () => {

//     if (currentLevel === 1) {

//       navigate("/Tahapan1", { state: { from: 'tahapan 1' } });

//     }

//     else if (currentLevel === 2) {

//       navigate("/Tahapan2");

//     }

//     else {

//       navigate("/Tahapan3");

//     }

//   };

//   return (

//     <div
//       className="info-container"

//       style={{
//         backgroundImage:
//           `url(${bginformation})`,
//       }}
//     >

//       <Navbar />

//       <div className="info-wrapper">

//         <h2 className="adventure-text">
//           Lets start your adventure
//         </h2>

//         <img
//           src={MaskotAksarama}
//           alt=""
//           className="maskot"
//         />

//         <div className="hero-box">

//           <div className="hero-text">
//             Di sesi ini kamu dapat
//             menguji pemahamanmu
//           </div>

//           <div className="hero-text right">
//             mulai dari
//             tahapan 1.
//           </div>

//         </div>

//         <div className="level-container">

//           {levels.map((level) => {

//             const unlocked =
//               currentLevel >= level.id;

//             return (

//               <div
//                 className="level-row"
//                 key={level.id}
//               >

//                 <div
//                   className={
//                     unlocked
//                       ? "level-icon active"
//                       : "level-icon locked"
//                   }
//                 >

//                   {unlocked ? "▶" : "🔒"}

//                 </div>

//                 <div
//                   className={
//                     unlocked
//                       ? "level-card active-card"
//                       : "level-card"
//                   }
//                 >

//                   <h3>{level.title}</h3>

//                   <p>{level.desc}</p>

//                 </div>

//               </div>

//             );

//           })}

//         </div>

//         <button
//           className="start-btn"
//           onClick={handleStart}
//         >

//           Mulai Petualanganmu ➜

//         </button>

//       </div>

//       <Footer />

//     </div>

//   );

// }

// export default Information;
// ================= INFORMATION JSX =================

import React, { useEffect, useState } from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import bginformation from "../../assets/bginformation.webp";
import MaskotAksarama from "../../assets/MaskotAksarama.png";

function Information() {

  const navigate = useNavigate();

  const [selectedLevel, setSelectedLevel] =
    useState(1);

  const [mode, setMode] =
    useState("materi");

  useEffect(() => {

    const savedMode =
      localStorage.getItem("aksaramaMode");

    if (savedMode) {

      setMode(savedMode);

    }

  }, []);

  const levels = [

    {
      id: 1,
      title: "Tahapan 1",
      desc: "Belajar Gotong Royong",
    },

    {
      id: 2,
      title: "Tahapan 2",
      desc: "Kenali Flora & Fauna",
    },

    {
      id: 3,
      title: "Tahapan 3",
      desc: "Eksplor Budaya Indonesia",
    },

  ];

  const handleStart = () => {

    if (mode === "materi") {

      navigate(`/Tahapan${selectedLevel}`, {

        state: {
          from: `Tahapan ${selectedLevel}`,
        },

      });

    }

    else {

      navigate(`/Games${selectedLevel}`);

    }

  };

  return (

    <div
      className="info-container"

      style={{
        backgroundImage:
          `url(${bginformation})`,
      }}
    >

      <Navbar />

      <div className="mode-wrapper">

        <button
          className={
            mode === "materi"
              ? "mode-btn active-mode"
              : "mode-btn"
          }

          onClick={() => {

            setMode("materi");

            localStorage.setItem(
              "aksaramaMode",
              "materi"
            );

          }}
        >

          Information

        </button>

        <button
          className={
            mode === "games"
              ? "mode-btn active-mode"
              : "mode-btn"
          }

          onClick={() => {

            setMode("games");

            localStorage.setItem(
              "aksaramaMode",
              "games"
            );

          }}
        >

          Games

        </button>

      </div>

      <div className="info-wrapper">

        <h2 className="adventure-text">

          Lets start your adventure

        </h2>

        <img
          src={MaskotAksarama}
          alt=""
          className="maskot"
        />

        <div className="hero-box">

          <div className="hero-text">

            Pilih tahapan
            petualanganmu

          </div>

          <div className="hero-text right">

            lalu mulai
            perjalananmu

          </div>

        </div>

        <div className="level-container">

          {levels.map((level) => (

            <div
              className="level-row"
              key={level.id}

              onClick={() =>
                setSelectedLevel(level.id)
              }
            >

              <div

                className={
                  selectedLevel === level.id
                    ? "level-icon active"
                    : "level-icon"
                }
              >

                ▶

              </div>

              <div

                className={
                  selectedLevel === level.id
                    ? "level-card active-card"
                    : "level-card"
                }
              >

                <h3>{level.title}</h3>

                <p>{level.desc}</p>

              </div>

            </div>

          ))}

        </div>

        <button
          className="start-btn"
          onClick={handleStart}
        >

          Mulai Petualanganmu ➜

        </button>

      </div>

      <Footer />

    </div>

  );

}

export default Information;