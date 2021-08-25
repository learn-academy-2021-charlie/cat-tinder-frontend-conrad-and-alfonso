import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RockEdit from '../RockEdit'

Enzyme.configure({ adapter: new Adapter() });

describe("when edit page renders",() =>{

  let renderedEditPage
  const mockRock = {
    id: 5,
    name: "Dwayne 'The Rock' Johnson",
    color: "brown",
    brilliance: 10,
    hardness: 10,
  }
  beforeEach(() =>{
    renderedEditPage = shallow(<RockEdit rock={mockRock}/>)
  })

  it("displays a header",() =>{
    const header = renderedEditPage.find('h3')


    expect(header.length).toEqual(1)
  })

  it("fills in the input with current name",() =>{
    const input = renderedEditPage.find('Input').at(0)

    expect(input.prop("value")).toEqual("Dwayne 'The Rock' Johnson")
  })

  it("fills in the input with current color",() =>{
    const input = renderedEditPage.find('Input').at(1)

    expect(input.prop("value")).toEqual("brown")
  })
  it("fills in the input with current brilliance",() =>{
    const input = renderedEditPage.find('Input').at(2)

    expect(input.prop("value")).toEqual(10)
  })
  it("fills in the input with current hardness",() =>{
    const input = renderedEditPage.find('Input').at(3)

    expect(input.prop("value")).toEqual(10)
  })




})