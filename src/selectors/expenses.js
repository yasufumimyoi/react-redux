//stateを引数として受け取ってソートする役目
//元データの値とソートするのに必要な値を渡して、処理した値をreturnで返して来ている
//第一引数はexpense(配列の中にオブジェクト)で第二引数はfilter(オブジェクト)

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

export default getVisibleExpenses;
