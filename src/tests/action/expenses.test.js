import { addExpense, editExpense, removeExpense } from "../../action/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  //toBeだとfailする
  //objectもしくはarrayはEqualを使用する
  //idをオブジェクト内に入れている
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "Coffee" });
  //変更する為に、action.updatesだけオブジェクト内に入れている
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "Coffee",
    },
  });
});

test("should setup add expense action object", () => {
  const expenseData = {
    description: "Rent",
    note: "This was last month's one",
    amount: 1000,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      //idはランダムに変わるので、stringなら何でもOK設定
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with default value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
