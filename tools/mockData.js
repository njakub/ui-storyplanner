const characters = [
  {
    id: 1,
    firstName: "Jakub",
    secondName: "Nicewicz",
    dob: "08/03/1994"
  },
  {
    id: 2,
    firstName: "Helen",
    secondName: "Gaden",
    dob: "02/11/1994"
  },
  {
    id: 3,
    firstName: "Harry",
    secondName: "Potter",
    dob: "07/31/1980"
  },
  {
    id: 4,
    firstName: "Jon",
    secondName: "Doe",
    dob: "01/01/1960"
  }
];

const projects = [
  { id: 1, name: "Harry Potter" },
  { id: 2, name: "Eragon" },
  { id: 3, name: "King of Thorns" },
  { id: 4, name: "Lord of The Rings" }
];

const newCharacter = {
  id: null,
  firstName: "",
  secondName: null,
  dob: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCharacter,
  characters,
  projects
};
