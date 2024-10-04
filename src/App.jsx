import "./App.css"
import React, { useState } from "react"; // Added useState
import GameScreen from "./GameScree";

function App() {
  let characters = [
    { name: "Ibragim Gubarov", image: "ibo.png", bg: "ibo.webp", title: "ICT" },
    { name: "Muhammad Usama", image: "usama.png", bg: "muha.jpg", title: "Biology" },
    { name: "Kumar Imanalieva", image: "kumar.png", bg: "7.jpg", title: "Kyrgyz Language" },
    { name: "Tolubai Nadyrov", image: "tolubai.png", bg: "tolik.webp", title: "Math" },
    { name: "Temirlan Erkinbekov", image: "tombom.png", bg: "tempo.webp", title: "Chemistry" },
    { name: "Nargiza Isakeeva", image: "nargiza.png", bg: "nargiza.webp", title: "Kyrgyz Language" },
    { name: "Chyngyz Zhumaliev", image: "chyngyz.png", bg: "chyngyz.webp", title: "Military" },
    { name: "Baktygul Zhamangulova", image: "baku.png", bg: "baku.webp", title: "Geography" },
    { name: "Atabek Zhakeev", image: "atabek.png", bg: "atabek.jpg", title: "Math" },
    { name: "Kiyaz Amangulov", image: "kyiaz.png", bg: "coco.webp", title: "Technology" },
    { name: "Aibek Temirkanov", image: "aibo.png", bg: "8.jpg", title: "Physical Education" },
    { name: "Daniar Bazarkulov", image: "doni.png", bg: "2.jpg", title: "Physical Education" },

  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Added state for current character
  const [showName, setShowName] = useState(false)
  const nextCharacter = () => {
    if (!showName) {
      setShowName(true)
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length); // Function to change character
      setShowName(false)
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <GameScreen
        name={showName ? characters[currentIndex].name : ""}
        title={characters[currentIndex].title}
        characterImage={characters[currentIndex].image}
        bg={characters[currentIndex].bg}
      />
      <button className="btn" onClick={nextCharacter}>Next Character</button> {/* Button to change character */}
    </div>
  );
}

export default App;
