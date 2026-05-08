import React, { useState } from "react";
import "./index.css";

function Information() {

  const [currentLevel, setCurrentLevel] =
    useState(1);

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

  return (

    <div className="info-container">

      <nav className="info-navbar">

        <h1 className="logo">
          AKSARAMA
        </h1>

        <div className="nav-links">

          <a href="/">
            Home
          </a>

          <a href="/information">
            Information
          </a>

        </div>

      </nav>

      <div className="hero-box">

        <div className="hero-left">

          Di sesi ini kamu <br />
          dapat menguji <br />
          pemahamanmu

        </div>

        <img
          src="MaskotAksarama.png"
          alt=""
          className="character"
        />

        <div className="hero-right">

          mulai dari <br />
          tahapan 1.

        </div>

      </div>

      <div className="progress-wrapper">

        <p>Progress Kamu</p>

        <div className="progress-bar">

          <div
            className="progress-fill"

            style={{
              width:
                `${(currentLevel / 3) * 100}%`,
            }}
          ></div>

        </div>

      </div>

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

        onClick={() => {

          if (currentLevel < 3) {

            setCurrentLevel(
              currentLevel + 1
            );

          }

        }}
      >

        Mulai Petualanganmu →

      </button>

    </div>

  );
}

export default Information;