import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../action/filters";

//storeから値を貰っているのと同時にdispatch関数も受け取っている
//Textの値はstoreからpropsとして持って来ている為、dispatchしないと変更する事ができないので、onChangeを使用する
//onChangeする度にdispatchして、storeに新しい値を書き込んでいる

const ExpenseListFilter = (props) => (
  <div>
    <input
      type="text"
      value={props.filter.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      //最初に表示されるoptionの値をstoreから取って来ている
      //dateが初期値でoptionもdateが先に来ているので、値と表示が一致している
      value={props.filter.value}
      onChange={(e) => {
        if (e.target.value === "date") {
          props.dispatch(sortByDate());
        } else if (e.target.value === "amount") {
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

//storeからどの値を取ってくるか決める
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

//storeからどの値を取ってくるか決める
export default connect(mapStateToProps)(ExpenseListFilter);
