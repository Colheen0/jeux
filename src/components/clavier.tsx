import React from "react";

interface Props {
  onGuess: (letter: string) => void;
}

const Keyboard: React.FC<Props> = ({ onGuess }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div>
      {letters.map((letter) => (
        <button key={letter} onClick={() => onGuess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
