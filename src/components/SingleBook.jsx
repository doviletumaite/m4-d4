import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";


class SingleBook extends React.Component{
  state= {
    selected: false
  }
 render(){
  return (
    <>
    <Card className="book-cover mx-2 my-2 mx-auto" 
    onClick= {() => this.setState({selected: !this.state.selected})}
    style={{background: this.state.selected ? 
                    "red" : "white"}}
    >
      <Card.Img variant="top" src={this.props.book.img} />
       <Card.Body>
        <Card.Title
       
                >{this.props.book.title.substring(0, 20)}</Card.Title>
      </Card.Body> 
    </Card>
    {
         this.state.selected && <CommentArea asin={this.props.book.asin} />
    }
    </>
  )
  }
}
export default SingleBook;
   