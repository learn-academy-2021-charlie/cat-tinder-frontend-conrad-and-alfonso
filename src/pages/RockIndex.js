import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class RockIndex extends Component {
  render() {
    return (
      <div className="page container">
        <h3>I am the Rock Index page</h3>
        {this.props.rocks && this.props.rocks.map(rock => {
          return (
          <p key={rock.id}>
            <Link to={`/rockshow/${rock.id}`}>
            {rock.name}</Link>
          </p>
          )
        })}
      </div>
    )
  }
}

export default RockIndex;