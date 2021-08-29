import { ListGroup, Button } from "react-bootstrap"

const deleteComment = async (asin) => {
   try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+ asin, {
          method: "DELETE",
          
          headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTJiYTY0Nzk5OGZmODAwMTVhMzM1ZTEiLCJpYXQiOjE2MzAyNTA1NjcsImV4cCI6MTYzMTQ2MDE2N30.fjwBzicLDqvpDPoHDNeOTPFCpomeo2Zu4lr109e37EQ'
      }
    }) 
    if (response.ok) {
       alert("don't worry nobody will see that")
    } else{
      alert("oh no that mess is still visible")
    }
   } catch (error) {
      alert("oh no that mess is still visible")
   }
}

const SingleComment = ({comment})=> {
   return(
       <ListGroup.Item >{comment.comment}
       <Button variant="danger" className="my-3" onClick={() => deleteComment(comment._id)}>I regrett my comment</Button>
       </ListGroup.Item>
       )
}
export default SingleComment