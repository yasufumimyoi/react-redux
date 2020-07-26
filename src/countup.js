import React from "react";
import { createStore } from "redux";

//Actions
//Action自体はFunctionでオブジェクトを返す 値を貰ってStoreにDispatchする
//dispatchで関数を発動→引数にあるincrementCount関数の処理開始→関数で処理された値がdispatchされる
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

//ReducerはPure function
//outputはinputのみに依存している事
//初期値を固定しない為に、incrementByを使っている
//action.incrementByで引数の値にアクセスしている
//returnで新しい値をstoreに返して上げている
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

//Reducerを使用していないパターン

// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + action.incrementBy,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - action.decrementBy,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     default:
//       return state;
//   }
// });

console.log(store.getState());

store.dispatch(incrementCount({ incrementBy: 5 }));

console.log(store.getState());

store.dispatch(decrementCount({ decrementBy: 10 }));

console.log(store.getState());

store.dispatch(resetCount());

console.log(store.getState());

function App() {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default App;
