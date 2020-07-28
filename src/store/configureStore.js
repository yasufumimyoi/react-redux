//きちんと最後までimport先ファイルを確認する！！
import { createStore, combineReducers } from "redux";
import expensesReducers from "../reducers/expenses";
import filterReducer from "../reducers/filters";

//stateを分けて持つ
//初期値が沢山あってもシンプルに分ける事が出来る
//名前を持たないexportだとimport先で自由に名前を決める事が可能
//変数に関数を入れてexportできないからこの形をとっている？
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducers,
      filter: filterReducer,
    }),
    //redux-dev-tool-extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

//subscribeの後に配置しないとdispatchに反応しない
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
//   console.log(visibleExpenses);
// });

// const expenseTwo = store.dispatch(
//   addExpense({ description: "coffee", amount: 1000, createdAt: -21000 })
// );

// const expenseOne = store.dispatch(
//   addExpense({ description: "rent", amount: 2000, createdAt: -1000 })
// );
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300 }));

// store.dispatch(sortByDate());

// store.dispatch(sortByAmount());

// store.dispatch(setStartDate(-2000));

// store.dispatch(setTextFilter("ffe"));

// store.dispatch(setEndDate(500));
