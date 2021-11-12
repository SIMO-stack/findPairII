import "./card.css";

export default function Card({ card, handelChoose, flipped, disable }) {
  const handelClick = () => {
    if (!disable) {
      handelChoose(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="image front" />
        <div className="back" onClick={handelClick} />
      </div>
    </div>
  );
}
