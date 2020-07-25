import React from "react";
import { createStore } from "redux";

//dispatch→incrementCount関数の処理開始→関数で処理された値がdispatchされる
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

//this.state.count = 0と同じ
//actionの種類(タイプ)によってstateの値を変更する
//初期値を固定しない為に、incrementByを使っている
//returnで新しい値をstoreに返して上げている

const store = createStore((state = { count: 0 }, action) => {
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
});

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
