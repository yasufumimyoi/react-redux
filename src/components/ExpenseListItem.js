import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../action/expenses";

//ExpenseListとstoreの両方からpropsを受け取っている
const ExpenseListItem = ({ id, dispatch, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

//connectに引数を与えなくてもdispatchをpropsとして渡す事が出来る
export default connect()(ExpenseListItem);
