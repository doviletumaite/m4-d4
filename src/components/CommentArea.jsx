import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from "./Loading";
import WarningSign from "./WarningSign";

const CommentArea = ({ asin }) => {
  // state = {
  //   comments: [],
  //   isLoading: true,
  //   isError: false
  // };
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchComments = async () => {
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
       setComments(comments) // or ({comments})
       setIsLoading(false)
       setIsError(false)
        } else {
          console.log("response k.o. X(")
          setIsLoading(false)
          setIsError(true)
        }
    
      } catch (error) {
        console.log("we have a problem!", error)
        setIsLoading(false)
        setIsError(true)
      }
    };
    fetchComments()
  }, [asin])

  

 
//   onNewComment = (onNewComment) => {
//     this.setState({
//         comment: [...this.state.comments, comments]
//     })
// }


    return (
    <div>
       
        LEAVE A NICE COMMENT :)
        <AddComment asin={asin}/>
        {
            isLoading && <Loading/>
        }
 <CommentList commentsToShow={comments}/>
  {
            isError && <WarningSign text="error"/>
        }
    </div>
   )
  }


export default CommentArea;
