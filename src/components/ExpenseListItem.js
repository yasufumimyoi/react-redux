import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//ExpenseListとstoreの両方からpropsを受け取っている
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

//connectに引数を与えなくてもdispatchをpropsとして渡す事が出来る
export default connect()(ExpenseListItem);
