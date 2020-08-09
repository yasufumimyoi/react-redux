import React from "react";
import ReactShallowRender from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Header from "../../components/Header";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  // expect(wrapper.find("h1").text()).toBe("Expensify");
  // const renderer = new ReactShallowRender();
  // renderer.render(<Header />);
  // //console.log(renderer.getRenderOutput());
  // //snapshotと差異が生まれたらエラーが出る
  // //差分をアップデートするなら、uで可能
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
