import React, { Component } from 'react'
import rockFannyPack from '../assets/rock_fanny_pack.jpeg'
class Home extends Component {
  render() {
    return (
      <div className="page container">
        <h3 className="text-center">Welcome to Rock Tinder</h3>
        <div className="frame">
          <img src={rockFannyPack} alt="Dwayne the 'Rock' Johnson, with his fanny pack."/>
        </div>
      </div>
    )
  }
}

export default Home;