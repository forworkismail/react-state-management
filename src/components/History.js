import React from 'react';

function History() {
  return (
    <div className="my-4 rounded-xl shadow-lg px-2 py-4 flex flex-col">
      <h3 className=" font-bold py-2 text-center">History</h3>
      <div>
        <div className="flex flex-row justify-evenly  text-sm py-2 font-bold">
          <p>1. ABC</p>
          <p>1300</p>
        </div>
        <div className="flex flex-row justify-evenly  text-sm py-2 font-bold">
          <p>2. ABC</p>
          <p>200</p>
        </div>
        <div className="flex flex-row justify-evenly  text-sm py-2 font-bold">
          <p>3. ABC</p>
          <p>400</p>
        </div>
        <div className="flex flex-row justify-evenly  text-sm py-2 font-bold">
          <p>4. ABC</p>
          <p>800</p>
        </div>
      </div>
    </div>
  );
}

export default History;
