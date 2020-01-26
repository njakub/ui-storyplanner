import React from "react";
import "./InfoCard.scss";

const InfoCard = ({ icon, children, iconColor, title, information }) => {
  return (
    <div id="card">
      <div className={`card-icon card-icon-${iconColor}`}>
        <img src={icon} />
      </div>
      <div className="card-content">
        <h6>{title}</h6>
        <h3>{information}</h3>
      </div>
    </div>
  );
};

export default InfoCard;
