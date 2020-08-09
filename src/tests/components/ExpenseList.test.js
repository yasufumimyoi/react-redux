import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";
import toJSON from "enzyme-to-json";

test("should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render ExpenseList with no expenses props", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render ExpenseListItem", () => {
  //expense={...expense}だとオブジェクトを渡してしまう
  //下記の通りだと最初のオブジェクトの値を渡す事ができる
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
