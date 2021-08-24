import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Home from "./pages/Home";

Enzyme.configure({ adapter: new Adapter() });

describe("when app renders", () => {
  it("renders a header and footer component", () => {
    //arrange
    const renderedApp = shallow(<App />)
    //act
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")

    //assert
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })

  it("provides a route to home component", () => {
    //arrange
    const renderedApp = shallow(<App />)
    //act
    const renderedHomeRoute = renderedApp.find('[path="/"]')

    //assert
    expect(renderedHomeRoute.props().component).toEqual(Home)
  })
});
