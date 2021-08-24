import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../Header";

Enzyme.configure({ adapter: new Adapter() });

describe("when header renders", () => {
  //arrange
  let header;
  beforeEach(() => {
    header = shallow(<Header />);
  });

  it("display a hamburger menu", () => {
    //act
    const hamburger = header.find("NavbarToggler");
    //assert
    expect(hamburger.length).toEqual(1);
  });

  it("expands the menu when clicked", () => {
    //act
    const hamburger = header.find("NavbarToggler");
    hamburger.simulate("click");
    const collapseCompoment = header.find("Collapse");
    //assert

    expect(collapseCompoment.prop("isOpen")).toEqual(true);
  });

  it("displays a navbrand that contains 'Rock Tinder'", () => {
    //act
    const brand = header.find(".for-testing");
    console.log("header debug", header.debug());
    console.log("brand debug ", brand.debug());
    //assert
    expect(brand.length).toEqual(1);
  });
});
