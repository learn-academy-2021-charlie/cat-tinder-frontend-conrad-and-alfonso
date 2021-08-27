import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
  Card, Button, CardTitle, CardGroup, CardBody
} from 'reactstrap';
import { GiRockGolem } from 'react-icons/gi'

class RockIndex extends Component {
  render() {
    return (
      <div className="page container">
        <h3 className="text-center">The Rocks</h3>
        <CardGroup>
          {this.props.rocks && this.props.rocks.map(rock => {
            return (
              <Card key={rock.id}>
                <CardBody>
                  <CardTitle tag="h5">{rock.name}</CardTitle>
                  <h1 className="mb-3"><GiRockGolem /></h1>
                  <Button color="success">
                    <Link className="index-button-link" to={`/rockshow/${rock.id}`}>
                      Go to Rock
                    </Link>
                  </Button>
                </CardBody>
              </Card>
            )
          })}
        </CardGroup>



      </div>
    )
  }
}

export default RockIndex;