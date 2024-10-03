import React from "react";
import "./game.css"
import logoImage from "/logo.png";
function GameScreen({ characterImage, bg, name, title }) {
    return (
        <div className="game-screen">
            {name && <div className="background-div">
                <h1 className="name">{name}</h1>
                <h2 className="title">{title}</h2>
            </div>}
            <img src={logoImage} alt="Logo" className="logo" />
            <img src={characterImage} alt="Character" className="character" />
            <img src={bg} alt="" className="bg" />
        </div>
    );
}

export default GameScreen;