import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
  Card, Button, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

class RockIndex extends Component {
  render() {
    return (
      <div className="page container">
        <h3>I am the Rock Index page</h3>
        <CardGroup>
          {this.props.rocks && this.props.rocks.map(rock => {
            return (
              <Card key={rock.id}>
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <Button>
                    <Link to={`/rockshow/${rock.id}`}>
                      {rock.name}
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