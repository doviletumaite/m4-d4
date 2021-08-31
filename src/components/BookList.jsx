import React from "react";
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

class BookList extends React.Component {
  state = {
    searchBook: "",
    selectedBook: null
  };
  render() {
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
               value={this.state.searchBook}
                   onChange={e => {
                    e.preventDefault();
                    this.setState({searchBook: e.target.value})
                //      console.log(e.target.value);
               }}
              />
              <Button variant="outline-secondary" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          {this.props.books.filter(book => book.title.toLowerCase().includes(this.state.searchBook)).map((book) => (
            <Col xs={3} key={book.asin}>
              <SingleBook book={book} changeSelectedBook={asin => this.setState({
                selecedBook: asin
              })} />
            </Col>
          ))}
        </Row>
        </Col>
        <Col md={4}>
         <CommentArea asin={this.props.book.asin}/>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;