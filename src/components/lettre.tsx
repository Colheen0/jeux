import React from "react";

interface Props {
  word: string;
  guessedLetters: string[];
}

const WordDisplay: React.FC<Props> = ({ word, guessedLetters }) => {
  return (
    <div>
      {word.split("").map((letter, index) =>
        guessedLetters.includes(letter) ? (
          <span key={index}>{letter} </span>
        ) : (
          <span key={index}>_ </span>
        )
      )}
    </div>
  );
};

export default WordDisplay;
