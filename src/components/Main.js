import React, { useState, useEffect } from "react";
import { shuffle } from "lodash";
import CharacterCard from "./CharacterCard";
import characters from "../appData/AppData";

const Main = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [charData, setCharData] = useState(characters);

  const checkDuplicate = (arr) => {
    if (arr.some((char) => char.selected > 1)) {
      setCurrentScore(0);
      setCharData(characters);
    }
  };

  const handleClick = (id) => {
    const updatedCharData = charData.map((char) => {
      return {
        ...char,
        selected: char.id === id ? char["selected"] + 1 : char["selected"],
      };
    });
    setCharData(shuffle(updatedCharData));
    setCurrentScore(currentScore + 1);
    checkDuplicate(updatedCharData);
  };

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore, highScore]);

  const charList = charData.map((char) => (
    <CharacterCard
      data={char}
      key={char.id}
      handleClick={() => handleClick(char.id)}
    />
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
};

export default Main;