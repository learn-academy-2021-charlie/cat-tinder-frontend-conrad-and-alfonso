import React, { Component } from 'react'
import { Button, Progress } from 'reactstrap';
import { Link } from 'react-router-dom'

class RockShow extends Component {
  render() {
   const {rock, deleteRock} = this.props
    return (
      <div className="page container">
        <h3 className="text-center">The Rock</h3>
        <div className="box">
          <p><strong>Name:</strong> {rock && rock.name}</p>
          <p><strong>Color:</strong> {rock && rock.color}</p>
          <p className="brilliance"><strong>Brilliance:</strong> {rock && rock.brilliance}</p>
          <Progress value={rock && rock.brilliance * 10}>{rock && rock.brilliance}/10</Progress>
          <p className="hardness" ><strong>Hardness:</strong> {rock && rock.hardness}</p>
          <Progress value={rock && rock.hardness * 10} color="success">{rock && rock.hardness}/10</Progress>
          <br/>
          <Link to={`/rockedit/${rock && rock.id}`}><Button color="success">Edit Rock</Button></Link>
          <Link to="/rockindex"><Button onClick={ () => deleteRock(rock.id) } color="danger">Delete Rock</Button></Link>
          <Link to="/rockindex"><Button color="primary">Back to Rocks</Button></Link>
        </div>
      </div>
    )
  }
}

export default RockShow;