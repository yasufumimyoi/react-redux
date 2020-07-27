const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_DATE":
      //sortByの値をundefinedからdateに変更したいだけなので、引数は必要ない
      return {
        ...state,
        sortBy: "date",
      };
    case "SORT_BY_AMOUNT":
      //sortByの値をundefinedからamountに変更したいだけなので、引数は必要ない
      return {
        ...state,
        sortBy: "amount",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

export default filterReducer;
