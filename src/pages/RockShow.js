import React, { Component } from 'react'
import { Progress } from 'reactstrap';
import { Link } from 'react-router-dom'

class RockShow extends Component {
  render() {
   const {rock} = this.props
    return (
      <div className="page container">
        <h3>I am the Rock Show page</h3>
        <p><strong>Name:</strong> {rock && rock.name}</p>
        <p><strong>Color:</strong> {rock && rock.color}</p>
        <p className="brilliance"><strong>Brilliance:</strong> {rock && rock.brilliance}</p>
        <Progress value={rock && rock.brilliance * 10}>{rock && rock.brilliance}/10</Progress>
        <p className="hardness" ><strong>Hardness:</strong> {rock && rock.hardness}</p>
        <Progress value={rock && rock.hardness * 10} color="success">{rock && rock.hardness}/10</Progress>
        <Link to="/rockindex">Back to Rocks</Link>
      </div>
    )
  }
}

export default RockShow;