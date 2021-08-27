import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RockNew from '../RockNew'

Enzyme.configure({ adapter: new Adapter() });


describe("when rocknew page renders",() =>{
  let renderedRockNew
  beforeEach(() =>{
    renderedRockNew = shallow(<RockNew/>)
  })
  
  it("displays a header",() =>{
    
    const header = renderedRockNew.find("h3")

    expect(header.length).toEqual(1);


  })

  it("displays a form", () =>{
    const form = renderedRockNew.find("Form")

    expect(form.length).toEqual(1)
  })

  it("displays a button", () =>{
    const button = renderedRockNew.find("Button")

    expect(button.length).toEqual(1)
  })



  //test if redirect only on valid stuff.


})