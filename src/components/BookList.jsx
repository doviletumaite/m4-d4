import SingleBook from "./SingleBook";
import { Row, Col } from "react-bootstrap";

const BookList = (props) => {
  return (
 <Row>
        
      {props.books.map(book => (
<Col sm={6} md={4} lg={3} className="mt-3">
    <SingleBook book={book}/>
 </Col>
   )
   )
      }
  
 </Row>
  );
};

export default BookList;
