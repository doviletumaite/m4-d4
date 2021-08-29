import { Component } from "react";
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTJiYTY0Nzk5OGZmODAwMTVhMzM1ZTEiLCJpYXQiOjE2MzAyNTA1NjcsImV4cCI6MTYzMTQ2MDE2N30.fjwBzicLDqvpDPoHDNeOTPFCpomeo2Zu4lr109e37EQ",
          },
        }
      );
      console.log(response);
      let comments= await response.json() // this will convert an object in a array
      this.setState({comments: comments}) // or ({comments})
    } catch (error) {
      console.log("we have a problem!", error)

    }
  };

  render() {
    return (
    <div>LEAVE A NICE COMMENT :)
        <AddComment asin={this.props.asin}/>
 <CommentList commentsToShow={this.state.comments}/>

    </div>
   )
  }
}

export default CommentArea;
