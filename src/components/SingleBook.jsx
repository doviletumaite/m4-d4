import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
// import BookList from "./BookList";

const SingleBook = ({changeSelectedBook, selectedBook, book}) => {
  // state= {
  //   selected: false
  // }

  return (
    <>
    <Card className="book-cover mx-2 my-2 mx-auto" 
    onClick= {() => changeSelectedBook(book.asin)}
    style={{background: selectedBook ? 
                    "red" : "white"}}
    >
      <Card.Img variant="top" src={book.img} />
       <Card.Body>
        <Card.Title
       
                >{book.title.substring(0, 20)}</Card.Title>
      </Card.Body> 
    </Card>
    {
         selectedBook && <CommentArea asin={book.asin} />
    }
    </>
  )
  }

export default SingleBook;
   