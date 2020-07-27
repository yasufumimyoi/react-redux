const expensesReducerDefaultState = [];

//初期値がなければ空の配列が使われる
//初期値がStoreに既にあれば、その値が初期値が配列の中にオブジェクトで配置される
//Actionの値(オブジェクト)を引数名actionとして受け取っている
//ReducerはPure function
//outputはinputのみに依存している事
const expensesReducers = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      //配列の中でstateオブジェクトを回している
      //その後で新しいオブジェクトを追加している
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      //編集したいオブジェクトを特定する為にIDを渡す
      //expenseオブジェクトの全てのキーと値を回す
      //最後にupdatesで渡した値で上書して編集する
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return state;
        }
      });

    default:
      return state;
  }
};

export default expensesReducers;
