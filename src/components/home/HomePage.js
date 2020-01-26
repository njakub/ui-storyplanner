import React from "react";
import { Link } from "react-router-dom";
import InfoCard from "../common/InfoCard/InfoCard";
import "./HomePage.scss";
import Characters from "./characters.png";
import Books from "./books.png";
import Character from "./character.png";
import Book from "./book1.png";

const HomePage = () => (
  <React.Fragment>
    <div className="card-highlights">
      <InfoCard
        title="Total Characters"
        iconColor="orange"
        icon={Characters}
        information="15"
      />
      <InfoCard
        title="Total Projects"
        iconColor="red"
        icon={Books}
        information="3"
      />
      <InfoCard
        title="Most Developed Character"
        iconColor="blue"
        icon={Character}
        information="Graham Knight"
      />
      <InfoCard
        title="Most Developed Project"
        iconColor="green"
        icon={Book}
        information="Fool Prophecy"
      />
    </div>
  </React.Fragment>
);

export default HomePage;
