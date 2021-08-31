import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
// import BookList from "./BookList";

class SingleBook extends React.Component{
  // state= {
  //   selected: false
  // }
 render(){
  return (
    <>
    <Card className="book-cover mx-2 my-2 mx-auto" 
    onClick= {() => this.props.changeSelectedBook(this.props.book.asin)}
    // style={{background: this.props.changeSelectedBook ? 
    //                 "red" : "white"}}
    >
      <Card.Img variant="top" src={this.props.book.img} />
       <Card.Body>
        <Card.Title
       
                >{this.props.book.title.substring(0, 20)}</Card.Title>
      </Card.Body> 
    </Card>
    {
         this.state.selected && <CommentArea asin={this.props.book.asin} onNewComment={this.onNewComment} />
    }
    </>
  )
  }
}
export default SingleBook;
   