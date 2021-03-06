import React from 'react';

function MainHeader({ title, total, income, expense }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="p-2">
        <h3 className="font-bold">Your Balance</h3>
        <p>{total}</p>
      </div>
      <div
        className="py-1 flex flex-row justify-evenly  rounded
      shadow-lg"
      >
        <div className="flex flex-col text-center">
          <span className=" font-semibold">Income:</span>
          <span className="text-green-400 px-2 rounded">{income}</span>
        </div>
        <div className="flex flex-col text-center">
          <span className=" font-semibold">Expense:</span>
          <span className="text-red-400 px-2 rounded">{expense}</span>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
