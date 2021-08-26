import { Component } from "react";
import {  Row } from "react-bootstrap";

class CommentsForm extends Component {
    state ={
        commentUp:
        {
        "comment":  null,
        "rate":  null,
        "elementId": null,
        }
    }

    handleComment = (e, propertyComment) => {
        this.setState({
            commentUp: {
                ...this.state.commentUp, [propertyComment]: propertyComment === e.target.value
            }
        })

    }
    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method: 'POST',
            body: JSON.stringify(this.state.commentUp),
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGU3MTJkNTI2MjAwMTViNmRkMjEiLCJpYXQiOjE2MjkyOTQxOTMsImV4cCI6MTYzMDUwMzc5M30.XnOQr6Fx7ZY9OeWqYLc-CFjUxNxppJwzs8h_dVJmGzc"
            }
        })

        } catch (error) {
            console.log(error)
            alert("Something's gone wrong :(")
        }
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
export default CommentsForm