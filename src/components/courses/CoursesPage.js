import React from "react";
import AppShell from "../appShell/AppShell";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class CoursesPage extends React.Component {
  render() {
    return (
      <AppShell>
        <h2>Courses</h2>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </AppShell>
    );
  }
}

export default CoursesPage;
