import React from "react";
import { createStore, combineReducers } from "redux";

const expensesReducerDefaultState = [];

const expensesReducers = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(expensesReducers);

console.log(store);

const demoState = {
  expenses: [
    {
      id: "abc",
      description: "Trip to Okinawa",
      note: "It will be so soon",
      amount: 1000,
      createdAt: 0,
    },
  ],
  filters: {
    text: "trip",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};
