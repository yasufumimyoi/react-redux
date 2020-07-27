import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

//このpropsはstoreから来ている
//配列の中にオブジェクト型のexpensesのstateが渡されている
const ExpenseList = (props) => {
  return (
    <div>
      <h2>ExpenseList</h2>
      {props.expenses.map((expense) => {
        return (
          <ExpenseListItem
            key={expense.id}
            {...expense}
            // spreadを使えば以下のような書き方をしなくても済む
            // description={expense.description}
            // amount={expense.amount}
            // createdAt={expense.createdAt}
            // key={index.toString}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filter),
  };
};

//mapStateToPropsはstateを戻す
//dispatchされて、storeのstateがupdateされたらrenderされる値も変更する
//よってライフサイクルを使う必要がなくなる
export default connect(mapStateToProps)(ExpenseList);

//stateをstoreから持って来ている
//その値をリターンしてExpenseListに渡して上げている
//それをpropsとして受け取って使用

// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses,
//   };
// })(ExpenseList);

// export default ConnectedExpenseList;
