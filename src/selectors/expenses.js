import moment from "moment";

//stateを引数として受け取ってソートする役目
//元データの値とソートするのに必要な値を渡して、処理した値をreturnで返して来ている
//第一引数はexpense(配列の中にオブジェクト)で第二引数はfilter(オブジェクト)

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch =
        //createdAtはExpenseの値 startDateはFilterの値
        //Filterをかける時の値がstartDateなので、この値が基準になる
        //startDateよりも大きい値が残る
        // typeof startDate !== "number" || expense.createdAt >= startDate;
        startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
      const endDateMatch =
        //createdAtはExpenseの値 startDateはFilterの値
        //endDateよりも値が小さいものが残る
        // typeof endDate !== "number" || expense.createdAt <= endDate;
        endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
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
      } else {
        return 0;
      }
    });
};

export default getVisibleExpenses;

// export default (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses
//     .filter((expense) => {
//       const startDateMatch =
//         typeof startDate !== "number" || expense.createdAt >= startDate;
//       const endDateMatch =
//         typeof endDate !== "number" || expense.createdAt <= endDate;
//       const textMatch = expense.description
//         .toLowerCase()
//         .includes(text.toLowerCase());

//       return startDateMatch && endDateMatch && textMatch;
//     })
//     .sort((a, b) => {
//       if (sortBy === "date") {
//         return a.createdAt < b.createdAt ? 1 : -1;
//       } else if (sortBy === "amount") {
//         return a.amount < b.amount ? 1 : -1;
//       } else {
//         return 0;
//       }
//     });
// };
