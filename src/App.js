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

  createRock = (newRock) =>{
    console.log(newRock)
  }

  render() {
    // console.log(this.state.rocks);
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/rockindex" render= {(props) => <RockIndex rocks = {this.state.rocks} />} />

          <Route path="/rockshow/:id" render={(props) => {
            const id = props.match.params.id
            const rock = this.state.rocks.find(rock => rock.id === +id)
            return <RockShow rock = {rock} />
          }} />

          <Route path="/rocknew" render= {(props) => <RockNew createRock={this.createRock} />} />
          <Route path="/rockedit" component={RockEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
