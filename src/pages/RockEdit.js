import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class RockEdit extends Component {
  constructor(props){
    super(props)
    const {rock} = this.props
    this.state ={
      form: {
        name: rock && rock.name,
        color: rock && rock.color,
        brilliance: rock && rock.brilliance,
        hardness: rock && rock.hardness
      },
      submitted: false,
      triedForm: false
    }
  }


  handleChange = (e) =>{
    let {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }


  handleSubmit = () => {
    const {brilliance,hardness} = this.state.form
    if(brilliance < 1 || brilliance > 10 || hardness < 1 || hardness > 10){
      this.setState({triedForm: true})
      return
    }
    this.props.updateRock(this.state.form,this.props.rock.id)
    this.setState({submitted: true})
  }

  render() {
    console.log("brilliance: ",this.state.form.brilliance)
    return (
      <div className="page container">
        <h3>Edit The Rock</h3>

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
            <Label for="brilliance">Brilliance <span className={this.state.triedForm && (this.state.form.brilliance > 10 || this.state.form.brilliance < 1)? "errored": ""}>(between 1 and 10)</span></Label>
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
            <Label for="hardness">Hardness <span className={this.state.triedForm && (this.state.form.hardness > 10 || this.state.form.hardness < 1) ? "errored": ""}>(between 1 and 10)</span></Label>
            <Input 
              type="number" 
              name="hardness" 
              min="0" max="10" 
              onChange={this.handleChange} 
              value={this.state.form.hardness}
            />
          </FormGroup>
          <br/>
          <Button name="submit" color="success" onClick={this.handleSubmit}>Update Rock</Button>
        </Form>
        {this.state.submitted && <Redirect to={`/rockshow/${this.props.rock.id}`}/>}
      </div>
    )
  }
}

export default RockEdit;