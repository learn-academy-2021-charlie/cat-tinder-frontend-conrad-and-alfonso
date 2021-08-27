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

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      rocks: [],
    };
  }

  componentDidMount(){
    this.readRock()
    document.addEventListener("click",(e) =>{
      const targetClass = e.target.classList.value
      if(targetClass === "navbar-toggler-icon" || targetClass === "navbar-toggler"){
        return
      }else{
        this.setState({isOpen: false})
      }
    })
  }

  readRock = () => {
    fetch("http://localhost:3000/rocks")
    .then(response => response.json())
    .then(rocksArray => this.setState({ rocks: rocksArray }))
    .catch(errors => console.log("Rock read errors:", errors))
  }

  createRock = (newRock) =>{
    fetch("http://localhost:3000/rocks", {
      body: JSON.stringify(newRock),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readRock())
    .catch(errors => console.log("Rock create errors:", errors))
  }

  updateRock = (editRock, id) =>{
    fetch(`http://localhost:3000/rocks/${id}`, {
      body: JSON.stringify(editRock),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readRock())
    .catch(errors => console.log("Rock update errors:", errors))
  }

  toggle = () => {
    const newOpenState = !this.state.isOpen;
    this.setState({ isOpen: newOpenState });
  };

  render() {
    // console.log(this.state.rocks);
    return (
      <Router onClick={this.toggle}>
        <Header isOpen = {this.state.isOpen}  toggle={this.toggle}/>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/rockindex" render= {(props) => <RockIndex rocks = {this.state.rocks} />} />

          <Route path="/rockshow/:id" render={(props) => {
            const id = props.match.params.id
            const rock = this.state.rocks.find(rock => rock.id === +id)
            return <RockShow rock = {rock} />
          }} />

          <Route path="/rocknew" render= {(props) => <RockNew createRock={this.createRock} />} />
          <Route path="/rockedit/:id"   render = {(props) => {
            const id = props.match.params.id
            const rock = this.state.rocks.find(rock => rock.id === +id)
            return <RockEdit  updateRock = {this.updateRock} rock={rock}   />
          }}/>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
