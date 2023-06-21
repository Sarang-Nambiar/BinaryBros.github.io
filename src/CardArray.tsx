import React, { useState } from "react";
import Card from "./Card";

const CardArray = () => {
    const [cards, setCards] = useState(["Plan 1"]);

    const handleAddCard = () => {
        const newCard = `Plan ${cards.length + 1}`;
        setCards([...cards, newCard]);
    };

    return (
        <>
            <div>
                <h4>Suggested Trip Plans</h4>
            </div>
            <div style={{ marginTop: "1rem" }}>
                <button className="btn" onClick={handleAddCard}>
                    + Generate New Plan
                </button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {cards.map((card, index) => (
                    <Card key={index} title={card} />
                ))}
            </div>
        </>
    );
};

export default CardArray;
