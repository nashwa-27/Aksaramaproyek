import React, { useEffect, useState } from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import bginformation from "../../assets/bginformation.webp";
import MaskotAksarama from "../../assets/MaskotAksarama.png";
import { getDataTahapan, getGamesByChapterId } from "../../service/tahapan1";
import { HeroBoxComponent } from "../../components/HeroBox";
import { ChapterList } from "../../components/ChapterList";
import { ChapterButton } from "../../components/ChapterButton";

function Information() {

  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [mode, setMode] = useState("materi");
  // UNTUK MENYIMPAN DATA SEMENTARA
  const [chapterData, setChapterData] = useState([]);

  const isGamesPath = window.location.pathname === "/Games";

  // EKSEKUSI CODE PERTAMA KALI LOAD HALAMAN
  useEffect(() => {
    const fetchChapterData = async () => {
      // GET DATA CHAPTER dari Supabase menggunakan fungsi getDataTahapan
      const chapterData = await getDataTahapan();
      // Simpan data chapter ke state
      setChapterData(chapterData);
    };

    fetchChapterData();
  }, []);

  const handleStart = async() => {
    if (!isGamesPath) {
      navigate(`/Tahapan`, {
        state: {
          data: chapterData.find((chapter) => chapter.id === selectedLevel),
        },

      });
    }
    else {
      const gamesData = await getGamesByChapterId(selectedLevel);
      navigate("/Games1", { state: { data: gamesData } });
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

       <HeroBoxComponent />

        <ChapterList
          data={chapterData}
          onSelectChapter={setSelectedLevel}
          selectedLevel={selectedLevel}
        />

        <ChapterButton onClick={handleStart} />

      </div>

      <Footer />

    </div>

  );

}

export default Information;