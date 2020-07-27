import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./action/expenses";
// import { setTextFilter } from "./action/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

// subscribeの後に配置しないとdispatchに反応しない
store.subscribe(() => {
  //getStateだけだとstate全体を表示してくれる
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));

store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));

store.dispatch(addExpense({ description: "Rent Bill", amount: 109500 }));

//Providerはreact-reduxライブラリーから呼び出している
//ReactとReduxを繋げる役割
//AppRouterに全てのコンポーネントが集まっている
//よって全てのコンポーネントはstoreからpropsとして値を受け取る事が可能に
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

//renderの次はjsxの形を渡す
ReactDOM.render(jsx, document.getElementById("root"));
