import React from "react";
import PropTypes from "prop-types";
import Table from "../common/Table/Table";

const CharacterList = props => (
  <React.Fragment>
    <h2>Characters</h2>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.characters.map(character => (
          <tr>
            <td>{character.actorCharacterId}</td>
            <td>{character.firstName}</td>
            <td>{character.secondName}</td>
            <td>{character.dob}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </React.Fragment>
);

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharacterList;
