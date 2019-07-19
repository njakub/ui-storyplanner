import React from "react";
import "./Card.scss";
import { Card as BootstrapCard } from "react-bootstrap";

const Card = props => {
  return (
    <BootstrapCard style={{ width: "460px" }}>
      <BootstrapCard.Header>{props.header}</BootstrapCard.Header>
      <BootstrapCard.Body>
        <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
        {props.children}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
