import React from "react";
import { Card } from "react-bootstrap";

function SingleBook(props) {
  console.log(props);
  return (
    <Card className="book-cover">
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title
        onClick={() => this.setState({comment})}
        >{props.book.title.substring(0, 20)}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default SingleBook;