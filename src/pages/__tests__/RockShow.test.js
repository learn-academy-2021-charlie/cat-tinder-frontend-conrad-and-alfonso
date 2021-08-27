import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RockShow from '../RockShow'

Enzyme.configure({ adapter: new Adapter() });

describe("When RockShow renders", () => {
    const rock = {
        id: 1,
        name: "Emerald",
        color: "green",
        brilliance: 6,
        hardness: 8,
      }
    it("displays a heading", () => {
        const rockShow = shallow(<RockShow />)
        const showHeading = rockShow.find("h3")
        expect(showHeading.length).toEqual(1)
    })
    it("displays the rock name", () => {
        const rockShow = shallow(<RockShow rock = {rock}/>)
        const showName = rockShow.find("p").first()
        expect(showName.text()).toEqual(`Name: ${rock.name}`)
    })
    it("displays the rock color", () => {
        const rockShow = shallow(<RockShow rock = {rock}/>)
        const showName = rockShow.find("p").at(1)
        expect(showName.text()).toEqual(`Color: ${rock.color}`)
    })
    it("displays the rock brilliance", () => {
        const rockShow = shallow(<RockShow rock = {rock}/>)
        const showName = rockShow.find("p").at(2)
        expect(showName.text()).toEqual(`Brilliance: ${rock.brilliance}`)
    })
    it("displays the rock hardness", () => {
        const rockShow = shallow(<RockShow rock = {rock}/>)
        const showName = rockShow.find("p").at(3)
        expect(showName.text()).toEqual(`Hardness: ${rock.hardness}`)
    })
})