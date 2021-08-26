import React, { Component } from "react";
import {  Row } from "react-bootstrap";

class Comments extends Component {
    state ={
        comment: null,
    }
    render()
 {
return (
    <Row className="mt-5 justify-content-center"> 
    <BookComments book={this.state.comment}/>
  </Row>
)
}
}
export default Comments