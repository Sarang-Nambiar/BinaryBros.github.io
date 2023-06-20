import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  const truncateContent = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  return (
    <>
      <div className="card" style={{ width: "18rem", margin: "1rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-text" style={{ maxHeight: "6rem", overflow: "hidden" }}>
            {truncateContent(content, 100)}
          </div>
          <Button variant="primary" onClick={handleReadMore}>
            Read More
          </Button>
        </div>
      </div>
      <Modal show={expanded} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Card;
