import React from "react";
import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

//Actionは関数であり、オブジェクトの値を返す
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

const expensesReducerDefaultState = [];

//初期値がなければ空の配列が使われる
//初期値がStoreに既にあれば、その値が初期値が配列の中にオブジェクトで配置される
//Actionの値(オブジェクト)を引数名actionとして受け取っている
const expensesReducers = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      //配列の中でstateオブジェクトを回している
      //その後で新しいオブジェクトを追加している
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      //編集したいオブジェクトを特定する為にIDを渡す
      //expenseオブジェクトの全てのキーと値を回す
      //最後にupdatesで渡した値で上書して編集する
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return state;
        }
      });

    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: "",
  sortBy: "amount",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_DATE":
      //sortByの値をundefinedからdateに変更したいだけなので、引数は必要ない
      return {
        ...state,
        sortBy: "date",
      };
    case "SORT_BY_AMOUNT":
      //sortByの値をundefinedからamountに変更したいだけなので、引数は必要ない
      return {
        ...state,
        sortBy: "amount",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        //createdAtはExpenseの値 startDateはFilterの値
        //Filterをかける時の値がstartDateなので、この値が基準になる
        //startDateよりも大きい値が残る
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        //createdAtはExpenseの値 startDateはFilterの値
        //endDateよりも値が小さいものが残る
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        //expenseのdescriptionとfilterのtextの両方を小文字にする必要がある
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//stateを分けて持つ
//初期値が沢山あってもシンプルに分ける事が出来る
const store = createStore(
  combineReducers({
    expenses: expensesReducers,
    filter: filterReducer,
  })
);

//subscribeの後に配置しないとdispatchに反応しない
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log(visibleExpenses);
});

const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 1000, createdAt: -21000 })
);

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 2000, createdAt: -1000 })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300 }));

// store.dispatch(sortByDate());

store.dispatch(sortByAmount());

// store.dispatch(setStartDate(-2000));

// store.dispatch(setTextFilter("ffe"));

// store.dispatch(setEndDate(500));

function App() {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default App;
