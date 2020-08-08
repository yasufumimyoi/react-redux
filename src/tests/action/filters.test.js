import moment from "moment";
import {
  setStartDate,
  setTextFilter,
  sortByAmount,
} from "../../action/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set Text filter action object", () => {
  const action = setTextFilter("Hello");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Hello",
  });
});

test("should generate set Text filter action object with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
