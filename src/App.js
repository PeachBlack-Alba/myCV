import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Footer from "../public/components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Container className="container">
        <div className="App">
          <Switch>
            {/* <Route exact path="/" component={Landing} /> */}
            <Route exact path="/Footer" component={Footer} />
          </Switch>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
