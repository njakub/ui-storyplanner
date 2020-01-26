import React from "react";
import "./PlainCard.scss";

const PlainCard = ({ children, title }) => {
  return (
    <div className="plain-card">
      <div className="plain-card-header">
        <h5>{title}</h5>
      </div>
      <div className="plain-card-content">{children}</div>
    </div>
  );
};

export default PlainCard;
