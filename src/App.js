
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import { Container, Row } from 'react-bootstrap';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import SingleBook from './components/SingleBook';
import books from './data/books.json';
import Comments from './components/Comments';

function App() {
  return (
    <Container>
   <WarningSign text="Warning!" />
   <MyBadge text="NEW!!" color="info" />
   <Row>
<SingleBook book={books[0]}/>
<Comments/>
    <BookList books={books}/>

   </Row>
   </Container>
  );
}

export default App;
