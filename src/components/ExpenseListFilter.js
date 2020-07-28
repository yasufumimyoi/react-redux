import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../action/filters";
import { DateRangePicker } from "react-dates";
import { v4 as uuidv4 } from "uuid";

//storeから値を貰っているのと同時にdispatch関数も受け取っている
//Textの値はstoreからpropsとして持って来ている為、dispatchしないと変更する事ができないので、onChangeを使用する
//onChangeする度にdispatchして、storeに新しい値を書き込んでいる
//classコンポーネントで、他のコンポーネントからpropsを受け取った場合は、this.propsで使う

class ExpenseListFilter extends React.Component {
  state = {
    calenderFocused: null,
    startDateId: uuidv4(),
    endDateId: uuidv4(),
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filter.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          //最初に表示されるoptionの値をstoreから取って来ている
          //dateが初期値でoptionもdateが先に来ているので、値と表示が一致している
          value={this.props.filter.value}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filter.startDate}
          startDateId={this.state.startDateId}
          endDate={this.props.filter.endDate}
          endDateId={this.state.endDateId}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

//storeからどの値を取ってくるか決める
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

//storeからどの値を取ってくるか決める
export default connect(mapStateToProps)(ExpenseListFilter);
