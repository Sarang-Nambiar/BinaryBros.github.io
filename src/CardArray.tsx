import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "./Card";
import getRes from "./script.js"; // Importing the getRes function

interface CardArrayProps {
  disableSection: boolean;
  resetCount: boolean;
  cardContents: string[];
}

const CardArray: React.FC<CardArrayProps> = ({
  disableSection,
  resetCount,
  cardContents
}) => {
  const [cards, setCards] = useState(['Plan 1']);

  const handleAddCard = async () => {
    if (resetCount) {
      setCards(["Plan 1"]);
      return;
    } else {
      const newCard = `Plan ${cards.length + 1}`;
      setCards([...cards, newCard]);

      // Call getRes with the necessary parameters
      const result = await getRes(/* Pass the required arguments here */);
      console.log(result); // Output the result from getRes
    }
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
            content={cardContents[index]} // Use cardContents[index] as the content
          />
        ))}
      </div>
    </>
  );
};

export default CardArray;
