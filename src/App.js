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
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Registration from "./components/Registration"
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
  <Router>
      <Switch>
      <div className="App">
      {/* <Input /> */}
      <Container>
        <WarningSign />
    
        <MyBadge/>
        <Route
            path="/"
            exact
            render={() => (
              <Layout>
                <Home subTitle="Homepage" />
              </Layout>
            )}
          />
        <Route
            path="/registration"
            exact
            render={() => (
              <Layout>
                <Registration/>
              </Layout>
            )}
          />
      
      
      </Container>
    </div>
      </Switch>
  </Router>
  );
}

export default App;
