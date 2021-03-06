import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "../NotFound";
import cat404 from "../../assets/404_cat.jpeg";
Enzyme.configure({ adapter: new Adapter() });

describe("when not found renders", () => {
  it("displays an image", () => {
    //arrange
    const notFound = shallow(<NotFound />)
    //act
    const notFoundImage = notFound.find("img")
    //assert

    //these both pass, but use different methods to accomplish the same thing.
    expect(notFoundImage.prop("src")).toEqual(cat404)
    // expect(notFoundImage.props().src).toEqual(cat404);
  });
});
