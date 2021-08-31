import {Component} from "react";
import {Form, Button} from"react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";


const AddComment = () => {

    // state = {
    //     comment: {
    //         comment:"",
    //         rate:1,
    //         elementId: this.props.asin
    //     }
    // }

    const [comment, setComment] = useState({
        comment: '',
        rate: 1,
        elementId: null
                  })
    //  const [comment, setComment] = useState("")  
    //  const [rate, setRate] = useState(1)
    //  const [elementId, setElementId] = useState (null)           

useEffect( () => {
//   e.preventDefault()
 const sendComment =  async() => {
  try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTJiYTY0Nzk5OGZmODAwMTVhMzM1ZTEiLCJpYXQiOjE2MzAyNTA1NjcsImV4cCI6MTYzMTQ2MDE2N30.fjwBzicLDqvpDPoHDNeOTPFCpomeo2Zu4lr109e37EQ'
      }
    })
  if (response.ok) {
      // the comment has been sent succesfully!!
      alert('Comment was sent!')
      this.props.onNewComment(await response.json())
  } else {
      console.log('error')
      alert('something went wrong')
  }
} catch (error) {
  console.log('error')
}
}
sendComment()
}, [])



return (
  <div>
      <Form onSubmit={this.sendComment}>
          <Form.Group>
              <Form.Label>Type below</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Add comment here"
                  value={this.state.comment.comment}
                  onChange={e => this.setState({
                      comment: {
                          ...this.state.comment,
                          comment: e.target.value
                      }
                  })}
              />
          </Form.Group>
          <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control as="select" value={this.state.comment.rate}
                  onChange={e => this.setState({
                      comment: {
                          ...this.state.comment,
                          rate: e.target.value
                      }
                  })}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </Form.Control>
          </Form.Group>
          <Button variant="light" type="submit" className="my-3">
              Send comment :)
          </Button>
      </Form>
  </div>
)
}


export default AddComment

     