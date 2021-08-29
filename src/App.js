import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SingleBook from "./components/SingleBook";
// import Input from "./components/Input";
import books from "../src/data/books.json";
import BookList from "./components/BookList";
import { Row, Container } from "react-bootstrap";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";

function App() {
  return (
    <div className="App">
      {/* <Input /> */}
      <Container>
        <WarningSign/>
        <MyBadge/>
        <Row>
          <SingleBook book={books[0]}/>
         <BookList books={books}/>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
