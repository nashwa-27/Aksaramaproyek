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

  const [currentLevel, setCurrentLevel] =
    useState(1);

  const [mode, setMode] =
    useState("materi");

  useEffect(() => {

    const savedLevel =
      localStorage.getItem("aksaramaLevel");

    const savedMode =
      localStorage.getItem("aksaramaMode");

    if (savedLevel) {
      setCurrentLevel(parseInt(savedLevel));
    }

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

      navigate(`/Tahapan${currentLevel}`);

    }

    else {

      navigate(`/Games${currentLevel}`);

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
            Di sesi ini kamu dapat
            menguji pemahamanmu
          </div>

          <div className="hero-text right">
            mulai dari
            tahapan {currentLevel}.
          </div>

        </div>

        {/* TAB */}

        <div className="tab-wrapper">

          <button
            className={
              mode === "materi"
              ? "tab-btn active-tab"
              : "tab-btn"
            }

            onClick={() => {

              setMode("materi");

              localStorage.setItem(
                "aksaramaMode",
                "materi"
              );

            }}
          >

            Materi

          </button>

          <button
            className={
              mode === "games"
              ? "tab-btn active-tab"
              : "tab-btn"
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

        {/* LEVEL */}

        <div className="level-container">

          {levels.map((level) => {

            const unlocked =
              currentLevel >= level.id;

            return (

              <div
                className="level-row"
                key={level.id}
              >

                <div
                  className={
                    unlocked
                    ? "level-icon active"
                    : "level-icon locked"
                  }
                >

                  {unlocked ? "▶" : "🔒"}

                </div>

                <div
                  className={
                    unlocked
                    ? "level-card active-card"
                    : "level-card"
                  }
                >

                  <h3>{level.title}</h3>

                  <p>{level.desc}</p>

                </div>

              </div>

            );

          })}

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