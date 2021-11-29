import { useState, useEffect } from "react";
import Card from "./card";
import "./App.css";

const cardImg = [
  { src: "/img/pair-1.jpg", matched: false },
  { src: "/img/pair-2.jpg", matched: false },
  { src: "/img/pair-3.jpg", matched: false },
  { src: "/img/pair-4.jpg", matched: false },
  { src: "/img/pair-5.jpg", matched: false },
  { src: "/img/pair-6.jpg", matched: false },
  { src: "/img/pair-7.jpg", matched: false },
  { src: "/img/pair-8.jpg", matched: false },
  { src: "/img/pair-9.jpg", matched: false },
  { src: "/img/pair-10.jpg", matched: false },
  { src: "/img/pair-11.jpg", matched: false },
  { src: "/img/pair-12.jpg", matched: false },
  { src: "/img/pair-13.jpg", matched: false },
  { src: "/img/pair-14.jpg", matched: false },
  { src: "/img/pair-15.jpg", matched: false },
  { src: "/img/pair-16.jpg", matched: false },
  { src: "/img/pair-17.jpg", matched: false },
  { src: "/img/pair-18.jpg", matched: false },
  { src: "/img/pair-19.jpg", matched: false },
  { src: "/img/pair-20.jpg", matched: false },
  { src: "/img/pair-21.jpg", matched: false },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const [disable, setDisable] = useState(false);
  // Shuffled Cards
  const shuffledCards = () => {
    const shuffledCards = [...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurns(0);
  };
  //handel Choise
  const handelChoose = (card) => {
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
  };
  //compare 2 selected Cards
  useEffect(() => {
    if (choiseOne && choiseTwo) {
      setDisable(true);
      if (choiseOne.src === choiseTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiseOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setTimeout(() => restTurn(), 1000);
      } else {
        setTimeout(() => restTurn(), 1000);
      }
    }
  }, [choiseOne, choiseTwo]);
  useEffect(() => {
    shuffledCards();
  }, []);
  //reset chise and incrase the turns
  const restTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisable(false);
  };
  return (
    <div className="App">
      <h1>Find the pair</h1>
      <div className="flex-container">
        <div className="card-grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handelChoose={handelChoose}
              flipped={card === choiseOne || card === choiseTwo || card.matched}
              disable={disable}
            />
          ))}
        </div>
        <div className="tabe">
          <div className="score-container">
            <span className="title">Score</span>
            <div className="test">2/10</div>
            <div className="tries">tries:{turns}</div>
          </div>
          <div className="options-container">
            <span className="title">Options</span>
            <div className="btn" onClick={shuffledCards}>
              <span className="btn-title">Restart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
