import SingleBook from "./SingleBook"
import BookList from "./BookList"
import { Row } from "react-bootstrap"
import { withRouter } from "react-router-dom"
const Home =  () => (
    <Row>
    <SingleBook />
   <BookList />
    
  </Row>
)
export default withRouter(Home)