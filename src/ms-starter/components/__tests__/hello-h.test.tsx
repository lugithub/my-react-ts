import React from "react";
import { shallow, mount } from "enzyme";
import { Helloh } from "../hello-h";

it("renders the correct text when no enthusiasm level is given", () => {
  const hello = shallow(<Helloh name="Daniel" />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
});

it("renders the correct text when no enthusiasm level is given, snapshot", () => {
  const hello = shallow(<Helloh name="Daniel" />);
  expect(hello).toMatchSnapshot();
});

it("renders the correct text with an explicit enthusiasm level of 2", () => {
  const hello = mount(<Helloh name="Daniel" />);
  hello.find(".hello").simulate("click");
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!!");
});
