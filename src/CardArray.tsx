import React, { useState } from "react";
import Card from "./Card.tsx";

const CardArray = () => {
  const [cards, setCards] = useState(["Card 1"]);

  const handleAddCard = () => {
    const newCard = `Card ${cards.length + 1}`;
    setCards([...cards, newCard]);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card, index) => (
        <Card key={index} title={card} />
      ))}
      <div className="card" style={{ padding: "1rem" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            Trip Planner
          </h5>
          <div className="card-text">
            <p>Insert the content for the last card here</p>
            <button className="btn btn-primary" onClick={handleAddCard}>
              + Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArray;
