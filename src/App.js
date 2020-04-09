import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import FirstInfo from "./components/FirstInfo";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Container className="container"> */}
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/firstInfo" component={FirstInfo} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
      </div>
      {/* </Container> */}
    </BrowserRouter>
  );
}

export default App;
