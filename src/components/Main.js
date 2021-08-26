import React, { useState, useEffect } from "react";
import { shuffle } from "lodash";
import CharacterCard from "./CharacterCard";
import characters from "../AppData/AppData";

const Main = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [charData, setCharData] = useState(characters)
    
    const handleClick = (id) => {
      const updatedCharData = charData.map((char) => {
        return {
          ...char,
          selected: char.id === id ? char["selected"] + 1 : char["selected"],
        };
      });
      setCharData(shuffle(updatedCharData));
      charData.some((char) => char.selected > 1)
        ? setCurrentScore(0)
        : setCurrentScore(currentScore + 1);
      setHighScore(currentScore + 1);
    };

    useEffect(() => {
        // console.log("Component Should update!!!");
    }, [currentScore]);

    const charList = charData.map((char) => (
      <CharacterCard data={char} key={char.id} handleClick={() => handleClick(char.id)} />
    ));
  
    return (
      <main className="App">
        <div>
          <p>Current Score: {currentScore}</p>
          <p>Highest Score: {highScore}</p>
        </div>
        <div className="charGrid">{charList}</div>
      </main>
    );
  }

  export default React.memo(Main)