import React from "react";

//JSX
//Baseになっているコンポーネント
const hoc = () => (
  <div>
    <h3>Booking Info</h3>
    <p>Hello!!</p>
  </div>
);

//Function
//このコンポーネントが呼ばれてBaseコンポーネントが使われる
//Baseコンポーネントに追加したい時に使う？
const withLoggedInfo = (WrappedComponent) => {
  //中身はStatelessコンポーネント
  return (props) => (
    <div>
      <p>Please Check out your total bill</p>
      <WrappedComponent />
    </div>
  );
};

//関数にJSXを引数に渡している
export const BookingInfo = withLoggedInfo(hoc);
