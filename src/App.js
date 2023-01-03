import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😂": "face with tears of joy",
  "😊": "smiling face with smiling eyes",
  "😡": "Angry",
  "😭": "Crying",
  "❤️": "Love",
  "😍": "smiling face with heart-eyes",
  "😘": "kissing face",
  "🤫": "shushing face",
  "🤔": "thinking face",
  "😌": "disappointed face",
  "😴": "sleeping face",
  "😲": "astonished face"
};

let emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h3>inside out</h3>
      <input onChange={emojiHandler}></input>
      <h4>{meaning}</h4>
      <h3> Emojis we know 👇</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ padding: "0.5rem", fontSize: "1.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
