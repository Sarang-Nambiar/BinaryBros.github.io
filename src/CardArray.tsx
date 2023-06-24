import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "./Card";

interface CardArrayProps {
  disableSection: boolean;
}

const CardArray: React.FC<CardArrayProps> = ({ disableSection }) => {
  const [cards, setCards] = useState(["Plan 1"]);

  const handleAddCard = () => {
    const newCard = `Plan ${cards.length + 1}`;
    setCards([...cards, newCard]);
  };

  if (disableSection) {
    return null; // Return null to hide the section
  }

  return (
    <>
      <div>
        <h4>Suggested Trip Plans</h4>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Button variant="primary" onClick={handleAddCard}>
          + Generate New Plan
        </Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ligula vel ligula lobortis malesuada. Nam id quam at tortor placerat dapibus."
            }
          />
        ))}
      </div>
    </>
  );
};

export default CardArray;
