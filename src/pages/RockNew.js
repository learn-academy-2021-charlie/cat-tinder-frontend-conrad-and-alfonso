import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Redirect} from 'react-router-dom'

class RockNew extends Component {
  constructor(props){
    super(props)
    this.state ={
      form: {
        name:"",
        color:"",
        brilliance:'NaN',
        hardness:'NaN'
      },
      submitted: false
    }
  }

  handleChange = (e) =>{
    let {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }


  handleSubmit = () => {
    this.props.createRock(this.state.form)
    this.setState({submitted: true})
  }


  render() {
    return (
      <div className="page container">
        <h3>I am the Rock New page</h3>
        <Form>
        <br/>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input 
              type="text" 
              name="name" 
              onChange={this.handleChange} 
              value={this.state.form.name}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="color">Color</Label>
            <Input 
              type="text" 
              name="color" 
              onChange={this.handleChange} 
              value={this.state.form.color}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="brilliance">Brilliance (between 1 and 10)</Label>
            <Input 
              type="number" 
              name="brilliance" 
              min="0" max="10" 
              onChange={this.handleChange} 
              value={this.state.form.brilliance}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="hardness">Hardness (between 1 and 10)</Label>
            <Input 
              type="number" 
              name="hardness" 
              min="0" max="10" 
              onChange={this.handleChange} 
              value={this.state.form.hardness}
            />
          </FormGroup>
          <br/>
          <Button name="submit" color="success" onClick={this.handleSubmit}>Create new Rock</Button>
        </Form>
        {this.state.submitted && <Redirect to="/rockindex"/>}
      </div>
    )
  }
}

export default RockNew;