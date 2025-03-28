import React, { useEffect, useState } from "react";
import axios from "axios";
import WordDisplay from "./components/lettre";
import Keyboard from "./components/clavier";

const Game: React.FC = () => {
  const [word, setWord] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState<number>(0);
  const maxMistakes = 6;

  useEffect(() => {
    axios.post("http://localhost:3333/", { locale: "en-GB" })
      .then(response => setWord(response.data.word))
      .catch(error => console.error("Error fetching word:", error));
  }, []);

  const handleGuess = (letter: string) => {
    if (!word.includes(letter)) {
      setMistakes(mistakes + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  };

  return (
    <div>
      <h1>Hangman Game</h1>
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard onGuess={handleGuess} />
      <p>Errors: {mistakes} / {maxMistakes}</p>
    </div>
  );
};

export default Game;
