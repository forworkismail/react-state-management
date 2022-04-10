import React from 'react';

function History({ description, value, isExpense, id }) {
  return (
    <div>
      <div className="flex flex-row text-sm py-2 justify-between font-bold">
        <p className="mr-4">{id}</p>
        <p className="mr-4">{description}</p>
        <p className="mr-4">{value}</p>
        <p className="mr-4">{isExpense ? 'isExpense' : 'isNotExpense'}</p>
      </div>
    </div>
  );
}

export default History;
