import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Home from "./pages/Home";

Enzyme.configure({ adapter: new Adapter() });

describe("when app renders", () => {
  it("renders a header and footer component", () => {
    //arrange
    const renderedApp = shallow(<App />);
    //act
    const renderedHeader = renderedApp.find("Header");
    const renderedFooter = renderedApp.find("Footer");
    // console.log("rendered header: ", renderedHeader);
    //what the heck is `shallowWrapper {}`
    //assert
    expect(renderedHeader.length).toEqual(1);
    expect(renderedFooter.length).toEqual(1);
  });

  it("provides a route to home component", () => {
    //arrange
    const renderedApp = shallow(<App />);
    //act
    const renderedHomeRoute = renderedApp.find('[path="/"]');
    console.log("renderedHomeRoute debug: ", renderedHomeRoute.debug());
    console.log("rendered Props: ", renderedHomeRoute.props());
    console.log("home component: ", Home);

    // const renderedNotFoundRoute = renderedApp.find(
    //   "Route"
    // );
    //not really sure how to test for a route
    // console.log("not found path debug: ", renderedNotFoundRoute.debug());
    // console.log("route props: ", renderedNotFoundRoute.props());

    //assert
    expect(renderedHomeRoute.props().component).toEqual(Home);
  });
});
