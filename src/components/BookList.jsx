 import {useState} from "react";

import {
  Col,
  Container,
  Form,
  Row,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ books }) =>  {
  // state = {
  //   searchBook: "",
  //   selectedBook: null
  // };
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)

    return (
      <Container>
        <Row>
          <Col md={8}>
          <Row>
          <Col>
            <InputGroup className="mb-3 d-flex align-items-center">
              <Form.Label>
                Search a Book:
              </Form.Label>
              <FormControl
                type="text"
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
               value={searchQuery}
               onChange={e => setSearchQuery(e.target.value)}
              
              />
              <Button variant="outline-secondary" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          {books.filter(book => book.title.toLowerCase().includes(searchQuery)).map((book) => (
            <Col xs={3} key={book.asin}>
              <SingleBook book={book} selectedBook={selectedBook} changeSelectedBook={asin => setSelectedBook(asin)} />
            </Col>
          ))}
        </Row>
        </Col>
        <Col md={4}>
         <CommentArea asin={selectedBook}/>
        </Col>
        </Row>
      </Container>
    );
  }


export default BookList;