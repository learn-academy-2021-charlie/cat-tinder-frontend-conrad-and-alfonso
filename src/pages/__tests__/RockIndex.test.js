import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RockIndex from '../RockIndex'

Enzyme.configure({ adapter: new Adapter() });

describe("When RockIndex renders", () => {
    it("displays an index heading", () => {
        // arrange
        const rockIndex = shallow(<RockIndex />)
        // act
        const indexHeading = rockIndex.find("h3")
        // assert
        expect(indexHeading.length).toEqual(1)
    })
})