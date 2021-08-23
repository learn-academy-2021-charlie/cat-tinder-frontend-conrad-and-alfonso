import React, { Component } from "react";

import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import RockIndex from "./pages/RockIndex";
import RockShow from "./pages/RockShow";
import RockNew from "./pages/RockNew";
import RockEdit from "./pages/RockEdit";
import NotFound from "./pages/NotFound";

import mockRocks from "./mockRocks";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rocks: mockRocks,
    };
  }

  render() {
    console.log(this.state.rocks);
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rockindex" component={RockIndex} />
          <Route path="/rockshow" component={RockShow} />
          <Route path="/rocknew" component={RockNew} />
          <Route path="/rockedit" component={RockEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
