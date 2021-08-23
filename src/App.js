import React, { Component } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import RockIndex from './pages/RockIndex'
import RockShow from './pages/RockShow'
import RockNew from './pages/RockNew'
import RockEdit from './pages/RockEdit'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rockindex" component={RockIndex} />
            <Route path="/rockshow" component={RockShow}/>
            <Route path="/rocknew" component={RockNew}  />
            <Route path="/rockedit" component={RockEdit} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
    )
  }
}

export default App;
