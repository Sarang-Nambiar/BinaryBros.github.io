import React from "react";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="card" style={{ 
        padding: "1rem", 
        margin: "0.5rem",
        }}>
      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: "center" }}>
          {title}
        </h5>
        <div className="card-text">
          <p>Insert the content for {title} here</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
