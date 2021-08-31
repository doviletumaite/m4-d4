import { Component } from "react";
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from "./Loading";
import WarningSign from "./WarningSign";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false
  };
fetchComments = async () => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTJiYTY0Nzk5OGZmODAwMTVhMzM1ZTEiLCJpYXQiOjE2MzAyNTA1NjcsImV4cCI6MTYzMTQ2MDE2N30.fjwBzicLDqvpDPoHDNeOTPFCpomeo2Zu4lr109e37EQ",
        },
        method: "POST",
        body: JSON.stringify()
      }
    );
    console.log(response);
    if(response.ok) {
            let comments= await response.json() // this will convert an object in a array
         //   this.props.onNewComment(await response.json())
    this.setState({comments: comments, isLoading: false, isError: false}) // or ({comments})
    } else {
      console.log("response k.o. X(")
        this.setState({ isLoading: false, isError:true})
    }

  } catch (error) {
    console.log("we have a problem!", error)
    this.setState({ isLoading: false,  isError:true})
  }
};
  componentDidMount () {
    this.fetchComments()

  }
//   onNewComment = (onNewComment) => {
//     this.setState({
//         comment: [...this.state.comments, comments]
//     })
// }
componentDidUpdate(previousProps, previousState) {
  console.log("so that is the prev prop and the prev state:",previousProps, previousState)
  if (previousState !== this.state.asin ) {
    this.fetchComments()
   // this.setState({this.props.asin})
  }
}
  render() {
    return (
    <div>
       
        LEAVE A NICE COMMENT :)
        <AddComment asin={this.props.asin}/>
        {
            this.state.isLoading && <Loading/>
        }
 <CommentList commentsToShow={this.state.comments}/>
  {
            this.state.isError && <WarningSign text="error"/>
        }
    </div>
   )
  }
}

export default CommentArea;
